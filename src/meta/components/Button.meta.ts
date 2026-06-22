import type { ComponentMeta } from "../meta.types";

export const ButtonMeta: ComponentMeta = {
  component: {
    name: "Button",
    category: "atoms",
    type: "interactive",
    description: "Triggers a short user action with a clear verb label.",
    path: "@chakra-ui/react/Button"
  },
  props: {
    variant: { type: "string", default: "solid", values: ["solid", "subtle", "surface", "outline", "ghost", "plain"], description: "Visual emphasis of the action." },
    size: { type: "string", default: "md", values: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"], description: "Density and touch target size." },
    colorPalette: { type: "string", default: "brand", description: "Semantic palette. Use brand/success/warning/danger, not raw colors." },
    loading: { type: "boolean", default: false, description: "Shows async progress while preserving button width." },
    disabled: { type: "boolean", default: false, description: "Prevents interaction when the action is unavailable." }
  },
  variants: {
    axes: {
      variant: ["solid", "subtle", "surface", "outline", "ghost", "plain"],
      size: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
      intent: ["primary", "secondary", "destructive", "quiet"]
    },
    purpose: {
      "variant:solid": "Highest emphasis for one primary action in a region.",
      "variant:outline": "Secondary action that should remain visible.",
      "variant:ghost": "Low emphasis toolbar or inline action.",
      "variant:plain": "Text-like action with minimal chrome.",
      "intent:destructive": "Use danger palette and explicit destructive copy."
    },
    invalidCombinations: [
      { axes: { variant: "plain", intent: "primary" }, reason: "Primary actions need visible affordance." },
      { axes: { size: "2xs", intent: "destructive" }, reason: "Destructive actions require enough target size and visual weight." }
    ]
  },
  relationships: {
    commonPartners: ["IconButton", "Tooltip", "Dialog", "Field"],
    triggers: ["submit", "save", "open-dialog", "navigate"],
    exposesState: ["hover", "focus-visible", "disabled", "loading"],
    role: "button",
    keyboardSupport: "Enter and Space activate the button.",
    screenReader: "Accessible name comes from visible text or aria-label."
  },
  tokens: {
    color: ["--color-brand-main", "--color-success-main", "--color-danger-main"],
    spacing: ["--button-padding-x-md", "--button-height-md"],
    typography: ["--button-font-weight"],
    border: ["--button-radius"],
    motion: ["--motion-fast"]
  },
  aiHints: {
    priority: "high",
    keywords: ["action", "submit", "save", "continue", "confirm", "cta"],
    selectionCriteria: {
      primary: "Use one solid brand Button for the main action in a region.",
      secondary: "Use outline or surface for supporting actions.",
      destructive: "Use danger palette and direct copy such as Delete project."
    },
    usage: {
      useCases: ["Form submit", "Dialog confirmation", "Toolbar command", "Workflow continuation"],
      commonPatterns: [
        { name: "Dialog footer", composition: "HStack with secondary outline Button and primary solid Button." },
        { name: "Form submit", composition: "Field stack followed by full-width or right-aligned Button." }
      ],
      antiPatterns: [
        { scenario: "Using Button for page navigation", reason: "Links communicate navigation semantics better.", alternative: "Use Link or Breadcrumb." },
        { scenario: "Multiple solid buttons in one group", reason: "Competing primary actions reduce clarity.", alternative: "Keep one solid button and downgrade the rest." }
      ]
    }
  }
};
