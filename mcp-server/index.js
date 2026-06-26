import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { chromium } from "playwright";
import { z } from "zod";
import { createServer } from "node:http";
import { mkdir, readFile, rename, stat, writeFile } from "node:fs/promises";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { tokenData } from "../src/tokens/token-data.generated.js";
import { validateComponent } from "./validate.js";
import { reviewFindings, scoreForIntent, scorePatternIntent, validateThemeContrast, buildCapabilities, mapBrandToTheme, extractBrandProfile, autoFix, SNAPSHOT_FN } from "./agentic.js";
import { execSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const specPath = resolve(root, "ads.components.json");
const themePath = resolve(root, "client-theme.json");
const patternsPath = resolve(root, "patterns.json");
const artifactsDir = resolve(root, "artifacts");
const distDir = resolve(root, "dist");
const axePath = resolve(root, "node_modules", "axe-core", "axe.min.js");
const defaultBaseUrl = "http://127.0.0.1:4173";

let axeSourcePromise;
async function getAxeSource() {
  axeSourcePromise ??= readFile(axePath, "utf8").catch(() => null);
  return axeSourcePromise;
}

// Run axe-core against the render target and return serious/critical violations.
async function runAxe(page) {
  const source = await getAxeSource();
  if (!source) return { ran: false, violations: [] };
  try {
    await page.addScriptTag({ content: source });
    const result = await page.evaluate(async () => {
      if (!window.axe || !document.querySelector("#ads-render-target")) return null;
      const run = await window.axe.run("#ads-render-target", {
        runOnly: ["wcag2a", "wcag2aa"],
      });
      return run.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        help: violation.help,
        nodes: violation.nodes.length,
      }));
    });
    if (!result) return { ran: false, violations: [] };
    const violations = result.filter((item) => item.impact === "serious" || item.impact === "critical");
    return { ran: true, violations };
  } catch {
    return { ran: false, violations: [] };
  }
}

const mimeTypes = {
  ".css": "text/css",
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

let browserPromise;
let staticServer;
let staticBaseUrl;

function encodeBase64Url(value) {
  return Buffer.from(value, "utf8").toString("base64url");
}

// Brand rule (CLAUDE.md): never hardcode colors — use semantic Tailwind tokens.
// Enforced here, at the surface where agents submit arbitrary JSX.
const HEX_COLOR = /#[0-9a-fA-F]{3,8}\b/g;
const CSS_COLOR_FN = /\b(?:rgba?|hsla?)\s*\(/g;
function lintCode(code) {
  const warnings = [];
  const source = String(code ?? "");
  const hex = [...new Set(source.match(HEX_COLOR) ?? [])];
  if (hex.length) {
    warnings.push(`Hardcoded color(s) ${hex.join(", ")} — use semantic Tailwind tokens (e.g. bg-primary, text-muted-foreground, border-border) instead of raw values.`);
  }
  if (CSS_COLOR_FN.test(source)) {
    warnings.push("Hardcoded rgb()/hsl() color — use semantic Tailwind tokens (bg-primary, text-destructive, …) instead.");
  }
  return warnings;
}

async function readJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

async function writeJson(path, value) {
  // Atomic write: write to a temp file then rename so a concurrent reader never
  // observes a half-written file.
  const tmp = `${path}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(tmp, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  await rename(tmp, path);
}

// Per-path promise chain. Serializes read-modify-write sequences so two
// concurrent tool calls editing the same file can't clobber each other.
const writeLocks = new Map();
function withFileLock(path, task) {
  const previous = writeLocks.get(path) ?? Promise.resolve();
  const next = previous.then(task, task);
  // Keep the chain alive but don't let a rejection break the next waiter.
  writeLocks.set(path, next.then(() => {}, () => {}));
  return next;
}

function text(value) {
  return {
    content: [{ type: "text", text: typeof value === "string" ? value : JSON.stringify(value, null, 2) }]
  };
}

function imageAndText(value, imageBase64) {
  return {
    content: [
      { type: "text", text: JSON.stringify(value, null, 2) },
      { type: "image", data: imageBase64, mimeType: "image/png" }
    ]
  };
}

function slug(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "render";
}

function normalize(value) {
  return String(value ?? "").toLowerCase();
}

function levenshtein(a, b) {
  const s = normalize(a);
  const t = normalize(b);
  const dp = Array.from({ length: s.length + 1 }, () => Array(t.length + 1).fill(0));
  for (let i = 0; i <= s.length; i += 1) dp[i][0] = i;
  for (let j = 0; j <= t.length; j += 1) dp[0][j] = j;
  for (let i = 1; i <= s.length; i += 1) {
    for (let j = 1; j <= t.length; j += 1) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (s[i - 1] === t[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[s.length][t.length];
}

function similarComponents(spec, name) {
  return spec.components
    .map((component) => ({ name: component.name, distance: levenshtein(component.name, name) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5)
    .map((item) => item.name);
}

function scoreComponent(component, query) {
  const q = normalize(query);
  let score = 0;
  if (normalize(component.name).includes(q)) score += 10;
  if (normalize(component.description).includes(q)) score += 6;
  if (normalize(component.category).includes(q)) score += 5;
  if (normalize(component.whenToUse?.join(" ")).includes(q)) score += 4;
  if (normalize(component.variants?.join(" ")).includes(q)) score += 2;
  if (normalize(component.keyProps?.map((prop) => prop.name ?? prop).join(" ")).includes(q)) score += 2;
  if (normalize(component.neverUseFor?.join(" ")).includes(q)) score -= 3;
  return score;
}

function scorePattern(pattern, query) {
  const q = normalize(query);
  let score = 0;
  if (normalize(pattern.name).includes(q)) score += 10;
  if (normalize(pattern.intent).includes(q)) score += 6;
  if (normalize(pattern.components?.join(" ")).includes(q)) score += 5;
  if (normalize(pattern.composition).includes(q)) score += 3;
  if (normalize(pattern.selectionRules?.join(" ")).includes(q)) score += 2;
  return score;
}

function scoreToken(token, query) {
  const q = normalize(query);
  let score = 0;
  if (normalize(token.name).includes(q)) score += 10;
  if (normalize(token.category).includes(q)) score += 6;
  if (normalize(token.role).includes(q)) score += 5;
  if (normalize(token.mode).includes(q)) score += 4;
  if (normalize(token.description).includes(q)) score += 4;
  if (normalize(token.useFor?.join(" ")).includes(q)) score += 3;
  return score;
}

const genericNeverUse = ["avoid misuse", "do not misuse", "generated", "use correctly", "use appropriately"];
const hexColor = /#[0-9a-fA-F]{3,8}\b/;

function componentQuality(component, renderStatus) {
  const starterText = "Generated component spec starter";
  const exampleJsx = Array.isArray(component.examples) ? component.examples.map((example) => example.jsx ?? "").join("\n") : "";
  const tokenMappingText = JSON.stringify(component.tokenMapping ?? {});
  const neverUse = Array.isArray(component.neverUseFor) ? component.neverUseFor : [];
  const status = renderStatus?.[component.name];

  const checks = {
    richMetadata: component.metadataStatus?.richness === "rich",
    controls: Array.isArray(component.controls) && component.controls.length > 0,
    propMetadata: component.propMetadata && Object.keys(component.propMetadata).length > 0,
    variantMetadata: Array.isArray(component.variantMetadata) && component.variantMetadata.length > 0,
    stateMetadata: Array.isArray(component.stateMetadata) && component.stateMetadata.length > 0,
    tokenMapping: component.tokenMapping && Object.keys(component.tokenMapping).length > 0,
    behavior: component.behavior && Object.keys(component.behavior).length > 0,
    accessibility: component.accessibilityMetadata && Object.keys(component.accessibilityMetadata).length > 0,
    agentHints: component.agentHints && Object.keys(component.agentHints).length > 0,
    realExample: Array.isArray(component.examples) && component.examples.some((example) => example.jsx && !example.jsx.includes(starterText)),
    // Clear, honest signal: does this map to a real ShadCN import path?
    libraryMapped: Boolean(component.importFrom),
    // Discriminating signals below.
    // The example actually renders cleanly (from `npm run verify:renders`).
    exampleVerified: Boolean(status?.ok),
    // No raw hex in the example or token mapping — use tokens/palettes instead.
    noHardcodedColor: !hexColor.test(exampleJsx) && !hexColor.test(tokenMappingText),
    // Misuse guidance exists and isn't boilerplate.
    distinctNeverUse: neverUse.length > 0 && !neverUse.some((entry) => genericNeverUse.some((bad) => normalize(entry).includes(bad))),
  };
  const weights = {
    richMetadata: 8,
    controls: 8,
    propMetadata: 8,
    variantMetadata: 6,
    stateMetadata: 6,
    tokenMapping: 8,
    behavior: 6,
    accessibility: 6,
    agentHints: 8,
    realExample: 10,
    libraryMapped: 4,
    exampleVerified: 14,
    noHardcodedColor: 6,
    distinctNeverUse: 6,
  };
  const max = Object.values(weights).reduce((sum, value) => sum + value, 0);
  const score = Object.entries(checks).reduce((sum, [key, passed]) => sum + (passed ? weights[key] : 0), 0);
  return {
    score: Math.round((score / max) * 100),
    checks,
    missing: Object.entries(checks).filter(([, passed]) => !passed).map(([key]) => key),
    verified: Boolean(status),
  };
}

function withColorMode(url, colorMode) {
  return colorMode === "dark" ? `${url}${url.includes("?") ? "&" : "?"}colorMode=dark` : url;
}

function buildControlledUrl(baseUrl, componentName, controls = {}) {
  const url = new URL(baseUrl);
  url.searchParams.set("component", componentName);
  for (const [key, value] of Object.entries(controls)) {
    if (value !== undefined && value !== null && value !== "") url.searchParams.set(key, String(value));
  }
  return url.toString();
}

function deepMerge(target, patch) {
  if (Array.isArray(target) || Array.isArray(patch)) return patch;
  if (!target || typeof target !== "object" || !patch || typeof patch !== "object") return patch;
  const next = { ...target };
  for (const [key, value] of Object.entries(patch)) {
    next[key] = key in next ? deepMerge(next[key], value) : value;
  }
  return next;
}

function mergeComponent(target, patch, replaceArrays = false) {
  const next = { ...target };
  for (const [key, value] of Object.entries(patch)) {
    if (Array.isArray(value) && Array.isArray(next[key]) && !replaceArrays) {
      const seen = new Set(next[key].map((item) => JSON.stringify(item)));
      next[key] = [...next[key]];
      for (const item of value) {
        const marker = JSON.stringify(item);
        if (!seen.has(marker)) {
          seen.add(marker);
          next[key].push(item);
        }
      }
    } else if (value && typeof value === "object" && !Array.isArray(value) && next[key] && typeof next[key] === "object" && !Array.isArray(next[key])) {
      next[key] = mergeComponent(next[key], value, replaceArrays);
    } else {
      next[key] = value;
    }
  }
  return next;
}

async function isAdsExplorer(baseUrl) {
  try {
    const response = await fetch(baseUrl);
    const html = await response.text();
    return response.ok && html.includes("ADS Light Explorer");
  } catch {
    return false;
  }
}

async function ensureStaticServer() {
  if (staticServer && staticBaseUrl) return staticBaseUrl;
  staticServer = createServer(async (request, response) => {
    try {
      const requestUrl = new URL(request.url ?? "/", "http://127.0.0.1");
      const pathname = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
      const filePath = resolve(join(distDir, pathname));
      const withinDist = filePath.startsWith(distDir);
      const exists = withinDist ? await stat(filePath).then((item) => item.isFile()).catch(() => false) : false;
      const finalPath = exists ? filePath : join(distDir, "index.html");
      const body = await readFile(finalPath);
      response.writeHead(200, { "Content-Type": mimeTypes[extname(finalPath)] ?? "application/octet-stream" });
      response.end(body);
    } catch (error) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end(String(error));
    }
  });
  await new Promise((resolveListen) => staticServer.listen(0, "127.0.0.1", resolveListen));
  const address = staticServer.address();
  staticBaseUrl = `http://127.0.0.1:${address.port}`;
  return staticBaseUrl;
}

async function getBrowser() {
  browserPromise ??= chromium.launch();
  return browserPromise;
}

// Named viewports for responsive verification.
const VIEWPORTS = {
  mobile: { width: 375, height: 720 },
  tablet: { width: 768, height: 900 },
  desktop: { width: 960, height: 680 },
};

async function screenshotUrl(url, name = "render", { viewport = "desktop", reducedMotion = false } = {}) {
  await mkdir(artifactsDir, { recursive: true });
  const timestamp = new Date().toISOString();
  const id = `${slug(name)}-${Date.now()}`;
  const outPath = resolve(artifactsDir, `${id}.png`);
  const reportPath = resolve(artifactsDir, `${id}.json`);
  const dimensions = VIEWPORTS[viewport] ?? VIEWPORTS.desktop;
  const browser = await getBrowser();
  const page = await browser.newPage({ viewport: dimensions, deviceScaleFactor: 1 });
  if (reducedMotion) await page.emulateMedia({ reducedMotion: "reduce" }).catch(() => {});
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(String(error.message ?? error)));
  page.on("console", (message) => {
    if (message.type() === "error") pageErrors.push(message.text());
  });
  await page.goto(url, { waitUntil: "networkidle" });
  const target = page.locator("#ads-render-target");
  const renderText = await target.innerText().catch(() => "");
  const renderFailed = renderText.includes("Render failed");
  await target.screenshot({ path: outPath });
  const axe = renderFailed ? { ran: false, violations: [] } : await runAxe(page);
  // Machine-readable snapshot so a non-vision agent can verify the render.
  const snapshot = renderFailed ? null : await page.evaluate(`(${SNAPSHOT_FN})()`).catch(() => null);
  await page.close();
  const imageBase64 = await readFile(outPath, "base64");
  const report = {
    timestamp,
    url,
    name,
    viewport,
    screenshot: outPath,
    ok: !renderFailed && pageErrors.length === 0 && axe.violations.length === 0,
    renderFailed,
    errors: pageErrors,
    a11y: { ran: axe.ran, violations: axe.violations },
    snapshot,
  };
  await writeJson(reportPath, report);
  return { path: outPath, reportPath, report, imageBase64 };
}

async function resolveBaseUrl(baseUrl = defaultBaseUrl) {
  return (await isAdsExplorer(baseUrl)) ? baseUrl : ensureStaticServer();
}

// Render JSX, perform a sequence of interactions, and snapshot before/after so
// an agent can verify dynamic behavior (a Dialog opens, a field accepts input,
// a value toggles) — not just the static first paint.
async function interactUrl(url, actions, name = "interact", { viewport = "desktop" } = {}) {
  await mkdir(artifactsDir, { recursive: true });
  const id = `${slug(name)}-${Date.now()}`;
  const outPath = resolve(artifactsDir, `${id}.png`);
  const dimensions = VIEWPORTS[viewport] ?? VIEWPORTS.desktop;
  const browser = await getBrowser();
  const page = await browser.newPage({ viewport: dimensions, deviceScaleFactor: 1 });
  const pageErrors = [];
  page.on("pageerror", (e) => pageErrors.push(String(e.message ?? e)));
  page.on("console", (m) => { if (m.type() === "error") pageErrors.push(m.text()); });
  await page.goto(url, { waitUntil: "networkidle" });
  const target = page.locator("#ads-render-target");
  const snap = async () => page.evaluate(`(${SNAPSHOT_FN})()`).catch(() => null);
  const before = await snap();

  const locate = (a) => {
    if (a.selector) return page.locator(a.selector).first();
    if (a.role) return page.getByRole(a.role, a.text ? { name: a.text } : {}).first();
    if (a.text) return target.getByText(a.text, { exact: false }).first();
    return target.locator("button,a,[role=button]").first();
  };
  const steps = [];
  for (const a of actions ?? []) {
    try {
      const loc = locate(a);
      if (a.type === "fill") await loc.fill(String(a.value ?? ""), { timeout: 3000 });
      else await loc.click({ timeout: 3000 });
      await page.waitForTimeout(120);
      steps.push({ action: a, ok: true });
    } catch (e) {
      steps.push({ action: a, ok: false, error: String(e.message ?? e).split("\n")[0] });
    }
  }
  const after = await snap();
  await target.screenshot({ path: outPath }).catch(() => page.screenshot({ path: outPath }));
  await page.close();
  const imageBase64 = await readFile(outPath, "base64");
  return { steps, before, after, errors: pageErrors, path: outPath, imageBase64 };
}

// --- export_screen support: map every exported component name to the import
// path a consumer project would use. Built from registry.ts (the manifest of
// what the explorer can render) so the emitted imports match what was verified.
function extractExports(source) {
  const names = new Set();
  for (const m of source.matchAll(/export\s+(?:async\s+)?(?:function|const|let|class)\s+([A-Za-z_][A-Za-z0-9_]*)/g)) names.add(m[1]);
  for (const m of source.matchAll(/export\s*\{([^}]+)\}/g)) {
    for (const part of m[1].split(",")) {
      const t = part.trim();
      if (!t || t.startsWith("type ")) continue;
      const as = t.split(/\s+as\s+/);
      const name = (as[1] ?? as[0]).trim();
      if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) names.add(name);
    }
  }
  return [...names];
}

let importMapPromise;
async function buildImportMap() {
  importMapPromise ??= (async () => {
    const registry = await readFile(resolve(root, "src/components/registry.ts"), "utf8");
    const map = {}; // exportName -> consumer import path
    for (const m of registry.matchAll(/import\s+\*\s+as\s+\w+\s+from\s+"(@\/[^"]+)"/g)) {
      const alias = m[1]; // e.g. @/components/ui/button
      const rel = alias.replace(/^@\//, "src/");
      const file = (await stat(resolve(root, `${rel}.tsx`)).then((s) => s.isFile()).catch(() => false))
        ? `${rel}.tsx`
        : `${rel}.ts`;
      const source = await readFile(resolve(root, file), "utf8").catch(() => "");
      for (const name of extractExports(source)) if (!(name in map)) map[name] = alias;
    }
    // recharts primitives are imported by name in the registry.
    const rechartsBlock = registry.match(/import\s*\{([^}]+)\}\s*from\s*"recharts"/s);
    if (rechartsBlock) for (const part of rechartsBlock[1].split(",")) {
      const name = part.trim();
      if (name && !(name in map)) map[name] = "recharts";
    }
    return map;
  })();
  return importMapPromise;
}

const server = new McpServer({
  name: "ads-light",
  version: "0.2.0"
});

server.tool(
  "list_components",
  "List ADS Light components, optionally filtered by category.",
  { category: z.string().optional() },
  async ({ category }) => {
    const spec = await readJson(specPath);
    const components = category
      ? spec.components.filter((component) => normalize(component.category) === normalize(category))
      : spec.components;
    return text(components.map(({ name, category, description }) => ({ name, category, description })));
  }
);

server.tool(
  "get_component",
  "Get one component spec by name. Suggests similar components on miss.",
  { name: z.string() },
  async ({ name }) => {
    const spec = await readJson(specPath);
    const component = spec.components.find((item) => normalize(item.name) === normalize(name));
    return component ? text(component) : text({ error: `Component not found: ${name}`, suggestions: similarComponents(spec, name) });
  }
);

server.tool(
  "search_components",
  "Weighted component search over name, description, usage guidance, variants, and props.",
  { query: z.string(), limit: z.number().default(6) },
  async ({ query, limit }) => {
    const spec = await readJson(specPath);
    return text(
      spec.components
        .map((component) => ({ score: scoreComponent(component, query), component }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(({ score, component }) => ({ score, name: component.name, category: component.category, description: component.description }))
    );
  }
);

server.tool(
  "list_patterns",
  "List ADS Light composition patterns (multi-component recipes for assembling UI).",
  {},
  async () => {
    const data = await readJson(patternsPath);
    return text(data.patterns.map(({ name, intent, components }) => ({ name, intent, components })));
  }
);

server.tool(
  "search_patterns",
  "Weighted search over pattern name, intent, components, composition, and selection rules.",
  { query: z.string(), limit: z.number().default(6) },
  async ({ query, limit }) => {
    const data = await readJson(patternsPath);
    return text(
      data.patterns
        .map((pattern) => ({ score: scorePattern(pattern, query), pattern }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(({ score, pattern }) => ({ score, name: pattern.name, intent: pattern.intent, components: pattern.components }))
    );
  }
);

server.tool(
  "get_pattern",
  "Get one composition pattern by name, including its executable JSX. Suggests similar patterns on miss.",
  { name: z.string() },
  async ({ name }) => {
    const data = await readJson(patternsPath);
    const pattern = data.patterns.find((item) => normalize(item.name) === normalize(name));
    if (pattern) return text(pattern);
    const suggestions = data.patterns
      .map((item) => ({ name: item.name, distance: levenshtein(item.name, name) }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3)
      .map((item) => item.name);
    return text({ error: `Pattern not found: ${name}`, suggestions });
  }
);

server.tool(
  "render_component",
  "Screenshot a known component example from components.json.",
  { component: z.string(), exampleName: z.string().optional(), baseUrl: z.string().default(defaultBaseUrl), colorMode: z.enum(["light", "dark"]).default("light"), viewport: z.enum(["mobile", "tablet", "desktop"]).default("desktop") },
  async ({ component: name, exampleName, baseUrl, colorMode, viewport }) => {
    const spec = await readJson(specPath);
    const component = spec.components.find((item) => normalize(item.name) === normalize(name));
    if (!component) return text({ error: `Component not found: ${name}`, suggestions: similarComponents(spec, name) });
    const example = exampleName
      ? component.examples?.find((item) => normalize(item.name) === normalize(exampleName))
      : component.examples?.[0];
    if (!example) return text({ error: `Example not found for ${component.name}`, examples: component.examples?.map((item) => item.name) ?? [] });
    const resolvedBaseUrl = await resolveBaseUrl(baseUrl);
    const url = withColorMode(`${resolvedBaseUrl}/?component=${encodeURIComponent(component.name)}&code=${encodeBase64Url(example.jsx)}`, colorMode);
    const screenshot = await screenshotUrl(url, component.name.toLowerCase(), { viewport });
    return imageAndText({ component: component.name, example: example.name, url, screenshot: screenshot.path, report: screenshot.reportPath, ok: screenshot.report.ok, a11y: screenshot.report.a11y, snapshot: screenshot.report.snapshot, warnings: lintCode(example.jsx) }, screenshot.imageBase64);
  }
);

server.tool(
  "render_controlled_component",
  "Screenshot a known component using explorer controls such as variant, size, state, label, icons, and component-specific controls.",
  {
    component: z.string(),
    controls: z.record(z.union([z.string(), z.number(), z.boolean()])).default({}),
    baseUrl: z.string().default(defaultBaseUrl),
    colorMode: z.enum(["light", "dark"]).default("light"),
    viewport: z.enum(["mobile", "tablet", "desktop"]).default("desktop")
  },
  async ({ component: name, controls, baseUrl, colorMode, viewport }) => {
    const spec = await readJson(specPath);
    const component = spec.components.find((item) => normalize(item.name) === normalize(name));
    if (!component) return text({ error: `Component not found: ${name}`, suggestions: similarComponents(spec, name) });
    const validControls = new Set((component.controls ?? []).map((control) => control.name));
    const unknownControls = Object.keys(controls).filter((key) => !validControls.has(key) && !component.variantDimensions?.[key]);
    const resolvedBaseUrl = await resolveBaseUrl(baseUrl);
    const url = withColorMode(buildControlledUrl(resolvedBaseUrl, component.name, controls), colorMode);
    const screenshot = await screenshotUrl(url, component.name.toLowerCase(), { viewport });
    return imageAndText({
      component: component.name,
      controls,
      unknownControls,
      url,
      screenshot: screenshot.path,
      report: screenshot.reportPath,
      ok: screenshot.report.ok,
      a11y: screenshot.report.a11y,
      snapshot: screenshot.report.snapshot,
      warnings: lintCode(JSON.stringify(controls)),
    }, screenshot.imageBase64);
  }
);

server.tool(
  "render_code",
  "Screenshot arbitrary JSX in the ADS Light explorer with all ADS Light components preloaded.",
  { code: z.string(), baseUrl: z.string().default(defaultBaseUrl), colorMode: z.enum(["light", "dark"]).default("light"), viewport: z.enum(["mobile", "tablet", "desktop"]).default("desktop") },
  async ({ code, baseUrl, colorMode, viewport }) => {
    const resolvedBaseUrl = await resolveBaseUrl(baseUrl);
    const url = withColorMode(`${resolvedBaseUrl}/?code=${encodeBase64Url(code)}`, colorMode);
    const screenshot = await screenshotUrl(url, "code", { viewport });
    return imageAndText({ url, screenshot: screenshot.path, report: screenshot.reportPath, ok: screenshot.report.ok, a11y: screenshot.report.a11y, snapshot: screenshot.report.snapshot, warnings: lintCode(code) }, screenshot.imageBase64);
  }
);

server.tool(
  "list_tokens",
  "List ADS Light design tokens, optionally filtered by category, layer, role, or mode.",
  {
    category: z.string().optional(),
    layer: z.string().optional(),
    role: z.string().optional(),
    mode: z.string().optional(),
    limit: z.number().default(80)
  },
  async ({ category, layer, role, mode, limit }) => {
    const tokens = tokenData.tokens
      .filter((token) => !category || normalize(token.category) === normalize(category))
      .filter((token) => !layer || normalize(token.layer) === normalize(layer))
      .filter((token) => !role || normalize(token.role) === normalize(role))
      .filter((token) => !mode || normalize(token.mode) === normalize(mode))
      .slice(0, limit);
    return text({ count: tokens.length, total: tokenData.count, byCategory: tokenData.byCategory, tokens });
  }
);

server.tool(
  "search_tokens",
  "Weighted search over token names, categories, roles, modes, descriptions, and useFor metadata.",
  { query: z.string(), limit: z.number().default(12) },
  async ({ query, limit }) => text(
    tokenData.tokens
      .map((token) => ({ score: scoreToken(token, query), token }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
  )
);

server.tool(
  "get_token",
  "Get one ADS Light token by exact custom property name.",
  { name: z.string() },
  async ({ name }) => {
    const normalizedName = name.startsWith("--") ? name : `--${name}`;
    const token = tokenData.tokens.find((item) => item.name === normalizedName);
    return token ? text(token) : text({ error: `Token not found: ${name}` });
  }
);

server.tool(
  "get_component_tokens",
  "Get token mapping metadata for a component.",
  { component: z.string() },
  async ({ component: name }) => {
    const spec = await readJson(specPath);
    const component = spec.components.find((item) => normalize(item.name) === normalize(name));
    if (!component) return text({ error: `Component not found: ${name}`, suggestions: similarComponents(spec, name) });
    return text({ component: component.name, tokenMapping: component.tokenMapping ?? {}, controls: component.controls ?? [] });
  }
);

server.tool(
  "quality_report",
  "Score component metadata completeness and return missing hardening items.",
  { component: z.string().optional(), limit: z.number().default(117) },
  async ({ component: name, limit }) => {
    const spec = await readJson(specPath);
    const renderStatus = await readJson(resolve(artifactsDir, "render-status.json"))
      .then((data) => data.components ?? {})
      .catch(() => null);
    const components = name
      ? spec.components.filter((item) => normalize(item.name) === normalize(name))
      : spec.components;
    if (name && components.length === 0) return text({ error: `Component not found: ${name}`, suggestions: similarComponents(spec, name) });
    const report = components
      .map((item) => ({ name: item.name, category: item.category, ...componentQuality(item, renderStatus) }))
      .sort((a, b) => a.score - b.score)
      .slice(0, limit);
    const average = report.length ? Math.round(report.reduce((sum, item) => sum + item.score, 0) / report.length) : 0;
    return text({
      count: report.length,
      average,
      renderStatus: renderStatus ? "loaded" : "missing (run `npm run verify:renders`)",
      report,
    });
  }
);

server.tool("get_theme", "Read the active client theme tokens.", {}, async () => {
  const theme = await readJson(themePath);
  return text({ summary: { name: theme.name, colors: Object.keys(theme.colors ?? {}), fonts: theme.fonts, radii: theme.radii }, theme });
});

server.tool(
  "set_theme",
  "Deep-merge validated updates into the active client theme tokens.",
  { theme: z.record(z.unknown()) },
  async ({ theme }) => {
    const allowed = new Set(["name", "client", "colors", "palette", "fonts", "typography", "radii", "shape", "buttonStyle", "overrides", "brand"]);
    const unknownKeys = Object.keys(theme).filter((key) => !allowed.has(key));
    if (unknownKeys.length) return text({ error: "Unknown top-level theme keys", unknownKeys, allowed: Array.from(allowed) });
    return withFileLock(themePath, async () => {
      const current = await readJson(themePath);
      const next = deepMerge(current, theme);
      await writeJson(themePath, next);
      const contrastWarnings = validateThemeContrast(next);
      return text({
        ok: true,
        themePath,
        contrastWarnings,
        note: contrastWarnings.length
          ? "Theme saved, but some brand/status colors fail AA contrast (see contrastWarnings). Run `npm run generate:theme` to apply."
          : "Theme saved (AA contrast ok). Run `npm run generate:theme` to apply.",
        theme: next,
      });
    });
  }
);

server.tool(
  "add_component",
  "Add a new rich component to components.json. The component must pass metadata validation.",
  { component: z.record(z.unknown()) },
  async ({ component }) => {
    const validation = validateComponent(component);
    if (!validation.ok) return text({ error: "Component metadata is incomplete", validation });
    if (!component.name) return text({ error: "component.name is required" });
    return withFileLock(specPath, async () => {
      const spec = await readJson(specPath);
      if (spec.components.some((item) => item.name === component.name)) {
        return text({ error: `Component already exists: ${component.name}` });
      }
      spec.components.push(component);
      await writeJson(specPath, spec);
      return text({ ok: true, count: spec.components.length });
    });
  }
);

server.tool(
  "update_component",
  "Merge updates into an existing component spec. Arrays merge and dedupe unless replaceArrays is true.",
  { name: z.string(), patch: z.record(z.unknown()), replaceArrays: z.boolean().default(false) },
  async ({ name, patch, replaceArrays }) =>
    withFileLock(specPath, async () => {
      const spec = await readJson(specPath);
      const index = spec.components.findIndex((item) => normalize(item.name) === normalize(name));
      if (index === -1) return text({ error: `Component not found: ${name}`, suggestions: similarComponents(spec, name) });
      const next = mergeComponent(spec.components[index], patch, replaceArrays);
      const validation = validateComponent(next);
      if (!validation.ok) return text({ error: "Patch would make component metadata incomplete", validation });
      spec.components[index] = next;
      await writeJson(specPath, spec);
      return text({ ok: true, component: spec.components[index] });
    })
);

// The verification matrix: an agent shouldn't have to remember to check dark
// mode and small screens — review_ui does it by default. `thorough` widens it.
const REVIEW_MODES = [
  { mode: "light·desktop", colorMode: "light", viewport: "desktop" },
  { mode: "dark·desktop", colorMode: "dark", viewport: "desktop" },
  { mode: "light·mobile", colorMode: "light", viewport: "mobile" },
];
const REVIEW_MODES_THOROUGH = [
  ...REVIEW_MODES,
  { mode: "dark·mobile", colorMode: "dark", viewport: "mobile" },
  { mode: "reduced-motion", colorMode: "light", viewport: "desktop", reducedMotion: true },
];

server.tool(
  "review_ui",
  "Render JSX across modes (light+dark × desktop+mobile, plus reduced-motion when thorough) and review each against ADS Light design-system rules (hardcoded colors, nested cards, multiple primary actions, raw HTML, overflow, render errors, a11y). Returns an overall verdict (pass/warn/fail), per-mode results, and findings each tagged with the modes where they appear (so dark-only contrast or mobile-only overflow surfaces automatically). Use this to self-check generated UI before delivering; pass single=true for a one-mode check.",
  { code: z.string(), baseUrl: z.string().default(defaultBaseUrl), colorMode: z.enum(["light", "dark"]).default("light"), viewport: z.enum(["mobile", "tablet", "desktop"]).default("desktop"), single: z.boolean().default(false), thorough: z.boolean().default(false) },
  async ({ code, baseUrl, colorMode, viewport, single, thorough }) => {
    const resolvedBaseUrl = await resolveBaseUrl(baseUrl);
    const matrix = single
      ? [{ mode: `${colorMode}·${viewport}`, colorMode, viewport }]
      : thorough ? REVIEW_MODES_THOROUGH : REVIEW_MODES;

    const runs = [];
    for (const m of matrix) {
      const url = withColorMode(`${resolvedBaseUrl}/?code=${encodeBase64Url(code)}`, m.colorMode);
      const shot = await screenshotUrl(url, `review-${slug(m.mode)}`, { viewport: m.viewport, reducedMotion: m.reducedMotion });
      const findings = reviewFindings(code, shot.report);
      const verdict = findings.some((f) => f.severity === "error") ? "fail" : findings.length ? "warn" : "pass";
      runs.push({ ...m, findings, verdict, shot });
    }

    // Merge findings across modes: same rule+message → one entry tagged with the
    // modes it appeared in. A finding in every mode is general; a subset is
    // mode-specific (e.g. dark-only contrast, mobile-only overflow).
    const merged = new Map();
    for (const run of runs) {
      for (const f of run.findings) {
        const key = `${f.rule}|${f.message}`;
        if (!merged.has(key)) merged.set(key, { ...f, modes: [] });
        merged.get(key).modes.push(run.mode);
      }
    }
    const findings = [...merged.values()].map((f) => ({
      ...f,
      modes: f.modes.length === matrix.length ? "all" : f.modes,
    }));

    const errorCount = findings.filter((f) => f.severity === "error").length;
    const verdict = errorCount ? "fail" : findings.length ? "warn" : "pass";
    const primary = runs[0].shot;
    return imageAndText({
      verdict,
      modesChecked: matrix.map((m) => m.mode),
      findingCount: findings.length,
      errorCount,
      findings,
      perMode: runs.map((r) => ({ mode: r.mode, verdict: r.verdict, ok: r.shot.report.ok, a11yViolations: r.shot.report.a11y?.violations?.length ?? 0, screenshot: r.shot.path })),
      snapshot: primary.report.snapshot,
      screenshot: primary.path,
    }, primary.imageBase64);
  }
);

server.tool(
  "fix_ui",
  "Auto-correct the mechanical design-system violations in JSX (hardcoded color utilities → nearest semantic token, raw <button>/<input> → <Button>/<Input>), then re-render and re-review the result. Returns the corrected code, the diff of what changed, the new verdict, and any findings that still need a human/model decision (nested cards, multiple primary actions, overflow, a11y). Use this after review_ui returns fail/warn.",
  { code: z.string(), baseUrl: z.string().default(defaultBaseUrl), colorMode: z.enum(["light", "dark"]).default("light"), viewport: z.enum(["mobile", "tablet", "desktop"]).default("desktop") },
  async ({ code, baseUrl, colorMode, viewport }) => {
    const before = reviewFindings(code, {});
    const { code: fixed, changes, manual } = autoFix(code, tokenData.tokens);
    if (!changes.length) {
      return text({
        changed: false,
        verdict: before.filter((f) => f.severity === "error").length ? "fail" : before.length ? "warn" : "pass",
        note: "No mechanically-fixable violations found. Remaining findings need a design decision — see review_ui.",
        remainingFindings: before,
      });
    }
    const resolvedBaseUrl = await resolveBaseUrl(baseUrl);
    const url = withColorMode(`${resolvedBaseUrl}/?code=${encodeBase64Url(fixed)}`, colorMode);
    const screenshot = await screenshotUrl(url, "fix", { viewport });
    const after = reviewFindings(fixed, screenshot.report);
    const errorCount = after.filter((f) => f.severity === "error").length;
    const verdict = errorCount ? "fail" : after.length ? "warn" : "pass";
    return imageAndText({
      changed: true,
      fixedCount: changes.length,
      changes,
      code: fixed,
      verdict,
      remainingFindings: after,
      manual,
      ok: screenshot.report.ok,
      a11y: screenshot.report.a11y,
      snapshot: screenshot.report.snapshot,
      screenshot: screenshot.path,
      note: verdict === "pass"
        ? "All findings resolved. Deliver the corrected code."
        : "Mechanical fixes applied; remaining findings need a design decision (see remainingFindings/manual).",
    }, screenshot.imageBase64);
  }
);

server.tool(
  "recommend_component",
  "Given a natural-language task, return the components that best fit, ranked, each with the rationale (whenToUse), a caution (neverUseFor), and a starter example. Use this to choose the right component before generating UI.",
  { task: z.string(), limit: z.number().default(5) },
  async ({ task, limit }) => {
    const spec = await readJson(specPath);
    const ranked = spec.components
      .map((component) => ({ score: scoreForIntent(component, task), component }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(({ score, component }) => ({
        name: component.name,
        category: component.category,
        score,
        why: component.agentHints?.selectionCriteria?.chooseWhen || component.whenToUse?.[0] || component.description,
        caution: component.neverUseFor?.[0],
        example: component.examples?.[0]?.jsx,
      }));
    return text({ task, recommendations: ranked.length ? ranked : "No strong match — try search_components or list_components." });
  }
);

server.tool(
  "apply_brand",
  "Import a brand profile (colors/fonts/radius extracted from a brand-guidelines doc) into the ADS theme: maps it into client-theme.json, derives missing color stops, validates contrast, regenerates the theme, and returns a report of what was applied/derived/kept-default + contrast warnings. Only colors.primary is essential. Use after reading a brand guide; then render a few components to verify.",
  { brand: z.record(z.unknown()), regenerate: z.boolean().default(true) },
  async ({ brand, regenerate }) =>
    withFileLock(themePath, async () => {
      const current = await readJson(themePath).catch(() => ({}));
      const { theme, report } = mapBrandToTheme(brand, current);
      await writeJson(themePath, theme);
      let regenerated = false;
      if (regenerate) {
        try { execSync("node scripts/generate-theme.mjs", { cwd: root, stdio: "ignore" }); regenerated = true; }
        catch { regenerated = false; }
      }
      return text({
        ok: true,
        themePath,
        regenerated,
        report,
        note: regenerated
          ? "Brand applied and theme regenerated. Render a few components (render_component / review_ui) to verify, then commit client-theme.json."
          : "Brand written to client-theme.json. Run `npm run generate:theme` to apply, then verify.",
      });
    })
);

server.tool(
  "ingest_brand",
  "Extract a brand profile (colors/fonts/radius) from a brand-guidelines SOURCE — pasted text/markdown, or a JSON export of design tokens / Figma variables — and report what was found vs guessed. Pass apply=true to map it straight into the theme (same as apply_brand) and regenerate. Use this when you have a brand doc rather than a hand-authored profile; review the extracted profile (especially the primary color) before applying.",
  { source: z.string(), apply: z.boolean().default(false), regenerate: z.boolean().default(true) },
  async ({ source, apply, regenerate }) => {
    const { profile, found, guessed, primaryMissing } = extractBrandProfile(source);
    if (!apply) {
      return text({
        profile, found, guessed, primaryMissing,
        next: primaryMissing
          ? "No primary color detected — set profile.colors.primary, then call ingest_brand with apply=true (or apply_brand)."
          : "Review the profile (confirm the primary color), then call ingest_brand with apply=true or pass it to apply_brand.",
      });
    }
    if (primaryMissing) return text({ ok: false, profile, found, guessed, error: "Refusing to apply: no primary color detected in the source. Set colors.primary first." });
    return withFileLock(themePath, async () => {
      const current = await readJson(themePath).catch(() => ({}));
      const { theme, report } = mapBrandToTheme(profile, current);
      await writeJson(themePath, theme);
      let regenerated = false;
      if (regenerate) {
        try { execSync("node scripts/generate-theme.mjs", { cwd: root, stdio: "ignore" }); regenerated = true; } catch { regenerated = false; }
      }
      return text({ ok: true, extracted: { found, guessed }, profile, regenerated, report, note: regenerated ? "Brand extracted and applied; theme regenerated. Render a few components to verify contrast." : "Brand applied to client-theme.json. Run `npm run generate:theme`, then verify." });
    });
  }
);

server.tool(
  "capabilities",
  "Describe what the ADS Light system can and cannot do — foundation, render/verify contract, theming model, known limitations, and dropped utilities — so an agent doesn't attempt unsupported UI.",
  {},
  async () => {
    const spec = await readJson(specPath);
    return text(buildCapabilities(spec));
  }
);

server.tool(
  "scaffold_screen",
  "Given a UI brief, return matching composition patterns (render-verified) plus recommended components as building blocks. Assemble them into JSX, then call review_ui before delivering.",
  { brief: z.string(), baseUrl: z.string().default(defaultBaseUrl) },
  async ({ brief, baseUrl }) => {
    const spec = await readJson(specPath);
    const data = await readJson(patternsPath);
    const resolvedBaseUrl = await resolveBaseUrl(baseUrl);
    const patterns = data.patterns
      .map((pattern) => ({ score: scorePatternIntent(pattern, brief), pattern }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
    // Render AND review each candidate so what comes back is a verified starting
    // point with a verdict, not just "it rendered". Closes the loop in one call.
    const verifiedPatterns = [];
    for (const { pattern } of patterns) {
      const url = `${resolvedBaseUrl}/?code=${encodeBase64Url(pattern.jsx)}`;
      const shot = await screenshotUrl(url, `scaffold-${slug(pattern.name)}`);
      const findings = reviewFindings(pattern.jsx, shot.report);
      const verdict = findings.some((f) => f.severity === "error") ? "fail" : findings.length ? "warn" : "pass";
      verifiedPatterns.push({
        name: pattern.name, intent: pattern.intent, components: pattern.components, jsx: pattern.jsx,
        renderOk: shot.report.ok, verdict, findings, screenshot: shot.path,
      });
    }
    const components = spec.components
      .map((component) => ({ score: scoreForIntent(component, brief), component }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(({ score, component }) => ({ name: component.name, score, why: component.agentHints?.selectionCriteria?.chooseWhen || component.whenToUse?.[0] }));
    const best = verifiedPatterns.find((p) => p.verdict === "pass") ?? verifiedPatterns[0];
    return text({
      brief,
      recommendedStart: best ? { name: best.name, jsx: best.jsx, verdict: best.verdict } : null,
      patterns: verifiedPatterns,
      recommendedComponents: components,
      next: best
        ? `Start from "${best.name}" (verdict: ${best.verdict}), adapt the JSX to the brief, then call review_ui (and fix_ui) before delivering.`
        : "No pattern matched — recommend_component for building blocks, compose JSX, then review_ui.",
    });
  }
);

server.tool(
  "export_screen",
  "Turn verified JSX into a production .tsx component file with imports resolved from the ADS registry (the same modules the explorer rendered), ready to drop into a project. Capitalized tags that aren't ADS components are assumed to be lucide-react icons. Optionally writes the file. Run review_ui first so you only export verified UI.",
  { code: z.string(), name: z.string().default("Screen"), write: z.boolean().default(false), outPath: z.string().optional() },
  async ({ code, name, write, outPath }) => {
    const map = await buildImportMap();
    const componentName = (name.replace(/[^A-Za-z0-9]/g, " ").replace(/\s+(.)/g, (_, c) => c.toUpperCase()).replace(/\s/g, "").replace(/^(.)/, (_, c) => c.toUpperCase())) || "Screen";

    const used = [...new Set([...String(code).matchAll(/<([A-Z][A-Za-z0-9]*)/g)].map((m) => m[1]))];
    const byModule = {};
    const assumedLucide = [];
    for (const id of used) {
      const mod = map[id];
      if (mod) (byModule[mod] ??= []).push(id);
      else assumedLucide.push(id); // capitalized, not an ADS export → lucide icon
    }
    if (assumedLucide.length) byModule["lucide-react"] = assumedLucide;

    const importLines = Object.entries(byModule)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([mod, names]) => `import { ${[...new Set(names)].sort().join(", ")} } from "${mod}";`);

    const indented = String(code).trim().split("\n").map((l) => `      ${l}`).join("\n");
    const file = `${importLines.join("\n")}

export function ${componentName}() {
  return (
    <>
${indented}
    </>
  );
}
`;

    let written = null;
    if (write) {
      const target = outPath
        ? resolve(root, outPath)
        : resolve(artifactsDir, "screens", `${slug(name)}.tsx`);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, file, "utf8");
      written = target;
    }
    return text({
      component: componentName,
      imports: byModule,
      assumedLucide,
      warnings: lintCode(code),
      written,
      code: file,
      note: assumedLucide.length
        ? `Assumed lucide-react icons: ${assumedLucide.join(", ")} — verify they're real icon names.`
        : "All tags resolved to ADS components.",
    });
  }
);

server.tool(
  "interact",
  "Render JSX, then run a sequence of interactions and snapshot before/after, so you can verify dynamic behavior (a Dialog opens on click, an Input accepts text, a Switch toggles) — not just the first paint. Each action is {type:'click'|'fill', text? | selector? | role?, value?}; targets resolve by visible text, CSS selector, or ARIA role within the render target. Returns per-step success, before/after snapshots, and console errors.",
  {
    code: z.string(),
    actions: z.array(z.object({
      type: z.enum(["click", "fill"]),
      text: z.string().optional(),
      selector: z.string().optional(),
      role: z.string().optional(),
      value: z.string().optional(),
    })).default([]),
    baseUrl: z.string().default(defaultBaseUrl),
    colorMode: z.enum(["light", "dark"]).default("light"),
    viewport: z.enum(["mobile", "tablet", "desktop"]).default("desktop"),
  },
  async ({ code, actions, baseUrl, colorMode, viewport }) => {
    const resolvedBaseUrl = await resolveBaseUrl(baseUrl);
    const url = withColorMode(`${resolvedBaseUrl}/?code=${encodeBase64Url(code)}`, colorMode);
    const r = await interactUrl(url, actions, "interact", { viewport });
    const stepsOk = r.steps.every((s) => s.ok);
    return imageAndText({
      ok: stepsOk && r.errors.length === 0,
      steps: r.steps,
      before: { text: r.before?.text, counts: r.before?.counts },
      after: { text: r.after?.text, counts: r.after?.counts, interactive: r.after?.interactive },
      errors: r.errors,
      screenshot: r.path,
      note: "Compare before/after (text, counts, interactive) to confirm the interaction did what you expected.",
    }, r.imageBase64);
  }
);

// --- Resources: browseable ADS context an agent can read without a tool call ---
server.resource("ads-components", "ads://components", async (uri) => {
  const spec = await readJson(specPath);
  return { contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(spec.components.map(({ name, category, description }) => ({ name, category, description })), null, 2) }] };
});
server.resource("ads-patterns", "ads://patterns", async (uri) => {
  const data = await readJson(patternsPath);
  return { contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(data.patterns, null, 2) }] };
});
server.resource("ads-tokens", "ads://tokens", async (uri) => ({ contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify({ count: tokenData.count, byCategory: tokenData.byCategory, tokens: tokenData.tokens }, null, 2) }] }));
server.resource("ads-theme", "ads://theme", async (uri) => ({ contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(await readJson(themePath), null, 2) }] }));
server.resource("ads-capabilities", "ads://capabilities", async (uri) => ({ contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(buildCapabilities(await readJson(specPath)), null, 2) }] }));

// --- Prompts: canned ADS workflows ---
server.prompt(
  "build_screen",
  "Build a screen from a brief using the ADS render-and-verify loop.",
  { brief: z.string() },
  ({ brief }) => ({
    messages: [{ role: "user", content: { type: "text", text:
`Build this screen with ADS Light: "${brief}".

Follow the loop:
1. capabilities — confirm what's supported and what's not.
2. scaffold_screen("${brief}") — get matching render-verified patterns + recommended components.
3. For any sub-decision, recommend_component("<sub-task>").
4. Assemble JSX with flat shadcn exports (<Card><CardHeader>…), semantic Tailwind tokens (bg-primary, text-muted-foreground, border-border) and status variants (success/warning/info/destructive). Never hardcode colors.
5. review_ui(code) — fix every finding, re-run until verdict=pass.
6. Deliver the JSX.` } }],
  })
);
server.prompt(
  "theme_from_brand",
  "Apply a brand to the ADS from a brand-guidelines source.",
  { source: z.string() },
  ({ source }) => ({
    messages: [{ role: "user", content: { type: "text", text:
`Theme ADS Light from this brand source: ${source}.
1. Extract a brand profile (see brand-profile.example.json): colors (primary required, plus any of secondary/success/warning/danger/info/background/text), fonts, radius.
2. apply_brand(profile) — maps it, derives missing stops, validates AA contrast, regenerates.
3. Resolve any contrastWarnings (choose a stronger color).
4. render_component on Button / Alert / Card to confirm the brand reads correctly.` } }],
  })
);
server.prompt(
  "review_before_ship",
  "Self-review generated UI against the design system before delivering.",
  { code: z.string() },
  ({ code }) => ({
    messages: [{ role: "user", content: { type: "text", text:
`Call review_ui with this JSX, then fix every finding until verdict=pass before delivering:\n\n${code}` } }],
  })
);

process.once("SIGINT", async () => {
  if (browserPromise) await (await browserPromise).close();
  staticServer?.close();
  process.exit(0);
});

const transport = new StdioServerTransport();
await server.connect(transport);
