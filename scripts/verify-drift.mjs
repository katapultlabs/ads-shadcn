// Spec-drift guard — keep ads.components.json honest against the real source.
//
//   npm run verify:drift            # report drift, exit 1 if any
//   npm run verify:drift -- --warn  # report only, never fail
//
// For every shadcn component whose source defines a class-variance-authority
// config, this extracts the actual `variant` and `size` keys from the .tsx and
// diffs them against the documented variants/sizes in the spec. Catches the spec
// claiming a variant the code dropped, or the code gaining one nobody documented
// (e.g. when shadcn upstream changes, or after a hand-edit like our success/
// warning/info additions). Components without a cva config are skipped.

import { readdir, readFile } from "node:fs/promises";
import { resolve, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const uiDir = resolve(root, "src/components/ui");
const warnOnly = process.argv.includes("--warn");

// filename → primary component name: radio-group → RadioGroup, button → Button.
const toName = (file) => basename(file, ".tsx").split("-").map((p) => p[0].toUpperCase() + p.slice(1)).join("");

// Return the inner body of the balanced { ... } that follows `key:` (or the
// balanced ( ... ) for `key(`), searched from `start`.
function blockAfter(source, key, openCh = "{", closeCh = "}", start = 0) {
  const at = source.indexOf(key, start);
  if (at === -1) return null;
  const open = source.indexOf(openCh, at);
  if (open === -1) return null;
  let depth = 0, end = -1;
  for (let i = open; i < source.length; i += 1) {
    if (source[i] === openCh) depth += 1;
    else if (source[i] === closeCh) { depth -= 1; if (depth === 0) { end = i; break; } }
  }
  return end === -1 ? null : source.slice(open + 1, end);
}

// Top-level keys of an object body (handles quoted/hyphenated keys like
// "icon-xs", ignores keys nested inside value objects/arrays).
function topLevelKeys(body) {
  if (body == null) return null;
  const keys = [];
  let depth = 0;
  for (const m of body.matchAll(/([{}[\]])|(?:^|,)\s*["']?([A-Za-z0-9_-]+)["']?\s*:/g)) {
    if (m[1] === "{" || m[1] === "[") depth += 1;
    else if (m[1] === "}" || m[1] === "]") depth -= 1;
    else if (m[2] && depth === 0) keys.push(m[2]);
  }
  return [...new Set(keys)];
}

const spec = JSON.parse(await readFile(resolve(root, "ads.components.json"), "utf8"));
const byName = new Map(spec.components.map((c) => [c.name, c]));

const files = (await readdir(uiDir)).filter((f) => f.endsWith(".tsx"));
const drift = [];
let checked = 0;

for (const file of files) {
  const source = await readFile(resolve(uiDir, file), "utf8");
  if (!source.includes("cva(")) continue; // no variant config → nothing to diff
  // Scope to the cva(...) call, then to its `variants: { ... }` group, so the
  // `variant`/`size` we read are the cva dimensions — not defaultVariants etc.
  const cvaBody = blockAfter(source, "cva(", "(", ")");
  const variantsBody = cvaBody && blockAfter(cvaBody, "variants", "{", "}");
  if (!variantsBody) continue;

  const name = toName(file);
  const comp = byName.get(name);
  if (!comp) continue;

  for (const dim of ["variant", "size"]) {
    const sourceKeys = topLevelKeys(blockAfter(variantsBody, `${dim}:`, "{", "}"));
    if (!sourceKeys) continue;
    checked += 1;
    const specKeys = (dim === "variant" ? comp.variants : comp.sizes) ?? [];
    const specSet = new Set(specKeys.map(String));
    const srcSet = new Set(sourceKeys);
    const undocumented = sourceKeys.filter((k) => !specSet.has(k));
    const phantom = [...specSet].filter((k) => k !== "default" && !srcSet.has(k));
    if (undocumented.length) drift.push({ component: name, dim, kind: "undocumented", keys: undocumented, message: `source has ${dim}(s) [${undocumented.join(", ")}] not in spec.${dim}s` });
    if (phantom.length) drift.push({ component: name, dim, kind: "phantom", keys: phantom, message: `spec.${dim}s lists [${phantom.join(", ")}] the source doesn't define` });
  }
}

for (const d of drift) console.log(`✗ ${d.component}.${d.dim}: ${d.message}`);
console.log(`\nverify:drift — ${checked} cva dimension(s) checked across ${files.length} ui files, ${drift.length} drift item(s).`);
if (drift.length && !warnOnly) {
  console.log("Spec and source disagree. Update ads.components.json (update_component) or the source, then re-run.");
  process.exit(1);
}
if (!drift.length) console.log("Spec variants/sizes match the component source.");
