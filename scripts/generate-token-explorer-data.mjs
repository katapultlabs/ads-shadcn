import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const files = [
  "src/tokens/core.css",
  "src/tokens/typography.css",
  "src/tokens/themes/light.css",
  "src/tokens/themes/dark.css",
  "src/tokens/component-tokens.css"
];

const tokenPattern = /--([a-zA-Z0-9-_]+)\s*:\s*([^;]+);/g;
const tokens = [];

function inferCategory(name) {
  if (name.startsWith("--color-")) return "color";
  if (name.startsWith("--font-") || name.startsWith("--line-height-") || name.startsWith("--letter-spacing-") || name.startsWith("--type-")) return "typography";
  if (name.startsWith("--space-")) return "spacing";
  if (name.startsWith("--radius-")) return "radius";
  if (name.startsWith("--breakpoint-")) return "breakpoint";
  if (name.startsWith("--shadow-")) return "elevation";
  if (name.startsWith("--duration-") || name.startsWith("--ease-") || name.startsWith("--motion-")) return "motion";
  if (name.startsWith("--border-width-")) return "border";
  if (name.startsWith("--opacity-")) return "opacity";
  return "component";
}

function inferMode(name, source) {
  if (source.includes("themes/light")) return "light";
  if (source.includes("themes/dark")) return "dark";
  if (name.includes("-desktop-")) return "desktop";
  if (name.includes("-mobile-")) return "mobile";
  return "global";
}

function inferRole(name, source) {
  if (source.includes("component")) return "component";
  if (source.includes("themes")) return "semantic";
  if (/^--color-(blue|slate|green|amber|red|cyan)-/.test(name)) return "primitive";
  if (/^--(space|radius|breakpoint|shadow|duration|ease|motion|font|line-height|letter-spacing|opacity|border-width)-/.test(name)) return "primitive";
  if (name.startsWith("--type-")) return "semantic";
  return "semantic";
}

function inferDescription(name, category, role, mode) {
  const clean = name.replace(/^--/, "").replace(/-/g, " ");
  if (category === "color") return `${role} color token for ${clean}${mode !== "global" ? ` in ${mode} mode` : ""}.`;
  if (category === "typography") return `Typography token controlling ${clean}.`;
  if (category === "motion") return `Motion token for timing, easing, or transition recipe: ${clean}.`;
  if (category === "elevation") return `Elevation token for shadow depth: ${clean}.`;
  if (category === "component") return `Component-level alias used to keep ${clean} themeable.`;
  return `${category} token for ${clean}.`;
}

function inferUseFor(name, category, role) {
  if (category === "color" && role === "primitive") return ["Reference through semantic color tokens, not directly in components."];
  if (category === "color") return ["Use for themed foregrounds, backgrounds, borders, and interaction states."];
  if (category === "typography") return ["Use for consistent hierarchy, reading rhythm, and responsive text roles."];
  if (category === "spacing") return ["Use for layout gaps, padding, and component internal rhythm."];
  if (category === "radius") return ["Use for corners and shape consistency."];
  if (category === "elevation") return ["Use for raised surfaces, popovers, overlays, and focus affordance."];
  if (category === "motion") return ["Use for hover, enter, exit, disclosure, feedback, and loading transitions."];
  if (category === "component") return ["Use inside component recipes and overrides instead of hardcoded visual values."];
  return ["Use when a matching semantic or component token does not exist yet."];
}

for (const file of files) {
  const css = await readFile(resolve(file), "utf8");
  let match;
  while ((match = tokenPattern.exec(css))) {
    const name = `--${match[1]}`;
    const category = inferCategory(name);
    const role = inferRole(name, file);
    const mode = inferMode(name, file);
    tokens.push({
      name,
      value: match[2].trim(),
      source: file,
      layer: file.includes("component") ? "component" : file.includes("themes") ? "semantic" : file.includes("typography") ? "typography" : "primitive",
      category,
      role,
      mode,
      description: inferDescription(name, category, role, mode),
      useFor: inferUseFor(name, category, role)
    });
  }
}

const byLayer = tokens.reduce((acc, token) => {
  acc[token.layer] ??= 0;
  acc[token.layer] += 1;
  return acc;
}, {});

const byCategory = tokens.reduce((acc, token) => {
  acc[token.category] ??= 0;
  acc[token.category] += 1;
  return acc;
}, {});

await mkdir(resolve("src/generated"), { recursive: true });
await writeFile(
  resolve("src/tokens/token-data.generated.js"),
  `export const tokenData = ${JSON.stringify({ count: tokens.length, byLayer, byCategory, tokens }, null, 2)};\n`,
  "utf8"
);

console.log(`Generated ${tokens.length} tokens.`);
