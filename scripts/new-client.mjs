// Scaffold and switch per-client brand themes for ADS Light.
//
//   node scripts/new-client.mjs "Acme Corp" --primary #ff5a1f --font "Geist" --activate
//   node scripts/new-client.mjs --list
//   node scripts/new-client.mjs --switch "Acme Corp"
//
// Stored themes live in client-themes/<slug>.json. Activating one copies it to
// client-theme.json (the file App.jsx imports), backing up the current one first.
// Per-client work should still happen on its own branch — this only manages the
// brand layer, exactly the file CLAUDE.md says a client branch should change.

import { copyFile, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, join } from "node:path";

const ROOT = resolve(".");
const THEMES_DIR = join(ROOT, "client-themes");
const ACTIVE = join(ROOT, "client-theme.json");

// --- color math (mirrors src/theme/createTheme.js so generated stops match) ---
const clamp = (v) => Math.max(0, Math.min(255, Math.round(v)));
function hexToRgb(hex) {
  const n = String(hex).replace("#", "").trim();
  const full = n.length === 3 ? n.replace(/(.)/g, "$1$1") : n;
  const int = Number.parseInt(full.slice(0, 6), 16);
  if (Number.isNaN(int)) return null;
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}
const rgbToHex = ({ r, g, b }) => `#${[r, g, b].map((v) => clamp(v).toString(16).padStart(2, "0")).join("")}`;
function mix(rgb, ratio) {
  const target = ratio >= 0 ? 255 : 0;
  const a = Math.abs(ratio);
  return { r: rgb.r + (target - rgb.r) * a, g: rgb.g + (target - rgb.g) * a, b: rgb.b + (target - rgb.b) * a };
}
function step(hex, ratio) {
  const rgb = hexToRgb(hex);
  return rgb ? rgbToHex(mix(rgb, ratio)) : hex;
}

// --- args ---
function parseArgs(argv) {
  const opts = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith("--")) opts[key] = true;
      else { opts[key] = next; i++; }
    } else opts._.push(a);
  }
  return opts;
}

const slugify = (name) =>
  String(name).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

function buildTheme(name, opts, base) {
  const primary = typeof opts.primary === "string" ? opts.primary : null;
  const theme = structuredClone(base);
  theme.name = `${name} Theme`;
  theme.client = name;

  if (primary) {
    theme.colors.brand50 = step(primary, 0.95);
    theme.colors.brand100 = step(primary, 0.84);
    theme.colors.brand500 = primary;
    theme.colors.brand600 = step(primary, -0.16);
    theme.colors.brand700 = step(primary, -0.32);
    theme.palette.primary = theme.colors.brand600;
  }
  if (typeof opts.font === "string") {
    const stack = `${opts.font}, ui-sans-serif, system-ui, sans-serif`;
    theme.fonts.heading = stack;
    theme.fonts.body = stack;
    theme.typography.fontFamily = stack;
  }
  if (typeof opts["font-url"] === "string") theme.typography.fontUrl = opts["font-url"];
  if (typeof opts["button-transform"] === "string") theme.typography.buttonTransform = opts["button-transform"];
  if (opts.radius !== undefined) {
    const px = Number.parseInt(opts.radius, 10);
    if (!Number.isNaN(px)) { theme.radii.brand = `${px}px`; theme.shape.borderRadius = px; }
  }
  theme.brand = theme.brand ?? {};
  theme.brand.notes = `Brand layer for ${name}. Refine via the explorer (Tokens panel) or the MCP set_theme tool, then verify with npm run verify:renders.`;
  return theme;
}

async function listThemes() {
  if (!existsSync(THEMES_DIR)) return [];
  const files = await readdir(THEMES_DIR);
  return files.filter((f) => f.endsWith(".json")).sort();
}

async function activate(file, label) {
  if (existsSync(ACTIVE)) await copyFile(ACTIVE, join(ROOT, "client-theme.backup.json"));
  await copyFile(file, ACTIVE);
  console.log(`✓ Activated ${label} → client-theme.json (previous saved to client-theme.backup.json)`);
}

const NEXT_STEPS = (name, slug) => `
Next steps for ${name}:
  1. Branch for this client (keep brand changes isolated).
  2. Refine tokens: open the explorer (npm run dev), click "Tokens", or use the MCP set_theme tool.
  3. Render the core set — Button, Input, Card, Alert, Dialog, Table — and inspect screenshots.
     npm run render -- "<Button>Continue</Button>"
  4. Register any client-only components in components.json + src/meta.
  5. Verify before delivering: npm run verify:renders
  Theme file: client-themes/${slug}.json`;

async function main() {
  const opts = parseArgs(process.argv.slice(2));

  if (opts.list) {
    const themes = await listThemes();
    if (!themes.length) { console.log("No client themes yet. Create one: node scripts/new-client.mjs \"Client Name\""); return; }
    console.log("Stored client themes (client-themes/):");
    for (const f of themes) {
      const data = JSON.parse(await readFile(join(THEMES_DIR, f), "utf8"));
      console.log(`  • ${f.replace(/\.json$/, "")}  —  ${data.client ?? "?"}  (primary ${data.colors?.brand500 ?? "?"})`);
    }
    return;
  }

  if (typeof opts.switch === "string") {
    const slug = slugify(opts.switch);
    const file = join(THEMES_DIR, `${slug}.json`);
    if (!existsSync(file)) { console.error(`✗ No stored theme "${slug}". Run with --list to see options.`); process.exit(1); }
    await activate(file, opts.switch);
    return;
  }

  const name = opts._[0];
  if (!name) {
    console.error(`Usage:
  node scripts/new-client.mjs "Client Name" [--primary #hex] [--font "Family"] [--font-url URL] [--radius 8] [--button-transform none] [--from Existing] [--activate]
  node scripts/new-client.mjs --list
  node scripts/new-client.mjs --switch "Client Name"`);
    process.exit(1);
  }

  const slug = slugify(name);
  const file = join(THEMES_DIR, `${slug}.json`);
  if (existsSync(file) && !opts.force) {
    console.error(`✗ client-themes/${slug}.json already exists. Use --force to overwrite, or --switch to activate it.`);
    process.exit(1);
  }

  // Base: clone from an existing client theme if asked, else the active default.
  let basePath = ACTIVE;
  if (typeof opts.from === "string") {
    const fromFile = join(THEMES_DIR, `${slugify(opts.from)}.json`);
    if (!existsSync(fromFile)) { console.error(`✗ --from theme "${opts.from}" not found.`); process.exit(1); }
    basePath = fromFile;
  }
  const base = JSON.parse(await readFile(basePath, "utf8"));

  const theme = buildTheme(name, opts, base);
  await mkdir(THEMES_DIR, { recursive: true });
  await writeFile(file, `${JSON.stringify(theme, null, 2)}\n`, "utf8");
  console.log(`✓ Created client-themes/${slug}.json`);

  if (opts.activate) await activate(file, name);
  console.log(NEXT_STEPS(name, slug));
}

main().catch((err) => { console.error(err); process.exit(1); });
