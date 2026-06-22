export type ComponentCategory = "atoms" | "molecules" | "organisms";
export type ComponentType = "interactive" | "display" | "container" | "input" | "navigation" | "feedback" | "layout";
export type AiPriority = "high" | "medium" | "low";

export interface PropMeta {
  type: string;
  required?: boolean;
  default?: unknown;
  description: string;
  values?: string[];
}

export interface InvalidCombination {
  axes: Record<string, string>;
  reason: string;
}

export interface RelationshipMeta {
  requires?: string[];
  mustBeChildOf?: string[];
  mustBeParentOf?: string[];
  optionalSibling?: string[];
  commonPartners?: string[];
  triggers?: string[];
  blocksWhen?: Array<{ when: string; effect: string }>;
  exposesState?: string[];
  role?: string;
  keyboardSupport?: string;
  screenReader?: string;
}

export interface TokenMeta {
  color?: string[];
  spacing?: string[];
  typography?: string[];
  border?: string[];
  motion?: string[];
  elevation?: string[];
}

export interface AntiPattern {
  scenario: string;
  reason: string;
  alternative: string;
}

export interface ComponentMeta {
  component: {
    name: string;
    category: ComponentCategory;
    type: ComponentType;
    description: string;
    path: string;
    figma?: { nodeId: string };
  };
  props: Record<string, PropMeta>;
  variants: {
    axes: Record<string, string[]>;
    purpose: Record<string, string>;
    invalidCombinations?: InvalidCombination[];
  };
  relationships: RelationshipMeta;
  tokens: TokenMeta;
  aiHints: {
    priority: AiPriority;
    keywords: string[];
    selectionCriteria: Record<string, string>;
    usage: {
      useCases: string[];
      commonPatterns: Array<{ name: string; composition: string }>;
      antiPatterns: AntiPattern[];
    };
  };
}
