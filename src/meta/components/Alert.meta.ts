import type { ComponentMeta } from "../meta.types";

export const AlertMeta: ComponentMeta = {
  component: {
    name: "Alert",
    category: "molecules",
    type: "feedback",
    description: "Persistent inline feedback for status, validation, warning, or error context.",
    path: "@/components/ui/alert"
  },
  props: {
    variant: { type: "string", default: "default", values: ["default", "destructive"], description: "Severity treatment; destructive maps to the danger palette." },
    title: { type: "string", description: "Short feedback summary (AlertTitle)." },
    description: { type: "string", description: "Optional actionable detail (AlertDescription)." }
  },
  variants: {
    axes: {
      variant: ["default", "destructive"]
    },
    purpose: {
      "variant:default": "Neutral or informational status that should stay visible.",
      "variant:destructive": "Failed or blocking outcomes that require correction."
    },
    invalidCombinations: []
  },
  relationships: {
    mustBeParentOf: ["AlertTitle", "AlertDescription"],
    commonPartners: ["Toast", "Dialog", "Button"],
    exposesState: ["default", "destructive"],
    role: "alert",
    screenReader: "Error summaries may need an assertive live region; match severity to the variant."
  },
  tokens: {
    color: ["--card", "--card-foreground", "--destructive", "--muted-foreground"],
    spacing: ["Tailwind p-* / gap-* utilities"],
    border: ["--radius", "--border"]
  },
  aiHints: {
    priority: "high",
    keywords: ["feedback", "error", "warning", "success", "notice", "validation"],
    selectionCriteria: {
      persistent: "Use Alert when the message should remain until context changes.",
      transient: "Use Toast (sonner) for non-blocking short-lived notifications."
    },
    usage: {
      useCases: ["Validation summary", "Theme loaded notice", "Permission warning", "Save failed"],
      commonPatterns: [
        { name: "Validation summary", composition: "Alert above the form plus inline field error text on individual fields." }
      ],
      antiPatterns: [
        { scenario: "Using Alert as a decorative callout", reason: "Alerts imply system status or user attention.", alternative: "Use Card or Text." }
      ]
    }
  }
};
