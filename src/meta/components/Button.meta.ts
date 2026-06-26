import type { ComponentMeta } from "../meta.types";

export const ButtonMeta: ComponentMeta = {
  component: {
    name: "Button",
    category: "atoms",
    type: "interactive",
    description: "Triggers a short user action with a clear verb label.",
    path: "@/components/ui/button"
  },
  props: {
    variant: { type: "string", default: "default", values: ["default", "destructive", "outline", "secondary", "ghost", "link"], description: "Visual emphasis of the action (cva variant)." },
    size: { type: "string", default: "default", values: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"], description: "Height/padding; icon sizes are square." },
    asChild: { type: "boolean", default: false, description: "Render as the child element via Radix Slot (e.g. wrap an anchor)." },
    disabled: { type: "boolean", default: false, description: "Prevents interaction when the action is unavailable." }
  },
  variants: {
    axes: {
      variant: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      size: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
      intent: ["primary", "secondary", "destructive", "quiet"]
    },
    purpose: {
      "variant:default": "Highest emphasis for one primary action in a region.",
      "variant:secondary": "Supporting action that should stay visible.",
      "variant:outline": "Secondary action with a clear boundary.",
      "variant:ghost": "Low emphasis toolbar or inline action.",
      "variant:link": "Text-like action with minimal chrome.",
      "variant:destructive": "Irreversible or dangerous action; pair with explicit copy."
    },
    invalidCombinations: [
      { axes: { variant: "link", intent: "primary" }, reason: "Primary actions need visible affordance." }
    ]
  },
  relationships: {
    commonPartners: ["IconButton", "Tooltip", "Dialog", "Field"],
    triggers: ["submit", "save", "open-dialog", "navigate"],
    exposesState: ["hover", "focus", "disabled"],
    role: "button",
    keyboardSupport: "Enter and Space activate the button.",
    screenReader: "Accessible name comes from visible text or aria-label."
  },
  tokens: {
    color: ["--primary", "--primary-foreground", "--destructive", "--secondary"],
    spacing: ["Tailwind h-* / px-* utilities"],
    typography: ["--font-sans", "text-sm font-medium"],
    border: ["--radius"],
    motion: ["transition-colors"]
  },
  aiHints: {
    priority: "high",
    keywords: ["action", "submit", "save", "continue", "confirm", "cta"],
    selectionCriteria: {
      primary: "Use one default Button for the main action in a region.",
      secondary: "Use outline or secondary for supporting actions.",
      destructive: "Use the destructive variant and direct copy such as Delete project."
    },
    usage: {
      useCases: ["Form submit", "Dialog confirmation", "Toolbar command", "Workflow continuation"],
      commonPatterns: [
        { name: "Dialog footer", composition: "Flex row with a secondary outline Button and a default Button." },
        { name: "Form submit", composition: "Field stack followed by a right-aligned Button." }
      ],
      antiPatterns: [
        { scenario: "Using Button for page navigation", reason: "Links communicate navigation semantics better.", alternative: "Use Link or Breadcrumb." },
        { scenario: "Multiple default buttons in one group", reason: "Competing primary actions reduce clarity.", alternative: "Keep one default button and downgrade the rest to outline/ghost." }
      ]
    }
  }
};
