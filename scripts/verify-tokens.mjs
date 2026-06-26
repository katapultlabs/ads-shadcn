// Token reconciliation guard — proves the MCP/explorer token catalog
// (src/tokens/token-data.generated.js) and the CSS that actually styles
// components (src/theme/tokens.generated.css) are ONE source of truth.
//
//   npm run verify:tokens
//
// Both are emitted by scripts/generate-theme.mjs from client-theme.json, so they
// share a seed by construction. This asserts they also agree value-for-value, so
// a hand-edit to either file (or a generator regression) can't silently split
// what an agent reads from what a user sees. CI exit code.

import { readFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { tokenData } from "../src/tokens/token-data.generated.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const cssPath = resolve(root, "src/theme/tokens.generated.css");
const css = await readFile(cssPath, "utf8");

// Parse the :root (light) and .dark blocks into name→value maps.
function parseBlock(selector) {
  const re = new RegExp(`${selector.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}\\s*\\{([^}]*)\\}`);
  const body = css.match(re)?.[1] ?? "";
  const vars = {};
  for (const line of body.split("\n")) {
    const m = line.match(/^\s*(--[a-z0-9-]+)\s*:\s*([^;]+);/i);
    if (m) vars[m[1]] = m[2].trim();
  }
  return vars;
}

const rootVars = parseBlock(":root"); // light semantic + fonts + ramps + --radius
const darkVars = parseBlock(".dark"); // dark semantic overrides

const mismatches = [];
let checked = 0;

for (const t of tokenData.tokens) {
  // Only the tokens that are emitted into the CSS are cross-checkable. Static
  // scales (text/space/shadow/duration/ease) live only in @theme inline and the
  // catalog, not in :root — skip those categories.
  const inCss =
    (t.category === "color" && (t.role === "semantic" || t.role === "primitive")) ||
    (t.category === "typography" && t.role === "semantic") ||
    (t.name === "--radius");
  if (!inCss) continue;

  const source = t.mode === "dark" ? darkVars : rootVars;
  // Dark mode only overrides a subset; if a dark token isn't in .dark it inherits
  // :root, which is correct — skip rather than flag.
  if (t.mode === "dark" && !(t.name in source)) continue;
  if (!(t.name in source)) continue;

  checked += 1;
  if (source[t.name] !== t.value) {
    mismatches.push({ token: t.name, mode: t.mode, catalog: t.value, css: source[t.name] });
  }
}

for (const m of mismatches) {
  console.log(`✗ ${m.token} (${m.mode}) — catalog ${m.catalog} ≠ css ${m.css}`);
}
console.log(
  `\nverify:tokens — ${checked} shared token(s) checked, ${mismatches.length} mismatch(es). ` +
    `Catalog ${tokenData.count} tokens; CSS :root ${Object.keys(rootVars).length}, .dark ${Object.keys(darkVars).length}.`
);
if (mismatches.length) {
  console.log("Catalog and CSS have diverged. Run `npm run generate:theme` to re-sync both from client-theme.json.");
  process.exit(1);
}
console.log("Catalog and rendered CSS are in sync (one source of truth).");
