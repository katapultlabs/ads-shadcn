# Onboarding — using ADS Light for a new client

ADS Light is an **agentic design system**: a foundation of accessible, themeable
ShadCN components (Radix UI primitives + Tailwind CSS v4) plus a machine-readable
spec (`ads.components.json`), composition patterns (`patterns.json`), a
render-and-verify explorer, and an MCP server. You build a client's UI by
**theming the shared system**, not by forking components.

This guide gets you from zero to a branded, verified client UI. It is written for
both **people** (read the prose, use the explorer) and **AI agents** (follow the
MCP tool / command sequences in the boxes).

> First time in the repo? Run `npm install` once. Read `AGENT_GUIDE.md` for the
> decision tree and `ARCHITECTURE.md` for how the pieces fit.

---

## The one rule

A per-client branch should normally change **only the brand layer**
(`client-theme.json`). Never hardcode brand colors, fonts, or radii into
components — use semantic Tailwind tokens (`bg-primary`, `border-border`, …) and
change the theme. Client-specific components are allowed, but they must be
registered in `ads.components.json` (and `src/meta`).

---

## Quickstart: onboard a client in 5 steps

```bash
# 0. one-time
npm install

# 1. Branch for the client (keeps the brand layer isolated)
git switch -c client/acme    # if this repo is under git

# 2. Scaffold + activate the client's brand layer
npm run new-client -- "Acme Corp" --primary "#ff5a1f" --font "Geist" --radius 8 --activate

# 3. See it live and refine the brand
npm run dev                  # explorer at http://127.0.0.1:5173  → click "Tokens"

# 4. Verify the core components read as the brand
npm run verify:renders       # renders everything + axe a11y + asserts brand button color

# 5. Deliver screenshots from the explorer / render tools (never unverified UI)
```

That's the happy path. The rest of this file explains each piece and the two
real-world scenarios.

---

## Scenario A — greenfield (client has no product yet)

Use the Quickstart as-is. Capture the brand into `client-theme.json`, render the
core set, register any bespoke components, deliver.

## Scenario B — client already has an ongoing product

The deciding question: **is their product built on the same component foundation
(ShadCN — Radix UI + Tailwind CSS) that ADS Light wraps?**

- **Same foundation** → ADS becomes their runtime design system.
  1. Reverse their existing brand into tokens with `npm run new-client` (set
     `--primary`, `--font`, `--radius`), then refine in the explorer's Tokens panel.
  2. Sanity-render the core set; confirm screenshots read as *their* brand.
  3. Map their screens to ADS components/patterns; register anything bespoke.
  4. Adopt **incrementally** — restyle via tokens first, then swap ad-hoc
     primitives for ADS components screen by screen. No big-bang rewrite.

- **Different stack (Vue, Angular, native, a different React UI kit, …)** → ADS is
  the *source of truth*, not the runtime.
  1. Use `search_components` / `get_component` / `get_pattern` as the spec authority.
  2. Reproduce the CSS-variable token layer (`src/theme/tokens.generated.css`) in their
     framework (the `/design-tokens` skill generates this).
  3. Mirror `patterns.json` recipes into their components.
  4. Keep code ↔ Figma in sync with the `/figma-*` skills if they have a library.

**Capturing what already exists** (either path): the installed design skills are
the on-ramp — `/impeccable document` records their current visual system into a
`DESIGN.md`, `/impeccable extract` pulls recurring tokens/components, and
`/design-review` audits the result against the brief.

---

## The `new-client` script

Manages the brand layer in `client-themes/<slug>.json` and (optionally) activates
one by copying it to `client-theme.json`.

| Command | What it does |
|---|---|
| `npm run new-client -- "Acme Corp"` | Create `client-themes/acme-corp.json` from the current active theme |
| `… --primary "#ff5a1f"` | Set brand seed; `generate:theme` derives the matching `--primary` CSS variables (light + dark) |
| `… --font "Geist"` | Set heading + body font stack |
| `… --font-url "https://…"` | Set the webfont URL token |
| `… --radius 8` | Set brand corner radius (px) |
| `… --button-transform uppercase` | Set button text transform (`none` default) |
| `… --from "Other Client"` | Clone an existing client theme as the base |
| `… --activate` | Also copy the new theme to `client-theme.json` |
| `npm run new-client -- --list` | List stored client themes |
| `npm run new-client -- --switch "Acme Corp"` | Activate an existing stored theme |

Activating backs up the previous `client-theme.json` to `client-theme.backup.json`.
The script never touches git, components, or patterns — only the theme file.

## Import a brand from a brand-guidelines doc

The fastest path to "make the ADS look like *our* product": hand the system the
brand and let it map and adjust.

1. Put the brand guidelines (PDF/doc) in the repo (or paste the values).
2. Extract the brand into a **brand profile** — `brand-profile.example.json`
   shows the shape. Only `colors.primary` is essential; everything else is
   optional. (An agent can read the doc and produce this directly.)
3. Apply it:
   ```bash
   npm run import-brand -- path/to/brand-profile.json
   ```
   or, via the MCP server, the `apply_brand` tool with the profile.

The importer **understands and adjusts**: it maps your colors/fonts/radius into
the ADS token model, **derives missing color stops** from your primary, **keeps
sensible defaults** for anything you didn't specify, **validates WCAG AA
contrast** (warning if e.g. your primary is too light for its text), regenerates
the theme, and prints a report of what it applied / derived / kept. Then
`npm run dev` to review, or `review_ui` to verify.

> The ADS theme only controls the brand surface — colors, fonts, radius.
> Spacing, the type scale, shadows, and motion are system design decisions and
> are intentionally not brand-imported.

---

## Two ways to drive it

### People (the explorer)

```bash
npm run dev        # interactive explorer at http://127.0.0.1:5173 (HMR)
npm run preview    # production build at http://127.0.0.1:4173 (render surface)
```

- Browse / search the ~119 component specs; flip variants, sizes, states.
- Click **Tokens** to review the live theme in light and dark mode.
- URL contract for deep links / automation:
  - `/?component=Button` — render a known component
  - `/?code=<base64url-jsx>` — render arbitrary JSX
  - `/?colorMode=dark` — render in dark mode
  - render target is always `#ads-render-target`

### Agents (the MCP server)

```bash
npm run mcp        # ADS Light MCP over stdio
```

Default loop (see `AGENT_GUIDE.md`):

1. `search_components` → `get_component` — read `whenToUse`, `neverUseFor`, `keyProps`.
2. `get_theme` / `set_theme` — read or change the brand layer (no hardcoded values).
3. `search_patterns` → `get_pattern` — executable multi-component JSX.
4. `render_component` / `render_code` — screenshot before delivering; the result
   carries an `a11y` block and warns on hardcoded colors.
5. If the screenshot is wrong, fix code/theme/spec and render again.
6. New client-only component? `add_component`; missing usage knowledge? `update_component`.

---

## Verify before you ship

| Command | Checks |
|---|---|
| `npm run verify:renders` | Renders every component + pattern, runs axe-core, asserts the brand button resolves to the brand color |
| `npm run quality` | Refreshes generated metadata and the quality report |
| `npm run verify:visual` | Pixel-diffs every component against `artifacts/baseline/` (run `baseline:capture` first) |
| `npm test` | `validate:specs` + `build` + `verify:renders` |

Render tools and `verify:renders` flag raw hex / `rgb()` / `hsl()` in JSX — that's
the no-hardcoded-color rule enforced at the point UI is generated.

---

## Where things live

| File / dir | Role |
|---|---|
| `client-theme.json` | The **active** brand layer (compiled into the tokens CSS) |
| `client-themes/` | Stored per-client brand layers (managed by `new-client`) |
| `scripts/generate-theme.mjs` | Compiles the theme JSON into `src/theme/tokens.generated.css` (shadcn CSS variables, light + dark) |
| `src/index.css` | Tailwind v4 entry (`@import "tailwindcss"`, `@theme inline` token mapping, `.dark` variant) |
| `ads.components.json` | Machine-readable component specs (variants, states, props, examples) |
| `patterns.json` | Composition patterns (multi-component recipes) |
| `src/meta` | Rich per-component contracts (axes, relationships, a11y, AI hints) |
| `src/components/ui` + `primitives.tsx` / `typography.tsx` / `ads/*.tsx` | Component sources (shadcn + ADS-authored) |
| `CLAUDE.md` / `AGENT_GUIDE.md` / `ARCHITECTURE.md` | Rules, decision tree, architecture |

---

## Troubleshooting

- **Brand color didn't apply** — you hardcoded a value somewhere. Move it into
  `client-theme.json`; `verify:renders` will point at the offending render.
- **Wrong client is active** — `npm run new-client -- --list`, then `--switch`.
  Restore a clobbered active theme from `client-theme.backup.json`.
- **A component looks off in dark mode** — check its semantic Tailwind tokens
  (`bg-background`, `text-foreground`, `border-border`, …) and the `.dark`
  overrides in `src/theme/tokens.generated.css`; the explorer's `?colorMode=dark`
  renders the `.dark` path.
- **Render can't reach the explorer** — the render script falls back to serving
  built `dist/` on a temp port. Run `npm run build` if `dist/` is stale.
