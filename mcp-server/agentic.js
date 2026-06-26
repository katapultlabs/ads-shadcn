// Agentic layer for the ADS Light MCP server: pure helpers that let an agent
// choose components by intent, self-review generated UI against the design
// system's rules, validate a theme's contrast, and learn the system's limits —
// without a human having to look at a screenshot.

const normalize = (v) => String(v ?? "").toLowerCase();

// ---------------------------------------------------------------------------
// Contrast (WCAG) — used by set_theme validation.
// ---------------------------------------------------------------------------
export function hexToRgb(hex) {
  const n = String(hex).replace("#", "").trim();
  const full = n.length === 3 ? n.replace(/(.)/g, "$1$1") : n;
  const int = Number.parseInt(full.slice(0, 6), 16);
  if (Number.isNaN(int)) return null;
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}
function relLuminance(rgb) {
  const ch = (v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * ch(rgb.r) + 0.7152 * ch(rgb.g) + 0.0722 * ch(rgb.b);
}
function rgbToHex({ r, g, b }) {
  const c = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
  return `#${c(r)}${c(g)}${c(b)}`;
}
// Mix a hex toward white (ratio > 0) or black (ratio < 0).
function mixHex(hex, ratio) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  const target = ratio >= 0 ? 255 : 0;
  const a = Math.abs(ratio);
  return rgbToHex({ r: rgb.r + (target - rgb.r) * a, g: rgb.g + (target - rgb.g) * a, b: rgb.b + (target - rgb.b) * a });
}

export function contrastRatio(a, b) {
  const ra = hexToRgb(a);
  const rb = hexToRgb(b);
  if (!ra || !rb) return null;
  const la = relLuminance(ra);
  const lb = relLuminance(rb);
  const hi = Math.max(la, lb);
  const lo = Math.min(la, lb);
  return Math.round(((hi + 0.05) / (lo + 0.05)) * 100) / 100;
}
// Pick the higher-contrast foreground (matches generate-theme.mjs onColor), so
// validateThemeContrast checks the same text color the generator actually emits.
const onColor = (hex) => ((contrastRatio(hex, "#101828") ?? 0) >= (contrastRatio(hex, "#ffffff") ?? 0) ? "#101828" : "#ffffff");

// Validate the brand/status colors in a theme for AA contrast against the text
// that sits on them. Returns structured warnings (never throws).
export function validateThemeContrast(theme) {
  const palette = theme.palette ?? {};
  const colors = theme.colors ?? {};
  const def = (v, fb) => (v == null || v === "" ? fb : v);
  const pairs = [
    { name: "primary", bg: def(palette.primary, colors.brand600), min: 4.5 },
    { name: "destructive", bg: palette.danger, min: 4.5 },
    { name: "success", bg: palette.success, min: 4.5 },
    { name: "warning", bg: palette.warning, min: 4.5 },
    { name: "info", bg: palette.info, min: 4.5 },
  ];
  const warnings = [];
  for (const p of pairs) {
    if (!p.bg) continue;
    const fg = onColor(p.bg);
    const ratio = contrastRatio(p.bg, fg);
    if (ratio != null && ratio < p.min) {
      warnings.push({
        token: p.name,
        background: p.bg,
        foreground: fg,
        contrast: ratio,
        required: p.min,
        message: `${p.name} (${p.bg}) has ${ratio}:1 contrast with its ${fg} text — below AA ${p.min}:1. Choose a darker/stronger ${p.name} color.`,
      });
    }
  }
  return warnings;
}

// ---------------------------------------------------------------------------
// review_ui — static + rendered checks against the design-system rules.
// ---------------------------------------------------------------------------
const RAW_HEX = /#[0-9a-fA-F]{3,8}\b/g;
const RAW_FN = /\b(?:rgba?|hsla?)\s*\(/g;

export function reviewFindings(code, report) {
  const findings = [];
  const src = String(code ?? "");
  const add = (severity, rule, message, fix) => findings.push({ severity, rule, message, fix });

  // Hardcoded colors — brand rule.
  const hex = [...new Set(src.match(RAW_HEX) ?? [])].filter((h) => !/^#?(fff|ffffff|000|000000)$/i.test(h.replace("#", "")));
  if (hex.length) add("error", "no-hardcoded-color", `Hardcoded color(s): ${hex.join(", ")}.`, "Use semantic Tailwind tokens (bg-primary, text-muted-foreground, border-border, bg-destructive).");
  if (RAW_FN.test(src)) add("error", "no-hardcoded-color", "Hardcoded rgb()/hsl() color.", "Use semantic Tailwind tokens instead of raw color functions.");

  // Raw HTML elements where a system component exists.
  if (/<button[\s>]/.test(src)) add("warn", "prefer-component", "Raw <button> used.", "Use the <Button> component so variants, sizes, and focus styles come from the system.");
  if (/<input[\s>]/.test(src) && !/type=["']file["']/.test(src)) add("warn", "prefer-component", "Raw <input> used.", "Use the <Input> component (or InputGroup) for consistent field styling.");

  // Multiple primary actions in one region (default-variant Buttons).
  const buttonTags = src.match(/<Button\b[^>]*>/g) ?? [];
  const primaryButtons = buttonTags.filter((t) => !/variant=/.test(t) || /variant=["']default["']/.test(t));
  if (primaryButtons.length > 1) add("warn", "single-primary-action", `${primaryButtons.length} primary (default) Buttons in one snippet.`, "Keep one primary Button; downgrade the rest to variant=\"outline\" or \"ghost\".");

  // Signals from the rendered snapshot.
  const snap = report?.snapshot;
  if (snap?.nestedCards) add("warn", "no-nested-cards", "A Card is nested inside another Card.", "Use Stack/Separator/Box inside the Card instead of nesting Cards.");
  if (snap?.overflow) add("warn", "overflow", "Rendered content overflows/clips its container.", "Increase the width, wrap content, or reduce copy length.");
  if (report?.renderFailed) add("error", "render-failed", "The JSX failed to render.", "Fix the JSX — check component names (flat exports like <CardHeader>) and props.");
  for (const e of report?.errors ?? []) add("error", "console-error", e.split("\n")[0], "Resolve the runtime error before delivering.");

  // Accessibility (axe serious/critical).
  for (const v of report?.a11y?.violations ?? []) {
    add(v.impact === "critical" ? "error" : "warn", `a11y:${v.id}`, `${v.help} (${v.nodes} node${v.nodes === 1 ? "" : "s"}).`, "Add the missing label/role/name or fix the contrast.");
  }
  return findings;
}

// ---------------------------------------------------------------------------
// fix_ui — apply the deterministic, mechanical fixes review_ui asks for, so the
// agent self-heals instead of being told. Only safe, reversible transforms run
// automatically; structural/judgment fixes (nested cards, too many primary
// actions, overflow, a11y) are returned as `manual` with guidance.
// ---------------------------------------------------------------------------
const ALLOW_BW_HEX = /^#?(?:fff|ffffff|000|000000)$/i;
const colorDist = (a, b) => {
  const x = hexToRgb(a);
  const y = hexToRgb(b);
  if (!x || !y) return Infinity;
  return (x.r - y.r) ** 2 + (x.g - y.g) ** 2 + (x.b - y.b) ** 2;
};

// Build the set of semantic color tokens (light mode) an agent should be using,
// as Tailwind class roots: --muted-foreground → "muted-foreground".
function semanticColorTokens(tokens = []) {
  return tokens
    .filter((t) => t.category === "color" && t.role === "semantic" && t.mode === "light" && /^#/.test(t.value ?? ""))
    .map((t) => ({ klass: t.name.replace(/^--/, ""), hex: t.value }));
}

// Nearest semantic token to a hex, given a utility prefix. Foreground tokens are
// only sensible for text/fill; surface tokens only for bg/border/ring.
function nearestToken(hex, prefix, semantic) {
  const isFg = prefix === "text" || prefix === "fill" || prefix === "stroke";
  const pool = semantic.filter((t) =>
    isFg ? true : !t.klass.endsWith("-foreground")
  );
  let best = null;
  let bestD = Infinity;
  for (const t of pool) {
    const d = colorDist(hex, t.hex);
    if (d < bestD) { bestD = d; best = t; }
  }
  return best ? `${prefix}-${best.klass}` : null;
}

export function autoFix(code, tokens = []) {
  const semantic = semanticColorTokens(tokens);
  let src = String(code ?? "");
  const changes = [];
  const record = (rule, from, to) => changes.push({ rule, from, to });

  // 1. Arbitrary-value color utilities → nearest semantic token.
  //    bg-[#3b82f6] | text-[#666] | border-[#d8dee8] | ring-[#145fc4] | fill-[#...]
  src = src.replace(
    /\b(bg|text|border|ring|fill|stroke|from|via|to|outline|divide|shadow|accent|caret|decoration)-\[(#[0-9a-fA-F]{3,8})\]/g,
    (match, prefix, hex) => {
      if (ALLOW_BW_HEX.test(hex)) return match; // pure black/white allowed
      const repl = nearestToken(hex, prefix === "from" || prefix === "via" || prefix === "to" ? "bg" : prefix, semantic);
      if (!repl) return match;
      // keep the original prefix for gradient/border-side utilities
      const finalRepl = ["from", "via", "to"].includes(prefix) ? `${prefix}-${repl.replace(/^bg-/, "")}` : repl;
      record("no-hardcoded-color", match, finalRepl);
      return finalRepl;
    }
  );

  // 2. Raw <button> → <Button>, raw <input> → <Input> (skip file inputs).
  if (/<button[\s>]/.test(src)) {
    src = src.replace(/<button(\s|>)/g, "<Button$1").replace(/<\/button>/g, "</Button>");
    record("prefer-component", "<button>", "<Button>");
  }
  src = src.replace(/<input\b([^>]*?)\/?>/g, (match, attrs) => {
    if (/type=["']file["']/.test(attrs)) return match;
    record("prefer-component", "<input>", "<Input>");
    return `<Input${attrs}/>`;
  });

  // What review_ui would still flag after these edits — i.e. what needs a human
  // or model decision, not a mechanical rewrite.
  const manual = [];
  if (/style=\{\{[^}]*(#[0-9a-fA-F]{3,8}|rgba?\(|hsla?\()/.test(src)) {
    manual.push({ rule: "no-hardcoded-color", message: "Inline style color — move to a semantic Tailwind class (autoFix won't rewrite style objects)." });
  }
  return { code: src, changes, fixed: changes.length, manual };
}

// Findings that fix_ui can never resolve mechanically (structural / judgment).
export const UNFIXABLE_RULES = new Set([
  "no-nested-cards", "single-primary-action", "overflow", "render-failed", "console-error",
]);

// ---------------------------------------------------------------------------
// Brand import — map a brand profile (extracted from a brand-guidelines doc)
// into the ADS theme model. Derives missing color stops, keeps sensible
// defaults for unspecified semantics, validates contrast, and reports what it
// applied / derived / left as default. This is the "understand & adjust" step.
//
// Brand profile shape (all optional except colors.primary):
//   { name, client,
//     colors: { primary, secondary, accent, success, warning, danger|error, info,
//               background, surface, text, muted, line|border, brand50/100/500/600/700 },
//     fonts: { heading, body }, radius: number|string }
//
// The ADS theme only controls brand surface (colors/fonts/radii); spacing, the
// type scale, shadows and motion are system design decisions and are not
// brand-imported.
// ---------------------------------------------------------------------------
export function mapBrandToTheme(brand, current = {}) {
  const report = { applied: [], derived: [], keptDefault: [], contrastWarnings: [] };
  const c = brand.colors ?? {};
  const theme = JSON.parse(JSON.stringify(current));
  theme.colors = { ...(theme.colors ?? {}) };
  theme.palette = { ...(theme.palette ?? {}) };
  theme.fonts = { ...(theme.fonts ?? {}) };
  theme.typography = { ...(theme.typography ?? {}) };
  theme.radii = { ...(theme.radii ?? {}) };
  theme.shape = { ...(theme.shape ?? {}) };
  if (brand.name) theme.name = brand.name;
  if (brand.client) theme.client = brand.client;

  if (c.primary) {
    theme.palette.primary = c.primary;
    theme.colors.brand500 = c.brand500 ?? c.primary;
    theme.colors.brand600 = c.brand600 ?? mixHex(c.primary, -0.16);
    theme.colors.brand700 = c.brand700 ?? mixHex(c.primary, -0.32);
    theme.colors.brand50 = c.brand50 ?? mixHex(c.primary, 0.9);
    theme.colors.brand100 = c.brand100 ?? mixHex(c.primary, 0.8);
    report.applied.push("primary");
    if (!c.brand600) report.derived.push("brand 50/100/600/700 stops (from primary)");
  } else {
    report.keptDefault.push("primary");
  }

  const mapPalette = (key, val, label = key) => {
    if (val) { theme.palette[key] = val; report.applied.push(label); }
    else report.keptDefault.push(label);
  };
  mapPalette("secondary", c.secondary ?? c.accent);
  mapPalette("success", c.success);
  mapPalette("warning", c.warning);
  mapPalette("danger", c.danger ?? c.error, "danger");
  mapPalette("info", c.info);

  if (c.background) { theme.palette.background = c.background; theme.colors.surface = c.surface ?? c.background; report.applied.push("background"); }
  else report.keptDefault.push("background");
  if (c.surface) theme.palette.paper = c.surface;
  if (c.text) { theme.colors.ink = c.text; report.applied.push("text"); } else report.keptDefault.push("text");
  if (c.muted) { theme.colors.muted = c.muted; report.applied.push("muted"); }
  if (c.line ?? c.border) { theme.colors.line = c.line ?? c.border; report.applied.push("border/line"); }

  const f = brand.fonts ?? {};
  if (f.heading) { theme.fonts.heading = f.heading; report.applied.push("heading font"); } else report.keptDefault.push("heading font");
  if (f.body) { theme.fonts.body = f.body; theme.typography.fontFamily = f.body; report.applied.push("body font"); } else report.keptDefault.push("body font");

  if (brand.radius != null && brand.radius !== "") {
    const r = typeof brand.radius === "number" ? `${brand.radius}px` : brand.radius;
    theme.radii.brand = r;
    theme.shape.borderRadius = Number.parseInt(r, 10) || theme.shape.borderRadius || 8;
    report.applied.push("radius");
  } else {
    report.keptDefault.push("radius");
  }

  report.contrastWarnings = validateThemeContrast(theme);
  return { theme, report };
}

// ---------------------------------------------------------------------------
// Brand ingestion — turn a brand-guidelines source (pasted text/markdown, or a
// JSON export of design tokens / Figma variables) into the brand profile that
// apply_brand/mapBrandToTheme consume. Heuristic but honest: it reports what it
// found and what it guessed, so the agent can confirm before applying.
// ---------------------------------------------------------------------------
const HEX = "#[0-9a-fA-F]{3,8}";
const COLOR_LABELS = {
  primary: ["primary", "brand color", "brand colour", "brand", "main color", "main colour"],
  secondary: ["secondary", "accent"],
  success: ["success", "positive"],
  warning: ["warning", "caution"],
  danger: ["danger", "error", "destructive", "negative"],
  info: ["info", "information", "informational"],
  background: ["background", "page background", "canvas"],
  surface: ["surface", "card", "paper", "panel"],
  text: ["text color", "text colour", "ink", "foreground", "body text", "on surface"],
  muted: ["muted", "subtle", "secondary text", "tertiary"],
  border: ["border", "line", "divider", "stroke", "outline"],
};

// Pull hex values out of a JSON token/Figma-variable export by key name.
function colorsFromJson(obj, out = {}, path = "") {
  if (obj == null || typeof obj !== "object") return out;
  for (const [k, v] of Object.entries(obj)) {
    const key = `${path}${k}`.toLowerCase();
    if (typeof v === "string" && new RegExp(`^${HEX}$`).test(v.trim())) {
      for (const [slot, labels] of Object.entries(COLOR_LABELS)) {
        if (!out[slot] && labels.some((l) => key.includes(l.replace(/\s+/g, "")))) out[slot] = v.trim();
      }
      if (!out.primary && /(primary|brand)/.test(key)) out.primary = v.trim();
    } else if (typeof v === "object") {
      // Figma variable shape { value: "#.." } or nested groups.
      if (typeof v.value === "string" && new RegExp(`^${HEX}$`).test(v.value.trim())) {
        colorsFromJson({ [k]: v.value }, out, path);
      } else {
        colorsFromJson(v, out, `${key}.`);
      }
    }
  }
  return out;
}

export function extractBrandProfile(source) {
  const found = [];
  const guessed = [];
  const colors = {};
  let asJson = null;
  try { asJson = JSON.parse(source); } catch { /* not JSON — treat as prose */ }

  if (asJson && typeof asJson === "object") {
    Object.assign(colors, colorsFromJson(asJson));
    for (const k of Object.keys(colors)) found.push(`color:${k}`);
  }

  const text = String(source ?? "");
  // Labeled colors in prose: "Primary … #2D5BFF", "Error: #d4351c".
  for (const [slot, labels] of Object.entries(COLOR_LABELS)) {
    if (colors[slot]) continue;
    for (const label of labels) {
      const m = text.match(new RegExp(`${label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^#\\n]{0,40}?(${HEX})`, "i"));
      if (m) { colors[slot] = m[1]; found.push(`color:${slot}`); break; }
    }
  }
  // Fallback: the first hex in the doc is almost always the primary brand color.
  if (!colors.primary) {
    const first = text.match(new RegExp(HEX));
    if (first) { colors.primary = first[0]; guessed.push("color:primary (first hex in doc)"); }
  }

  // Fonts: "Heading font: Poppins", "Body typeface — Inter", font-family: "X".
  const fonts = {};
  const headingM = text.match(/(?:heading|display|title)s?\b[^\n]{0,30}?(?:font|typeface|family)?\s*[:=—-]\s*["']?([A-Z][A-Za-z0-9 ]{1,28}?)["']?(?:[,;.\n]|$)/i);
  const bodyM = text.match(/(?:body|paragraph|copy|base)\b[^\n]{0,30}?(?:font|typeface|family)?\s*[:=—-]\s*["']?([A-Z][A-Za-z0-9 ]{1,28}?)["']?(?:[,;.\n]|$)/i);
  const genericM = text.match(/font[- ]?family\s*[:=]?\s*["']?([A-Z][A-Za-z0-9 ]{1,28}?)["']?(?:[,;.\n]|$)/i);
  if (headingM) { fonts.heading = headingM[1].trim(); found.push("font:heading"); }
  if (bodyM) { fonts.body = bodyM[1].trim(); found.push("font:body"); }
  if (!fonts.body && genericM) { fonts.body = genericM[1].trim(); found.push("font:body"); }
  if (fonts.body && !fonts.heading) { fonts.heading = fonts.body; guessed.push("font:heading (= body)"); }

  // Radius: "border radius: 12px", "corner radius 8", "rounding 6px".
  let radius;
  const radM = text.match(/(?:border[- ]?radius|corner radius|rounding|radius)[^0-9\n]{0,16}(\d{1,3})\s*(px|rem)?/i);
  if (radM) { radius = radM[2] === "rem" ? `${radM[1]}rem` : `${radM[1]}px`; found.push("radius"); }

  const profile = { colors };
  if (Object.keys(fonts).length) profile.fonts = fonts;
  if (radius != null) profile.radius = radius;
  return { profile, found: [...new Set(found)], guessed, primaryMissing: !colors.primary };
}

// ---------------------------------------------------------------------------
// recommend_component — rank components for a natural-language task.
// ---------------------------------------------------------------------------
export function scoreForIntent(component, task) {
  const words = [...new Set(normalize(task).split(/[^a-z0-9]+/).filter((w) => w.length > 2))];
  if (!words.length) return 0;
  let score = 0;
  const hit = (text, weight) => {
    const n = normalize(text);
    for (const w of words) if (n.includes(w)) score += weight;
  };
  // Name match is word-boundary so "pick" doesn't match "ColorPicker"/"DatePicker".
  const hitWord = (text, weight) => {
    const n = normalize(text);
    for (const w of words) if (new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`).test(n)) score += weight;
  };
  const ai = component.agentHints ?? {};
  hitWord(component.name, 4);
  hit(component.description, 3);
  hit(component.category, 1);
  hit((component.whenToUse ?? []).join(" "), 3);
  hit((ai.keywords ?? ai.queryTerms ?? []).join(" "), 4);
  hit(ai.selectionCriteria?.chooseWhen ?? "", 3);
  // Penalize anti-fit.
  const never = normalize((component.neverUseFor ?? []).join(" ") + " " + (ai.selectionCriteria?.avoidWhen ?? ""));
  for (const w of words) if (never.includes(w)) score -= 2;
  if (ai.priority === "high") score += 1;
  // Utilities are code-level helpers (Show, Format, Portal, …), not UI an agent
  // should reach for when composing a screen — keep them rankable but below real
  // components so a fuzzy substring hit (e.g. "form" ⊂ "Format") can't top them.
  if (component.utility) score -= 6;
  return score;
}

// Word-based pattern scorer for natural-language briefs (scaffold_screen).
// scorePattern in index.js matches the whole query as a substring — fine for
// search_patterns, useless for a sentence like "a login screen with email".
export function scorePatternIntent(pattern, brief) {
  const words = [...new Set(normalize(brief).split(/[^a-z0-9]+/).filter((w) => w.length > 2))];
  if (!words.length) return 0;
  let score = 0;
  const hit = (text, weight) => {
    const n = normalize(text);
    for (const w of words) if (n.includes(w)) score += weight;
  };
  hit(pattern.name, 4);
  hit(pattern.intent, 4);
  hit((pattern.components ?? []).join(" "), 2);
  hit(pattern.composition, 1);
  hit((pattern.selectionRules ?? []).join(" "), 2);
  hit((pattern.tags ?? []).join(" "), 3);
  return score;
}

// ---------------------------------------------------------------------------
// capabilities — what the system can and cannot do (so agents don't try the
// impossible). `spec` is the loaded ads.components.json.
// ---------------------------------------------------------------------------
export function buildCapabilities(spec) {
  const byCategory = {};
  const utilities = [];
  for (const c of spec.components) {
    byCategory[c.category] = (byCategory[c.category] ?? 0) + 1;
    if (c.utility) utilities.push(c.name);
  }
  return {
    foundation: "ShadCN (Radix UI + Tailwind v4 + class-variance-authority), TypeScript.",
    components: { total: spec.components.length, byCategory },
    rendering: {
      contract: "Render via MCP render_* tools or the explorer URL (?component / ?code=<base64url> / ?colorMode=dark). Target #ads-render-target.",
      verified: "Each render returns a structured snapshot, an axe a11y block, and hardcoded-color warnings — verify from those, not only the screenshot.",
      states: "disabled/invalid/readOnly/loading/checked/open render via real props; hover/focus/active are forced visually via data-ads-force.",
      overlays: "Dialog/Drawer/Popover/Tooltip/Menu/etc. render inside the target (portal redirected).",
    },
    theming: "Brand is one file (client-theme.json) → run generate:theme. Style with semantic Tailwind tokens; never raw colors. colorPalette does not exist (use variant + tokens). set_theme validates contrast.",
    limitations: [
      "Toasts (sonner) are imperative — previewed as a static Alert stand-in, not fired live.",
      "No data-table with built-in sorting/pagination — compose Table + Pagination.",
      "No form-validation wiring — use Field/Label + your own validation.",
      "sidebar (app-shell layout) is intentionally not included as a single-component preview.",
      "hover/focus/active are CSS pseudo-classes — shown via data-ads-force, not real pointer state.",
    ],
    droppedUtilities: { note: "Documented as code-level helpers, not rendered UI components.", components: utilities },
  };
}

// The page-side snapshot function, stringified for page.evaluate. Captures the
// structured render report an agent can reason over without vision.
export const SNAPSHOT_FN = `() => {
  const target = document.getElementById("ads-render-target");
  if (!target) return null;
  const interactive = [...target.querySelectorAll("button,a,input,select,textarea,[role]")].slice(0, 40).map((el) => ({
    tag: el.tagName.toLowerCase(),
    role: el.getAttribute("role") || undefined,
    name: (el.getAttribute("aria-label") || el.textContent || el.getAttribute("placeholder") || "").trim().slice(0, 60) || undefined,
    disabled: el.disabled || el.getAttribute("aria-disabled") === "true" || el.getAttribute("data-disabled") != null || undefined,
  }));
  const primaryEl = target.querySelector("button,[role=button],a,input,[data-slot]");
  const cs = primaryEl ? getComputedStyle(primaryEl) : null;
  const primary = cs ? { tag: primaryEl.tagName.toLowerCase(), slot: primaryEl.getAttribute("data-slot") || undefined, background: cs.backgroundColor, color: cs.color, borderColor: cs.borderColor, borderRadius: cs.borderRadius, fontSize: cs.fontSize } : null;
  // Portal'd overlays (dialogs, popovers) are intentionally positioned and may
  // exceed their flow parent — that isn't a content-clipping bug, so exclude them.
  const overflow = [...target.querySelectorAll("*")].some((el) => !el.closest("#ads-portal-root") && el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).overflowX === "hidden");
  const nestedCards = !!target.querySelector('[data-slot="card"] [data-slot="card"]');
  const counts = {
    buttons: target.querySelectorAll("button,[role=button]").length,
    links: target.querySelectorAll("a").length,
    inputs: target.querySelectorAll("input,textarea,select").length,
    headings: target.querySelectorAll("h1,h2,h3,h4,h5,h6").length,
  };
  return { text: (target.innerText || "").trim().slice(0, 400), interactive, primary, overflow, nestedCards, counts };
}`;
