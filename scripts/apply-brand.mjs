// Import a brand profile into the ADS theme.
//
// Usage:
//   npm run import-brand -- path/to/brand-profile.json
//   npm run import-brand -- --json '{"colors":{"primary":"#ff5a1f"},"fonts":{"body":"Geist"}}'
//
// A brand profile is the structured brand (colors/fonts/radius) extracted from a
// brand-guidelines doc. This maps it into client-theme.json (deriving missing
// color stops, validating contrast, reporting gaps) and regenerates the theme.
// See brand-profile.example.json for the full shape.

import { readFile, writeFile, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { mapBrandToTheme } from "../mcp-server/agentic.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const themePath = resolve(root, "client-theme.json");

const args = process.argv.slice(2);
let brand;
const jsonIdx = args.indexOf("--json");
if (jsonIdx !== -1 && args[jsonIdx + 1]) {
  brand = JSON.parse(args[jsonIdx + 1]);
} else if (args[0]) {
  brand = JSON.parse(await readFile(resolve(process.cwd(), args[0]), "utf8"));
} else {
  console.error("Usage: npm run import-brand -- <brand-profile.json>  (or --json '<inline>')");
  process.exit(1);
}

const current = existsSync(themePath) ? JSON.parse(await readFile(themePath, "utf8")) : {};
const { theme, report } = mapBrandToTheme(brand, current);

if (existsSync(themePath)) await copyFile(themePath, resolve(root, "client-theme.backup.json"));
await writeFile(themePath, `${JSON.stringify(theme, null, 2)}\n`, "utf8");

execSync("node scripts/generate-theme.mjs", { cwd: root, stdio: "inherit" });

console.log("\n=== Brand import report ===");
console.log(`Theme: ${theme.name ?? "ADS"} (client: ${theme.client ?? "?"})`);
console.log(`Applied:     ${report.applied.join(", ") || "—"}`);
if (report.derived.length) console.log(`Derived:     ${report.derived.join(", ")}`);
console.log(`Kept default: ${report.keptDefault.join(", ") || "—"}`);
if (report.contrastWarnings.length) {
  console.warn("\n⚠ Contrast warnings (below WCAG AA):");
  for (const w of report.contrastWarnings) console.warn(`  - ${w.message}`);
} else {
  console.log("Contrast:    all brand/status colors pass AA ✓");
}
console.log("\nNext: npm run dev → review the components, then commit client-theme.json.");
