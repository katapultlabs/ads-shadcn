import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const spec = JSON.parse(await readFile(resolve("components.json"), "utf8"));

const generated = {
  generatedAt: new Date().toISOString(),
  source: "@chakra-ui/react package plus ADS Light components.json",
  count: spec.components.length,
  components: spec.components.map((component) => ({
    name: component.name,
    category: component.category,
    description: component.description,
    importFrom: component.importFrom,
    coverage: component.coverage,
    variants: component.variants,
    variantDimensions: component.variantDimensions ?? {},
    defaultVariants: component.defaultVariants ?? {},
    sizes: component.sizes ?? [],
    states: component.states,
    slots: component.slots ?? [],
    keyProps: component.keyProps,
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
    relatedComponents: component.relatedComponents ?? []
  }))
};

await mkdir(resolve("src/generated"), { recursive: true });
await writeFile(
  resolve("src/generated/chakra.generated-meta.json"),
  `${JSON.stringify(generated, null, 2)}\n`,
  "utf8"
);

console.log(`Generated Chakra metadata for ${generated.count} components.`);
