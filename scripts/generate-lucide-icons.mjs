import { mkdir, readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

function pascalCase(value) {
  return value
    .replace(/\.js$/, "")
    .split("-")
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
}

const iconsDir = resolve("node_modules/lucide-react/dist/esm/icons");
const files = await readdir(iconsDir);
const iconNames = files
  .filter((file) => file.endsWith(".js") && !file.endsWith(".js.map"))
  .map(pascalCase)
  .filter((name, index, all) => all.indexOf(name) === index)
  .sort();

await mkdir(resolve("src/generated"), { recursive: true });
await writeFile(
  resolve("src/generated/lucide-icons.generated.js"),
  `export const lucideIconNames = ${JSON.stringify(iconNames, null, 2)};\n`,
  "utf8"
);

console.log(`Generated ${iconNames.length} lucide icon names.`);
