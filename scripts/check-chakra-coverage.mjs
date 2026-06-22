import { readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const componentsDir = resolve("node_modules/@chakra-ui/react/dist/types/components");
const spec = JSON.parse(await readFile(resolve("components.json"), "utf8"));
const modules = (await readdir(componentsDir, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const covered = new Set(spec.components.map((component) => component.chakraModule).filter(Boolean));
const missing = modules.filter((name) => !covered.has(name));
const extra = spec.components.filter((component) => !component.chakraModule).map((component) => component.name);

console.log(JSON.stringify({
  chakraModules: modules.length,
  covered: modules.length - missing.length,
  missing,
  nonModuleEntries: extra
}, null, 2));

if (missing.length) process.exitCode = 1;
