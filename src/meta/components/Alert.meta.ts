import type { ComponentMeta } from "../meta.types";

export const AlertMeta: ComponentMeta = {
  component: {
    name: "Alert",
    category: "molecules",
    type: "feedback",
    description: "Persistent inline feedback for status, validation, warning, or error context.",
    path: "@chakra-ui/react/Alert"
  },
  props: {
    status: { type: "string", default: "info", values: ["info", "warning", "success", "error", "neutral"], description: "Semantic severity." },
    variant: { type: "string", default: "surface", values: ["subtle", "surface", "outline", "solid"], description: "Visual treatment." },
    title: { type: "string", description: "Short feedback summary." },
    description: { type: "string", description: "Optional actionable detail." }
  },
  variants: {
    axes: {
      status: ["info", "warning", "success", "error", "neutral"],
      variant: ["subtle", "surface", "outline", "solid"]
    },
    purpose: {
      "status:error": "Use for blocking or failed outcomes that require correction.",
      "status:warning": "Use for risk or attention before action.",
      "status:success": "Use for confirmed completion that should remain visible.",
      "variant:solid": "Reserve for high severity or high attention."
    },
    invalidCombinations: [
      { axes: { status: "error", variant: "plain" }, reason: "Errors require visible structure and contrast." }
    ]
  },
  relationships: {
    commonPartners: ["Field.ErrorText", "Toast", "Dialog", "Button"],
    exposesState: ["info", "warning", "success", "error"],
    role: "status",
    screenReader: "Use status that matches severity; error summaries may need assertive live region behavior."
  },
  tokens: {
    color: ["--color-info-main", "--color-warning-main", "--color-success-main", "--color-danger-main"],
    spacing: ["--alert-padding"],
    border: ["--alert-radius"]
  },
  aiHints: {
    priority: "high",
    keywords: ["feedback", "error", "warning", "success", "notice", "validation"],
    selectionCriteria: {
      persistent: "Use Alert when the message should remain until context changes.",
      transient: "Use Toast for non-blocking short-lived notifications."
    },
    usage: {
      useCases: ["Validation summary", "Theme loaded notice", "Permission warning", "Save failed"],
      commonPatterns: [
        { name: "Validation summary", composition: "Alert above form plus Field.ErrorText on individual fields." }
      ],
      antiPatterns: [
        { scenario: "Using Alert as decorative callout", reason: "Alerts imply system status or user attention.", alternative: "Use Card or Text." }
      ]
    }
  }
};
