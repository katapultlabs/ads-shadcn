# ADS Light Agent Rules

ADS Light is an agentic design system. Optimize for an agent that can query, render, inspect, and correct UI output.

## Required Loop

1. Read `client-theme.json` before designing branded UI.
2. Search `components.json` before choosing components or props.
3. Use components from the spec instead of inventing local primitives.
4. Do not hardcode brand colors, fonts, radii, or button styling. Change `client-theme.json` instead.
5. Render before delivering UI work. Use the explorer URL or MCP render tools and inspect the screenshot.
6. If the screenshot is wrong, edit the code or spec and render again.

## Component Rules

- Prefer the component whose `whenToUse` matches the job.
- Respect `neverUseFor` even when the component can technically render the UI.
- Use documented variants, sizes, states, and key props.
- Add missing component knowledge to `components.json` as soon as the agent learns it.

## Brand Rules

- Per-client branches should normally change only `client-theme.json`.
- Client-specific custom components are allowed, but they must be added to `components.json`.
- Theme values are global tokens; component snippets should reference tokens or semantic color palettes.

## Render Surface

- The explorer runs at `http://127.0.0.1:4173`.
- Render a known component with `/?component=Button`.
- Render arbitrary JSX with `/?code=<base64url-jsx>`.
- The screenshot target is `#ads-render-target`.

## MCP Tools

The ADS Light MCP server exposes:

- `list_components`
- `search_components`
- `get_component`
- `list_patterns`
- `search_patterns`
- `get_pattern`
- `render_code`
- `render_component`
- `get_theme`
- `set_theme`
- `add_component`
- `update_component`

Use these tools as the default interface. Files are the source of truth.

Read `AGENT_GUIDE.md` for the decision tree before implementing product UI.
