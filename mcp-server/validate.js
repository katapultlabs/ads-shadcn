// Shared component-spec validation, used by both the MCP server (add/update
// gates) and the offline `validate:specs` sweep so the two never drift.

export const requiredArrays = ["variants", "sizes", "states", "keyProps", "whenToUse", "neverUseFor", "examples", "controls"];
export const requiredObjects = ["propMetadata", "anatomy", "tokenMapping", "behavior", "accessibilityMetadata", "agentHints"];

export function validateComponent(component) {
  const errors = [];
  if (!component || typeof component !== "object") errors.push("component must be an object");
  if (!component?.name) errors.push("name is required");
  if (!component?.category) errors.push("category is required");
  if (!component?.description) errors.push("description is required");
  for (const field of requiredArrays) {
    if (!Array.isArray(component?.[field]) || component[field].length === 0) errors.push(`${field} must be a non-empty array`);
  }
  for (const field of requiredObjects) {
    if (!component?.[field] || typeof component[field] !== "object" || Array.isArray(component[field])) errors.push(`${field} must be an object`);
  }
  return { ok: errors.length === 0, errors };
}
