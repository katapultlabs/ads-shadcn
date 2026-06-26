import React, { useEffect, useMemo, useState } from "react";
import * as Babel from "@babel/standalone";
import * as Lucide from "lucide-react";
import { Moon, Sun, Search, Palette, Check, Ban, ChevronRight, Copy, Hexagon } from "lucide-react";
import spec from "../ads.components.json";
import { lucideIconNames } from "./generated/lucide-icons.generated.js";
import { tokenData } from "./tokens/token-data.generated.js";
import { scope } from "./components/registry";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PortalContainerContext } from "@/lib/portal";
import { RotateCcw, Link2 } from "lucide-react";

/* ---------------------------------------------------------------------------
   ADS Light Explorer (ShadCN foundation).

   Renders authored JSX against the ShadCN component registry. URL contract is
   preserved from the Chakra build:
     /?component=Button            select a known component
     /?code=<base64url-jsx>        render arbitrary JSX
     /?colorMode=dark              render in dark mode (.dark ancestor)
   Render target is always #ads-render-target.
--------------------------------------------------------------------------- */

type Example = { name: string; jsx: string };
type ComponentSpec = {
  name: string;
  category: string;
  description?: string;
  variants?: string[];
  sizes?: string[];
  states?: string[];
  keyProps?: ({ name: string } | string)[];
  whenToUse?: string[];
  neverUseFor?: string[];
  relatedComponents?: string[];
  examples?: Example[];
  controls?: Control[];
  utility?: boolean;
  accessibility?: string[];
  propMetadata?: Record<string, { type?: string; default?: unknown; values?: string[]; description?: string }>;
  anatomy?: { root?: string; slots?: string[]; requiredParts?: string[]; optionalParts?: string[]; composition?: string };
  behavior?: { type?: string; interactive?: boolean; hasDisclosure?: boolean; acceptsUserInput?: boolean; supportsAsync?: boolean; keyboard?: string; renderVerification?: string };
  agentHints?: {
    priority?: string;
    queryTerms?: string[];
    selectionCriteria?: Record<string, string>;
    generationRules?: string[];
    controlCoverage?: { count?: number; names?: string[] };
  };
};

// Canonical, control-aware name for the current preview — e.g.
// "secondary-lg--button", "disabled--input". Bare slug when untouched.
function buildVariantName(component: ComponentSpec, values: Record<string, string>): string {
  const slug = component.name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  const kebab = (s: string) => String(s).replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  const parts: string[] = [];
  for (const key of ["variant", "size"]) {
    const v = values[key];
    if (v && v !== "default") parts.push(kebab(v));
  }
  for (const c of injectableControls(component.controls as Control[])) {
    if (["variant", "size", "state", "label", "value", "placeholder", "description", "icon", "leftIcon", "rightIcon"].includes(c.name)) continue;
    const v = values[c.name];
    if (c.type === "boolean" && v === "true") parts.push(kebab(c.name));
  }
  if (values.state && values.state !== "default") parts.push(kebab(values.state));
  return parts.length ? `${parts.join("-")}--${slug}` : slug;
}

const components = (spec as { components: ComponentSpec[] }).components;

// Icon scope for rendered snippets (bare names). Registry components win on any
// name collision (e.g. Table, List, Link, Image, Calendar).
const iconScope: Record<string, unknown> = {};
for (const name of lucideIconNames) {
  const icon = (Lucide as Record<string, unknown>)[name];
  if (icon) iconScope[name] = icon;
}
const renderScope: Record<string, unknown> = { ...iconScope, ...scope };

const NAV_ORDER = ["Foundations", "Inputs", "Data display", "Feedback", "Navigation", "Surfaces", "Layout"];

type Control = {
  name: string;
  label: string;
  type: string;
  options?: string[];
  default?: unknown;
  bindsTo?: string;
};

// Content/slot control names that map to children/text rather than a plain
// attribute. `label` replaces the primary element's visible text; `icon`
// prepends a lucide icon; `value` becomes defaultValue on inputs.
const TEXT_CONTENT_CONTROLS = new Set(["label", "value", "placeholder", "description"]);

// Props that exist but have no visible effect in a static preview — hidden so
// every control shown actually changes the render (the explorer's contract).
const NON_VISUAL_CONTROLS = new Set(["asChild", "decorative", "render", "as"]);

// Every meaningful control the explorer surfaces — matching the Chakra panel's
// breadth: variant/size axes, the state simulator, boolean props, prop selects,
// and content controls (label/value/placeholder/icon). The spec's `controls`
// are already curated by the enricher, so we show essentially all of them.
function injectableControls(controls: Control[] = []): Control[] {
  // All states are now renderable: disabled/invalid/readOnly/loading/checked/open
  // map to real props; hover/focus/active are forced visually via data-ads-force.
  return controls.filter((c) => {
    if (NON_VISUAL_CONTROLS.has(c.name)) return false;
    if (c.name === "state") return (c.options ?? []).length > 1;
    if (c.type === "boolean" || c.type === "number") return true;
    if (c.type === "select") return (c.options ?? []).filter((o) => o !== "default").length > 0;
    if (c.type === "text") return TEXT_CONTENT_CONTROLS.has(c.name);
    return false;
  });
}

function controlDefaults(controls: Control[] = []): Record<string, string> {
  const out: Record<string, string> = {};
  for (const c of injectableControls(controls)) {
    out[c.name] = c.type === "boolean" ? String(c.default === true) : String(c.default ?? (c.name === "state" ? "default" : ""));
  }
  return out;
}

// Map a control name+value to the JSX attribute(s) to inject. `state` simulates
// data/interaction states; only `disabled` maps to a real attribute, the rest
// are recorded as data-state for components that honor it.
function controlToAttrs(name: string, value: string, type: string): Record<string, string | boolean> {
  if (type === "boolean") return value === "true" ? { [name]: true } : {};
  if (value === "" || value == null) return {};
  if (name === "state") {
    if (value === "disabled") return { disabled: true };
    if (value === "invalid") return { "aria-invalid": true };
    if (value === "readOnly") return { readOnly: true };
    if (value === "checked") return { defaultChecked: true };
    if (value === "open") return { defaultOpen: true };
    // hover/focus/active/loading are rendered via data-ads-force or the builder.
    return {};
  }
  if (name === "value") return value === "default" ? {} : { defaultValue: value };
  if (name === "placeholder") return { placeholder: value };
  // label/description/icon are content/slot controls, handled in applyControls.
  if (["label", "description", "icon", "leftIcon", "rightIcon"].includes(name)) return {};
  if (value === "default") return {};
  return { [name]: value };
}

// Replace the first visible text run of the snippet (the primary element's
// label), so the `label` content control mutates the preview.
function injectText(source: string, label: string): string {
  return source.replace(/>([^<>{}]+)</, () => `>${label.replace(/[<>{}]/g, "")}<`);
}

// Prepend a lucide icon as the first child of the primary element.
function injectIcon(source: string, icon: string): string {
  const m = source.match(/<[A-Z][A-Za-z0-9]*\b[^>]*?>/);
  if (!m || m[0].endsWith("/>")) return source;
  const idx = (m.index ?? 0) + m[0].length;
  return `${source.slice(0, idx)}<${icon} className="size-4" />${source.slice(idx)}`;
}

// Inject attrs into the first PascalCase JSX element of the snippet (the primary
// component instance), replacing any attribute it already sets. Brace/quote-aware
// walk to the end of the opening tag. Returns the source unchanged if no tag found.
function injectFirstTag(source: string, attrs: Record<string, string | boolean>): string {
  const entries = Object.entries(attrs);
  if (!entries.length) return source;
  const m = source.match(/<([A-Z][A-Za-z0-9]*)\b/);
  if (!m) return source;
  const attrsStart = m.index! + m[0].length;
  let i = attrsStart;
  let depth = 0;
  let quote: string | null = null;
  for (; i < source.length; i += 1) {
    const ch = source[i];
    if (quote) { if (ch === quote) quote = null; }
    else if (ch === '"' || ch === "'") quote = ch;
    else if (ch === "{") depth += 1;
    else if (ch === "}") depth -= 1;
    else if (ch === ">" && depth === 0) break;
  }
  if (i >= source.length) return source;
  const selfClose = source[i - 1] === "/";
  let body = source.slice(attrsStart, selfClose ? i - 1 : i);
  for (const [name, value] of entries) {
    const rendered = value === true ? ` ${name}` : ` ${name}="${String(value).replace(/"/g, "&quot;")}"`;
    const existing = new RegExp(`\\s${name.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}(?:=(?:"[^"]*"|'[^']*'|\\{[^{}]*\\}))?(?=\\s|/|>|$)`);
    body = existing.test(body) ? body.replace(existing, rendered) : `${body}${rendered}`;
  }
  return `${source.slice(0, attrsStart)}${body}${selfClose ? " /" : ""}${source.slice(i)}`;
}

const jsxText = (s: string | undefined) => String(s ?? "").replace(/[<>{}"]/g, "").trim();
const iconEl = (name: string | undefined) => (name && name !== "default" ? `<${name} className="size-4" />` : "");

// Per-component controlled builders (the Chakra `buildControlledCode` approach):
// rebuild a single clean instance from the control values so every control —
// variant, size, state, label, and the icon-left/right toggles + pickers — is
// coherent and reversible. Returns null for components that fall back to
// attribute injection on the example.
function buildControlled(component: ComponentSpec, v: Record<string, string>): string | null {
  const name = component.name;
  const variant = v.variant && v.variant !== "default" ? ` variant="${v.variant}"` : "";
  const sizeVal = v.size && v.size !== "default" ? v.size : "";
  const size = sizeVal ? ` size="${sizeVal}"` : "";
  const disabled = v.state === "disabled" || v.disabled === "true" ? " disabled" : "";

  switch (name) {
    case "Button": {
      const label = jsxText(v.label) || "Button";
      const left = v.iconLeft === "true" ? iconEl(v.leftIcon || v.icon || "Search") : "";
      const right = v.iconRight === "true" ? iconEl(v.rightIcon || "ChevronRight") : "";
      const loading = v.state === "loading" ? `<Loader2 className="size-4 animate-spin" />` : "";
      return `<Button${variant}${size}${disabled}>${loading}${left}${label}${right}</Button>`;
    }
    case "IconButton": {
      const icon = iconEl(v.icon || "Search") || `<Search className="size-4" />`;
      return `<Button size="${sizeVal || "icon"}"${variant}${disabled} aria-label="${jsxText(v.label) || "Action"}">${icon}</Button>`;
    }
    case "Badge":
      return `<Badge${variant}>${jsxText(v.label) || "Badge"}</Badge>`;
    case "Toggle": {
      const pressed = v.defaultPressed === "true" || v.pressed === "true" ? " defaultPressed" : "";
      const icon = iconEl(v.icon || "Bold");
      const label = jsxText(v.label) || "Toggle";
      return `<Toggle${variant}${size}${disabled}${pressed} aria-label="${label}">${icon}${label}</Toggle>`;
    }
    case "Input": {
      const type = v.type && v.type !== "default" && v.type !== "text" ? ` type="${v.type}"` : "";
      const ph = ` placeholder="${jsxText(v.placeholder) || "Email"}"`;
      const val = v.value && v.value !== "Preview value" ? ` defaultValue="${jsxText(v.value)}"` : "";
      const invalid = v["aria-invalid"] === "true" || v.state === "invalid" ? " aria-invalid" : "";
      const readOnly = v.state === "readOnly" ? " readOnly" : "";
      return `<Input className="w-64"${type}${ph}${val}${disabled}${invalid}${readOnly} />`;
    }
    case "Textarea": {
      const ph = ` placeholder="${jsxText(v.placeholder) || "Type your message…"}"`;
      const val = v.value && v.value !== "Preview value" ? ` defaultValue="${jsxText(v.value)}"` : "";
      const invalid = v.state === "invalid" ? " aria-invalid" : "";
      const readOnly = v.state === "readOnly" ? " readOnly" : "";
      return `<Textarea className="w-72"${ph}${val}${disabled}${invalid}${readOnly} />`;
    }
    case "Alert": {
      const title = jsxText(v.label) || "Heads up!";
      const desc = jsxText(v.description) || "You can add components to your app using the CLI.";
      const ico = { destructive: "<CircleAlert />", success: "<CircleCheck />", warning: "<TriangleAlert />", info: "<Info />" }[v.variant] ?? "<Terminal />";
      return `<Alert${variant} className="w-96">${ico}<AlertTitle>${title}</AlertTitle><AlertDescription>${desc}</AlertDescription></Alert>`;
    }
    case "Tabs": {
      // variant lives on TabsList, not the Tabs root — inject it there.
      const listVariant = v.variant && v.variant !== "default" ? ` variant="${v.variant}"` : "";
      return `<Tabs defaultValue="account" className="w-80"><TabsList${listVariant}><TabsTrigger value="account">Account</TabsTrigger><TabsTrigger value="password">Password</TabsTrigger></TabsList><TabsContent value="account" className="pt-2 text-sm text-muted-foreground">Account settings.</TabsContent><TabsContent value="password" className="pt-2 text-sm text-muted-foreground">Password settings.</TabsContent></Tabs>`;
    }
    case "Switch": {
      const checked = v.state === "checked" || v.defaultChecked === "true" ? " defaultChecked" : "";
      const label = jsxText(v.label) || "Airplane mode";
      return `<div className="flex items-center gap-2"><Switch id="s"${size}${checked}${disabled} /><Label htmlFor="s">${label}</Label></div>`;
    }
    case "Checkbox": {
      const checked = v.state === "checked" || v.defaultChecked === "true" ? " defaultChecked" : "";
      const label = jsxText(v.label) || "Accept terms";
      return `<div className="flex items-center gap-2"><Checkbox id="c"${checked}${disabled} /><Label htmlFor="c">${label}</Label></div>`;
    }
    case "Card": {
      const title = jsxText(v.label) || "Card title";
      const desc = jsxText(v.description) || "Card description and supporting copy.";
      return `<Card className="w-80"><CardHeader><CardTitle>${title}</CardTitle><CardDescription>${desc}</CardDescription></CardHeader><CardContent className="text-sm text-muted-foreground">Body content goes here.</CardContent></Card>`;
    }
    default:
      return null;
  }
}

function applyControls(component: ComponentSpec, base: string, values: Record<string, string>): string {
  const built = buildControlled(component, values);
  if (built !== null) return built;
  // Generic fallback: inject attrs into the primary element of the example.
  let attrs: Record<string, string | boolean> = {};
  let label: string | null = null;
  let icon: string | null = null;
  for (const c of injectableControls(component.controls as Control[])) {
    const v = values[c.name];
    if (c.name === "label") { if (v && v !== c.default) label = v; continue; }
    if (["icon", "leftIcon", "rightIcon"].includes(c.name)) { if (v && v !== "default") icon = v; continue; }
    attrs = { ...attrs, ...controlToAttrs(c.name, v, c.type) };
  }
  let out = injectFirstTag(base, attrs);
  if (icon) out = injectIcon(out, icon);
  if (label) out = injectText(out, label);
  return out;
}

function decodeBase64Url(value: string): string {
  if (!value) return "";
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const bytes = Uint8Array.from(atob(normalized), (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function encodeBase64Url(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function normalizeSnippet(source: string): string {
  const trimmed = source.trim();
  if (!trimmed) return "return null;";
  if (trimmed.startsWith("<")) return `return (${trimmed});`;
  if (/\breturn\b/.test(trimmed)) return trimmed;
  return `return (${trimmed});`;
}

function renderSnippet(source: string): React.ReactNode {
  const prepared = normalizeSnippet(source);
  const executable = `function __ADS_RENDER__() {\n${prepared}\n}\nconst __ADS_RESULT__ = __ADS_RENDER__();`;
  const transformed = Babel.transform(executable, { presets: [["react", { runtime: "classic" }]] }).code as string;
  const scopeKeys = Object.keys(renderScope);
  const scopeValues = Object.values(renderScope);
  // eslint-disable-next-line no-new-func
  const factory = new Function("React", ...scopeKeys, `${transformed}\nreturn __ADS_RESULT__;`);
  return factory(React, ...scopeValues);
}

class RenderBoundary extends React.Component<
  { code: string; children: React.ReactNode },
  { error: string | null }
> {
  state = { error: null as string | null };
  static getDerivedStateFromError(error: Error) {
    return { error: error.message };
  }
  componentDidUpdate(prev: { code: string }) {
    if (prev.code !== this.props.code && this.state.error) this.setState({ error: null });
  }
  render() {
    if (this.state.error) {
      return (
        <div className="rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          <p className="font-semibold">Render failed</p>
          <p className="mt-1 font-mono text-xs">{this.state.error}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const FORCE_STATES = ["hover", "focus", "focus-visible", "active"];

function Preview({ code, dark, forceState }: { code: string; dark: boolean; forceState?: string }) {
  // Render the snippet only after #ads-portal-root mounts, so Radix portals
  // (which read their container during render) resolve to the in-target node.
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);

  let node: React.ReactNode = null;
  if (portalEl) {
    try {
      node = renderSnippet(code);
    } catch (error) {
      node = (
        <div className="rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          <p className="font-semibold">Render failed</p>
          <p className="mt-1 font-mono text-xs">{String((error as Error)?.message ?? error)}</p>
        </div>
      );
    }
  }
  // data-ads-force makes the component's real hover/focus/active Tailwind
  // utilities apply statically (the variants are redefined in index.css).
  const force = forceState && FORCE_STATES.includes(forceState) ? forceState : undefined;
  return (
    <div className={cn(dark && "dark")}>
      <div
        id="ads-render-target"
        data-color-mode={dark ? "dark" : "light"}
        data-ads-force={force}
        // `transform` makes this a containing block so portaled overlays
        // (Dialog/Popover/…) that are position:fixed render inside the target
        // instead of escaping to the page; overflow-hidden clips them to it.
        style={{ transform: "translateZ(0)" }}
        className="relative grid min-h-64 place-items-center overflow-hidden rounded-lg border border-border bg-background p-8 text-foreground"
      >
        <div id="ads-portal-root" ref={setPortalEl} />
        {portalEl ? (
          <PortalContainerContext.Provider value={portalEl}>
            <RenderBoundary code={code}>{node}</RenderBoundary>
          </PortalContainerContext.Provider>
        ) : null}
      </div>
    </div>
  );
}

function useInitialState() {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("component") ?? "Button";
    const encoded = params.get("code");
    const component = components.find((c) => c.name === name) ?? components[0];
    const base = component.examples?.[0]?.jsx ?? `<Button>Preview</Button>`;
    // Apply any control params (?variant=…&size=…&state=…) — the contract the
    // MCP render_controlled_component tool builds — onto the base example.
    const values = controlDefaults(component.controls as Control[]);
    let touched = false;
    for (const c of injectableControls(component.controls as Control[])) {
      const v = params.get(c.name);
      if (v != null) { values[c.name] = v; touched = true; }
    }
    const code = encoded
      ? decodeBase64Url(encoded)
      : touched
        ? applyControls(component, base, values)
        : base;
    return {
      name: component.name,
      base,
      code,
      values,
      sandbox: Boolean(encoded),
      dark: params.get("colorMode") === "dark",
      view: params.get("view") ?? "component",
    };
  }, []);
}

function NavList({
  list,
  selected,
  onSelect,
}: {
  list: ComponentSpec[];
  selected: string;
  onSelect: (name: string) => void;
}) {
  const groups = new Map<string, ComponentSpec[]>();
  for (const c of list) {
    const arr = groups.get(c.category) ?? [];
    arr.push(c);
    groups.set(c.category, arr);
  }
  const ordered = [
    ...NAV_ORDER.filter((c) => groups.has(c)).map((c) => [c, groups.get(c)!] as const),
    ...[...groups].filter(([c]) => !NAV_ORDER.includes(c)),
  ];
  if (!ordered.length) {
    return <p className="px-2 text-sm text-muted-foreground">No components match.</p>;
  }
  return (
    <div className="space-y-4">
      {ordered.map(([category, items]) => (
        <div key={category}>
          <div className="mb-1 flex items-center justify-between px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <span>{category}</span>
            <span>{items.length}</span>
          </div>
          {items.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => onSelect(c.name)}
              className={cn(
                "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-sm",
                selected === c.name ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent",
              )}
            >
              {c.name}
              {c.variants?.length ? (
                <span className={cn("text-xs", selected === c.name ? "text-primary-foreground/70" : "text-muted-foreground")}>
                  {c.variants.length}v
                </span>
              ) : null}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

type Token = { name: string; value: string; layer: string; category: string; role: string; mode: string; description?: string };
const allTokens = (tokenData as { tokens: Token[] }).tokens;
const byCategory = (tokenData as { byCategory: Record<string, number> }).byCategory ?? {};
const isColor = (v: string) => /^#|^rgb|^hsl|^oklch|linear-gradient/.test(v);
const tokenLabel = (n: string) => n.replace(/^--/, "");

function TokenCard({ token, compact = false }: { token: Token; compact?: boolean }) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-border bg-card p-2">
      {isColor(token.value) ? (
        <span className="size-9 shrink-0 rounded-md border border-border" style={{ background: token.value }} />
      ) : (
        <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-muted">
          {token.name.includes("space") ? <span className="h-1 bg-primary" style={{ width: token.value }} /> : null}
          {token.name.includes("radius") ? <span className="size-5 border border-primary" style={{ borderRadius: token.value }} /> : null}
          {token.name.includes("shadow") || token.category === "elevation" ? <span className="size-5 rounded bg-card" style={{ boxShadow: token.value }} /> : null}
          {(token.category === "motion" || token.name.includes("duration") || token.name.includes("ease")) ? <span className="size-2 rounded-full bg-primary" /> : null}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block truncate font-mono text-xs text-foreground">{tokenLabel(token.name)}</span>
        <span className="block truncate font-mono text-[11px] text-muted-foreground">{token.value}</span>
        {!compact && token.description ? <span className="mt-0.5 block truncate text-[11px] text-muted-foreground">{token.description}</span> : null}
      </span>
    </div>
  );
}

function TokenSection({ eyebrow, title, count, children }: { eyebrow: string; title: string; count: number; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{eyebrow}</p>
          <h3 className="font-heading text-lg font-semibold">{title}</h3>
        </div>
        <span className="rounded-md bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">{count} tokens</span>
      </div>
      {children}
    </section>
  );
}

function TokensView() {
  const [q, setQ] = useState("");
  const ql = q.trim().toLowerCase();
  const match = (t: Token) => !ql || t.name.toLowerCase().includes(ql) || (t.description ?? "").toLowerCase().includes(ql);
  const group = (fn: (t: Token) => boolean) => allTokens.filter((t) => fn(t) && match(t));

  const primitiveColors = group((t) => t.category === "color" && t.role === "primitive");
  const lightSemantic = group((t) => t.role === "semantic" && t.category === "color" && t.mode === "light");
  const darkSemantic = group((t) => t.role === "semantic" && t.category === "color" && t.mode === "dark");
  const typography = group((t) => t.layer === "typography");
  const spacing = group((t) => t.category === "spacing");
  const radius = group((t) => t.category === "radius");
  const borders = group((t) => t.category === "border" || t.category === "opacity" || t.category === "breakpoint");
  const elevation = group((t) => t.category === "elevation");
  const motion = group((t) => t.category === "motion");
  const component = group((t) => t.layer === "component");
  const grid = "grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3";

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-10">
          {Object.entries(byCategory).map(([cat, n]) => (
            <div key={cat} className="rounded-md border border-border bg-card px-2 py-1.5 text-center">
              <div className="font-heading text-base font-semibold">{n}</div>
              <div className="truncate text-[10px] uppercase tracking-wide text-muted-foreground">{cat}</div>
            </div>
          ))}
        </div>
      </div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={`Search ${allTokens.length} tokens…`}
        className="h-9 w-full max-w-sm rounded-md border border-input bg-transparent px-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
      />

      {primitiveColors.length ? (
        <TokenSection eyebrow="Colors" title="Primitive palette" count={primitiveColors.length}>
          <div className={grid}>{primitiveColors.map((t) => <TokenCard key={t.name} token={t} compact />)}</div>
        </TokenSection>
      ) : null}

      {(lightSemantic.length || darkSemantic.length) ? (
        <TokenSection eyebrow="Themes" title="Semantic colors (light + dark)" count={lightSemantic.length + darkSemantic.length}>
          <div className="grid gap-4 xl:grid-cols-2">
            <div><p className="mb-2 text-sm font-medium">Light</p><div className="grid gap-2">{lightSemantic.map((t) => <TokenCard key={t.name} token={t} compact />)}</div></div>
            <div className="dark rounded-lg bg-background p-3"><p className="mb-2 text-sm font-medium text-foreground">Dark</p><div className="grid gap-2">{darkSemantic.map((t) => <TokenCard key={t.name} token={t} compact />)}</div></div>
          </div>
        </TokenSection>
      ) : null}

      {typography.length ? (
        <TokenSection eyebrow="Typography" title="Type scale" count={typography.length}>
          <div className={grid}>{typography.map((t) => <TokenCard key={t.name} token={t} compact />)}</div>
        </TokenSection>
      ) : null}

      {(spacing.length || radius.length || borders.length) ? (
        <TokenSection eyebrow="Layout" title="Spacing, radius, borders" count={spacing.length + radius.length + borders.length}>
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="grid gap-2">{spacing.map((t) => <TokenCard key={t.name} token={t} compact />)}</div>
            <div className="grid gap-2">{radius.map((t) => <TokenCard key={t.name} token={t} compact />)}</div>
            <div className="grid gap-2">{borders.map((t) => <TokenCard key={t.name} token={t} compact />)}</div>
          </div>
        </TokenSection>
      ) : null}

      {(elevation.length || motion.length) ? (
        <TokenSection eyebrow="Behavior" title="Elevation + motion" count={elevation.length + motion.length}>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="grid gap-2">{elevation.map((t) => <TokenCard key={t.name} token={t} compact />)}</div>
            <div className="grid gap-2">{motion.map((t) => <TokenCard key={t.name} token={t} compact />)}</div>
          </div>
        </TokenSection>
      ) : null}

      {component.length ? (
        <TokenSection eyebrow="Components" title="Component tokens" count={component.length}>
          <div className={grid}>{component.map((t) => <TokenCard key={t.name} token={t} compact />)}</div>
        </TokenSection>
      ) : null}
    </div>
  );
}

function IconsView() {
  const [q, setQ] = useState("");
  const filtered = lucideIconNames.filter((n) => n.toLowerCase().includes(q.toLowerCase())).slice(0, 240);
  return (
    <div className="space-y-4">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search icons…"
        className="h-9 w-full max-w-sm rounded-md border border-input bg-transparent px-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
      />
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {filtered.map((name) => {
          const Icon = (Lucide as Record<string, React.ComponentType<{ size?: number }>>)[name];
          return (
            <div key={name} className="flex flex-col items-center gap-1 rounded-md border border-border p-3 text-center">
              {Icon ? <Icon size={20} /> : null}
              <span className="truncate text-[10px] text-muted-foreground">{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MiniPreview({ code }: { code: string }) {
  let node: React.ReactNode;
  try {
    node = renderSnippet(code);
  } catch {
    node = <span className="text-xs text-destructive">render error</span>;
  }
  return <RenderBoundary code={code}>{node}</RenderBoundary>;
}

export default function App() {
  const initial = useInitialState();
  const [query, setQuery] = useState("");
  const [selectedName, setSelectedName] = useState(initial.name);
  const [baseCode, setBaseCode] = useState(initial.base);
  const [code, setCode] = useState(initial.code);
  const [controlValues, setControlValues] = useState<Record<string, string>>(initial.values);
  const [sandbox, setSandbox] = useState(initial.sandbox);
  const [dark, setDark] = useState(initial.dark);
  const [view, setView] = useState(initial.view);

  const selected = components.find((c) => c.name === selectedName) ?? components[0];
  const controls = injectableControls(selected.controls as Control[]);
  // Overlays portal a single instance into the preview; rendering them in
  // multi-tile galleries would spawn several escaping overlays, so skip galleries.
  const isOverlay = Boolean(selected.behavior?.hasDisclosure);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const syncUrl = (name: string, nextCode: string, isSandbox: boolean, nextDark = dark, nextView = view) => {
    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("component", name);
    if (nextView !== "component") url.searchParams.set("view", nextView);
    if (isSandbox) url.searchParams.set("code", encodeBase64Url(nextCode));
    if (nextDark) url.searchParams.set("colorMode", "dark");
    window.history.replaceState(null, "", url);
  };

  const selectComponent = (name: string) => {
    const next = components.find((c) => c.name === name)!;
    const nextCode = next.examples?.[0]?.jsx ?? `<Button>Preview</Button>`;
    setSelectedName(name);
    setBaseCode(nextCode);
    setControlValues(controlDefaults(next.controls as Control[]));
    setCode(nextCode);
    setSandbox(false);
    setView("component");
    syncUrl(name, nextCode, false, dark, "component");
  };

  const pickExample = (jsx: string) => {
    setBaseCode(jsx);
    setControlValues(controlDefaults(selected.controls as Control[]));
    setCode(jsx);
    setSandbox(false);
    syncUrl(selectedName, jsx, false);
  };

  const setControl = (name: string, value: string) => {
    const nextValues = { ...controlValues, [name]: value };
    const nextCode = applyControls(selected, baseCode, nextValues);
    setControlValues(nextValues);
    setCode(nextCode);
    setSandbox(false);
    syncUrl(selectedName, nextCode, true);
  };

  const editCode = (value: string) => {
    setBaseCode(value);
    setCode(value);
    setSandbox(true);
    syncUrl(selectedName, value, true);
  };

  const resetControls = () => {
    const base = selected.examples?.[0]?.jsx ?? `<Button>Preview</Button>`;
    setBaseCode(base);
    setControlValues(controlDefaults(selected.controls as Control[]));
    setCode(base);
    setSandbox(false);
    syncUrl(selectedName, base, false);
  };

  const [copied, setCopied] = useState(false);
  const copyUrl = () => {
    navigator.clipboard?.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  const touched = controls.some((c) => {
    const d = c.type === "boolean" ? String(c.default === true) : String(c.default ?? (c.name === "state" ? "default" : ""));
    return (controlValues[c.name] ?? d) !== d;
  });

  const filtered = components.filter((c) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return [
      c.name,
      c.category,
      c.description,
      c.variants?.join(" "),
      c.whenToUse?.join(" "),
      c.keyProps?.map((p) => (typeof p === "string" ? p : p.name)).join(" "),
    ]
      .join(" ")
      .toLowerCase()
      .includes(q);
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1560px] flex-wrap items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Hexagon size={18} />
            </div>
            <div>
              <h1 className="font-heading text-base font-semibold">ADS Light Explorer</h1>
              <p className="text-xs text-muted-foreground">ShadCN foundation · machine-readable spec · live brand theme</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">{components.length} specs</span>
            <button
              type="button"
              onClick={() => { setView("tokens"); syncUrl(selectedName, code, sandbox, dark, "tokens"); }}
              className={cn("inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-sm", view === "tokens" ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-accent")}
            >
              <Palette size={15} /> Tokens
            </button>
            <button
              type="button"
              onClick={() => { setView("icons"); syncUrl(selectedName, code, sandbox, dark, "icons"); }}
              className={cn("inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-sm", view === "icons" ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-accent")}
            >
              <Search size={15} /> Icons
            </button>
            <button
              type="button"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={dark}
              onClick={() => { const d = !dark; setDark(d); syncUrl(selectedName, code, sandbox, d); }}
              className="inline-flex size-9 items-center justify-center rounded-md border border-border hover:bg-accent"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1560px] gap-5 px-4 py-5 lg:grid-cols-[280px_minmax(0,1fr)]">
        <nav className="lg:sticky lg:top-20 lg:self-start">
          <div className="relative mb-3">
            <Search size={15} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search components…"
              className="h-9 w-full rounded-md border border-input bg-transparent pl-8 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <div className="max-h-[calc(100vh-9rem)] overflow-auto pr-1">
            <NavList list={filtered} selected={selectedName} onSelect={selectComponent} />
          </div>
        </nav>

        <main className="min-w-0">
          {view === "tokens" ? (
            <TokensView />
          ) : view === "icons" ? (
            <IconsView />
          ) : (
            <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
              <div className="min-w-0 space-y-5">
                <section className="rounded-xl border border-border bg-card p-5">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2">
                        <h2 className="font-heading text-xl font-semibold">{selected.name}</h2>
                        <span className="text-sm text-muted-foreground">{selected.category}</span>
                      </div>
                      <code className="mt-1 block font-mono text-xs text-muted-foreground" title="Canonical name for the current controls">
                        {buildVariantName(selected, controlValues)}
                      </code>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {(selected.variants?.length ?? 0) > 0 ? <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">{selected.variants!.length} variants</span> : null}
                      {(selected.sizes?.length ?? 0) > 0 ? <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">{selected.sizes!.length} sizes</span> : null}
                      {(selected.states?.length ?? 0) > 0 ? <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">{selected.states!.length} states</span> : null}
                      <button type="button" onClick={copyUrl} aria-label="Copy preview URL" className="inline-flex size-8 items-center justify-center rounded-md border border-border hover:bg-accent">
                        {copied ? <Check size={14} className="text-success" /> : <Link2 size={14} />}
                      </button>
                    </div>
                  </div>
                  <Preview code={code} dark={dark} forceState={controlValues.state} />
                </section>

                {selected.examples?.length ? (
                  <section className="rounded-xl border border-border bg-card p-5">
                    <h3 className="mb-3 font-heading text-sm font-semibold">Examples</h3>
                    <div className="flex flex-wrap gap-2">
                      {selected.examples.map((ex) => (
                        <button
                          key={ex.name}
                          type="button"
                          onClick={() => pickExample(ex.jsx)}
                          className={cn(
                            "rounded-md border px-2.5 py-1 text-sm",
                            code === ex.jsx ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-accent",
                          )}
                        >
                          {ex.name}
                        </button>
                      ))}
                    </div>
                  </section>
                ) : null}

                {(selected.variants?.length ?? 0) > 1 && !isOverlay ? (
                  <section className="rounded-xl border border-border bg-card p-5">
                    <h3 className="mb-3 font-heading text-sm font-semibold">Variants</h3>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {selected.variants!.map((v) => (
                        <div key={v} className="rounded-lg border border-border p-4">
                          <div className="grid min-h-16 place-items-center">
                            <MiniPreview code={applyControls(selected, baseCode, { ...controlDefaults(selected.controls as Control[]), variant: v })} />
                          </div>
                          <p className="mt-2 truncate text-center font-mono text-xs text-muted-foreground">{v}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}

                {(selected.states?.length ?? 0) > 1 && !isOverlay ? (
                  <section className="rounded-xl border border-border bg-card p-5">
                    <h3 className="mb-3 font-heading text-sm font-semibold">States</h3>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {selected.states!.map((s) => (
                        <div key={s} className="rounded-lg border border-border p-4">
                          <div data-ads-force={FORCE_STATES.includes(s) ? s : undefined} className="grid min-h-16 place-items-center">
                            <MiniPreview code={applyControls(selected, baseCode, { ...controlDefaults(selected.controls as Control[]), state: s })} />
                          </div>
                          <p className="mt-2 truncate text-center font-mono text-xs text-muted-foreground">{s}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}

                <section className="rounded-xl border border-border bg-card p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-heading text-sm font-semibold">JSX render input</h3>
                    <span className="text-xs text-muted-foreground">{sandbox ? "sandbox" : "example"} · registry + lucide in scope</span>
                  </div>
                  <textarea
                    value={code}
                    onChange={(e) => editCode(e.target.value)}
                    spellCheck={false}
                    rows={8}
                    className="w-full rounded-md border border-input bg-transparent p-3 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </section>
              </div>

              <aside className="space-y-5">
                {controls.length ? (
                  <section className="rounded-xl border border-border bg-card p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-heading text-sm font-semibold">Controls</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{controls.length} live</span>
                        <button
                          type="button"
                          onClick={resetControls}
                          disabled={!touched}
                          className={cn("inline-flex items-center gap-1 rounded-md border border-border px-1.5 py-0.5 text-xs", touched ? "hover:bg-accent" : "cursor-not-allowed opacity-40")}
                        >
                          <RotateCcw size={11} /> Reset
                        </button>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {controls.map((c) =>
                        c.type === "boolean" ? (
                          <label key={c.name} className="flex items-center gap-2 text-sm">
                            <input
                              type="checkbox"
                              checked={controlValues[c.name] === "true"}
                              onChange={(e) => setControl(c.name, e.target.checked ? "true" : "false")}
                              className="size-4 rounded border-input"
                            />
                            <span className="text-foreground">{c.label}</span>
                          </label>
                        ) : c.type === "select" ? (
                          <div key={c.name} className="block">
                            <span className="mb-1 block text-xs font-medium text-muted-foreground">{c.label}</span>
                            <Select value={controlValues[c.name] || undefined} onValueChange={(v) => setControl(c.name, v)}>
                              <SelectTrigger size="sm" className="w-full">
                                <SelectValue placeholder="Select…" />
                              </SelectTrigger>
                              <SelectContent>
                                {(c.options ?? []).map((o) => (
                                  <SelectItem key={o} value={o}>{o}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        ) : (
                          <label key={c.name} className="block">
                            <span className="mb-1 block text-xs font-medium text-muted-foreground">{c.label}</span>
                            <input
                              type={c.type === "number" ? "number" : "text"}
                              value={controlValues[c.name] ?? ""}
                              onChange={(e) => setControl(c.name, e.target.value)}
                              className="h-8 w-full rounded-md border border-input bg-transparent px-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                            />
                          </label>
                        ),
                      )}
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">Controls inject into the primary element of the current example.</p>
                  </section>
                ) : null}

                <section className="rounded-xl border border-border bg-card p-5">
                  {selected.description ? <p className="mb-4 text-sm text-muted-foreground">{selected.description}</p> : null}

                  {selected.whenToUse?.length ? (
                    <div className="mb-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">When to use</p>
                      <ul className="space-y-1.5">
                        {selected.whenToUse.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm">
                            <Check size={14} className="mt-0.5 shrink-0 text-success" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {selected.neverUseFor?.length ? (
                    <div className="mb-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Never use for</p>
                      <ul className="space-y-1.5">
                        {selected.neverUseFor.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm">
                            <Ban size={14} className="mt-0.5 shrink-0 text-destructive" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {selected.relatedComponents?.length ? (
                    <div className="mb-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Related</p>
                      <div className="flex flex-wrap gap-2">
                        {selected.relatedComponents.map((name) =>
                          components.some((c) => c.name === name) ? (
                            <button key={name} type="button" onClick={() => selectComponent(name)} className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-0.5 text-xs hover:bg-accent">
                              {name} <ChevronRight size={11} />
                            </button>
                          ) : (
                            <span key={name} className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">{name}</span>
                          ),
                        )}
                      </div>
                    </div>
                  ) : null}

                  {selected.accessibility?.length ? (
                    <div className="mb-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Accessibility</p>
                      <ul className="space-y-1.5">
                        {selected.accessibility.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {selected.propMetadata && Object.keys(selected.propMetadata).length ? (
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Props</p>
                      <div className="overflow-hidden rounded-md border border-border">
                        <table className="w-full text-xs">
                          <tbody>
                            {Object.entries(selected.propMetadata).map(([name, meta]) => (
                              <tr key={name} className="border-b border-border last:border-0 align-top">
                                <td className="whitespace-nowrap px-2 py-1.5 font-mono font-medium text-foreground">{name}</td>
                                <td className="px-2 py-1.5 text-muted-foreground">
                                  {meta.values?.length ? meta.values.join(" · ") : (meta.type ?? "—")}
                                  {meta.default != null && meta.default !== "" ? <span className="text-foreground"> = {String(meta.default)}</span> : null}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : null}
                </section>

                {selected.behavior || selected.anatomy?.slots?.length ? (
                  <section className="rounded-xl border border-border bg-card p-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Behavior &amp; anatomy</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.behavior?.type ? <span className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">{selected.behavior.type}</span> : null}
                      {selected.behavior?.interactive ? <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">interactive</span> : null}
                      {selected.behavior?.acceptsUserInput ? <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">accepts input</span> : null}
                      {selected.behavior?.hasDisclosure ? <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">disclosure</span> : null}
                      {selected.behavior?.supportsAsync ? <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">async</span> : null}
                    </div>
                    {selected.anatomy?.slots?.length ? (
                      <div className="mt-3">
                        <p className="mb-1 text-xs text-muted-foreground">Slots</p>
                        <div className="flex flex-wrap gap-1.5">
                          {selected.anatomy.slots.map((s) => <code key={s} className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">{s}</code>)}
                        </div>
                      </div>
                    ) : null}
                    {selected.behavior?.keyboard ? <p className="mt-3 text-xs text-muted-foreground">{selected.behavior.keyboard}</p> : null}
                  </section>
                ) : null}

                {selected.agentHints ? (
                  <section className="rounded-xl border border-border bg-card p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Agent hints</p>
                      {selected.agentHints.priority ? <span className="rounded-md bg-accent px-1.5 py-0.5 text-xs font-medium text-accent-foreground">{selected.agentHints.priority} priority</span> : null}
                    </div>
                    {selected.agentHints.selectionCriteria?.chooseWhen ? <p className="text-sm text-foreground"><span className="text-muted-foreground">Choose when:</span> {selected.agentHints.selectionCriteria.chooseWhen}</p> : null}
                    {selected.agentHints.selectionCriteria?.avoidWhen ? <p className="mt-1 text-sm text-foreground"><span className="text-muted-foreground">Avoid when:</span> {selected.agentHints.selectionCriteria.avoidWhen}</p> : null}
                    {selected.agentHints.generationRules?.length ? (
                      <ul className="mt-3 space-y-1">
                        {selected.agentHints.generationRules.map((r) => <li key={r} className="text-xs text-muted-foreground">• {r}</li>)}
                      </ul>
                    ) : null}
                  </section>
                ) : null}
              </aside>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
