# ADS Light Agent Guide

Use this guide before writing UI with ADS Light.

## Decision Tree

1. **Need a component?**
   - Call `search_components` with the user intent.
   - Call `get_component` for the best candidate.
   - Read `whenToUse`, `neverUseFor`, `keyProps`, and `relatedComponents`.

2. **Need brand styling?**
   - Call `get_theme`.
   - Use component props, semantic palettes, or CSS variables from `src/tokens`.
   - Do not hardcode color, font, radius, elevation, or button casing.

3. **Need to compose a pattern?**
   - Call `search_patterns` with the intent, then `get_pattern` for the executable JSX.
   - Patterns are defined in `patterns.json` (source of truth) and render-verified by `npm run verify:renders`.
   - Use rich metadata in `src/meta` for relationships and invalid combinations.

4. **Need to preview?**
   - For a known component, call `render_component`.
   - For custom JSX, call `render_code`.
   - Inspect the returned screenshot before delivering.

5. **Screenshot is wrong?**
   - Fix component code, theme, or spec.
   - Render again.
   - Do not deliver unverified UI.

## Component Choice Rules

- Button: short actions only. Use Link/Breadcrumb/Menu for navigation.
- Input: one-line freeform values only. Use Select/RadioGroup for finite choices.
- Card: one object or bounded tool only. Avoid nested cards.
- Alert: persistent feedback. Use Toast for transient status.
- Dialog: blocking decisions. Use Drawer for secondary context-preserving panels.
- Table: dense row/column comparison. Use Card/DataList for object browsing.

## Spec Maintenance

- Add missing usage knowledge immediately with `update_component`.
- Arrays should merge by default; use `replaceArrays` only when replacing canonical values.
- Keep examples executable in the explorer.
- Rich metadata belongs in `src/meta`; cheap search guidance belongs in `components.json`.

## Per-Client Workflow

1. Branch for the client.
2. Update `client-theme.json`.
3. Render Button, Input, Card, Alert, Dialog, Table, and one dense layout.
4. Add client-specific components to `components.json` and `src/meta`.
5. Deliver screenshots with the final UI.
