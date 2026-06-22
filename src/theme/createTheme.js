import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const withDefault = (value, fallback) => (value == null || value === "" ? fallback : value);

const clamp = (value) => Math.max(0, Math.min(255, Math.round(value)));

function hexToRgb(hex) {
  const normalized = String(hex).replace("#", "").trim();
  const full = normalized.length === 3 ? normalized.replace(/(.)/g, "$1$1") : normalized;
  const int = Number.parseInt(full.slice(0, 6), 16);
  if (Number.isNaN(int)) return null;
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((value) => clamp(value).toString(16).padStart(2, "0")).join("")}`;
}

// Mix a color toward white (ratio > 0) or black (ratio < 0).
function mix(rgb, ratio) {
  const target = ratio >= 0 ? 255 : 0;
  const amount = Math.abs(ratio);
  return {
    r: rgb.r + (target - rgb.r) * amount,
    g: rgb.g + (target - rgb.g) * amount,
    b: rgb.b + (target - rgb.b) * amount,
  };
}

// Per-step tint/shade ratios relative to the 500 seed. Positive = lighter, negative = darker.
const SCALE_RATIOS = {
  50: 0.95, 100: 0.84, 200: 0.66, 300: 0.46, 400: 0.24,
  500: 0, 600: -0.16, 700: -0.32, 800: -0.48, 900: -0.62, 950: -0.74,
};

// Build a full 50-950 color scale from a seed (the 500 step), preserving any
// explicitly provided stops so brand tokens from client-theme.json win.
function buildScale(seed, overrides = {}) {
  const seedRgb = hexToRgb(seed) ?? { r: 47, g: 128, b: 237 };
  const scale = {};
  for (const [step, ratio] of Object.entries(SCALE_RATIOS)) {
    const provided = overrides[step];
    scale[step] = provided ? String(provided) : rgbToHex(mix(seedRgb, ratio));
  }
  return scale;
}

// Relative luminance per WCAG, used to pick readable text on a solid fill.
function luminance(hex) {
  const rgb = hexToRgb(hex) ?? { r: 0, g: 0, b: 0 };
  const channel = (value) => {
    const c = value / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b);
}

function readableOn(hex) {
  return luminance(hex) > 0.45 ? "#101828" : "#ffffff";
}

// Chakra v3 resolves `colorPalette="x"` through x.solid / x.fg / x.contrast / etc.
// A custom palette without these semantic tokens silently falls back to gray.
function paletteSemanticTokens(name, scale, { solidStep = 600 } = {}) {
  const solid = scale[solidStep] ?? scale[500];
  return {
    [name]: {
      solid: { value: `{colors.${name}.${solidStep}}` },
      contrast: { value: readableOn(solid) },
      fg: { value: `{colors.${name}.700}` },
      muted: { value: `{colors.${name}.100}` },
      subtle: { value: `{colors.${name}.50}` },
      emphasized: { value: `{colors.${name}.200}` },
      focusRing: { value: `{colors.${name}.500}` },
      border: { value: `{colors.${name}.500}` },
    },
  };
}

function scaleToTokens(scale) {
  return Object.fromEntries(Object.entries(scale).map(([step, value]) => [step, { value }]));
}

// Semantic token with explicit light/dark values. Chakra resolves _dark when a
// `.dark` ancestor is present (the explorer adds it for dark-mode rendering).
const mode = (light, dark) => ({ value: { _light: light, _dark: dark } });

export function createTheme(tokens) {
  const colors = tokens.colors ?? {};
  const palette = tokens.palette ?? {};
  const fonts = tokens.fonts ?? {};
  const radii = tokens.radii ?? {};

  // Full 50-950 ramps generated from the brand seed (500). Client-provided
  // stops in client-theme.json are preserved; the rest are interpolated so
  // colorPalette="brand" has every step Chakra's recipes reference.
  const brandSeed = withDefault(colors.brand500, withDefault(palette.primary, "#2f80ed"));
  const brandScale = buildScale(brandSeed, {
    50: colors.brand50,
    100: colors.brand100,
    500: colors.brand500,
    600: colors.brand600,
    700: colors.brand700,
  });
  const successScale = buildScale(withDefault(palette.success, "#15803d"), { 600: palette.success });
  const warningScale = buildScale(withDefault(palette.warning, "#b45309"), { 600: palette.warning });
  const dangerScale = buildScale(withDefault(palette.danger, "#b42318"), { 600: palette.danger });
  const infoScale = buildScale(withDefault(palette.info, "#0369a1"), { 700: palette.info });

  const config = defineConfig({
    theme: {
      tokens: {
        colors: {
          brand: scaleToTokens(brandScale),
          success: scaleToTokens(successScale),
          warning: scaleToTokens(warningScale),
          danger: scaleToTokens(dangerScale),
          info: scaleToTokens(infoScale),
          neutral: {
            0: { value: "#ffffff" },
            50: { value: withDefault(colors.surface, "#fbfcfe") },
            100: { value: "#eef2f7" },
            200: { value: withDefault(colors.line, "#d9e0ea") },
            300: { value: "#b8c2d1" },
            500: { value: withDefault(colors.muted, "#667085") },
            700: { value: "#344054" },
            900: { value: withDefault(colors.ink, "#172033") },
            950: { value: "#111827" },
          },
          secondary: {
            500: { value: withDefault(colors.brand500, "#2563eb") },
            600: { value: withDefault(palette.secondary, "#5b6475") },
          },
          ink: { value: withDefault(colors.ink, "#172033") },
          surface: { value: withDefault(colors.surface, "#ffffff") },
          muted: { value: withDefault(colors.muted, "#667085") },
          line: { value: withDefault(colors.line, "#d9e0ea") },
        },
        fonts: {
          heading: { value: withDefault(fonts.heading, "ui-sans-serif, system-ui, sans-serif") },
          body: { value: withDefault(fonts.body, "ui-sans-serif, system-ui, sans-serif") },
        },
        radii: {
          none: { value: "0" },
          sm: { value: "4px" },
          brand: { value: withDefault(radii.brand, "8px") },
          md: { value: withDefault(radii.brand, "8px") },
          lg: { value: "12px" },
          full: { value: "999px" },
        },
        fontSizes: {
          xs: { value: "12px" },
          sm: { value: "14px" },
          md: { value: "16px" },
          lg: { value: "18px" },
          xl: { value: "20px" },
          "2xl": { value: "24px" },
          "3xl": { value: "30px" },
          "4xl": { value: "36px" },
          "5xl": { value: "48px" },
        },
        fontWeights: {
          regular: { value: "400" },
          medium: { value: "500" },
          semibold: { value: "650" },
          bold: { value: String(tokens.typography?.headingWeight ?? 750) },
        },
        lineHeights: {
          tight: { value: "1.15" },
          body: { value: "1.5" },
        },
        letterSpacings: {
          normal: { value: "0" },
        },
        spacing: {
          0: { value: "0" },
          1: { value: "4px" },
          2: { value: "8px" },
          3: { value: "12px" },
          4: { value: "16px" },
          5: { value: "20px" },
          6: { value: "24px" },
          8: { value: "32px" },
          10: { value: "40px" },
          12: { value: "48px" },
        },
        shadows: {
          xs: { value: "0 1px 1px rgba(24, 34, 48, 0.05)" },
          sm: { value: "0 1px 2px rgba(24, 34, 48, 0.08)" },
          md: { value: "0 12px 34px rgba(24, 34, 48, 0.12)" },
          lg: { value: "0 18px 48px rgba(24, 34, 48, 0.16)" },
          xl: { value: "0 28px 72px rgba(24, 34, 48, 0.22)" },
          overlay: { value: "0 32px 96px rgba(17, 24, 39, 0.28)" },
          focus: { value: "0 0 0 3px rgba(20, 95, 196, 0.32)" },
        },
        durations: {
          instant: { value: "0ms" },
          fast: { value: "120ms" },
          normal: { value: "180ms" },
          slow: { value: "260ms" },
          slower: { value: "360ms" },
          linger: { value: "500ms" },
        },
        easings: {
          linear: { value: "linear" },
          standard: { value: "cubic-bezier(0.2, 0, 0, 1)" },
          emphasized: { value: "cubic-bezier(0.2, 0, 0, 1.2)" },
          enter: { value: "cubic-bezier(0, 0, 0, 1)" },
          exit: { value: "cubic-bezier(0.4, 0, 1, 1)" },
        },
      },
      semanticTokens: {
        colors: {
          ...paletteSemanticTokens("brand", brandScale, { solidStep: 600 }),
          ...paletteSemanticTokens("success", successScale, { solidStep: 600 }),
          ...paletteSemanticTokens("warning", warningScale, { solidStep: 600 }),
          ...paletteSemanticTokens("danger", dangerScale, { solidStep: 600 }),
          ...paletteSemanticTokens("info", infoScale, { solidStep: 700 }),
          "ads.bg": mode("{colors.surface}", "{colors.neutral.950}"),
          "ads.fg": mode("{colors.ink}", "{colors.neutral.50}"),
          "ads.fg.strong": mode("{colors.neutral.950}", "{colors.neutral.0}"),
          "ads.fg.inverse": mode("{colors.neutral.0}", "{colors.neutral.950}"),
          "ads.muted": mode("{colors.muted}", "{colors.neutral.300}"),
          "ads.line": mode("{colors.line}", "{colors.neutral.700}"),
          "ads.line.muted": mode("{colors.neutral.100}", "{colors.neutral.900}"),
          "ads.surface": mode("{colors.neutral.0}", "{colors.neutral.900}"),
          "ads.surface.muted": mode("{colors.neutral.100}", "{colors.neutral.950}"),
          "ads.surface.raised": mode("{colors.neutral.0}", "{colors.neutral.700}"),
          "ads.accent": mode("{colors.brand.600}", "{colors.brand.400}"),
          "ads.accent.subtle": mode("{colors.brand.50}", "{colors.brand.900}"),
          "ads.accent.muted": mode("{colors.brand.100}", "{colors.brand.800}"),
          "ads.success": mode("{colors.success.600}", "{colors.success.400}"),
          "ads.success.subtle": mode("{colors.success.50}", "{colors.success.900}"),
          "ads.warning": mode("{colors.warning.600}", "{colors.warning.400}"),
          "ads.warning.subtle": mode("{colors.warning.50}", "{colors.warning.900}"),
          "ads.danger": mode("{colors.danger.600}", "{colors.danger.400}"),
          "ads.danger.subtle": mode("{colors.danger.50}", "{colors.danger.900}"),
          "ads.info": mode("{colors.info.700}", "{colors.info.400}"),
          "ads.info.subtle": mode("{colors.info.50}", "{colors.info.900}"),
        },
      },
      textStyles: {
        display: { value: { fontFamily: "{fonts.heading}", fontSize: "48px", lineHeight: "1.05", fontWeight: "750", letterSpacing: "0" } },
        h1: { value: { fontFamily: "{fonts.heading}", fontSize: "40px", lineHeight: "1.1", fontWeight: "750", letterSpacing: "0" } },
        h2: { value: { fontFamily: "{fonts.heading}", fontSize: "34px", lineHeight: "1.14", fontWeight: "750", letterSpacing: "0" } },
        h3: { value: { fontFamily: "{fonts.heading}", fontSize: "28px", lineHeight: "1.18", fontWeight: "700", letterSpacing: "0" } },
        h4: { value: { fontFamily: "{fonts.heading}", fontSize: "24px", lineHeight: "1.24", fontWeight: "700", letterSpacing: "0" } },
        h5: { value: { fontFamily: "{fonts.heading}", fontSize: "20px", lineHeight: "1.3", fontWeight: "650", letterSpacing: "0" } },
        h6: { value: { fontFamily: "{fonts.heading}", fontSize: "18px", lineHeight: "1.35", fontWeight: "650", letterSpacing: "0" } },
        subtitle: { value: { fontFamily: "{fonts.body}", fontSize: "18px", lineHeight: "1.45", fontWeight: "500", letterSpacing: "0" } },
        body1: { value: { fontFamily: "{fonts.body}", fontSize: "16px", lineHeight: "1.55", fontWeight: "400", letterSpacing: "0" } },
        body2: { value: { fontFamily: "{fonts.body}", fontSize: "14px", lineHeight: "1.5", fontWeight: "400", letterSpacing: "0" } },
        caption: { value: { fontFamily: "{fonts.body}", fontSize: "12px", lineHeight: "1.45", fontWeight: "500", letterSpacing: "0" } },
        overline: { value: { fontFamily: "{fonts.body}", fontSize: "11px", lineHeight: "1.35", fontWeight: "750", letterSpacing: "0" } },
        button: { value: { fontFamily: "{fonts.body}", fontSize: "14px", lineHeight: "1.2", fontWeight: "650", letterSpacing: "0" } },
      },
    },
  });

  return createSystem(defaultConfig, config);
}
