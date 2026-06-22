import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const specPath = resolve("components.json");
const spec = JSON.parse(await readFile(specPath, "utf8"));
const starterText = "Generated Chakra component spec starter";

const curated = {
  Checkmark: "<Checkmark checked />",
  Circle: "<Circle size=\"72px\" bg=\"ads.accent.subtle\" color=\"ads.accent\">OK</Circle>",
  ClientOnly: "<ClientOnly fallback={<Skeleton width=\"220px\" height=\"40px\" />}><Badge colorPalette=\"green\">Mounted</Badge></ClientOnly>",
  ColorPicker: "<ColorPicker.Root defaultValue={parseColor(\"#145fc4\")} width=\"320px\"><ColorPicker.Label>Brand color</ColorPicker.Label><ColorPicker.Control><ColorPicker.ValueSwatch /><ColorPicker.Input /><ColorPicker.Trigger /></ColorPicker.Control></ColorPicker.Root>",
  DatePicker: "<DatePicker.Root><DatePicker.Label>Due date</DatePicker.Label><DatePicker.Control><DatePicker.Input /></DatePicker.Control></DatePicker.Root>",
  Dialog: "<Dialog.Root defaultOpen modal={false}><Dialog.Positioner position=\"absolute\" inset=\"auto\"><Dialog.Content maxW=\"360px\"><Dialog.Header><Dialog.Title>Confirm action</Dialog.Title></Dialog.Header><Dialog.Body>Dialog preview content.</Dialog.Body></Dialog.Content></Dialog.Positioner></Dialog.Root>",
  Drawer: "<Drawer.Root defaultOpen modal={false}><Drawer.Positioner position=\"absolute\" inset=\"auto\"><Drawer.Content width=\"320px\"><Drawer.Header><Drawer.Title>Drawer title</Drawer.Title></Drawer.Header><Drawer.Body>Drawer preview content.</Drawer.Body></Drawer.Content></Drawer.Positioner></Drawer.Root>",
  HoverCard: "<HoverCard.Root open><HoverCard.Trigger asChild><Button variant=\"outline\">Hover target</Button></HoverCard.Trigger><HoverCard.Positioner><HoverCard.Content p=\"3\">Hover card content</HoverCard.Content></HoverCard.Positioner></HoverCard.Root>",
  Loader: "<Loader visible text=\"Loading preview\" spinner={<Spinner size=\"sm\" />} />",
  Pagination: "<Pagination.Root count={40} pageSize={10} defaultPage={2}><HStack><Pagination.PrevTrigger /><Pagination.Items render={(page) => <Pagination.Item {...page}>{page.value}</Pagination.Item>} /><Pagination.NextTrigger /></HStack></Pagination.Root>",
  QRCode: "<QrCode.Root value=\"https://chakra-ui.com\" color=\"black\" size={180}><QrCode.Frame bg=\"white\"><QrCode.Pattern /></QrCode.Frame></QrCode.Root>",
  Splitter: "<Splitter.Root width=\"420px\" height=\"180px\" panels={[{ id: \"left\", size: 42 }, { id: \"right\", size: 58 }]}><Splitter.Panel id=\"left\"><Center h=\"full\">Panel A</Center></Splitter.Panel><Splitter.ResizeTrigger id=\"left:right\" /><Splitter.Panel id=\"right\"><Center h=\"full\">Panel B</Center></Splitter.Panel></Splitter.Root>",
  TreeView: "<Box width=\"320px\" borderWidth=\"1px\" borderRadius=\"md\" p=\"4\"><Text fontWeight=\"700\">Explorer tree</Text><Text color=\"ads.muted\">Tokens / Components</Text></Box>",
};

function fallbackExample(component) {
  const label = component.name.replace(/[<>{}]/g, "");
  if (component.category === "Layout") {
    return `<Box width="320px" borderWidth="1px" borderRadius="md" p="4"><${component.name}>${label} layout preview</${component.name}></Box>`;
  }
  if (component.category === "Foundations") {
    return `<Box borderWidth="1px" borderRadius="md" p="4"><Text fontWeight="700">${label}</Text><Text color="ads.muted">${component.description}</Text></Box>`;
  }
  return `<Card.Root width="320px" variant="outline"><Card.Body><Stack gap="2"><Heading size="sm">${label}</Heading><Text color="ads.muted">${component.description}</Text></Stack></Card.Body></Card.Root>`;
}

let replaced = 0;
for (const component of spec.components) {
  const examples = component.examples ?? [];
  const hasStarter = JSON.stringify(examples).includes(starterText);
  if (!hasStarter) continue;
  component.examples = [
    {
      name: "Rich preview",
      jsx: curated[component.name] ?? fallbackExample(component),
    },
    ...examples.filter((example) => !String(example.jsx ?? "").includes(starterText)),
  ];
  replaced += 1;
}

spec.metadata = {
  ...(spec.metadata ?? {}),
  starterExamplesReplacedAt: new Date().toISOString(),
  starterExamplesReplaced: replaced,
};

await writeFile(specPath, `${JSON.stringify(spec, null, 2)}\n`, "utf8");
console.log(`Replaced starter examples for ${replaced} components.`);
