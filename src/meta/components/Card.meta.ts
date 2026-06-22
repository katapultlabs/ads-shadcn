import type { ComponentMeta } from "../meta.types";

export const CardMeta: ComponentMeta = {
  component: {
    name: "Card",
    category: "molecules",
    type: "container",
    description: "Bounded surface for one object, grouped content, or a compact tool panel.",
    path: "@chakra-ui/react/Card"
  },
  props: {
    variant: { type: "string", default: "outline", values: ["elevated", "outline", "subtle"], description: "Surface treatment." },
    size: { type: "string", default: "md", values: ["sm", "md", "lg"], description: "Internal density." }
  },
  variants: {
    axes: {
      variant: ["elevated", "outline", "subtle"],
      density: ["compact", "comfortable"]
    },
    purpose: {
      "variant:outline": "Default app surface with clear grouping and low visual noise.",
      "variant:elevated": "Use only when layering over another surface.",
      "variant:subtle": "Use for quiet grouped content inside a larger panel."
    },
    invalidCombinations: [
      { axes: { variant: "elevated", density: "compact" }, reason: "Heavy elevation on dense cards creates visual clutter." }
    ]
  },
  relationships: {
    mustBeParentOf: ["Card.Header", "Card.Body", "Card.Footer"],
    commonPartners: ["Badge", "Button", "Heading", "Text", "DataList"],
    role: "group",
    screenReader: "Use headings inside cards when card introduces a distinct object or section."
  },
  tokens: {
    color: ["--color-surface", "--card-border-color"],
    spacing: ["--card-padding-md"],
    border: ["--card-radius"],
    elevation: ["--card-shadow"]
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
        { name: "Object card", composition: "Card.Root with Header title, Body metadata, Footer actions." }
      ],
      antiPatterns: [
        { scenario: "Wrapping every page section in a Card", reason: "The page becomes noisy and loses hierarchy.", alternative: "Use full-width sections and reserve Card for repeated objects." },
        { scenario: "Card inside Card", reason: "Nested surfaces create unclear containment.", alternative: "Use Stack, Separator, or Box inside the Card." }
      ]
    }
  }
};
