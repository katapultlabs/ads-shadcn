import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile, stat, writeFile, mkdir } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

// Renders every component and drives each select/checkbox control, recording
// which controls do NOT change the rendered output. Writes a map the explorer
// reads to hide provably-inert controls. Re-run after Chakra upgrades or spec
// changes:  npm run generate:inert-controls

const distDir = resolve("dist");
const spec = JSON.parse(await readFile("components.json", "utf8"));
const outPath = resolve("src/generated/inert-controls.generated.json");
const mime = { ".css": "text/css", ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".png": "image/png", ".svg": "image/svg+xml" };
const server = createServer(async (req, res) => {
  const u = new URL(req.url ?? "/", "http://127.0.0.1");
  const p = u.pathname === "/" ? "/index.html" : u.pathname;
  const fp = resolve(join(distDir, p));
  const ok = fp.startsWith(distDir) ? await stat(fp).then((s) => s.isFile()).catch(() => false) : false;
  const f = ok ? fp : join(distDir, "index.html");
  res.writeHead(200, { "Content-Type": mime[extname(f)] ?? "application/octet-stream" });
  res.end(await readFile(f));
});
await new Promise((d) => server.listen(0, "127.0.0.1", d));
const base = `http://127.0.0.1:${server.address().port}`;

// Controls whose effect is conditional on another control (icon names only
// matter when their icon toggle is on) — never mark these inert.
const NEVER_INERT = new Set(["leftIcon", "rightIcon", "icon"]);
const deLabel = (s) => s.trim().replace(/ (.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, (_, c) => c.toLowerCase());

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 820 } });
const fp = () => page.evaluate(() => {
  const t = document.querySelector("#ads-render-target");
  if (!t) return "NO_TARGET";
  const el = t.firstElementChild;
  const cs = el ? getComputedStyle(el) : {};
  return t.innerHTML + "||" + (el ? [cs.color, cs.backgroundColor, cs.borderColor, Math.round(el.getBoundingClientRect().width), Math.round(el.getBoundingClientRect().height)].join(",") : "");
});
// Style-only fingerprint for the State control: a data-hover/disabled attribute
// changes innerHTML even when nothing renders differently, so state inertness
// must be judged by computed styles across the subtree, not markup.
const styleFp = () => page.evaluate(() => {
  const t = document.querySelector("#ads-render-target");
  if (!t) return "NO_TARGET";
  return [t, ...t.querySelectorAll("*")].slice(0, 50).map((e) => {
    const c = getComputedStyle(e);
    return [c.opacity, c.cursor, c.pointerEvents, c.color, c.backgroundColor, c.borderColor, c.boxShadow].join(",");
  }).join("|");
});
const labelOf = (loc) => loc.evaluate((el) => {
  const f = el.closest('[class*="field"]'); const l = f && f.querySelector("label");
  return (l && l.textContent.trim()) || el.closest("label")?.textContent.trim() || "?";
}).catch(() => "?");

const inert = {};
const add = (comp, name) => { if (NEVER_INERT.has(name)) return; (inert[comp] ??= []).push(name); };

for (const comp of spec.components) {
  if (comp.name === "DesignTokens") continue;
  try {
    await page.goto(`${base}/?component=${encodeURIComponent(comp.name)}&auditControls=1`, { waitUntil: "networkidle", timeout: 12000 });
    await page.waitForSelector(".controls-float", { timeout: 5000 }).catch(() => {});
    const selCount = await page.locator(".controls-float .control-select").count();
    for (let i = 0; i < selCount; i++) {
      const sel = page.locator(".controls-float .control-select").nth(i);
      const name = deLabel(await labelOf(sel));
      const cur = await sel.inputValue();
      const opts = await sel.locator("option").evaluateAll((os) => os.map((o) => o.value));
      // State is judged by visual (computed-style) change; pick a state with a
      // real visual signature (disabled/invalid/hover) over an arbitrary one.
      const isState = name === "state";
      const fingerprint = isState ? styleFp : fp;
      const other = isState
        ? ["disabled", "invalid", "hover", "active", "loading", "selected", "checked"].find((s) => opts.includes(s)) ?? opts.find((o) => o !== cur)
        : opts.find((o) => o !== cur);
      if (other === undefined || other === cur) continue;
      const before = await fingerprint();
      await sel.selectOption(other).catch(() => {}); await page.waitForTimeout(140);
      if ((await fingerprint()) === before) add(comp.name, name);
      await sel.selectOption(cur).catch(() => {});
    }
    const cbCount = await page.locator(".controls-float .control-check input[type=checkbox]").count();
    for (let i = 0; i < cbCount; i++) {
      const cb = page.locator(".controls-float .control-check input[type=checkbox]").nth(i);
      const name = deLabel(await cb.evaluate((el) => el.closest("label")?.textContent.trim() || "?").catch(() => "?"));
      const before = await fp();
      await cb.click().catch(() => {}); await page.waitForTimeout(140);
      if ((await fp()) === before) add(comp.name, name);
      await cb.click().catch(() => {});
    }
  } catch { /* skip unrenderable */ }
}
await browser.close(); server.close();
await mkdir(resolve("src/generated"), { recursive: true });
const total = Object.values(inert).reduce((n, a) => n + a.length, 0);
await writeFile(outPath, `${JSON.stringify(inert, null, 2)}\n`, "utf8");
console.log(`Wrote ${outPath}: ${total} inert controls across ${Object.keys(inert).length} components.`);
