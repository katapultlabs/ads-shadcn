# Chakra → ShadCN Migration Map

This table classifies every component currently in the ADS spec (119 total, sourced
from Chakra UI v3) into a migration **bucket** and names its ShadCN target. It is the
contract that drives the re-spec: each component is rebuilt according to its bucket.

## Buckets

| Bucket | Meaning | Build strategy |
|---|---|---|
| **A — Direct** | First-party shadcn/ui component (possibly composed of several) | Install via shadcn CLi into `src/components/ui`, spec its real API |
| **B — Primitive** | Layout box with no shadcn equivalent | Thin `div`-based primitive in `src/components/primitives`, Tailwind recipe |
| **C — Typography/HTML** | Semantic HTML element + Tailwind classes | Lightweight wrapper (or documented raw element) in `src/components/typography` |
| **D — Custom/registry** | No first-party shadcn; build a small composed component | Custom component in `src/components/ui` (some need an external lib) |
| **E — Utility (drop as UI)** | Code-level helper, not a visual component | Removed from the component catalog; re-documented as a helper, not rendered |
| **KEEP** | ADS-native, not from Chakra | Re-implemented in Tailwind, stays in catalog |

`colorPalette` (Chakra's semantic-palette prop) does not exist in ShadCN and is
replaced everywhere by `variant` (e.g. `destructive`) + semantic CSS variables.

---

## Foundations (30)

| Component | Bucket | ShadCN target / build |
|---|---|---|
| Box | B | `div` primitive |
| Center | B | `div` flex center primitive |
| Checkmark | D | custom indicator (Lucide `Check` in styled span) |
| Circle | B | `div rounded-full` primitive |
| ClientOnly | E | mount-gate hook/helper, not a UI component |
| Code | C | `<code>` + `font-mono bg-muted` |
| CodeBlock | D | custom `<pre><code>` block + copy button |
| ColorPicker | D | custom (native color input + popover swatch) |
| ColorSwatch | B | `div` with bg + ring |
| DatePicker | A | shadcn **date-picker** (Popover + Calendar) |
| DesignTokens | KEEP | ADS token explorer, re-implemented in Tailwind |
| Em | C | `<em>` |
| For | E | array-map helper, not a UI component |
| Format | E | `Intl` number/byte/date format helper |
| Heading | C | `<h1>`–`<h6>` + type-scale classes |
| Highlight | D | custom (`<mark>` around matched query) |
| Icon | C | `lucide-react` icon directly (no wrapper needed) |
| Image | C | `<img>` + Tailwind (object-fit, radius) |
| Kbd | C | `<kbd>` + Tailwind |
| Link | C | `<a>` + Tailwind (or Button `variant="link"`) |
| Locale | E | locale provider helper, not a UI component |
| Mark | C | `<mark>` |
| Quote | C | `<q>` + Tailwind |
| Radiomark | D | custom radio indicator |
| SegmentGroup | A | shadcn **toggle-group** (single-select) |
| Span | C | `<span>` |
| Square | B | `div aspect-square` primitive |
| Strong | C | `<strong>` |
| Text | C | `<p>`/`<span>` + Tailwind |
| VisuallyHidden | C | `<span class="sr-only">` |

## Inputs (26)

| Component | Bucket | ShadCN target / build |
|---|---|---|
| Button | A | shadcn **button** |
| Checkbox | A | shadcn **checkbox** |
| CheckboxCard | D | custom (Card + Checkbox) |
| Combobox | A | shadcn **combobox** (Command + Popover) |
| Editable | D | custom click-to-edit input |
| Field | A | shadcn **form** / Label + field helpers |
| Fieldset | C | `<fieldset><legend>` + Tailwind |
| FileUpload | D | custom dropzone (input[type=file] + drag) |
| IconButton | A | shadcn **button** `size="icon"` |
| Input | A | shadcn **input** |
| InputAddon | D | custom attached addon (flex group) |
| InputElement | D | custom leading/trailing element wrapper |
| InputGroup | D | custom input group wrapper |
| NativeSelect | C | styled native `<select>` |
| NumberInput | D | custom (input + stepper buttons) |
| PinInput | A | shadcn **input-otp** |
| RadioCard | D | custom (RadioGroup + Card) |
| RadioGroup | A | shadcn **radio-group** |
| RatingGroup | D | custom star rating |
| Select | A | shadcn **select** |
| Slider | A | shadcn **slider** |
| Switch | A | shadcn **switch** |
| TagsInput | D | custom tag entry field |
| Textarea | A | shadcn **textarea** |
| Toggle | A | shadcn **toggle** |
| CloseButton | D | custom (Button `size="icon"` + `X`) |

## Data display (12)

| Component | Bucket | ShadCN target / build |
|---|---|---|
| Avatar | A | shadcn **avatar** |
| Badge | A | shadcn **badge** |
| DataList | D | custom `<dl>` label/value list |
| List | C | `<ul>`/`<ol>` + Tailwind |
| Listbox | D | custom (Command-based list) |
| QRCode | D | custom (needs `qrcode` lib) |
| Stat | D | custom (label + value + delta) |
| Status | D | custom (dot + text) |
| Table | A | shadcn **table** |
| Tag | D | custom closeable tag (Badge + X) |
| Timeline | D | custom vertical timeline |
| TreeView | D | custom tree (recursive disclosure) |

## Feedback (11)

| Component | Bucket | ShadCN target / build |
|---|---|---|
| Alert | A | shadcn **alert** |
| Clipboard | D | custom (copy button + copied feedback) |
| EmptyState | D | custom composed empty state |
| Loader | D | custom (spinner + text) |
| Presence | E | mount/animation helper, not a UI component |
| Progress | A | shadcn **progress** |
| ProgressCircle | D | custom circular progress (SVG) |
| Skeleton | A | shadcn **skeleton** |
| Spinner | D | custom (`Loader2` spin) |
| Toast | A | shadcn **sonner** |
| Toaster | A | shadcn **sonner** Toaster |

## Navigation (9)

| Component | Bucket | ShadCN target / build |
|---|---|---|
| Accordion | A | shadcn **accordion** |
| Breadcrumb | A | shadcn **breadcrumb** |
| Carousel | A | shadcn **carousel** (embla) |
| Collapsible | A | shadcn **collapsible** |
| Menu | A | shadcn **dropdown-menu** |
| Pagination | A | shadcn **pagination** |
| Steps | D | custom stepper |
| Tabs | A | shadcn **tabs** |
| Tooltip | A | shadcn **tooltip** |

## Surfaces (8)

| Component | Bucket | ShadCN target / build |
|---|---|---|
| ActionBar | D | custom floating action bar |
| Blockquote | C | `<blockquote>` + Tailwind |
| Card | A | shadcn **card** |
| Dialog | A | shadcn **dialog** |
| Drawer | A | shadcn **drawer** (vaul) / **sheet** |
| FloatingPanel | D | custom draggable/resizable panel |
| HoverCard | A | shadcn **hover-card** |
| Popover | A | shadcn **popover** |

## Layout (23)

| Component | Bucket | ShadCN target / build |
|---|---|---|
| AbsoluteCenter | B | `absolute inset-0 grid place-items-center` |
| AspectRatio | A | shadcn **aspect-ratio** |
| Bleed | B | negative-margin primitive |
| Container | B | `mx-auto max-w-*` primitive |
| DownloadTrigger | D | custom anchor with `download` |
| Environment | E | DOM-environment provider helper |
| Flex | B | `div flex` primitive |
| Float | B | absolute-positioned overlay primitive |
| FocusTrap | E | focus-trap behavior helper |
| Grid | B | `div grid` primitive |
| Group | B | attached flex group primitive |
| Marquee | D | custom scrolling marquee |
| Portal | E | React portal helper |
| ScrollArea | A | shadcn **scroll-area** |
| Separator | A | shadcn **separator** |
| Show | E | conditional-render helper |
| SimpleGrid | B | `grid grid-cols-*` primitive |
| SkipNav | C | skip-link anchor (`sr-only` until focus) |
| Spacer | B | `flex-1` spacer primitive |
| Splitter | A | shadcn **resizable** |
| Stack | B | `flex flex-col gap-*` primitive |
| Sticky | B | `sticky top-0` primitive |
| Wrap | B | `flex flex-wrap` primitive |

---

## Bucket totals

| Bucket | Count | Components |
|---|---|---|
| A — Direct shadcn | 40 | Button, Checkbox, Combobox, DatePicker, Field, IconButton, Input, PinInput, RadioGroup, Select, Slider, Switch, Textarea, Toggle, SegmentGroup, Avatar, Badge, Table, Toast, Toaster, Alert, Progress, Skeleton, Accordion, Breadcrumb, Carousel, Collapsible, Menu, Pagination, Tabs, Tooltip, Card, Dialog, Drawer, HoverCard, Popover, AspectRatio, ScrollArea, Separator, Splitter |
| B — Primitive | 17 | Box, Center, Circle, Square, ColorSwatch, AbsoluteCenter, Bleed, Container, Flex, Float, Grid, Group, SimpleGrid, Spacer, Stack, Sticky, Wrap |
| C — Typography/HTML | 18 | Code, Em, Heading, Icon, Image, Kbd, Link, Mark, Quote, Span, Strong, Text, VisuallyHidden, Fieldset, NativeSelect, List, Blockquote, SkipNav |
| D — Custom/registry | 34 | Checkmark, CodeBlock, ColorPicker, Highlight, Radiomark, CheckboxCard, Editable, FileUpload, InputAddon, InputElement, InputGroup, NumberInput, RadioCard, RatingGroup, TagsInput, CloseButton, DataList, Listbox, QRCode, Stat, Status, Tag, Timeline, TreeView, Clipboard, EmptyState, Loader, ProgressCircle, Spinner, Steps, ActionBar, FloatingPanel, Marquee, DownloadTrigger |
| E — Utility (drop as UI) | 9 | ClientOnly, For, Format, Locale, Presence, Environment, FocusTrap, Portal, Show |
| KEEP — ADS-native | 1 | DesignTokens |
| **Total** | **119** | |

## External libraries introduced

- `qrcode` (or `qrcode.react`) — QRCode
- `embla-carousel-react` — Carousel (shadcn dependency)
- `vaul` — Drawer (shadcn dependency)
- `react-resizable-panels` — Splitter/Resizable (shadcn dependency)
- `cmdk` — Combobox/Listbox (shadcn Command dependency)
- `sonner` — Toast/Toaster
- `react-day-picker` + `date-fns` — DatePicker/Calendar (shadcn dependency)
- `input-otp` — PinInput (shadcn dependency)

## Notes on semantics that change

- **`colorPalette` removed.** Status colors (success/warning/danger/info) move to
  `variant` props and `ads.*` semantic CSS variables. The brand rule in `CLAUDE.md`
  becomes "use `variant` + semantic tokens, never raw color classes."
- **Compound dot-notation differs.** Chakra `Accordion.Root/Item/ItemTrigger` →
  shadcn `Accordion/AccordionItem/AccordionTrigger` (named exports, not namespaced).
- **Bucket-E utilities** stay available to authors as helpers but are no longer
  listed as renderable components and are removed from the explorer catalog.
