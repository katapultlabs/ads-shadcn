import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { lucideIconNames } from "../src/generated/lucide-icons.generated.js";

const specPath = resolve("components.json");
const spec = JSON.parse(await readFile(specPath, "utf8"));

const labelize = (value) =>
  String(value ?? "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const unique = (items) => Array.from(new Set(items.filter(Boolean)));

const colorPalettes = ["brand", "blue", "green", "orange", "red", "cyan", "purple", "gray"];
const iconOptions = lucideIconNames;
const contentComponents = new Set([
  "Button",
  "IconButton",
  "Badge",
  "Tag",
  "Alert",
  "Card",
  "Input",
  "Textarea",
  "Switch",
  "Checkbox",
  "RadioGroup",
  "Toggle",
  "Tooltip",
  "Popover",
  "Dialog",
  "Drawer",
  "Menu",
  "Tabs",
]);
const iconComponents = new Set(["Button", "IconButton", "Toggle"]);
const valueComponents = new Set([
  "Input",
  "Textarea",
  "NumberInput",
  "PinInput",
  "Slider",
  "Progress",
  "ProgressCircle",
  "RatingGroup",
  "QRCode",
  "ColorPicker",
  "ColorSwatch",
]);
const overlayComponents = new Set(["Dialog", "Drawer", "Popover", "HoverCard", "Tooltip", "Menu", "ActionBar", "FloatingPanel"]);
const formComponents = new Set([
  "Input",
  "Textarea",
  "Checkbox",
  "CheckboxCard",
  "Combobox",
  "DatePicker",
  "Editable",
  "Field",
  "Fieldset",
  "FileUpload",
  "NativeSelect",
  "NumberInput",
  "PinInput",
  "RadioCard",
  "RadioGroup",
  "RatingGroup",
  "SegmentGroup",
  "Select",
  "Slider",
  "Switch",
  "TagsInput",
]);
const actionComponents = new Set(["Button", "IconButton", "Link", "Clipboard", "DownloadTrigger", "Toggle"]);

function categoryType(category, name) {
  if (formComponents.has(name)) return "input";
  if (actionComponents.has(name)) return "interactive";
  if (overlayComponents.has(name)) return "feedback";
  if (category === "Navigation") return "navigation";
  if (category === "Layout") return "layout";
  if (category === "Surfaces") return "container";
  if (category === "Data display" || category === "Foundations") return "display";
  return "display";
}

function controlType(prop, options = []) {
  const name = prop.name ?? prop;
  const type = prop.type ?? "";
  if (type === "boolean" || ["disabled", "loading", "checked", "open", "pressed", "readOnly", "invalid"].includes(name)) return "boolean";
  if (options.length > 0) return "select";
  if (name === "colorPalette") return "select";
  if (name === "value" && valueComponents.has(prop.componentName)) return "text";
  if (name.toLowerCase().includes("count") || type === "number") return "number";
  return "text";
}

function describeControl(name, component) {
  if (name === "variant") return `Selects the visual treatment for ${component.name}.`;
  if (name === "size") return `Adjusts density, scale, and touch target size for ${component.name}.`;
  if (name === "state") return `Simulates interaction or data state for visual verification.`;
  if (name === "colorPalette") return "Uses a semantic color palette mapped through ADS Light theme tokens.";
  if (name === "label") return "Controls visible text so agents can verify real copy and truncation.";
  if (name === "description") return "Controls supporting copy for multi-line previews.";
  if (name === "icon") return "Selects a lucide icon preloaded in the sandbox scope.";
  if (name === "leftIcon") return "Selects the lucide icon used in the leading icon slot.";
  if (name === "rightIcon") return "Selects the lucide icon used in the trailing icon slot.";
  if (name === "iconLeft") return "Shows or hides the leading icon slot.";
  if (name === "iconRight") return "Shows or hides the trailing icon slot.";
  return `Controls the ${name} prop for ${component.name}.`;
}

function makeControl(component, name, partial = {}) {
  const options = partial.options ?? [];
  const type = partial.type ?? controlType({ name, type: partial.valueType, componentName: component.name }, options);
  return {
    name,
    label: partial.label ?? labelize(name),
    type,
    options,
    default: partial.default ?? "",
    urlParam: partial.urlParam ?? name,
    bindsTo: partial.bindsTo ?? "prop",
    source: partial.source ?? "ads-rich-metadata",
    description: partial.description ?? describeControl(name, component),
  };
}

function buildControls(component) {
  const controls = [];
  const add = (control) => {
    if (!controls.some((item) => item.name === control.name)) controls.push(control);
  };
  const variantOptions = component.variants?.filter((item) => item !== "default") ?? [];
  const sizeOptions = component.sizes?.filter((item) => item !== "default") ?? [];

  if (variantOptions.length) {
    add(makeControl(component, "variant", {
      type: "select",
      options: variantOptions,
      default: component.defaultVariants?.variant ?? variantOptions[0],
      source: "chakra-recipe",
    }));
  }
  if (sizeOptions.length) {
    add(makeControl(component, "size", {
      type: "select",
      options: sizeOptions,
      default: component.defaultVariants?.size ?? (sizeOptions.includes("md") ? "md" : sizeOptions[0]),
      source: "chakra-recipe",
    }));
  }

  for (const [name, options] of Object.entries(component.variantDimensions ?? {})) {
    if (["variant", "size"].includes(name)) continue;
    add(makeControl(component, name, {
      type: options.length <= 2 && options.every((item) => ["true", "false"].includes(String(item))) ? "boolean" : "select",
      options,
      default: component.defaultVariants?.[name] ?? options[0],
      source: "chakra-recipe-dimension",
    }));
  }

  for (const prop of component.keyProps ?? []) {
    const name = prop.name ?? prop;
    const options = prop.options ?? (name === "colorPalette" ? colorPalettes : []);
    add(makeControl(component, name, {
      type: controlType({ ...prop, componentName: component.name }, options),
      options,
      default: prop.default ?? (name === "colorPalette" ? "brand" : ""),
      source: "component-key-prop",
      description: prop.note ?? describeControl(name, component),
    }));
  }

  if ((component.states ?? []).length) {
    add(makeControl(component, "state", {
      type: "select",
      options: unique(["default", ...(component.states ?? [])]),
      default: "default",
      bindsTo: "state-simulation",
    }));
  }
  if (contentComponents.has(component.name)) {
    add(makeControl(component, "label", { type: "text", default: component.name, bindsTo: "preview-content" }));
  }
  if (["Alert", "Card", "Toast", "EmptyState", "Blockquote"].includes(component.name)) {
    add(makeControl(component, "description", {
      type: "text",
      default: "Rendered in the active ADS Light brand.",
      bindsTo: "preview-content",
    }));
  }
  if (valueComponents.has(component.name)) {
    add(makeControl(component, "value", { type: "text", default: "Preview value", bindsTo: "preview-content" }));
  }
  if (iconComponents.has(component.name)) {
    add(makeControl(component, "icon", { type: "select", options: iconOptions, default: "Search", bindsTo: "slot" }));
  }
  if (component.name === "Button") {
    add(makeControl(component, "iconLeft", { type: "boolean", default: false, bindsTo: "slot" }));
    add(makeControl(component, "leftIcon", { type: "select", options: iconOptions, default: "Search", bindsTo: "slot" }));
    add(makeControl(component, "iconRight", { type: "boolean", default: false, bindsTo: "slot" }));
    add(makeControl(component, "rightIcon", { type: "select", options: iconOptions, default: "ChevronRight", bindsTo: "slot" }));
  }
  if (overlayComponents.has(component.name)) {
    add(makeControl(component, "open", { type: "boolean", default: true, bindsTo: "disclosure-state" }));
  }

  return controls;
}

function buildPropMetadata(component, controls) {
  const props = {};
  for (const prop of component.keyProps ?? []) {
    const name = prop.name ?? prop;
    props[name] = {
      type: prop.type ?? "unknown",
      default: prop.default ?? null,
      values: prop.options ?? component.variantDimensions?.[name] ?? [],
      required: false,
      description: prop.note ?? describeControl(name, component),
      control: controls.find((control) => control.name === name)?.name ?? null,
    };
  }
  for (const control of controls) {
    props[control.name] ??= {
      type: control.type,
      default: control.default,
      values: control.options ?? [],
      required: false,
      description: control.description,
      control: control.name,
    };
  }
  return props;
}

function buildVariantMetadata(component) {
  return (component.variants ?? []).map((name) => ({
    name,
    default: component.defaultVariants?.variant === name || ((component.variants ?? [])[0] === name && !component.defaultVariants?.variant),
    visualIntent:
      name === "default"
        ? "Base rendering when no visual recipe is exposed."
        : `${labelize(name)} visual treatment for ${component.name}.`,
    whenToUse:
      name === "solid"
        ? "Use for the strongest emphasis or primary action."
        : name === "outline"
          ? "Use for secondary actions or bordered surfaces."
          : name === "ghost" || name === "plain"
            ? "Use for low-emphasis actions in dense interfaces."
            : `Use when ${labelize(name).toLowerCase()} best communicates the hierarchy.`,
    tokenIntent: "Must resolve through ADS Light theme and semantic tokens.",
  }));
}

function buildStateMetadata(component) {
  return (component.states ?? []).map((name) => ({
    name,
    kind: ["hover", "focus-visible", "active"].includes(name) ? "interaction" : ["invalid", "loading", "disabled", "readOnly"].includes(name) ? "status" : "base",
    visualIntent:
      name === "default"
        ? "Normal resting appearance."
        : `${labelize(name)} appearance for verifying ${component.name} before delivery.`,
    behavior:
      name === "disabled"
        ? "Non-interactive and visually muted."
        : name === "loading"
          ? "Shows pending async work while preserving context."
          : name === "invalid"
            ? "Communicates validation or error state."
            : "Preserves component semantics while changing visual state.",
    simulation: name === "hover" ? "data-hover" : name === "focus-visible" ? "data-focus-visible" : name,
  }));
}

function buildTokens(component) {
  const slug = component.name.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase();
  const categorySlug = component.category.toLowerCase().replace(/\s+/g, "-");
  return {
    color: ["--color-bg", "--color-surface", "--color-text", "--color-border", "--color-brand-main"],
    spacing: ["--space-2", "--space-3", "--space-4", "--space-5"],
    typography: ["--font-family-body", "--type-desktop-body-1-size", "--type-desktop-button-size"],
    radius: ["--component-radius", `--${slug}-radius`, `--category-${categorySlug}-radius`],
    elevation: ["--shadow-xs", "--shadow-sm", `--${slug}-shadow`],
    motion: ["--motion-fast", "--motion-normal", `--${slug}-motion`],
    component: [`--${slug}-bg`, `--${slug}-text`, `--${slug}-border`, `--${slug}-padding`, `--${slug}-gap`],
  };
}

function buildAnatomy(component) {
  const slots = component.slots ?? [];
  return {
    root: slots.includes("root") ? "Root" : component.name,
    slots,
    requiredParts: slots.includes("root") ? ["root"] : [component.name],
    optionalParts: slots.filter((slot) => slot !== "root"),
    composition: slots.length
      ? `Compose ${component.name} with its documented slot parts: ${slots.join(", ")}.`
      : `${component.name} is rendered as a single component or utility primitive.`,
  };
}

function buildBehavior(component) {
  const type = categoryType(component.category, component.name);
  return {
    type,
    interactive: ["interactive", "input", "navigation", "feedback"].includes(type) || (component.states ?? []).some((state) => state !== "default"),
    hasDisclosure: overlayComponents.has(component.name),
    acceptsUserInput: formComponents.has(component.name),
    supportsAsync: (component.states ?? []).includes("loading"),
    keyboard: formComponents.has(component.name) || actionComponents.has(component.name) || overlayComponents.has(component.name)
      ? "Use built-in keyboard behavior; verify tab order, Enter/Space activation, and Escape for dismissible overlays."
      : "Layout or display primitive; keyboard behavior comes from interactive children.",
    renderVerification: "Render through ADS Light explorer before delivery; verify selected controls, state simulation, and theme tokens visually.",
  };
}

function buildAccessibility(component) {
  const base = component.accessibility ?? [];
  return {
    requirements: unique([
      ...base,
      "Visible text or aria-label must identify the component purpose when interactive.",
      "Do not remove built-in keyboard and ARIA behavior.",
    ]),
    role: formComponents.has(component.name)
      ? "form/control"
      : actionComponents.has(component.name)
        ? "button/link action"
        : overlayComponents.has(component.name)
          ? "overlay/disclosure"
          : "semantic role depends on rendered element and children",
    keyboard: buildBehavior(component).keyboard,
    screenReader: "Use meaningful labels, descriptions, and state announcements where applicable.",
  };
}

function buildAgentHints(component, controls) {
  return {
    priority: ["Button", "Input", "Card", "Alert", "Dialog", "Drawer", "Tabs", "Table"].includes(component.name) ? "high" : "medium",
    queryTerms: unique([
      component.name,
      component.category,
      ...(component.variants ?? []),
      ...(component.states ?? []),
      ...(component.keyProps ?? []).map((prop) => prop.name ?? prop),
    ]).map(String),
    selectionCriteria: {
      chooseWhen: (component.whenToUse ?? []).join(" "),
      avoidWhen: (component.neverUseFor ?? []).join(" "),
      preferOverRawHtml: "Use this component when it matches the intended semantic pattern instead of recreating behavior.",
    },
    generationRules: [
      "Read controls before generating JSX.",
      "Use semantic color palettes and ADS Light tokens; never hardcode raw brand colors in generated component code.",
      "Use label/value controls to verify real copy, overflow, and state.",
      "Render and inspect before delivering UI.",
    ],
    controlCoverage: {
      count: controls.length,
      names: controls.map((control) => control.name),
    },
  };
}

spec.components = spec.components.map((component) => {
  const controls = buildControls(component);
  const enriched = {
    ...component,
    metadataStatus: {
      richness: "rich",
      generatedBy: "scripts/enrich-component-metadata.mjs",
      updatedAt: new Date().toISOString(),
      sourceConfidence: component.coverage?.includes("chakra") ? "chakra-recipe-plus-ads" : "ads-heuristic-plus-existing-spec",
    },
    controls,
    propMetadata: buildPropMetadata(component, controls),
    variantMetadata: buildVariantMetadata(component),
    stateMetadata: buildStateMetadata(component),
    anatomy: buildAnatomy(component),
    tokenMapping: buildTokens(component),
    behavior: buildBehavior(component),
    accessibilityMetadata: buildAccessibility(component),
    agentHints: buildAgentHints(component, controls),
  };
  return enriched;
});

spec.metadata = {
  ...(spec.metadata ?? {}),
  richness: "rich",
  richMetadataFields: [
    "controls",
    "propMetadata",
    "variantMetadata",
    "stateMetadata",
    "anatomy",
    "tokenMapping",
    "behavior",
    "accessibilityMetadata",
    "agentHints",
  ],
  lastRichMetadataGeneration: new Date().toISOString(),
};

await writeFile(specPath, `${JSON.stringify(spec, null, 2)}\n`, "utf8");
console.log(`Enriched ${spec.components.length} components with rich agent metadata.`);
