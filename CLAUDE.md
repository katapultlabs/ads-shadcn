# ADS Light Agent Rules

ADS Light is an agentic design system on a **ShadCN** foundation (Radix UI +
Tailwind CSS v4 + class-variance-authority, TypeScript). Optimize for an agent
that can query, render, inspect, and correct UI output.

## Required Loop

1. Read `client-theme.json` before designing branded UI.
2. Search `ads.components.json` before choosing components or props.
3. Use components from the spec instead of inventing local primitives.
4. Do not hardcode brand colors, fonts, or radii. Change `client-theme.json` and
   run `npm run generate:theme` instead.
5. Render before delivering UI work. Use the explorer URL or MCP render tools and
   inspect the screenshot.
6. If the screenshot is wrong, edit the code or spec and render again.

## Component Rules

- Prefer the component whose `whenToUse` matches the job.
- Respect `neverUseFor` even when the component can technically render the UI.
- Use documented variants, sizes, states, and key props (the real ShadCN values
  in the spec — e.g. Button `variant` is `default|destructive|outline|secondary|ghost|link`).
- ShadCN components are flat named exports (`<Card><CardHeader>…`), not
  Chakra-style dot-notation.
- Add missing component knowledge to `ads.components.json` as soon as the agent
  learns it (via the MCP `add_component`/`update_component` tools, which validate).

## Brand Rules

- Per-client branches should normally change only `client-theme.json` (then
  `npm run generate:theme` regenerates `src/theme/tokens.generated.css`).
- Style with **semantic Tailwind tokens** — `bg-primary`, `text-muted-foreground`,
  `border-border`, `bg-destructive`, etc. Never hardcode raw hex/rgb/hsl colors.
- `colorPalette` does not exist here — use the component's `variant` prop plus the
  semantic tokens above.
- Client-specific custom components are allowed, but they must be added to
  `ads.components.json` (and `src/meta` for rich metadata) and live under
  `src/components/`.

## Render Surface

- The explorer runs at `http://127.0.0.1:4173` (preview) / `:5173` (dev).
- Render a known component with `/?component=Button`.
- Render arbitrary JSX with `/?code=<base64url-jsx>`.
- Drive controls with `/?component=Button&variant=destructive&size=lg&state=disabled`.
- Render in dark mode with `/?colorMode=dark`.
- The screenshot target is `#ads-render-target`.
- JSX snippets have every ShadCN component (flat named exports), the ADS
  primitives/typography/custom components, and lucide icons in scope.

## MCP Tools

The ADS Light MCP server exposes:

- Discover / choose: `list_components`, `search_components`, `get_component`, `recommend_component` (NL task → ranked components), `capabilities` (what the system can/can't do)
- Compose: `list_patterns`, `search_patterns`, `get_pattern`, `scaffold_screen` (brief → render-verified + reviewed patterns + components)
- Render / verify: `render_code`, `render_component`, `render_controlled_component` (all return a machine-readable `snapshot` + `a11y` + `warnings`, not just an image), `review_ui` (multi-mode: light+dark × desktop+mobile → verdict + mode-tagged findings), `fix_ui` (auto-correct mechanical findings → re-review), `interact` (click/fill → before/after snapshot for dynamic behavior), `export_screen` (verified JSX → production .tsx with resolved imports)
- Tokens / theme: `list_tokens`, `search_tokens`, `get_token`, `get_component_tokens`, `get_theme`, `set_theme` (validates contrast), `apply_brand` (brand profile → maps + derives + validates + regenerates), `ingest_brand` (brand-guidelines text / JSON export → extracted profile → optionally apply)
- Maintain: `add_component`, `update_component`, `quality_report`

It also exposes 5 resources (`ads://components`, `ads://patterns`, `ads://tokens`, `ads://theme`, `ads://capabilities`) and 3 prompts (`build_screen`, `theme_from_brand`, `review_before_ship`).

The agent loop: **`recommend_component` → `get_component` → `scaffold_screen` → `review_ui` → `fix_ui` → `export_screen`.** Verify from the `snapshot`/`a11y`/`findings`, not only the screenshot. The loop is gated by `npm run eval` (golden tasks), `verify:tokens`, `verify:drift`, and `lint:ui`.

Use these tools as the default interface. Files are the source of truth.

Read `AGENT_GUIDE.md` for the decision tree, and `MCP.md` for the full tool/resource/prompt reference, before implementing product UI.
