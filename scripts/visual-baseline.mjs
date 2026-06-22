import { chromium } from "playwright";
import { createServer } from "node:http";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

// Visual-regression baselines. `--capture` writes golden PNGs for every
// component into artifacts/baseline/. Default mode re-renders each component and
// pixel-diffs against its golden, flagging any that drifted (e.g. after a theme
// edit). Diff images for changed components are written to artifacts/visual-diff/.

const root = resolve(".");
const distDir = resolve(root, "dist");
const specPath = resolve(root, "components.json");
const baselineDir = resolve(root, "artifacts", "baseline");
const diffDir = resolve(root, "artifacts", "visual-diff");
const reportPath = resolve(root, "artifacts", "visual-report.json");

const capture = process.argv.includes("--capture");
// Fraction of differing pixels above which a component is considered changed.
const THRESHOLD = Number(process.env.ADS_VISUAL_THRESHOLD ?? 0.002);

const mime = { ".css": "text/css", ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".png": "image/png", ".svg": "image/svg+xml" };

function encodeBase64Url(value) {
  return Buffer.from(value, "utf8").toString("base64url");
}

async function isReachable(url) {
  try {
    const r = await fetch(url);
    return r.ok && (await r.text()).includes("ADS Light Explorer");
  } catch {
    return false;
  }
}

async function startStaticServer() {
  const server = createServer(async (req, res) => {
    const u = new URL(req.url ?? "/", "http://127.0.0.1");
    const p = u.pathname === "/" ? "/index.html" : u.pathname;
    const fp = resolve(join(distDir, p));
    const ok = fp.startsWith(distDir) ? await stat(fp).then((s) => s.isFile()).catch(() => false) : false;
    const finalPath = ok ? fp : join(distDir, "index.html");
    res.writeHead(200, { "Content-Type": mime[extname(finalPath)] ?? "application/octet-stream" });
    res.end(await readFile(finalPath));
  });
  await new Promise((d) => server.listen(0, "127.0.0.1", d));
  return { server, url: `http://127.0.0.1:${server.address().port}` };
}

const safe = (name) => name.replace(/[^a-z0-9]+/gi, "-").toLowerCase();

// Explorer views without a component render target — nothing to baseline.
const NON_PREVIEW = new Set(["DesignTokens", "LucideIcons"]);

async function main() {
  await mkdir(baselineDir, { recursive: true });
  const spec = JSON.parse(await readFile(specPath, "utf8"));
  const previewable = spec.components.filter((component) => !NON_PREVIEW.has(component.name));

  let baseUrl = process.env.ADS_EXPLORER_URL || "http://127.0.0.1:4173";
  let staticServer;
  if (!(await isReachable(baseUrl))) {
    const fallback = await startStaticServer();
    staticServer = fallback.server;
    baseUrl = fallback.url;
  }

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 960, height: 680 }, deviceScaleFactor: 1 });

  const shoot = async (name) => {
    await page.goto(`${baseUrl}/?component=${encodeURIComponent(name)}`, { waitUntil: "networkidle" });
    // Neutralize sticky chrome: when the layout stacks and Playwright scrolls the
    // render target into view, sticky header/nav would otherwise pin over it and
    // pollute the screenshot with explorer chrome rather than the component.
    await page.addStyleTag({ content: ".app-header,.nav-pane,.controls-float{position:static !important}" });
    return page.locator("#ads-render-target").screenshot();
  };

  if (capture) {
    for (const c of previewable) {
      const buf = await shoot(c.name);
      await writeFile(join(baselineDir, `${safe(c.name)}.png`), buf);
    }
    await browser.close();
    staticServer?.close();
    console.log(`Captured ${previewable.length} baseline screenshots into artifacts/baseline/.`);
    process.exit(0);
  }

  await mkdir(diffDir, { recursive: true });
  const changed = [];
  const missing = [];
  let compared = 0;
  for (const c of previewable) {
    const baselinePath = join(baselineDir, `${safe(c.name)}.png`);
    const baselineBuf = await readFile(baselinePath).catch(() => null);
    if (!baselineBuf) {
      missing.push(c.name);
      continue;
    }
    const current = PNG.sync.read(await shoot(c.name));
    const base = PNG.sync.read(baselineBuf);
    compared += 1;
    if (current.width !== base.width || current.height !== base.height) {
      changed.push({ name: c.name, reason: `size ${base.width}x${base.height} -> ${current.width}x${current.height}`, ratio: 1 });
      continue;
    }
    const diff = new PNG({ width: base.width, height: base.height });
    const mismatched = pixelmatch(base.data, current.data, diff.data, base.width, base.height, { threshold: 0.1 });
    const ratio = mismatched / (base.width * base.height);
    if (ratio > THRESHOLD) {
      await writeFile(join(diffDir, `${safe(c.name)}.png`), PNG.sync.write(diff));
      changed.push({ name: c.name, reason: `${(ratio * 100).toFixed(2)}% pixels changed`, ratio });
    }
  }

  await browser.close();
  staticServer?.close();

  const summary = {
    checkedAt: new Date().toISOString(),
    threshold: THRESHOLD,
    compared,
    changed,
    missingBaseline: missing,
  };
  await writeFile(reportPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");

  console.log(`Compared ${compared} components against baseline. Changed: ${changed.length}. Missing baseline: ${missing.length}.`);
  for (const c of changed) console.error(`  ~ ${c.name}: ${c.reason}`);
  if (missing.length) console.warn(`  baseline missing (run \`npm run baseline:capture\`): ${missing.join(", ")}`);
  process.exit(changed.length > 0 ? 1 : 0);
}

await main();
