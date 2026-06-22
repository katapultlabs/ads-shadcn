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

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const specPath = resolve(root, "components.json");
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

// Brand rule (CLAUDE.md): never hardcode colors — use tokens/colorPalette.
// Enforced here, at the surface where agents submit arbitrary JSX.
const HEX_COLOR = /#[0-9a-fA-F]{3,8}\b/g;
const CSS_COLOR_FN = /\b(?:rgba?|hsla?)\s*\(/g;
function lintCode(code) {
  const warnings = [];
  const source = String(code ?? "");
  const hex = [...new Set(source.match(HEX_COLOR) ?? [])];
  if (hex.length) {
    warnings.push(`Hardcoded color(s) ${hex.join(", ")} — use theme tokens (e.g. ads.accent, colorPalette) instead of raw values.`);
  }
  if (CSS_COLOR_FN.test(source)) {
    warnings.push("Hardcoded rgb()/hsl() color — use theme tokens or a semantic color palette instead.");
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
  const starterText = "Generated Chakra component spec starter";
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
    // Clear, honest signal: does this map to a real Chakra recipe?
    chakraRecipe: Boolean(component.chakraModule),
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
    chakraRecipe: 4,
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

async function screenshotUrl(url, name = "render", { viewport = "desktop" } = {}) {
  await mkdir(artifactsDir, { recursive: true });
  const timestamp = new Date().toISOString();
  const id = `${slug(name)}-${Date.now()}`;
  const outPath = resolve(artifactsDir, `${id}.png`);
  const reportPath = resolve(artifactsDir, `${id}.json`);
  const dimensions = VIEWPORTS[viewport] ?? VIEWPORTS.desktop;
  const browser = await getBrowser();
  const page = await browser.newPage({ viewport: dimensions, deviceScaleFactor: 1 });
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
  };
  await writeJson(reportPath, report);
  return { path: outPath, reportPath, report, imageBase64 };
}

async function resolveBaseUrl(baseUrl = defaultBaseUrl) {
  return (await isAdsExplorer(baseUrl)) ? baseUrl : ensureStaticServer();
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
    return imageAndText({ component: component.name, example: example.name, url, screenshot: screenshot.path, report: screenshot.reportPath, ok: screenshot.report.ok, a11y: screenshot.report.a11y, warnings: lintCode(example.jsx) }, screenshot.imageBase64);
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
    return imageAndText({ url, screenshot: screenshot.path, report: screenshot.reportPath, ok: screenshot.report.ok, a11y: screenshot.report.a11y, warnings: lintCode(code) }, screenshot.imageBase64);
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
      return text({ ok: true, themePath, theme: next });
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

process.once("SIGINT", async () => {
  if (browserPromise) await (await browserPromise).close();
  staticServer?.close();
  process.exit(0);
});

const transport = new StdioServerTransport();
await server.connect(transport);
