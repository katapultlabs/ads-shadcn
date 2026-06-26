# ADS Light Agent Guide

The decision tree for building product UI with ADS Light. Read this before writing any UI.

ADS Light is built for **you, the agent**: a machine-readable spec, a render surface that returns
structured snapshots (not just pixels), and a self-review tool. The files are the source of truth;
the MCP tools are the fast interface to them. See [MCP.md](MCP.md) for the full tool reference.

## The Loop

```
recommend_component → get_component → scaffold_screen → review_ui → fix_ui → export_screen
```

Never deliver UI you haven't rendered and reviewed. The loop is self-closing: `review_ui` checks
every mode for you, `fix_ui` repairs the mechanical findings, and `export_screen` emits the final
file. It's also self-evaluating — `npm run eval` scores the whole loop against golden tasks.

### 1. Choose the component — don't guess

- `recommend_component({ task })` — natural-language task → ranked components, each with its
  rationale (`whenToUse`), a caution (`neverUseFor`), and a starter example. This is the fastest
  way in; it encodes the choice rules below.
- `search_components({ query })` — weighted search when you want to browse candidates yourself.
- `get_component({ name })` — the full spec: variants, sizes, states, `keyProps`,
  `whenToUse`, `neverUseFor`, `relatedComponents`, examples, and the rich metadata
  (anatomy, behavior, agentHints).

Respect `neverUseFor` even when a component *can* technically render the UI.

### 2. Compose

- For multi-component UI, start from a pattern: `search_patterns` / `get_pattern` return
  executable JSX (forms, table+toolbar, settings, auth card, loading/error states, …).
- `scaffold_screen({ brief })` — a UI brief → matching render-verified patterns **plus**
  recommended components as building blocks. Assemble these into JSX.
- Use components from the spec. Do not invent local primitives for things the system provides.

### 3. Theme — never hardcode brand

- Style with component `variant` props and **semantic Tailwind tokens**: `bg-primary`,
  `text-muted-foreground`, `border-border`, `bg-destructive`, `bg-card`, …
- Status uses a consistent scale across components — **default · destructive · success ·
  warning · info** — on Button, Alert, Badge, Progress (`variant`) and ProgressCircle (`tone`).
- Never write raw `#hex` / `rgb()` / `hsl()`. To change brand color, font, or radius, edit
  `client-theme.json` (then `npm run generate:theme`), or import a brand wholesale (step 6).
- `get_theme` reads the active tokens; `list_tokens` / `search_tokens` browse the catalog.

### 4. Render & verify — from JSON, not eyeballs

- `review_ui({ code })` — renders your JSX across **light+dark × desktop+mobile** (add
  `thorough: true` for reduced-motion) and returns a **verdict** (pass / warn / fail) plus
  findings (hardcoded color, nested cards, multiple primary actions, raw HTML, overflow, render
  errors, a11y) **each tagged with the modes where it appears** — so dark-only contrast or
  mobile-only overflow surfaces automatically. `single: true` for a one-mode check. **Run before delivering.**
- `interact({ code, actions })` — render, then `click`/`fill` and snapshot before/after to verify
  dynamic behavior (a Dialog opens, an Input accepts text, a Switch toggles), not just first paint.
- `render_code` / `render_component` / `render_controlled_component` — return a screenshot **and**
  a machine-readable `snapshot` (text, interactive elements, computed styles, overflow) + `a11y` +
  `warnings`. Verify correctness without seeing the image.

### 5. Fix & re-review

- `fix_ui({ code })` — auto-corrects the mechanical findings (hardcoded color → nearest semantic
  token, raw `<button>`/`<input>` → `<Button>`/`<Input>`), then re-renders and re-reviews. Returns
  the corrected code, the diff of what changed, the new verdict, and any `manual` findings that
  need a design decision (nested cards, too many primary actions). Run this when `review_ui`
  returns `fail`/`warn`.
- For findings `fix_ui` leaves as `manual`, fix the JSX/spec/`client-theme.json` yourself and
  review again. Do not deliver unverified UI.

### 5b. Export the verified screen

- `export_screen({ code, name, write })` — turn the verified JSX into a production `.tsx` with
  imports resolved from the ADS registry (the same modules the explorer rendered). Capitalized
  tags that aren't ADS components are assumed to be lucide-react icons (reported, so you can
  confirm). This bridges the verified sandbox snippet to a file that drops into a project.

### 6. Brand import (when starting for a client)

- `ingest_brand({ source })` — when you have a brand-guidelines doc (or a JSON token / Figma
  variables export) rather than a hand-authored profile, extract the profile from it first. It
  reports what it `found` vs `guessed`; confirm the primary color, then re-call with `apply: true`.
- `apply_brand({ brand })` — import a brand profile (colors/fonts/radius) into the theme: maps it
  into `client-theme.json`, derives missing color stops, validates WCAG AA contrast, regenerates,
  and reports what was applied / derived / kept-default + contrast warnings. Only `colors.primary`
  is essential.
- CLI equivalent: `npm run import-brand -- <profile.json>` (see `brand-profile.example.json`).
- Then render Button / Input / Card / Alert / Dialog and confirm contrast.

### 7. Know the limits

- `capabilities` — what the system can and cannot do (foundation, render/verify contract, theming
  model, known limitations, dropped utilities). Call it before attempting unsupported UI rather
  than improvising.

## Component Choice Rules

- **Button** — short actions only; one primary action per view. Use Link/Breadcrumb/Menu for navigation.
- **Input** — one-line freeform values only. Use Select/RadioGroup for a finite set of choices.
- **Card** — one object or bounded tool only. Avoid nested cards.
- **Alert** — persistent, inline feedback. Use Toast (Sonner) for transient status.
- **Dialog** — blocking decisions. Use Drawer for secondary, context-preserving panels.
- **Table** — dense row/column comparison. Use Card/DataList for object browsing.

## Spec Maintenance

- Learned something the spec doesn't capture? Add it immediately with `update_component`
  (arrays merge and dedupe by default; pass `replaceArrays` only to replace canonical values),
  or `add_component` for a new client-specific component (must pass metadata validation).
- Keep examples executable in the explorer: flat named exports (`<Card><CardHeader>`,
  `<AccordionItem>`), not dot-notation; Tailwind utility classes, not style props.
- Cheap search guidance lives in `ads.components.json`; rich metadata is generated into `src/meta`.
- `npm run validate:specs` gates structure; `npm run lint:ui` catches hardcoded colors / raw
  `<button>`/`<input>` across real product source (CI-ready).

## Per-Client Workflow

1. Branch for the client.
2. Import the brand (`apply_brand` / `npm run import-brand`) or edit `client-theme.json` directly,
   then `npm run generate:theme`.
3. Render Button, Input, Card, Alert, Dialog, Table, and one dense layout; check contrast.
4. Add client-specific components to the spec via `add_component`.
5. Deliver render-verified screenshots with the final UI.
