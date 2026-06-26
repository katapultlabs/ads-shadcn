import type { ComponentMeta } from "../meta.types";

export const CardMeta: ComponentMeta = {
  component: {
    name: "Card",
    category: "molecules",
    type: "container",
    description: "Bounded surface for one object, grouped content, or a compact tool panel.",
    path: "@/components/ui/card"
  },
  props: {
    className: { type: "string", description: "Tailwind utilities on the root container; ShadCN Card has no cva variants — treatment is composed." }
  },
  variants: {
    axes: {
      density: ["compact", "comfortable"]
    },
    purpose: {
      "density:comfortable": "Default spacing for grouped content and actions.",
      "density:compact": "Tighter padding for dense dashboards and lists."
    },
    invalidCombinations: []
  },
  relationships: {
    mustBeParentOf: ["CardHeader", "CardContent", "CardFooter"],
    optionalSibling: ["CardTitle", "CardDescription", "CardAction"],
    commonPartners: ["Badge", "Button", "Heading", "Text", "DataList"],
    role: "group",
    screenReader: "Use a heading inside the card when it introduces a distinct object or section."
  },
  tokens: {
    color: ["--card", "--card-foreground", "--border", "--muted-foreground"],
    spacing: ["Tailwind p-* / gap-* utilities"],
    border: ["--radius", "--border"],
    elevation: ["Tailwind shadow-sm"]
  },
  aiHints: {
    priority: "high",
    keywords: ["surface", "panel", "object", "summary", "group"],
    selectionCriteria: {
      object: "Use Card for one repeated object in a collection.",
      tool: "Use Card for bounded tool panels, not page sections.",
      nested: "Avoid nesting cards."
    },
    usage: {
      useCases: ["Metric summary", "Object card", "Settings group", "Preview panel"],
      commonPatterns: [
        { name: "Object card", composition: "Card with CardHeader (CardTitle + CardDescription), CardContent metadata, CardFooter actions." }
      ],
      antiPatterns: [
        { scenario: "Wrapping every page section in a Card", reason: "The page becomes noisy and loses hierarchy.", alternative: "Use full-width sections and reserve Card for repeated objects." },
        { scenario: "Card inside Card", reason: "Nested surfaces create unclear containment.", alternative: "Use Stack, Separator, or Box inside the Card." }
      ]
    }
  }
};
