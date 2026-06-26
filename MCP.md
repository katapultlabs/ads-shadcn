# ADS Light MCP Reference

The ADS Light MCP server (`npm run mcp`, `mcp-server/index.js`) is the agent-facing interface to
the design system. It exposes **27 tools, 5 resources, and 3 prompts**. The files
(`ads.components.json`, `patterns.json`, `client-theme.json`, generated tokens) remain the source
of truth; these tools read and write them and drive the render surface.

For the workflow these fit into, see [AGENT_GUIDE.md](AGENT_GUIDE.md). The canonical loop:

```
recommend_component → get_component → scaffold_screen → review_ui → fix_ui → export_screen
```

`review_ui` checks light+dark × desktop+mobile by default; `fix_ui` auto-corrects the mechanical
findings; `export_screen` emits a production `.tsx`. The loop is self-closing and self-evaluating
(`npm run eval` gates it; see [Eval & guards](#eval--guards)).

## Tools

### Discover & choose components
| Tool | Purpose |
| --- | --- |
| `list_components` | List components, optionally filtered by `category`. |
| `search_components` | Weighted search over name, description, usage guidance, variants, props. |
| `get_component` | Full spec for one component by `name`; suggests near matches on a miss. |
| `recommend_component` | NL `task` → ranked components, each with rationale, caution, and a starter example. **Start here.** |

### Compose
| Tool | Purpose |
| --- | --- |
| `list_patterns` | List composition patterns (multi-component recipes). |
| `search_patterns` | Weighted search over pattern name, intent, components, composition, selection rules. |
| `get_pattern` | One pattern by `name`, including its executable JSX. |
| `scaffold_screen` | UI `brief` → matching render-verified patterns **plus** recommended components to assemble. |

### Tokens & theme
| Tool | Purpose |
| --- | --- |
| `list_tokens` | List design tokens, filterable by category / layer / role / mode. |
| `search_tokens` | Weighted search over token names, categories, roles, modes, descriptions, useFor. |
| `get_token` | One token by exact custom-property name. |
| `get_component_tokens` | Token-mapping metadata for a component. |
| `get_theme` | Read the active client theme tokens. |
| `set_theme` | Deep-merge validated updates into the theme; returns **contrast warnings**. |
| `apply_brand` | Import a brand profile (colors/fonts/radius) → maps into the theme, derives missing stops, validates AA contrast, regenerates, reports applied/derived/kept-default. |
| `ingest_brand` | Extract a brand profile from a SOURCE (brand-guidelines text/markdown or a JSON token / Figma-variables export); reports found vs guessed; `apply=true` maps + regenerates. |

### Render & verify
| Tool | Purpose |
| --- | --- |
| `render_component` | Screenshot a known component example. Returns screenshot + `snapshot` + `a11y` + `warnings`. |
| `render_controlled_component` | Screenshot a component driven by explorer controls (variant, size, state, label, icons, component-specific). |
| `render_code` | Screenshot arbitrary JSX with all ADS components preloaded. |
| `review_ui` | Render JSX across **light+dark × desktop+mobile** (and reduced-motion when `thorough`) and review against design-system rules → **verdict** (pass/warn/fail) + findings tagged with the modes they appear in. `single=true` for one mode. **Run before delivering.** |
| `fix_ui` | Auto-correct the mechanical findings (hardcoded color → nearest token, raw `<button>`/`<input>` → `<Button>`/`<Input>`), then re-render and re-review. Returns corrected code, the diff, the new verdict, and findings still needing a design decision. |
| `interact` | Render JSX, run a sequence of `click`/`fill` actions, and snapshot before/after — verify a Dialog opens, an Input accepts text, a Switch toggles (dynamic behavior, not just first paint). |
| `export_screen` | Turn verified JSX into a production `.tsx` with imports resolved from the registry (unknown capitalized tags assumed to be lucide icons). Optionally writes the file. |

### Spec maintenance
| Tool | Purpose |
| --- | --- |
| `add_component` | Add a new rich component to the spec (must pass metadata validation). |
| `update_component` | Merge updates into a component spec; arrays merge & dedupe unless `replaceArrays`. |
| `quality_report` | Score component metadata completeness; list missing hardening items. |

### System
| Tool | Purpose |
| --- | --- |
| `capabilities` | What the system can/can't do — foundation, render/verify contract, theming model, known limits, dropped utilities. |

### The render snapshot
Every render tool returns a **machine-readable `snapshot`** alongside the screenshot, so a
non-vision agent can verify correctness from JSON: rendered text content, the list of interactive
elements, primary computed styles, and overflow flags — plus an `a11y` report (axe-core) and any
`warnings`. Verify from the snapshot first; use the screenshot to confirm visual intent.

## Resources
| URI | Contents |
| --- | --- |
| `ads://components` | Component index (name, category, description). |
| `ads://patterns` | All composition patterns. |
| `ads://tokens` | Token catalog (count, by-category, full token list). |
| `ads://theme` | The active `client-theme.json`. |
| `ads://capabilities` | Same payload as the `capabilities` tool. |

## Prompts
| Name | Use |
| --- | --- |
| `build_screen` | Build a screen from a `brief` using the render-and-verify loop. |
| `theme_from_brand` | Apply a brand to the ADS from a brand-guidelines `source`. |
| `review_before_ship` | Self-review generated `code` against the design system before delivering. |

## Eval & guards

The agentic loop is proven and protected by CLI gates (CI-ready exit codes), not just trusted:

| Command | What it gates |
| --- | --- |
| `npm run eval` | Golden tasks (`eval/golden.json`) → scores `recommend_component`, `review_ui`, `fix_ui`, `scaffold_screen`. Fails on regression in choice/review/fix/scaffold quality. |
| `npm run verify:tokens` | The MCP/explorer token catalog and the rendered CSS are one source of truth (value-for-value). |
| `npm run verify:drift` | The spec's documented `variants`/`sizes` match the actual cva keys in component source. |
| `npm run lint:ui` | Product `.tsx`/`.jsx` source is free of hardcoded colors / raw `<button>`/`<input>`. |

`npm test` runs `validate:specs → verify:tokens → verify:drift → build → verify:renders`.
