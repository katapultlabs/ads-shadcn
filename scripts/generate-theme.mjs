// ADS Light theme generator (ShadCN foundation) — single source of truth.
//
// Reads client-theme.json and emits BOTH:
//   1. src/theme/tokens.generated.css — the CSS variables that actually style
//      components (semantic shadcn vars light/dark + full brand/status/neutral
//      color ramps + radius scale), imported by src/index.css.
//   2. src/tokens/token-data.generated.js — a brand-reactive token catalog the
//      TokenExplorer and the MCP token tools read.
// Both are derived from the same brand seed, so what you browse is what renders,
// and a brand swap (new-client) updates everything. Run `npm run generate:theme`.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const themePath = resolve(root, "client-theme.json");
const cssOut = resolve(root, "src/theme/tokens.generated.css");
const dataOut = resolve(root, "src/tokens/token-data.generated.js");

const clamp = (v) => Math.max(0, Math.min(255, Math.round(v)));
function hexToRgb(hex) {
  const n = String(hex).replace("#", "").trim();
  const full = n.length === 3 ? n.replace(/(.)/g, "$1$1") : n;
  const int = Number.parseInt(full.slice(0, 6), 16);
  if (Number.isNaN(int)) return null;
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}
const rgbToHex = ({ r, g, b }) => `#${[r, g, b].map((v) => clamp(v).toString(16).padStart(2, "0")).join("")}`;
function mix(hex, ratio) {
  const rgb = hexToRgb(hex) ?? { r: 0, g: 0, b: 0 };
  const target = ratio >= 0 ? 255 : 0;
  const a = Math.abs(ratio);
  return rgbToHex({ r: rgb.r + (target - rgb.r) * a, g: rgb.g + (target - rgb.g) * a, b: rgb.b + (target - rgb.b) * a });
}
function luminance(hex) {
  const rgb = hexToRgb(hex) ?? { r: 0, g: 0, b: 0 };
  const ch = (v) => { const c = v / 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * ch(rgb.r) + 0.7152 * ch(rgb.g) + 0.0722 * ch(rgb.b);
}
const onColor = (hex) => (luminance(hex) > 0.45 ? "#101828" : "#ffffff");
const def = (v, fallback) => (v == null || v === "" ? fallback : v);

// Per-step tint/shade ratios relative to the 500 seed.
const RAMP = { 50: 0.95, 100: 0.84, 200: 0.66, 300: 0.46, 400: 0.24, 500: 0, 600: -0.16, 700: -0.32, 800: -0.48, 900: -0.62, 950: -0.74 };
const ramp = (seed) => Object.fromEntries(Object.entries(RAMP).map(([step, r]) => [step, mix(seed, r)]));

const theme = JSON.parse(await readFile(themePath, "utf8"));
const colors = theme.colors ?? {};
const palette = theme.palette ?? {};
const radii = theme.radii ?? {};
const fonts = theme.fonts ?? {};

const primary = def(palette.primary, def(colors.brand600, "#145fc4"));
const ink = def(colors.ink, "#182230");
const surface = def(palette.paper, def(colors.surface, "#ffffff"));
const bg = def(palette.background, def(colors.surface, "#fbfcfe"));
const line = def(colors.line, "#d8dee8");
const muted = def(colors.muted, "#667085");
const danger = def(palette.danger, "#b42318");
const success = def(palette.success, "#15803d");
const warning = def(palette.warning, "#b45309");
const info = def(palette.info, "#0369a1");
const radius = def(radii.brand, "8px");
const radiusCss = typeof radius === "number" ? `${radius}px` : radius;

// --- color ramps (brand reactive) ---
const ramps = {
  brand: ramp(def(colors.brand500, primary)),
  success: ramp(success),
  warning: ramp(warning),
  danger: ramp(danger),
  info: ramp(info),
  neutral: ramp(muted),
};

// --- semantic colors ---
const lightColors = {
  "--background": bg, "--foreground": ink,
  "--card": surface, "--card-foreground": ink,
  "--popover": surface, "--popover-foreground": ink,
  "--primary": primary, "--primary-foreground": onColor(primary),
  "--secondary": mix(line, 0.45), "--secondary-foreground": ink,
  "--muted": mix(line, 0.5), "--muted-foreground": muted,
  "--accent": mix(primary, 0.88), "--accent-foreground": primary,
  "--destructive": danger, "--destructive-foreground": onColor(danger),
  "--border": line, "--input": line, "--ring": primary,
  "--success": success, "--success-foreground": onColor(success),
  "--warning": warning, "--warning-foreground": onColor(warning),
  "--info": info, "--info-foreground": onColor(info),
};
const darkColors = {
  "--background": mix(ink, -0.55), "--foreground": "#f5f7fa",
  "--card": mix(ink, -0.4), "--card-foreground": "#f5f7fa",
  "--popover": mix(ink, -0.4), "--popover-foreground": "#f5f7fa",
  "--primary": mix(primary, 0.28), "--primary-foreground": onColor(mix(primary, 0.28)),
  "--secondary": mix(ink, -0.2), "--secondary-foreground": "#f5f7fa",
  "--muted": mix(ink, -0.2), "--muted-foreground": mix(muted, 0.35),
  "--accent": mix(primary, -0.4), "--accent-foreground": "#f5f7fa",
  "--destructive": mix(danger, 0.25), "--destructive-foreground": onColor(mix(danger, 0.25)),
  "--border": "oklch(1 0 0 / 12%)", "--input": "oklch(1 0 0 / 16%)", "--ring": mix(primary, 0.28),
  "--success": mix(success, 0.25), "--success-foreground": onColor(mix(success, 0.25)),
  "--warning": mix(warning, 0.3), "--warning-foreground": onColor(mix(warning, 0.3)),
  "--info": mix(info, 0.3), "--info-foreground": onColor(mix(info, 0.3)),
};

const fontVars = {
  "--font-sans": def(fonts.body, "Inter, ui-sans-serif, system-ui, sans-serif"),
  "--font-heading": def(fonts.heading, "Inter, ui-sans-serif, system-ui, sans-serif"),
};

// --- static design scales (real ShadCN/Tailwind surface) ---
const TYPE_SIZES = { xs: "0.75rem", sm: "0.875rem", base: "1rem", lg: "1.125rem", xl: "1.25rem", "2xl": "1.5rem", "3xl": "1.875rem", "4xl": "2.25rem", "5xl": "3rem" };
const FONT_WEIGHTS = { normal: "400", medium: "500", semibold: "600", bold: "700" };
const LINE_HEIGHTS = { tight: "1.1", snug: "1.3", normal: "1.5", relaxed: "1.625" };
const SPACE = { 0: "0px", 1: "0.25rem", 2: "0.5rem", 3: "0.75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 8: "2rem", 10: "2.5rem", 12: "3rem", 16: "4rem", 20: "5rem", 24: "6rem" };
const RADIUS = { sm: `calc(${radiusCss} - 4px)`, md: `calc(${radiusCss} - 2px)`, lg: radiusCss, xl: `calc(${radiusCss} + 4px)`, full: "9999px" };
const SHADOWS = {
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)", sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)", xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
};
const DURATIONS = { fast: "150ms", normal: "200ms", slow: "300ms" };
const EASINGS = { standard: "cubic-bezier(0.4, 0, 0.2, 1)", in: "cubic-bezier(0.4, 0, 1, 1)", out: "cubic-bezier(0, 0, 0.2, 1)" };

// --- token catalog ---
const tokens = [];
const add = (name, value, category, role, layer, mode, description) => tokens.push({ name, value, category, role, layer, mode, description });

for (const [scale, steps] of Object.entries(ramps)) {
  for (const [step, value] of Object.entries(steps)) {
    add(`--${scale}-${step}`, value, "color", "primitive", "primitive", "global", `${scale} ${step} — primitive color ramp step.`);
  }
}
for (const [name, value] of Object.entries(lightColors)) add(name, value, "color", "semantic", "semantic", "light", `Semantic color (light): ${name.replace(/^--/, "")}.`);
for (const [name, value] of Object.entries(darkColors)) add(name, value, "color", "semantic", "semantic", "dark", `Semantic color (dark): ${name.replace(/^--/, "")}.`);
for (const [name, value] of Object.entries(fontVars)) add(name, value, "typography", "semantic", "typography", "global", "Brand font family.");
for (const [k, value] of Object.entries(TYPE_SIZES)) add(`--text-${k}`, value, "typography", "primitive", "typography", "global", `Font size ${k}.`);
for (const [k, value] of Object.entries(FONT_WEIGHTS)) add(`--font-weight-${k}`, value, "typography", "primitive", "typography", "global", `Font weight ${k}.`);
for (const [k, value] of Object.entries(LINE_HEIGHTS)) add(`--leading-${k}`, value, "typography", "primitive", "typography", "global", `Line height ${k}.`);
for (const [k, value] of Object.entries(SPACE)) add(`--space-${k}`, value, "spacing", "primitive", "primitive", "global", `Spacing step ${k}.`);
for (const [k, value] of Object.entries(RADIUS)) add(`--radius-${k}`, value, "radius", "semantic", "semantic", "global", `Radius ${k}, derived from the brand radius.`);
for (const [k, value] of Object.entries(SHADOWS)) add(`--shadow-${k}`, value, "elevation", "primitive", "primitive", "global", `Elevation shadow ${k}.`);
for (const [k, value] of Object.entries(DURATIONS)) add(`--duration-${k}`, value, "motion", "primitive", "primitive", "global", `Transition duration ${k}.`);
for (const [k, value] of Object.entries(EASINGS)) add(`--ease-${k}`, value, "motion", "primitive", "primitive", "global", `Easing curve ${k}.`);

const byCategory = {};
const byLayer = {};
for (const t of tokens) { byCategory[t.category] = (byCategory[t.category] ?? 0) + 1; byLayer[t.layer] = (byLayer[t.layer] ?? 0) + 1; }

// --- write CSS ---
const rampVars = {};
for (const [scale, steps] of Object.entries(ramps)) for (const [step, value] of Object.entries(steps)) rampVars[`--${scale}-${step}`] = value;
const block = (sel, vars) => `${sel} {\n${Object.entries(vars).map(([k, v]) => `  ${k}: ${v};`).join("\n")}\n}`;

const css = `/* GENERATED by scripts/generate-theme.mjs from client-theme.json — do not edit by hand. */
/* Theme: ${theme.name ?? "ADS Light"} (client: ${theme.client ?? "Default"}) */

${block(":root", { "--radius": radiusCss, ...lightColors, ...fontVars, ...rampVars })}

${block(".dark", darkColors)}
`;

// --- write token catalog ---
const dataJs = `// GENERATED by scripts/generate-theme.mjs from client-theme.json — do not edit by hand.
export const tokenData = ${JSON.stringify({ count: tokens.length, byCategory, byLayer, tokens }, null, 2)};
`;

await mkdir(dirname(cssOut), { recursive: true });
await mkdir(dirname(dataOut), { recursive: true });
await writeFile(cssOut, css, "utf8");
await writeFile(dataOut, dataJs, "utf8");
console.log(`Wrote ${cssOut}`);
console.log(`Wrote ${dataOut} — ${tokens.length} brand-reactive tokens (${Object.entries(byCategory).map(([k, v]) => `${k}:${v}`).join(", ")})`);
