import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const spec = JSON.parse(await readFile(resolve("ads.components.json"), "utf8"));

const components = spec.components.map((component) => ({
  name: component.name,
  category: component.category,
  description: component.description,
  importFrom: component.importFrom,
  utility: component.utility ?? false,
  variants: component.variants ?? [],
  sizes: component.sizes ?? [],
  states: component.states ?? [],
  controls: component.controls ?? [],
  propMetadata: component.propMetadata ?? {},
  variantMetadata: component.variantMetadata ?? [],
  stateMetadata: component.stateMetadata ?? [],
  anatomy: component.anatomy ?? {},
  tokenMapping: component.tokenMapping ?? {},
  behavior: component.behavior ?? {},
  accessibilityMetadata: component.accessibilityMetadata ?? {},
  agentHints: component.agentHints ?? {},
  metadataStatus: component.metadataStatus ?? {},
  whenToUse: component.whenToUse ?? [],
  neverUseFor: component.neverUseFor ?? [],
  examples: component.examples ?? [],
  relatedComponents: component.relatedComponents ?? [],
}));

await mkdir(resolve("src/meta/generated"), { recursive: true });
await writeFile(
  resolve("src/meta/generated/rich-component-meta.generated.ts"),
  `export const richComponentMeta = ${JSON.stringify(components, null, 2)} as const;\n\nexport type RichComponentMeta = (typeof richComponentMeta)[number];\n`,
  "utf8",
);

console.log(`Generated rich TypeScript metadata for ${components.length} components.`);
