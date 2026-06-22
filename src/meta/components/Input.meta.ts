import type { ComponentMeta } from "../meta.types";

export const InputMeta: ComponentMeta = {
  component: {
    name: "Input",
    category: "atoms",
    type: "input",
    description: "Single-line field for short freeform values.",
    path: "@chakra-ui/react/Input"
  },
  props: {
    type: { type: "string", default: "text", description: "Native input type for keyboard and validation behavior." },
    placeholder: { type: "string", description: "Hint text. Never replaces the visible label." },
    disabled: { type: "boolean", default: false, description: "Prevents editing." },
    readOnly: { type: "boolean", default: false, description: "Allows focus and copying while preventing edits." },
    invalid: { type: "boolean", default: false, description: "Signals validation failure through Field.Root." }
  },
  variants: {
    axes: {
      variant: ["outline", "subtle", "flushed"],
      size: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
      state: ["default", "focus-visible", "invalid", "disabled", "readOnly"]
    },
    purpose: {
      "variant:outline": "Default form field with clear boundary.",
      "variant:subtle": "Quiet field in dense panels.",
      "variant:flushed": "Minimal field when layout already provides structure.",
      "state:invalid": "Use with visible error text and aria-invalid."
    },
    invalidCombinations: [
      { axes: { variant: "flushed", state: "invalid" }, reason: "Invalid fields need a strong boundary for fast scanning." }
    ]
  },
  relationships: {
    requires: ["Field.Label"],
    commonPartners: ["Field", "Field.ErrorText", "Field.HelperText", "Button"],
    exposesState: ["focus-visible", "invalid", "disabled", "readOnly"],
    role: "textbox",
    keyboardSupport: "Native text editing keyboard behavior.",
    screenReader: "Name comes from associated label; errors should be linked through Field.ErrorText."
  },
  tokens: {
    color: ["--input-border-color", "--input-focus-color", "--color-text"],
    spacing: ["--input-height-md"],
    border: ["--input-radius"],
    typography: ["--font-size-md"]
  },
  aiHints: {
    priority: "high",
    keywords: ["field", "text", "email", "search", "form", "value"],
    selectionCriteria: {
      text: "Use Input for one-line freeform values.",
      email: "Set type=email and keep a visible label.",
      search: "Use placeholder as a hint, not the only label in formal forms."
    },
    usage: {
      useCases: ["Email entry", "Search filter", "Short numeric input", "Name field"],
      commonPatterns: [
        { name: "Labeled field", composition: "Field.Root with Field.Label, Input, and optional Field.HelperText." }
      ],
      antiPatterns: [
        { scenario: "Using placeholder as label", reason: "Placeholder disappears while typing and harms accessibility.", alternative: "Use Field.Label." },
        { scenario: "Using Input for long descriptions", reason: "Single-line field hides longer text.", alternative: "Use Textarea." }
      ]
    }
  }
};
