// Repo-level design lint — scan product source for ADS rule violations.
//
//   npm run lint:ui                 # scan src/ (excludes the ADS internals)
//   npm run lint:ui -- app/ pages/  # scan specific paths
//   npm run lint:ui -- --strict     # warnings also fail (exit 1)
//
// Enforces the same brand rules the render-time review applies, but across real
// .tsx/.jsx files so a product using the ADS can gate it in CI. Errors:
// hardcoded colors. Warnings: raw <button>/<input> where a component exists.

import { readdir, readFile, stat } from "node:fs/promises";
import { resolve, join, relative, extname } from "node:path";

const root = process.cwd();
const args = process.argv.slice(2);
const strict = args.includes("--strict");
const targets = args.filter((a) => !a.startsWith("--"));
const roots = targets.length ? targets : ["src"];

// The ADS internals legitimately define colors (cva, tokens) and render raw
// elements (primitives/typography) — they are the system, not consumers of it.
const EXCLUDE = [
  "node_modules", "dist", "artifacts", ".git",
  "src/components/ui", "src/components/primitives.tsx", "src/components/typography.tsx",
  "src/components/ads", "src/tokens", "src/theme", "src/App.tsx", "src/generated",
];
const isExcluded = (rel) => EXCLUDE.some((e) => rel === e || rel.startsWith(`${e}/`) || rel.startsWith(`${e}\\`));

const RAW_HEX = /#[0-9a-fA-F]{3,8}\b/;
const RAW_FN = /\b(?:rgba?|hsla?)\s*\(/;
const ALLOW_BW = /^#?(?:fff|ffffff|000|000000)$/i;

async function* walk(dir) {
  let entries;
  try { entries = await readdir(dir, { withFileTypes: true }); } catch { return; }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    const rel = relative(root, full).replace(/\\/g, "/");
    if (isExcluded(rel)) continue;
    if (entry.isDirectory()) yield* walk(full);
    else if ([".tsx", ".jsx"].includes(extname(entry.name))) yield full;
  }
}

const findings = [];
for (const r of roots) {
  const start = resolve(root, r);
  const s = await stat(start).catch(() => null);
  if (!s) { console.warn(`skip (not found): ${r}`); continue; }
  const files = s.isDirectory() ? walk(start) : (async function* () { yield start; })();
  for await (const file of files) {
    const rel = relative(root, file).replace(/\\/g, "/");
    const lines = (await readFile(file, "utf8")).split("\n");
    lines.forEach((line, i) => {
      const ln = i + 1;
      const hex = line.match(/#[0-9a-fA-F]{3,8}\b/g)?.filter((h) => !ALLOW_BW.test(h)) ?? [];
      if (hex.length && RAW_HEX.test(line)) findings.push({ file: rel, line: ln, severity: "error", rule: "no-hardcoded-color", message: `Hardcoded color ${hex.join(", ")} — use a semantic Tailwind token (bg-primary, text-muted-foreground, …).` });
      if (RAW_FN.test(line)) findings.push({ file: rel, line: ln, severity: "error", rule: "no-hardcoded-color", message: "Hardcoded rgb()/hsl() — use a semantic Tailwind token." });
      if (/<button[\s>]/.test(line)) findings.push({ file: rel, line: ln, severity: "warn", rule: "prefer-component", message: "Raw <button> — use the <Button> component." });
      if (/<input[\s>]/.test(line) && !/type=["']file["']/.test(line)) findings.push({ file: rel, line: ln, severity: "warn", rule: "prefer-component", message: "Raw <input> — use the <Input> component." });
    });
  }
}

const errors = findings.filter((f) => f.severity === "error");
const warns = findings.filter((f) => f.severity === "warn");
for (const f of findings) console.log(`${f.severity === "error" ? "✗" : "⚠"} ${f.file}:${f.line}  ${f.rule}  ${f.message}`);
console.log(`\nlint:ui — ${errors.length} error(s), ${warns.length} warning(s) across ${roots.join(", ")}.`);
process.exit(errors.length || (strict && warns.length) ? 1 : 0);
