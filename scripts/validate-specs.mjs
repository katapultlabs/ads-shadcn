import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { validateComponent } from "../mcp-server/validate.js";

// Audits every shipped spec against the same contract the MCP server enforces
// on add/update. Exits non-zero on the first invalid spec so CI can gate it.

const specPath = resolve(".", "ads.components.json");
const spec = JSON.parse(await readFile(specPath, "utf8"));

const failures = [];
const seen = new Set();
for (const component of spec.components) {
  const result = validateComponent(component);
  if (!result.ok) failures.push({ name: component?.name ?? "(unnamed)", errors: result.errors });
  if (component?.name) {
    if (seen.has(component.name)) failures.push({ name: component.name, errors: ["duplicate component name"] });
    seen.add(component.name);
  }
}

console.log(`Validated ${spec.components.length} specs. ${failures.length} invalid.`);
for (const failure of failures) {
  console.error(`  ✗ ${failure.name}: ${failure.errors.join("; ")}`);
}
process.exit(failures.length === 0 ? 0 : 1);
