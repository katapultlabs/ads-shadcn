# Product

## Register

product

## Users

Engineers and AI agents working with ADS Light, an agentic design system built on an accessible ShadCN foundation (Radix UI primitives + Tailwind CSS v4). Humans use the explorer to browse the ~119 component specs, inspect variants/sizes/states, tune controls, render arbitrary JSX, and review design tokens in light and dark mode. Agents use the same surface headlessly (via the MCP server and URL params) to render, screenshot, and verify UI before delivering it. The job to be done: find the right component, see exactly how it renders under the active brand theme, and trust that what's on screen is what ships.

## Product Purpose

The explorer is the human-facing window into a machine-readable design system. It exists so a person can verify, at a glance, what an agent will produce: every component, every state, every token, rendered through the live client theme. Success is when someone can pick a component, flip through its real variants/states, and immediately understand whether it fits — without reading source or guessing.

## Brand Personality

Precise and technical. Calm, dense-but-legible, information-first. The UI should feel like a well-built developer tool: confident, quiet, and exact. Voice is plain and direct — labels, not marketing. Nothing shouts; hierarchy comes from structure and restraint, not decoration.

## Anti-references

No hard constraints from the user — use judgment. By default avoid the generic AI-SaaS look (purple gradients, identical card grids, an uppercase eyebrow over every section) and decorative heaviness (oversized shadows, glassmorphism, over-rounded cards). The tool should read as engineered, not marketed.

## Design Principles

- **Show the truth.** The explorer renders real components through the real theme; never fake or approximate what ships.
- **Structure over decoration.** Hierarchy and legibility come from layout, spacing, and type — not color washes or ornament.
- **Dense but breathable.** Pack information efficiently while keeping scan-ability and comfortable tap/scroll targets.
- **Brand-driven, not hardcoded.** Visual identity flows from theme tokens (`client-theme.json` compiled into shadcn CSS variables / semantic Tailwind tokens), so the explorer restyles with the brand.
- **Verify before ship.** Every surface is render- and a11y-checked; the tool practices the discipline it enforces.

## Accessibility & Inclusion

Target WCAG 2.1 AA. Body text ≥4.5:1 contrast (placeholders included); large text ≥3:1. Full light/dark support via theme tokens. Keyboard-navigable controls, visible focus rings, and reduced-motion alternatives for any animation. The component sweep already runs axe-core; the explorer chrome should hold the same bar.
