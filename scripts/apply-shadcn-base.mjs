// Merge the ShadCN base manifest into ads.components.json.
//
// The manifest (scripts/shadcn-manifest.json) holds the ground-truth base
// fields for each component (real variants/sizes/states/keyProps/slots +
// renderable ShadCN example JSX). This script overwrites those base fields on
// each spec while PRESERVING the library-agnostic guidance (description,
// whenToUse, neverUseFor, accessibility, category). It strips Chakra leftovers
// (chakraModule, variantDimensions, the old colorPalette keyProp). Run
// enrich-component-metadata.mjs afterwards to rebuild the rich metadata.

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const specPath = resolve("ads.components.json");
const manifestPath = resolve("scripts/shadcn-manifest.json");

const spec = JSON.parse(await readFile(specPath, "utf8"));
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const byName = new Map(manifest.components.map((c) => [c.name, c]));

const BASE_FIELDS = ["variants", "sizes", "defaultVariants", "states", "keyProps", "slots", "examples", "relatedComponents", "importFrom"];

let applied = 0;
const missing = [];

spec.components = spec.components.map((component) => {
  const base = byName.get(component.name);
  if (!base) {
    missing.push(component.name);
    return component;
  }
  applied += 1;
  const next = { ...component };
  for (const field of BASE_FIELDS) {
    if (base[field] !== undefined) next[field] = base[field];
  }
  if (base.utility) next.utility = true;
  // Strip Chakra-era fields; the ShadCN keyProps/variants now drive controls.
  delete next.chakraModule;
  delete next.variantDimensions;
  delete next.coverage;
  // colorPalette does not exist in ShadCN — drop any leftover keyProp.
  if (Array.isArray(next.keyProps)) {
    next.keyProps = next.keyProps.filter((p) => (p.name ?? p) !== "colorPalette");
  }
  return next;
});

// Append manifest components that don't exist in the spec yet (newly added).
// The manifest entry must carry category/description/whenToUse/neverUseFor;
// enrich-component-metadata.mjs fills the derived metadata afterwards.
const specNames = new Set(spec.components.map((c) => c.name));
let appended = 0;
for (const base of manifest.components) {
  if (specNames.has(base.name)) continue;
  spec.components.push({
    name: base.name,
    category: base.category ?? "Foundations",
    description: base.description ?? `${base.name} component.`,
    importFrom: base.importFrom,
    whenToUse: base.whenToUse ?? [`Use ${base.name} where its pattern fits.`],
    neverUseFor: base.neverUseFor ?? ["Cases another component models better."],
    accessibility: base.accessibility ?? ["Preserve built-in keyboard and ARIA behavior."],
    variants: base.variants ?? [],
    sizes: base.sizes ?? [],
    defaultVariants: base.defaultVariants ?? {},
    states: base.states ?? ["default"],
    keyProps: base.keyProps ?? [],
    slots: base.slots ?? [],
    examples: base.examples ?? [],
    relatedComponents: base.relatedComponents ?? [],
    ...(base.utility ? { utility: true } : {}),
  });
  appended += 1;
}

await writeFile(specPath, `${JSON.stringify(spec, null, 2)}\n`, "utf8");
console.log(`Applied ShadCN base fields to ${applied}/${spec.components.length} components; appended ${appended} new.`);
if (missing.length) console.warn(`No manifest entry for: ${missing.join(", ")}`);
