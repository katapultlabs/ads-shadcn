import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const spec = JSON.parse(await readFile(resolve("components.json"), "utf8"));
const starterText = "Generated Chakra component spec starter";

function quality(component) {
  const checks = {
    richMetadata: component.metadataStatus?.richness === "rich",
    controls: Array.isArray(component.controls) && component.controls.length > 0,
    propMetadata: component.propMetadata && Object.keys(component.propMetadata).length > 0,
    variantMetadata: Array.isArray(component.variantMetadata) && component.variantMetadata.length > 0,
    stateMetadata: Array.isArray(component.stateMetadata) && component.stateMetadata.length > 0,
    tokenMapping: component.tokenMapping && Object.keys(component.tokenMapping).length > 0,
    behavior: component.behavior && Object.keys(component.behavior).length > 0,
    accessibility: component.accessibilityMetadata && Object.keys(component.accessibilityMetadata).length > 0,
    agentHints: component.agentHints && Object.keys(component.agentHints).length > 0,
    realExample: Array.isArray(component.examples) && component.examples.some((example) => example.jsx && !example.jsx.includes(starterText)),
    chakraRecipe: Boolean(component.metadataStatus?.sourceConfidence?.includes("chakra") || component.coverage?.includes("chakra") || (component.chakraModule && component.variantDimensions)),
  };
  const weights = {
    richMetadata: 10,
    controls: 10,
    propMetadata: 10,
    variantMetadata: 8,
    stateMetadata: 8,
    tokenMapping: 10,
    behavior: 8,
    accessibility: 8,
    agentHints: 10,
    realExample: 12,
    chakraRecipe: 6,
  };
  const max = Object.values(weights).reduce((sum, value) => sum + value, 0);
  const score = Object.entries(checks).reduce((sum, [key, passed]) => sum + (passed ? weights[key] : 0), 0);
  return {
    name: component.name,
    category: component.category,
    score: Math.round((score / max) * 100),
    checks,
    missing: Object.entries(checks).filter(([, passed]) => !passed).map(([key]) => key),
  };
}

const components = spec.components.map(quality).sort((a, b) => a.score - b.score);
const average = Math.round(components.reduce((sum, item) => sum + item.score, 0) / components.length);
const report = {
  generatedAt: new Date().toISOString(),
  total: components.length,
  average,
  counts: {
    perfect: components.filter((item) => item.score === 100).length,
    needsAttention: components.filter((item) => item.score < 90).length,
    starterExamples: spec.components.filter((component) => JSON.stringify(component.examples ?? []).includes(starterText)).length,
    heuristicMetadata: spec.components.filter((component) => component.metadataStatus?.sourceConfidence?.includes("heuristic")).length,
  },
  components,
};

await mkdir(resolve("artifacts"), { recursive: true });
await writeFile(resolve("artifacts/quality-report.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(`Quality average ${average}; wrote artifacts/quality-report.json`);
