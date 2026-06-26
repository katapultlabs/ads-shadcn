import type { ComponentMeta } from "../meta.types";

export const InputMeta: ComponentMeta = {
  component: {
    name: "Input",
    category: "atoms",
    type: "input",
    description: "Single-line field for short freeform values.",
    path: "@/components/ui/input"
  },
  props: {
    type: { type: "string", default: "text", description: "Native input type for keyboard and validation behavior." },
    placeholder: { type: "string", description: "Hint text. Never replaces the visible label." },
    disabled: { type: "boolean", default: false, description: "Prevents editing." },
    "aria-invalid": { type: "boolean", default: false, description: "Switches the border/ring to the destructive palette for error states." }
  },
  variants: {
    axes: {
      state: ["default", "focus", "invalid", "disabled"]
    },
    purpose: {
      "state:default": "Resting field with a clear boundary.",
      "state:focus": "Ring + border emphasis while editing.",
      "state:invalid": "Use aria-invalid with visible error text.",
      "state:disabled": "Non-editable and dimmed."
    },
    invalidCombinations: []
  },
  relationships: {
    requires: ["Label"],
    commonPartners: ["Field", "Label", "Button", "InputGroup"],
    exposesState: ["focus", "invalid", "disabled"],
    role: "textbox",
    keyboardSupport: "Native text editing keyboard behavior.",
    screenReader: "Name comes from an associated <Label htmlFor>; link errors with aria-describedby."
  },
  tokens: {
    color: ["--input", "--ring", "--foreground", "--destructive"],
    spacing: ["Tailwind h-9 / px-3 utilities"],
    border: ["--radius", "--input"],
    typography: ["text-sm", "--font-sans"]
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
        { name: "Labeled field", composition: "Label + Input + optional helper <p> (the Field pattern)." }
      ],
      antiPatterns: [
        { scenario: "Using placeholder as label", reason: "Placeholder disappears while typing and harms accessibility.", alternative: "Use a Label." },
        { scenario: "Using Input for long descriptions", reason: "Single-line field hides longer text.", alternative: "Use Textarea." }
      ]
    }
  }
};
