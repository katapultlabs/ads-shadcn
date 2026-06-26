# ADS Light

**Agentic Design System Shell** — query, theme, render, and verify branded UI from code or an MCP agent, on an accessible component foundation.

ADS Light isn't another component library. It's a *shell* around one: a
machine-readable spec, composition patterns, a live render-and-verify explorer,
and an MCP server — so an AI agent (or a person) can find the right component,
see exactly how it renders under the active brand, and trust that what's on
screen is what ships.

```bash
npm install
npm run dev        # explorer at http://127.0.0.1:5173
```

---

## Why

Most design systems are built for humans reading docs. ADS Light is built so an
**agent** can operate the system end to end:

- **Queryable** — every component has machine-readable `whenToUse`, `neverUseFor`,
  key props, variants, states, and a11y contracts (`ads.components.json`, `src/meta`).
  123 components: shadcn foundation + ADS primitives + typography + custom + the
  newer NavigationMenu / Menubar / ContextMenu / Chart. (`sidebar` is intentionally
  not included.)
- **Brand-driven, not hardcoded** — visual identity flows from one theme file
  (`client-theme.json`); components reference semantic Tailwind tokens, never raw colors.
  Status intent is first-class — `success` / `warning` / `info` join `destructive`
  across Button (9 variants), Alert, Badge, Progress `variant`, and ProgressCircle
  `tone`, all from semantic tokens.
- **Render-verified** — nothing ships unseen. Renders return a machine-readable
  `snapshot` (text, interactive elements, primary computed styles, overflow flags)
  plus an `a11y` block, so even a non-vision agent verifies from JSON — and `review_ui`
  turns that into a pass/warn/fail verdict against the design rules.
- **Brand import** — point `apply_brand` (or `npm run import-brand`) at a brand
  profile and it maps into `client-theme.json`, derives missing color stops,
  validates WCAG AA contrast, and regenerates the theme.
- **Multi-client** — theme the *same* system for many clients; a per-client
  branch normally changes only the brand layer.

## Quickstart: a new client in 5 steps

```bash
npm install                                                              # once
git switch -c client/acme                                                # 1. branch
npm run new-client -- "Acme Corp" --primary "#ff5a1f" --font "Geist" --activate  # 2. brand
npm run dev                                                              # 3. refine (Tokens panel)
npm run verify:renders                                                   # 4. verify
#                                                                          5. deliver screenshots
```

Full walkthrough — including how to adopt ADS into a client's **existing**
product — is in **[ONBOARDING.md](ONBOARDING.md)**.

## How it works

```
Agent writes JSX ──▶ MCP render_code ──▶ Explorer (Vite + Playwright)
        ▲                                          │
        └──── fix code / theme / spec ◀── screenshot + a11y + brand check
```

1. **Foundation** — accessible ShadCN components (Radix UI primitives + Tailwind CSS v4
   + class-variance-authority): shadcn source under `src/components/ui`, plus ADS-authored
   `src/components/primitives.tsx`, `src/components/typography.tsx`, and `src/components/ads/*.tsx`.
2. **Spec** — `ads.components.json` (flat, searchable) + `src/meta` (rich contracts).
3. **Patterns** — `patterns.json`: 14 multi-component composition recipes
   (forms, table + toolbar, settings, auth, loading, error, …), render-verified.
4. **Theme** — `client-theme.json` → `scripts/generate-theme.mjs` is the one source
   of truth. It emits **both** the render CSS variables in `src/theme/tokens.generated.css`
   (semantic `--primary` / `--background` / `--border` / `--radius`, plus the
   brand / status / neutral ramps and `--success`/`--warning`/`--info`, light + dark)
   **and** a brand-reactive token catalog in `src/tokens/token-data.generated.js`
   (~164 tokens, browseable in the explorer Tokens view).
5. **Explorer** — `src/App.tsx`, driven by URL params for automation.
6. **MCP server** — `mcp-server/` exposes query / render / theme / spec tools.

See **[ARCHITECTURE.md](ARCHITECTURE.md)** for the full picture and
**[AGENT_GUIDE.md](AGENT_GUIDE.md)** for the decision tree.

## For agents (MCP)

```bash
npm run mcp        # ADS Light MCP over stdio
```

Wired via `.mcp.json`. The server exposes **23 tools, 5 resources, and 3 prompts**.

Query / spec: `list_components`, `search_components`, `get_component`,
`list_patterns`, `search_patterns`, `get_pattern`, `add_component`, `update_component`.

Theme / brand: `get_theme`, `set_theme` (validates AA contrast), `apply_brand`
(import a brand profile → theme; see `brand-profile.example.json`).

Agentic: `recommend_component` (NL task → ranked components), `capabilities`
(what the system can/can't do), `scaffold_screen` (brief → render-verified patterns +
components), and `review_ui` (render JSX → `pass`/`warn`/`fail` verdict with structured
findings vs the design rules).

Render: `render_code`, `render_component`, `render_controlled_component` return a
machine-readable `snapshot` (text, interactive elements, primary computed styles,
overflow / nested-card flags) plus an `a11y` block and `warnings` on hardcoded colors —
so a non-vision agent verifies from JSON, not just a screenshot.

Resources: `ads://components`, `ads://patterns`, `ads://tokens`, `ads://theme`,
`ads://capabilities`. Prompts: `build_screen`, `theme_from_brand`, `review_before_ship`.

**The agent loop:** `recommend_component` → `get_component` → compose →
`review_ui` (self-check, fix every finding) → deliver.

The explorer URL contract:

- `/?component=Button` — render a known component
- `/?code=<base64url-jsx>` — render arbitrary JSX
- `/?colorMode=dark` — render in dark mode (render target: `#ads-render-target`)

## Per-client theming

```bash
npm run new-client -- "Acme Corp" --primary "#ff5a1f" --radius 8 --activate
npm run new-client -- --list
npm run new-client -- --switch "Acme Corp"
```

Stored themes live in `client-themes/`; activating one copies it to
`client-theme.json` and backs up the previous active theme.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Explorer with HMR (`127.0.0.1:5173`) |
| `npm run preview` | Production build preview (`127.0.0.1:4173`) |
| `npm run build` | Build the explorer |
| `npm run mcp` | Start the ADS Light MCP server |
| `npm run new-client` | Scaffold / switch a client brand layer |
| `npm run import-brand -- <profile.json>` | Map a brand profile into `client-theme.json` (derive stops, validate AA, regenerate) |
| `npm run render -- "<Button>Hi</Button>"` | Screenshot a JSX snippet |
| `npm run lint:ui` | Scan real `.tsx`/`.jsx` source for hardcoded colors / raw `<button>`/`<input>` (CI-ready) |
| `npm run verify:renders` | Render all + axe a11y + brand-color assertion |
| `npm run verify:visual` | Pixel-diff against `artifacts/baseline/` |
| `npm run generate:theme` | Build the render CSS vars (`src/theme/tokens.generated.css`) + token catalog (`src/tokens/token-data.generated.js`) from `client-theme.json` |
| `npm run generate` | Full chain: theme → icons → shadcn-base → enrich → rich-meta → quality |
| `npm run quality` | Refresh metadata + quality report |
| `npm test` | `validate:specs` + `build` + `verify:renders` |

## Docs

- **[ONBOARDING.md](ONBOARDING.md)** — get started, onboard a client (humans + agents)
- **[AGENT_GUIDE.md](AGENT_GUIDE.md)** — decision tree and component-choice rules
- **[ARCHITECTURE.md](ARCHITECTURE.md)** — pillars, render-verify loop, URL contract
- **[PRODUCT.md](PRODUCT.md)** — register, users, principles
- **[CLAUDE.md](CLAUDE.md)** — agent rules for working in this repo
