# Changelog

All notable changes to ADS Light. This project tracks the design system shell, not a published
package; entries are grouped by the work that landed rather than by semver release.

## [Unreleased]

### Added — top-tier agentic hardening
- **Self-closing loop.** New MCP tools take the count to **27**:
  - `fix_ui` — auto-corrects the mechanical `review_ui` findings (hardcoded color → nearest
    semantic token, raw `<button>`/`<input>` → `<Button>`/`<Input>`), then re-renders and
    re-reviews; returns corrected code + diff + new verdict + `manual` findings that need a design call.
  - `export_screen` — turns verified JSX into a production `.tsx` with imports resolved from the
    registry's actual module exports (unknown capitalized tags → assumed lucide icons).
  - `interact` — renders, runs `click`/`fill` actions, and snapshots before/after to verify
    dynamic behavior (Dialog opens, Input accepts text, Switch toggles).
  - `ingest_brand` — extracts a brand profile from a brand-guidelines doc (text/markdown) or a
    JSON token / Figma-variables export; reports found vs guessed; optionally applies.
- **`review_ui` is multi-mode** — renders light+dark × desktop+mobile (and reduced-motion when
  `thorough`) and tags each finding with the modes it appears in, so dark-only contrast and
  mobile-only overflow surface automatically. `single: true` for one mode.
- **`scaffold_screen` closes the loop** — each candidate pattern is rendered *and* reviewed; it
  returns a `recommendedStart` with a verdict, not just "it rendered". Pattern matching is now
  word-based with `tags`, so natural-language briefs resolve (e.g. "a login screen" → Auth Card).
- **Eval harness + regression gate** — `npm run eval` scores `recommend_component` / `review_ui` /
  `fix_ui` / `scaffold_screen` against `eval/golden.json` (22 cases, currently 22/22).
- **Spec-drift guard** — `npm run verify:drift` diffs the spec's documented `variants`/`sizes`
  against the actual cva keys in component source.
- **Token-sync guard** — `npm run verify:tokens` proves the token catalog and the rendered CSS are
  one source of truth, value-for-value (118 shared tokens). `npm test` now runs
  `validate:specs → verify:tokens → verify:drift → build → verify:renders`.

### Fixed (this round)
- Utility components (`Show`, `Format`, `Portal`, …) no longer pollute `recommend_component` —
  down-ranked so a fuzzy substring hit (e.g. "form" ⊂ "Format") can't top a real component.
- Dialog now ranks for "confirm a destructive action" — replaced its auto-generated junk
  `agentHints.keywords` (state names) with real intent terms.
- Settings Section pattern failed its own review (unlabeled `Switch`es → `button-name` a11y
  error); added `aria-label`s. All 14 patterns now pass `review_ui` cleanly.
- `review_ui` overflow heuristic no longer false-positives on portal'd overlays (dialogs/popovers).

### Migrated — Chakra UI → ShadCN
- Replaced the Chakra UI v3 foundation with **ShadCN** (Radix UI + Tailwind CSS v4 + CVA),
  TypeScript, React 19, Vite 6. See [MIGRATION-MAP.md](MIGRATION-MAP.md) for the per-component
  bucket classification (direct shadcn / primitive / typography / custom / dropped / kept).
- **123 components** re-specced in `ads.components.json` with rich metadata generated into
  `src/meta` (anatomy, behavior, agentHints, variants, sizes, states, keyProps, relationships).
  `sidebar` is intentionally excluded.
- Rewrote the explorer (`src/App.tsx`) in TypeScript: live controls panel, Variants gallery,
  States gallery, Props table, behavior/anatomy/agent-hints surfacing, Tokens view, and search
  over description + whenToUse.
- Renamed the ADS spec `components.json` → `ads.components.json` (the root `components.json` is now
  the shadcn CLI config).

### Added — agentic layer
- **MCP server**: now 23 tools, 5 resources, 3 prompts ([MCP.md](MCP.md)).
  - `recommend_component` — NL task → ranked components with rationale, caution, starter example.
  - `review_ui` — render JSX → verdict (pass/warn/fail) + structured findings with fixes.
  - `scaffold_screen` — brief → render-verified patterns + recommended components.
  - `capabilities` — what the system can/can't do (also `ads://capabilities`).
  - `apply_brand` — import a brand profile into the theme.
  - Render tools (`render_code` / `render_component` / `render_controlled_component`) now return a
    **machine-readable `snapshot`** (text, interactive elements, computed styles, overflow) +
    `a11y` + `warnings`, so a non-vision agent verifies from JSON.
  - Resources: `ads://components`, `ads://patterns`, `ads://tokens`, `ads://theme`,
    `ads://capabilities`. Prompts: `build_screen`, `theme_from_brand`, `review_before_ship`.
- **Brand import pipeline**: `npm run import-brand -- <profile.json>` / MCP `apply_brand` map a
  brand-guidelines profile into `client-theme.json`, derive missing color stops, validate WCAG AA
  contrast, and regenerate. See `brand-profile.example.json`. `set_theme` also returns contrast
  warnings.
- **Unified, brand-reactive token system**: `scripts/generate-theme.mjs` emits both the render CSS
  variables and a token catalog (`src/tokens/token-data.generated.js`, ~164 tokens) from
  `client-theme.json` — one source of truth, browsable in the explorer Tokens view.
- **First-class status intent** — a consistent `default · destructive · success · warning · info`
  scale across Button, Alert, Badge, Progress (`variant`), and ProgressCircle (`tone`), all from
  semantic tokens.
- **Repo-level design lint**: `npm run lint:ui` scans real `.tsx`/`.jsx` source for hardcoded
  colors (error) and raw `<button>`/`<input>` (warn); CI exit codes, `--strict`.
- **Composition patterns** expanded to **14** (added Form Layout, Table with Toolbar, Settings
  Section, Auth Card, Loading State, Error State).
- **Quality gates**: `npm run validate:specs`, `npm run verify:renders` (122/122), axe-core a11y
  (0 warnings; 5 intrinsic Radix issues registered as known), and a pixelmatch visual baseline.

### Fixed
- Explorer controls: per-component builders for icon-left/right and icon picker; icon now clears
  when disabled; restored the `default`/`primary` variant in the selector.
- Replaced the over-wide native control dropdown with the shadcn `Select`.
- Slider crash under radix-ui 1.4.1 × React 19 (`context.values.map`) — computed range fill +
  labeled thumbs instead of `SliderRange`.
- Registry no longer does `import * as recharts` (which clobbered shadcn `Label`/`Tooltip`/`Text`);
  imports only the specific chart primitives.
- Portal redirection moved from a global `getElementById` to React context
  (`usePortalContainer`), so overlays render inside `#ads-render-target` without hijacking the
  explorer's own control dropdowns.
- Interaction states (hover/focus/active) now render statically via Tailwind variant redefinition
  + `data-ads-force`, so the States gallery visibly shows each state.
- `recommend_component` no longer matches substrings (e.g. "pick" inside "ColorPicker"); uses
  word-boundary name matching.
