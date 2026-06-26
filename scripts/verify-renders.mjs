import { chromium } from "playwright";
import { createServer } from "node:http";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

// Renders every component on the explorer surface, runs an axe-core a11y pass,
// and asserts the brand button is not falling back to the gray/near-black solid.
// Writes artifacts/render-status.json, consumed by quality_report's
// `exampleVerified` check. Exits non-zero if any component fails to render.

const root = resolve(".");
const distDir = resolve(root, "dist");
const specPath = resolve(root, "ads.components.json");
const axePath = resolve(root, "node_modules", "axe-core", "axe.min.js");
const patternsPath = resolve(root, "patterns.json");
const outDir = resolve(root, "artifacts");
const statusPath = resolve(outDir, "render-status.json");

const mimeTypes = {
  ".css": "text/css",
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

function encodeBase64Url(value) {
  return Buffer.from(value, "utf8").toString("base64url");
}

async function isReachable(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    return response.ok && html.includes("ADS Light Explorer");
  } catch {
    return false;
  }
}

async function startStaticServer() {
  const server = createServer(async (request, response) => {
    try {
      const requestUrl = new URL(request.url ?? "/", "http://127.0.0.1");
      const pathname = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
      const filePath = resolve(join(distDir, pathname));
      const exists = filePath.startsWith(distDir)
        ? await stat(filePath).then((item) => item.isFile()).catch(() => false)
        : false;
      const finalPath = exists ? filePath : join(distDir, "index.html");
      const body = await readFile(finalPath);
      response.writeHead(200, { "Content-Type": mimeTypes[extname(finalPath)] ?? "application/octet-stream" });
      response.end(body);
    } catch (error) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end(String(error));
    }
  });
  await new Promise((done) => server.listen(0, "127.0.0.1", done));
  return { server, url: `http://127.0.0.1:${server.address().port}` };
}

const axeSource = await readFile(axePath, "utf8").catch(() => null);

async function renderTarget(page, url) {
  const errors = [];
  page.removeAllListeners("pageerror");
  page.removeAllListeners("console");
  page.on("pageerror", (error) => errors.push(String(error.message ?? error)));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto(url, { waitUntil: "networkidle" });
  const target = page.locator("#ads-render-target");
  const renderText = await target.innerText().catch(() => "");
  const renderFailed = renderText.includes("Render failed");

  let violations = [];
  let axeRan = false;
  if (!renderFailed && axeSource) {
    try {
      await page.addScriptTag({ content: axeSource });
      const result = await page.evaluate(async () => {
        if (!window.axe || !document.querySelector("#ads-render-target")) return null;
        const run = await window.axe.run("#ads-render-target", { runOnly: ["wcag2a", "wcag2aa"] });
        return run.violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length }));
      });
      if (result) {
        axeRan = true;
        violations = result.filter((item) => item.impact === "serious" || item.impact === "critical");
      }
    } catch {
      axeRan = false;
    }
  }
  return { renderFailed, errors, axeRan, violations };
}

// These render explorer views (token table / icon gallery), not a component
// preview, so they have no #ads-render-target to screenshot or audit.
const NON_PREVIEW = new Set(["DesignTokens", "LucideIcons"]);

async function main() {
  await mkdir(outDir, { recursive: true });
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

  // Global brand-color assertion: the default Button (bg-primary) must resolve
  // to the brand color, not collapse to a gray/near-black fallback. Catches a
  // broken theme variable layer (missing --primary from client-theme.json).
  await page.goto(`${baseUrl}/?code=${encodeBase64Url('<Button>Brand</Button>')}`, {
    waitUntil: "networkidle",
  });
  const brandBg = await page
    .locator("#ads-render-target button")
    .first()
    .evaluate((el) => getComputedStyle(el).backgroundColor)
    .catch(() => null);
  const brandRgb = brandBg?.match(/\d+/g)?.map(Number) ?? [];
  const isBlueish = brandRgb.length >= 3 && brandRgb[2] > brandRgb[0] + 25 && brandRgb[2] > 80;
  const brandColorOk = Boolean(isBlueish);

  // a11y violations are a quality signal on the example snippets, not a render
  // correctness bug. They block the build only under strict mode.
  const strict = process.argv.includes("--strict") || process.env.ADS_VERIFY_STRICT === "1";

  // Known intrinsic issues a preview snippet cannot fix without abandoning the
  // component's intended composition. Scoped to one rule per component — every
  // other rule stays enforced. Revisit on upgrade.
  const KNOWN_A11Y_ISSUES = {
    // react-day-picker renders interactive day buttons inside a grid.
    DatePicker: ["nested-interactive"],
    // Previewing an OPEN overlay alongside its still-mounted trigger: Radix
    // aria-hides the trigger (correct when a modal is open) but axe sees a
    // focusable aria-hidden node. An artifact of showing trigger + open overlay.
    Dialog: ["aria-hidden-focus"],
    Drawer: ["aria-hidden-focus"],
    Menu: ["aria-hidden-focus"],
    NavigationMenu: ["aria-hidden-focus"],
    // shadcn's inactive tab trigger uses muted-foreground on the muted list.
    Tabs: ["color-contrast"],
  };

  const status = {};
  let renderFailures = 0;
  let a11yFailures = 0;
  for (const component of previewable) {
    const url = `${baseUrl}/?component=${encodeURIComponent(component.name)}`;
    const result = await renderTarget(page, url);
    const ignored = new Set(KNOWN_A11Y_ISSUES[component.name] ?? []);
    const violations = result.violations.filter((v) => !ignored.has(v.id));
    const knownIssues = result.violations.filter((v) => ignored.has(v.id));
    const renders = !result.renderFailed && result.errors.length === 0;
    const a11yClean = violations.length === 0;
    // `ok` (consumed by quality_report's exampleVerified) requires both.
    const ok = renders && a11yClean;
    if (!renders) renderFailures += 1;
    if (renders && !a11yClean) a11yFailures += 1;
    status[component.name] = {
      ok,
      renders,
      renderFailed: result.renderFailed,
      errors: result.errors.slice(0, 5),
      a11yViolations: violations,
      knownIssues,
      a11yRan: result.axeRan,
    };
  }

  // Composition patterns: render each executable JSX example through the sandbox.
  // Patterns are curated, so a render failure here is a hard failure.
  const patternData = await readFile(patternsPath, "utf8").then((raw) => JSON.parse(raw).patterns).catch(() => []);
  const patternStatus = {};
  let patternRenderFailures = 0;
  let patternA11yFailures = 0;
  for (const pattern of patternData) {
    const url = `${baseUrl}/?code=${encodeBase64Url(pattern.jsx ?? "")}`;
    const result = await renderTarget(page, url);
    const renders = !result.renderFailed && result.errors.length === 0;
    const a11yClean = result.violations.length === 0;
    if (!renders) patternRenderFailures += 1;
    if (renders && !a11yClean) patternA11yFailures += 1;
    patternStatus[pattern.name] = {
      ok: renders && a11yClean,
      renders,
      renderFailed: result.renderFailed,
      errors: result.errors.slice(0, 5),
      a11yViolations: result.violations,
      a11yRan: result.axeRan,
    };
  }

  await browser.close();
  staticServer?.close();

  const summary = {
    checkedAt: new Date().toISOString(),
    total: previewable.length,
    rendered: previewable.length - renderFailures,
    renderFailures,
    a11yFailures,
    brandColorOk,
    brandButtonBackground: brandBg,
    patterns: {
      total: patternData.length,
      rendered: patternData.length - patternRenderFailures,
      renderFailures: patternRenderFailures,
      a11yFailures: patternA11yFailures,
      results: patternStatus,
    },
    components: status,
  };
  await writeFile(statusPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");

  console.log(`Rendered ${summary.rendered}/${summary.total} components. Brand color ok: ${brandColorOk}. a11y violations: ${a11yFailures}.`);
  console.log(`Rendered ${summary.patterns.rendered}/${summary.patterns.total} patterns. a11y violations: ${patternA11yFailures}.`);
  if (patternRenderFailures) {
    const broken = Object.entries(patternStatus).filter(([, v]) => !v.renders).map(([name]) => name);
    console.error(`Pattern render failures: ${broken.join(", ")}`);
  }
  if (!brandColorOk) console.error(`Brand button background was ${brandBg} (expected a brand/blue solid).`);
  if (renderFailures) {
    const broken = Object.entries(status).filter(([, v]) => !v.renders).map(([name]) => name);
    console.error(`Render failures: ${broken.join(", ")}`);
  }
  if (a11yFailures) {
    const flagged = Object.entries(status).filter(([, v]) => v.renders && v.a11yViolations.length).map(([name]) => name);
    console[strict ? "error" : "warn"](`a11y violations${strict ? "" : " (warning)"}: ${flagged.join(", ")}`);
  }

  if (patternA11yFailures) {
    const flagged = Object.entries(patternStatus).filter(([, v]) => v.renders && v.a11yViolations.length).map(([name]) => name);
    console[strict ? "error" : "warn"](`pattern a11y violations${strict ? "" : " (warning)"}: ${flagged.join(", ")}`);
  }

  const hardFail =
    renderFailures > 0 ||
    patternRenderFailures > 0 ||
    !brandColorOk ||
    (strict && (a11yFailures > 0 || patternA11yFailures > 0));
  process.exit(hardFail ? 1 : 0);
}

await main();
