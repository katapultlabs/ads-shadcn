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
  key props, variants, states, and a11y contracts (`components.json`, `src/meta`).
- **Brand-driven, not hardcoded** — visual identity flows from one theme file
  (`client-theme.json`); components reference tokens, never raw colors.
- **Render-verified** — nothing ships unseen. Components are screenshotted,
  a11y-checked with axe-core, and asserted to resolve the brand color.
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

1. **Foundation** — accessible Chakra UI v3 components.
2. **Spec** — `components.json` (flat, searchable) + `src/meta` (rich contracts).
3. **Patterns** — `patterns.json` multi-component recipes, render-verified.
4. **Theme** — `client-theme.json` → `src/theme/createTheme.js` builds the Chakra
   system (full color ramps, semantic `ads.*` tokens, light/dark).
5. **Explorer** — `src/App.jsx`, driven by URL params for automation.
6. **MCP server** — `mcp-server/` exposes query / render / theme / spec tools.

See **[ARCHITECTURE.md](ARCHITECTURE.md)** for the full picture and
**[AGENT_GUIDE.md](AGENT_GUIDE.md)** for the decision tree.

## For agents (MCP)

```bash
npm run mcp        # ADS Light MCP over stdio
```

Wired via `.mcp.json`. Tools: `list_components`, `search_components`,
`get_component`, `list_patterns`, `search_patterns`, `get_pattern`,
`render_code`, `render_component`, `get_theme`, `set_theme`, `add_component`,
`update_component`. The render tools return an `a11y` block and warn on
hardcoded colors at the point UI is generated.

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
| `npm run render -- "<Button>Hi</Button>"` | Screenshot a JSX snippet |
| `npm run verify:renders` | Render all + axe a11y + brand-color assertion |
| `npm run verify:visual` | Pixel-diff against `artifacts/baseline/` |
| `npm run quality` | Refresh metadata + quality report |
| `npm test` | `validate:specs` + `build` + `verify:renders` |

## Docs

- **[ONBOARDING.md](ONBOARDING.md)** — get started, onboard a client (humans + agents)
- **[AGENT_GUIDE.md](AGENT_GUIDE.md)** — decision tree and component-choice rules
- **[ARCHITECTURE.md](ARCHITECTURE.md)** — pillars, render-verify loop, URL contract
- **[PRODUCT.md](PRODUCT.md)** — register, users, principles
- **[CLAUDE.md](CLAUDE.md)** — agent rules for working in this repo
