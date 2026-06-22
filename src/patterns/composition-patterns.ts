import patternsData from "../../patterns.json";

export interface CompositionPattern {
  name: string;
  intent: string;
  components: string[];
  composition: string;
  selectionRules: string[];
  /** Executable JSX preview, render-verified by `npm run verify:renders`. */
  jsx: string;
}

// Source of truth is the root patterns.json so the MCP server and the explorer
// read the same data. This module just provides the typed accessor.
export const compositionPatterns: CompositionPattern[] = patternsData.patterns;
