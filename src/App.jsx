import React, { useEffect, useMemo, useState } from "react";
import * as Babel from "@babel/standalone";
import * as Chakra from "@chakra-ui/react";
import * as Lucide from "lucide-react";
import spec from "../components.json";
import themeTokens from "../client-theme.json";
import { lucideIconNames } from "./generated/lucide-icons.generated.js";
import inertControls from "./generated/inert-controls.generated.json";
import { tokenData } from "./tokens/token-data.generated.js";
import { createTheme } from "./theme/createTheme";

const {
  Badge,
  Box,
  Button,
  ChakraProvider,
  Code,
  Container,
  Field,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Separator,
  Stack,
  Table,
  Text,
  Textarea,
} = Chakra;

const { AlertTriangle, Ban, Check, ChevronRight, Copy, Eye, Moon, Palette, RefreshCw, Search, Settings, Sun, Tag } = Lucide;

const chakraScopeNames = new Set(Object.keys(Chakra));

const iconScope = lucideIconNames.reduce((acc, name) => {
  if (!Lucide[name]) return acc;
  if (!chakraScopeNames.has(name)) acc[name] = Lucide[name];
  acc[`Lucide${name}`] = Lucide[name];
  return acc;
}, {});

const iconCatalogSpec = {
  name: "LucideIcons",
  category: "Foundations",
  description: "Searchable catalog of lucide-react icons preloaded in the ADS Light sandbox.",
  variants: ["stroke"],
  keyProps: [{ name: "size" }, { name: "strokeWidth" }, { name: "color" }],
  whenToUse: ["Use icons for compact actions, status, navigation, and visual scanning."],
  neverUseFor: ["Do not use icons without accessible labels for icon-only actions."],
  examples: [{ name: "Icon catalog", jsx: "<Search size={20} />" }],
};

const explorerSpecs = [...spec.components, iconCatalogSpec];

const generatedStarterText = "Generated Chakra component spec starter.";
const controlParamNames = new Set([
  "variant",
  "size",
  "color",
  "colorPalette",
  "state",
  "label",
  "icon",
  "leftIcon",
  "rightIcon",
  "iconLeft",
  "iconRight",
  "description",
  "value",
]);
const colorPalettes = ["brand", "blue", "green", "orange", "red", "cyan", "purple", "gray"];
const colorAliases = {
  primary: "brand",
  secondary: "gray",
  success: "green",
  warning: "orange",
  danger: "red",
  error: "red",
  info: "cyan",
};
const variantAliases = {
  contained: "solid",
  filled: "solid",
  text: "plain",
  outlined: "outline",
};
const defaultStates = ["default", "hover", "focus-visible", "active", "disabled", "invalid", "readOnly", "loading"];
const labelLikeComponents = new Set([
  "Button",
  "IconButton",
  "Badge",
  "Tag",
  "Alert",
  "Card",
  "Input",
  "Textarea",
  "Switch",
  "Checkbox",
  "RadioGroup",
  "Toggle",
  "Tooltip",
  "Popover",
  "Dialog",
  "Drawer",
  "Menu",
  "Tabs",
]);

const previewSnippets = {
  Accordion: `<Accordion.Root collapsible defaultValue={["details"]} width="320px">
  <Accordion.Item value="details">
    <Accordion.ItemTrigger>
      <Span flex="1">Account details</Span>
      <Accordion.ItemIndicator />
    </Accordion.ItemTrigger>
    <Accordion.ItemContent>
      <Accordion.ItemBody>Billing, profile, and notification settings.</Accordion.ItemBody>
    </Accordion.ItemContent>
  </Accordion.Item>
</Accordion.Root>`,
  ActionBar: `<ActionBar.Root open>
  <ActionBar.Positioner>
    <ActionBar.Content>
      <ActionBar.SelectionTrigger>3 selected</ActionBar.SelectionTrigger>
      <ActionBar.Separator />
      <Button size="sm" variant="outline">Archive</Button>
      <Button size="sm">Apply</Button>
    </ActionBar.Content>
  </ActionBar.Positioner>
</ActionBar.Root>`,
  Alert: `<Alert.Root status="success" variant="surface" maxW="360px">
  <Alert.Indicator />
  <Alert.Content>
    <Alert.Title>Saved</Alert.Title>
    <Alert.Description>Your changes are synced.</Alert.Description>
  </Alert.Content>
</Alert.Root>`,
  AspectRatio: `<AspectRatio ratio={16 / 9} width="340px">
  <Box bg="ads.accent.subtle" display="grid" placeItems="center" color="ads.accent" fontWeight="700">16:9 media</Box>
</AspectRatio>`,
  Avatar: `<Avatar.Root>
  <Avatar.Fallback>PD</Avatar.Fallback>
</Avatar.Root>`,
  Badge: `<HStack><Badge colorPalette="blue">Beta</Badge><Badge colorPalette="green">Live</Badge><Badge colorPalette="orange">Review</Badge></HStack>`,
  Blockquote: `<Blockquote.Root maxW="420px">
  <Blockquote.Content>Design systems should be queryable, renderable, and verifiable.</Blockquote.Content>
  <Blockquote.Caption>ADS Light</Blockquote.Caption>
</Blockquote.Root>`,
  Breadcrumb: `<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item><Breadcrumb.Link href="#">Projects</Breadcrumb.Link></Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item><Breadcrumb.CurrentLink>ADS Light</Breadcrumb.CurrentLink></Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>`,
  Button: `<HStack><Button>Save changes</Button><Button variant="outline">Cancel</Button><Button variant="ghost"><Search size={16} /> Search</Button></HStack>`,
  Card: `<Card.Root width="320px" variant="outline">
  <Card.Header><Heading size="sm">Usage card</Heading></Card.Header>
  <Card.Body><Text color="ads.muted">A raised surface for grouped content and actions.</Text></Card.Body>
  <Card.Footer><Button size="sm">Open</Button></Card.Footer>
</Card.Root>`,
  Carousel: `<Carousel.Root width="360px">
  <Carousel.ItemGroup>
    <Carousel.Item index={0}><Box h="160px" bg="ads.accent.subtle" display="grid" placeItems="center">Slide 1</Box></Carousel.Item>
    <Carousel.Item index={1}><Box h="160px" bg="ads.success.subtle" display="grid" placeItems="center">Slide 2</Box></Carousel.Item>
  </Carousel.ItemGroup>
  <Carousel.Control><Carousel.PrevTrigger /><Carousel.NextTrigger /></Carousel.Control>
</Carousel.Root>`,
  Center: `<Center boxSize="160px" bg="ads.accent.subtle" color="ads.accent" borderRadius="md" fontWeight="700">Centered</Center>`,
  Checkbox: `<Checkbox.Root defaultChecked><Checkbox.HiddenInput /><Checkbox.Control /><Checkbox.Label>Accept terms</Checkbox.Label></Checkbox.Root>`,
  CheckboxCard: `<CheckboxCard.Root defaultChecked width="320px">
  <CheckboxCard.HiddenInput />
  <CheckboxCard.Control>
    <CheckboxCard.Content>
      <CheckboxCard.Label>Team workspace</CheckboxCard.Label>
      <CheckboxCard.Description>Shared files and billing.</CheckboxCard.Description>
    </CheckboxCard.Content>
    <CheckboxCard.Indicator />
  </CheckboxCard.Control>
</CheckboxCard.Root>`,
  Checkmark: `<Checkmark checked colorPalette="green" />`,
  Circle: `<Circle size="72px" bg="ads.accent" color="ads.fg.inverse"><Check size={24} /></Circle>`,
  Clipboard: `<Clipboard.Root value="npm run dev">
  <Clipboard.Label>Install command</Clipboard.Label>
  <Clipboard.Control>
    <Clipboard.Input />
    <Clipboard.Trigger asChild><IconButton aria-label="Copy"><Copy size={16} /></IconButton></Clipboard.Trigger>
  </Clipboard.Control>
</Clipboard.Root>`,
  Code: `<Code>npm run render</Code>`,
  CodeBlock: `<CodeBlock.Root code={'<Button>Save</Button>'} language="jsx" width="380px">
  <CodeBlock.Header><CodeBlock.Title>Preview.jsx</CodeBlock.Title></CodeBlock.Header>
  <CodeBlock.Content aria-expanded={undefined} role="group"><CodeBlock.Code><CodeBlock.CodeText /></CodeBlock.Code></CodeBlock.Content>
</CodeBlock.Root>`,
  Collapsible: `<Collapsible.Root defaultOpen width="320px">
  <Collapsible.Trigger asChild><Button variant="outline">Toggle details</Button></Collapsible.Trigger>
  <Collapsible.Content><Box mt="3" p="4" borderWidth="1px" borderRadius="md">Hidden content is now visible.</Box></Collapsible.Content>
</Collapsible.Root>`,
  ColorPicker: `<ColorPicker.Root defaultValue="#145fc4" width="260px">
  <ColorPicker.Label>Brand color</ColorPicker.Label>
  <ColorPicker.Control><ColorPicker.Input /><ColorPicker.Trigger /></ColorPicker.Control>
</ColorPicker.Root>`,
  ColorSwatch: `<HStack><ColorSwatch.Root value="#145fc4" /><ColorSwatch.Root value="#15803d" /><ColorSwatch.Root value="#b42318" /></HStack>`,
  Combobox: `<Combobox.Root collection={createListCollection({ items: ["Button", "Input", "Card"] })} width="320px">
  <Combobox.Label>Component</Combobox.Label>
  <Combobox.Control><Combobox.Input /><Combobox.IndicatorGroup><Combobox.Trigger /></Combobox.IndicatorGroup></Combobox.Control>
</Combobox.Root>`,
  Container: `<Container maxW="320px" borderWidth="1px" borderRadius="md" py="5"><Text>Constrained content area</Text></Container>`,
  DataList: `<DataList.Root orientation="horizontal">
  <DataList.Item><DataList.ItemLabel>Status</DataList.ItemLabel><DataList.ItemValue>Active</DataList.ItemValue></DataList.Item>
  <DataList.Item><DataList.ItemLabel>Owner</DataList.ItemLabel><DataList.ItemValue>Design</DataList.ItemValue></DataList.Item>
</DataList.Root>`,
  DatePicker: `<DatePicker.Root>
  <DatePicker.Label>Due date</DatePicker.Label>
  <DatePicker.Control>
    <DatePicker.Input />
    <DatePicker.Trigger asChild><IconButton aria-label="Open calendar" variant="outline"><ChevronRight size={16} /></IconButton></DatePicker.Trigger>
  </DatePicker.Control>
</DatePicker.Root>`,
  Dialog: `<Dialog.Root open>
  <Dialog.Backdrop />
  <Dialog.Positioner>
    <Dialog.Content maxW="360px">
      <Dialog.Header><Dialog.Title>Confirm action</Dialog.Title></Dialog.Header>
      <Dialog.Body><Text color="ads.muted">This is a modal surface preview.</Text></Dialog.Body>
      <Dialog.Footer><Button>Confirm</Button></Dialog.Footer>
    </Dialog.Content>
  </Dialog.Positioner>
</Dialog.Root>`,
  Drawer: `<Drawer.Root open>
  <Drawer.Backdrop />
  <Drawer.Positioner>
    <Drawer.Content>
      <Drawer.Header><Drawer.Title>Drawer title</Drawer.Title></Drawer.Header>
      <Drawer.Body>Side panel content.</Drawer.Body>
    </Drawer.Content>
  </Drawer.Positioner>
</Drawer.Root>`,
  Editable: `<Editable.Root defaultValue="Editable title" width="280px">
  <Editable.Preview />
  <Editable.Input />
</Editable.Root>`,
  EmptyState: `<EmptyState.Root>
  <EmptyState.Content>
    <EmptyState.Indicator><Search size={28} /></EmptyState.Indicator>
    <EmptyState.Title>No results</EmptyState.Title>
    <EmptyState.Description>Try a different component query.</EmptyState.Description>
  </EmptyState.Content>
</EmptyState.Root>`,
  Field: `<Field.Root width="320px"><Field.Label>Email</Field.Label><Input placeholder="you@example.com" /><Field.HelperText>Used for account updates.</Field.HelperText></Field.Root>`,
  Fieldset: `<Fieldset.Root width="340px">
  <Fieldset.Legend>Profile</Fieldset.Legend>
  <Fieldset.Content><Input placeholder="Name" /><Input placeholder="Role" /></Fieldset.Content>
</Fieldset.Root>`,
  FileUpload: `<FileUpload.Root maxW="340px">
  <FileUpload.HiddenInput />
  <FileUpload.Dropzone>
    <FileUpload.DropzoneContent>
      <Text fontWeight="700">Drop files here</Text>
      <Text color="ads.muted">PNG, JPG, or PDF</Text>
    </FileUpload.DropzoneContent>
  </FileUpload.Dropzone>
</FileUpload.Root>`,
  FloatingPanel: `<FloatingPanel.Root defaultSize={{ width: 320, height: 180 }}>
  <FloatingPanel.Trigger asChild><Button>Open panel</Button></FloatingPanel.Trigger>
  <FloatingPanel.Positioner>
    <FloatingPanel.Content><FloatingPanel.Header>Floating panel</FloatingPanel.Header><FloatingPanel.Body>Resizable workspace surface.</FloatingPanel.Body></FloatingPanel.Content>
  </FloatingPanel.Positioner>
</FloatingPanel.Root>`,
  Grid: `<Grid templateColumns="repeat(3, 72px)" gap="3">{[1,2,3,4,5,6].map((item) => <Box key={item} h="52px" bg="ads.accent.subtle" borderRadius="md" />)}</Grid>`,
  Group: `<Group><Button variant="outline">Left</Button><Button variant="outline">Middle</Button><Button variant="outline">Right</Button></Group>`,
  HoverCard: `<HoverCard.Root open>
  <HoverCard.Trigger asChild><Button variant="outline">Hover target</Button></HoverCard.Trigger>
  <HoverCard.Positioner><HoverCard.Content maxW="280px"><HoverCard.Arrow /><HoverCard.Body>Rich hover preview content.</HoverCard.Body></HoverCard.Content></HoverCard.Positioner>
</HoverCard.Root>`,
  Icon: `<HStack><Icon as={Search} boxSize="6" color="ads.accent" /><Icon as={Settings} boxSize="6" /><Icon as={AlertTriangle} boxSize="6" color="ads.warning" /></HStack>`,
  Image: `<Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=480&q=80" alt="Design workspace" width="320px" height="180px" objectFit="cover" borderRadius="md" />`,
  Input: `<Input width="320px" placeholder="Search components" />`,
  InputAddon: `<InputGroup startElement={<Search size={16} />} width="320px"><Input placeholder="Search" /></InputGroup>`,
  InputElement: `<InputGroup endElement={<Check size={16} />} width="320px"><Input aria-label="Validated value" defaultValue="Valid value" /></InputGroup>`,
  InputGroup: `<InputGroup startElement={<Search size={16} />} endElement={<Settings size={16} />} width="340px"><Input placeholder="Command" /></InputGroup>`,
  Kbd: `<HStack><Kbd>Ctrl</Kbd><Kbd>K</Kbd></HStack>`,
  Link: `<Link href="#" colorPalette="blue">Open documentation</Link>`,
  List: `<List.Root><List.Item>Machine-readable spec</List.Item><List.Item>Live render surface</List.Item><List.Item>Theme layer</List.Item></List.Root>`,
  Listbox: `<Listbox.Root collection={createListCollection({ items: ["Button", "Input", "Card"] })} width="280px">
  <Listbox.Label>Pick component</Listbox.Label>
  <Listbox.Content>{["Button","Input","Card"].map((item) => <Listbox.Item key={item} item={item}>{item}</Listbox.Item>)}</Listbox.Content>
</Listbox.Root>`,
  Loader: `<Loader size="lg" color="ads.accent" />`,
  Mark: `<Text>Use <Mark colorPalette="blue">tokens</Mark> before custom CSS.</Text>`,
  Menu: `<Menu.Root open>
  <Menu.Trigger asChild><Button variant="outline">Actions</Button></Menu.Trigger>
  <Menu.Positioner><Menu.Content><Menu.Item value="copy">Copy</Menu.Item><Menu.Item value="rename">Rename</Menu.Item></Menu.Content></Menu.Positioner>
</Menu.Root>`,
  NativeSelect: `<NativeSelect.Root width="320px"><NativeSelect.Field aria-label="Component"><option>Button</option><option>Input</option><option>Card</option></NativeSelect.Field><NativeSelect.Indicator /></NativeSelect.Root>`,
  NumberInput: `<NumberInput.Root defaultValue="12" width="220px"><NumberInput.Control /><NumberInput.Input aria-label="Quantity" /></NumberInput.Root>`,
  Pagination: `<Pagination.Root count={40} pageSize={10} defaultPage={2}>
  <HStack><Pagination.PrevTrigger /><Pagination.Items render={(page) => <Pagination.Item {...page} />} /><Pagination.NextTrigger /></HStack>
</Pagination.Root>`,
  PinInput: `<PinInput.Root defaultValue={["1","2","3","4"]}><PinInput.Control>{[0,1,2,3].map((index) => <PinInput.Input key={index} index={index} />)}</PinInput.Control></PinInput.Root>`,
  Popover: `<Popover.Root open>
  <Popover.Trigger asChild><Button variant="outline">Open popover</Button></Popover.Trigger>
  <Popover.Positioner><Popover.Content maxW="280px"><Popover.Arrow /><Popover.Body>Contextual content.</Popover.Body></Popover.Content></Popover.Positioner>
</Popover.Root>`,
  Progress: `<Progress.Root value={64} width="320px"><Progress.Track><Progress.Range /></Progress.Track><Progress.ValueText /></Progress.Root>`,
  ProgressCircle: `<ProgressCircle.Root value={72} size="lg"><ProgressCircle.Circle><ProgressCircle.Track /><ProgressCircle.Range /></ProgressCircle.Circle></ProgressCircle.Root>`,
  QRCode: `<QrCode.Root value="https://example.com" size="160px"><QrCode.Frame><QrCode.Pattern /></QrCode.Frame></QrCode.Root>`,
  RadioCard: `<RadioCard.Root defaultValue="pro" width="340px">
  <RadioCard.Item value="pro"><RadioCard.ItemHiddenInput /><RadioCard.ItemControl><RadioCard.ItemContent><RadioCard.ItemText>Pro plan</RadioCard.ItemText><RadioCard.ItemDescription>Best for teams.</RadioCard.ItemDescription></RadioCard.ItemContent><RadioCard.ItemIndicator /></RadioCard.ItemControl></RadioCard.Item>
</RadioCard.Root>`,
  RadioGroup: `<RadioGroup.Root defaultValue="comfortable"><HStack gap="4"><RadioGroup.Item value="compact"><RadioGroup.ItemHiddenInput /><RadioGroup.ItemIndicator /><RadioGroup.ItemText>Compact</RadioGroup.ItemText></RadioGroup.Item><RadioGroup.Item value="comfortable"><RadioGroup.ItemHiddenInput /><RadioGroup.ItemIndicator /><RadioGroup.ItemText>Comfortable</RadioGroup.ItemText></RadioGroup.Item></HStack></RadioGroup.Root>`,
  RatingGroup: `<RatingGroup.Root defaultValue={3} count={5}><RatingGroup.HiddenInput /><RatingGroup.Control>{[1,2,3,4,5].map((value) => <RatingGroup.Item key={value} index={value}><RatingGroup.ItemIndicator /></RatingGroup.Item>)}</RatingGroup.Control></RatingGroup.Root>`,
  ScrollArea: `<ScrollArea.Root height="180px" width="320px"><ScrollArea.Viewport><Stack p="4">{Array.from({ length: 8 }, (_, index) => <Box key={index} p="3" borderBottomWidth="1px">Row {index + 1}</Box>)}</Stack></ScrollArea.Viewport><ScrollArea.Scrollbar /></ScrollArea.Root>`,
  SegmentGroup: `<SegmentGroup.Root defaultValue="preview"><SegmentGroup.Indicator /><SegmentGroup.Item value="preview"><SegmentGroup.ItemText>Preview</SegmentGroup.ItemText><SegmentGroup.ItemHiddenInput /></SegmentGroup.Item><SegmentGroup.Item value="code"><SegmentGroup.ItemText>Code</SegmentGroup.ItemText><SegmentGroup.ItemHiddenInput /></SegmentGroup.Item></SegmentGroup.Root>`,
  Select: `<Select.Root collection={createListCollection({ items: ["Primary", "Success", "Warning"] })} width="320px">
  <Select.Label>Color</Select.Label>
  <Select.Control><Select.Trigger><Select.ValueText placeholder="Choose color" /></Select.Trigger><Select.IndicatorGroup><Select.Indicator /></Select.IndicatorGroup></Select.Control>
</Select.Root>`,
  Skeleton: `<Stack width="320px"><Skeleton height="20px" /><Skeleton height="20px" width="75%" /><Skeleton height="80px" /></Stack>`,
  Slider: `<Slider.Root defaultValue={[40]} width="320px" aria-label={["Volume"]}><Slider.Control><Slider.Track><Slider.Range /></Slider.Track><Slider.Thumbs /></Slider.Control></Slider.Root>`,
  Spinner: `<Spinner size="xl" color="ads.accent" />`,
  Stat: `<Stat.Root><Stat.Label>Render checks</Stat.Label><Stat.ValueText>98%</Stat.ValueText></Stat.Root>`,
  Status: `<HStack><Status.Root colorPalette="green"><Status.Indicator />Online</Status.Root><Status.Root colorPalette="orange"><Status.Indicator />Pending</Status.Root></HStack>`,
  Steps: `<Steps.Root defaultStep={1} count={3} width="420px">
  <Steps.List>{[0,1,2].map((step) => <Steps.Item key={step} index={step}><Steps.Trigger><Steps.Indicator /><Steps.Title>Step {step + 1}</Steps.Title></Steps.Trigger></Steps.Item>)}</Steps.List>
  {[0,1,2].map((step) => <Steps.Content key={step} index={step}>Step {step + 1} content</Steps.Content>)}
</Steps.Root>`,
  Switch: `<Switch.Root defaultChecked><Switch.HiddenInput /><Switch.Control><Switch.Thumb /></Switch.Control><Switch.Label>Enable preview</Switch.Label></Switch.Root>`,
  Table: `<Table.Root size="sm" width="360px"><Table.Header><Table.Row><Table.ColumnHeader>Name</Table.ColumnHeader><Table.ColumnHeader>Status</Table.ColumnHeader></Table.Row></Table.Header><Table.Body><Table.Row><Table.Cell>Button</Table.Cell><Table.Cell>Ready</Table.Cell></Table.Row><Table.Row><Table.Cell>DatePicker</Table.Cell><Table.Cell>Previewed</Table.Cell></Table.Row></Table.Body></Table.Root>`,
  Tabs: `<Tabs.Root defaultValue="preview" width="360px"><Tabs.List><Tabs.Trigger value="preview">Preview</Tabs.Trigger><Tabs.Trigger value="code">Code</Tabs.Trigger></Tabs.List><Tabs.Content value="preview">Live component output</Tabs.Content><Tabs.Content value="code">JSX source</Tabs.Content></Tabs.Root>`,
  TagsInput: `<TagsInput.Root defaultValue={["Components", "Tokens"]} width="340px"><TagsInput.Control>{["Components", "Tokens"].map((value, index) => <TagsInput.Item key={value} value={value} index={index}><TagsInput.ItemText>{value}</TagsInput.ItemText><TagsInput.ItemDeleteTrigger /></TagsInput.Item>)}<TagsInput.Input placeholder="Add tag" /></TagsInput.Control></TagsInput.Root>`,
  Tag: `<HStack><Tag.Root><Tag.Label>Design</Tag.Label></Tag.Root><Tag.Root colorPalette="blue"><Tag.Label>Agentic</Tag.Label></Tag.Root></HStack>`,
  Textarea: `<Textarea width="340px" defaultValue="Write component guidance here." />`,
  Timeline: `<Timeline.Root>
  <Timeline.Item><Timeline.Connector><Timeline.Separator /><Timeline.Indicator /></Timeline.Connector><Timeline.Content><Timeline.Title>Spec</Timeline.Title><Timeline.Description>Query before guessing.</Timeline.Description></Timeline.Content></Timeline.Item>
  <Timeline.Item><Timeline.Connector><Timeline.Separator /><Timeline.Indicator /></Timeline.Connector><Timeline.Content><Timeline.Title>Render</Timeline.Title><Timeline.Description>Verify with screenshot.</Timeline.Description></Timeline.Content></Timeline.Item>
</Timeline.Root>`,
  Toast: `<Alert.Root status="info" variant="surface" width="320px"><Alert.Indicator /><Alert.Content><Alert.Title>Toast preview</Alert.Title><Alert.Description>Use the toaster API in app code.</Alert.Description></Alert.Content></Alert.Root>`,
  Toggle: `<Toggle.Root defaultPressed><Toggle.Indicator><Check size={16} /></Toggle.Indicator>Enabled</Toggle.Root>`,
  Tooltip: `<Tooltip.Root open><Tooltip.Trigger asChild><Button variant="outline">Hover me</Button></Tooltip.Trigger><Tooltip.Positioner><Tooltip.Content>Helpful label</Tooltip.Content></Tooltip.Positioner></Tooltip.Root>`,
  TreeView: `<TreeView.Root collection={createTreeCollection({ rootNode: { value: "root", label: "Root", children: [{ value: "tokens", label: "Tokens" }, { value: "components", label: "Components" }] } })} width="280px">
  <TreeView.Label>Explorer</TreeView.Label>
</TreeView.Root>`,
};

Object.assign(previewSnippets, {
  ActionBar: `<ActionBar.Root open>
  <ActionBar.Content>
    <ActionBar.SelectionTrigger>3 selected</ActionBar.SelectionTrigger>
    <ActionBar.Separator />
    <Button size="sm" variant="outline">Archive</Button>
    <Button size="sm">Apply</Button>
    <ActionBar.CloseTrigger asChild><IconButton aria-label="Close action bar" size="sm" variant="ghost"><ChevronRight size={14} /></IconButton></ActionBar.CloseTrigger>
  </ActionBar.Content>
</ActionBar.Root>`,
  Carousel: `<Carousel.Root width="380px">
  <Carousel.ItemGroup>
    <Carousel.Item index={0}><Center h="180px" bg="ads.accent.subtle" borderRadius="md" color="ads.accent" fontWeight="700">Slide 1</Center></Carousel.Item>
    <Carousel.Item index={1}><Center h="180px" bg="ads.success.subtle" borderRadius="md" color="ads.success" fontWeight="700">Slide 2</Center></Carousel.Item>
  </Carousel.ItemGroup>
  <Carousel.Control>
    <Carousel.PrevTrigger asChild><IconButton aria-label="Previous" size="sm" variant="outline"><ChevronRight size={16} style={{ transform: "rotate(180deg)" }} /></IconButton></Carousel.PrevTrigger>
    <Carousel.NextTrigger asChild><IconButton aria-label="Next" size="sm" variant="outline"><ChevronRight size={16} /></IconButton></Carousel.NextTrigger>
  </Carousel.Control>
  <Carousel.IndicatorGroup><Carousel.Indicators /></Carousel.IndicatorGroup>
</Carousel.Root>`,
  Clipboard: `<Clipboard.Root value="npm run dev" width="340px">
  <Clipboard.Label>Install command</Clipboard.Label>
  <Clipboard.Control>
    <Clipboard.Input />
    <Clipboard.Trigger asChild><IconButton aria-label="Copy command" variant="outline"><Copy size={16} /></IconButton></Clipboard.Trigger>
  </Clipboard.Control>
  <HStack mt="2"><Clipboard.Indicator copied={<Check size={14} />}>{<Copy size={14} />}</Clipboard.Indicator><Clipboard.ValueText fontSize="sm" color="ads.muted" /></HStack>
</Clipboard.Root>`,
  ColorPicker: `<ColorPicker.Root defaultValue="#145fc4" open width="320px">
  <ColorPicker.Label>Brand color</ColorPicker.Label>
  <ColorPicker.Control>
    <ColorPicker.ValueSwatch />
    <ColorPicker.Input />
    <ColorPicker.Trigger asChild><Button variant="outline" size="sm">Pick</Button></ColorPicker.Trigger>
  </ColorPicker.Control>
  <ColorPicker.Content>
    <ColorPicker.Area><ColorPicker.AreaBackground /><ColorPicker.AreaThumb /></ColorPicker.Area>
    <ColorPicker.ChannelSlider channel="hue"><ColorPicker.ChannelSliderTrack /><ColorPicker.ChannelSliderThumb /></ColorPicker.ChannelSlider>
  </ColorPicker.Content>
</ColorPicker.Root>`,
  ColorSwatch: `<HStack gap="4">
  {["#145fc4", "#15803d", "#b45309", "#b42318"].map((value) => (
    <Stack key={value} align="center" gap="2">
      <ColorSwatch.Root value={value} boxSize="44px" borderRadius="md" borderWidth="1px" />
      <Code fontSize="xs">{value}</Code>
    </Stack>
  ))}
</HStack>`,
  Dialog: `<Dialog.Root defaultOpen modal={false}>
  <Dialog.Trigger asChild><Button variant="outline">Open dialog</Button></Dialog.Trigger>
  <Dialog.Positioner position="absolute" inset="auto">
    <Dialog.Content maxW="360px" boxShadow="lg">
      <Dialog.Header><Dialog.Title>Confirm action</Dialog.Title></Dialog.Header>
      <Dialog.Body><Text color="ads.muted">A closeable dialog preview that stays in the explorer.</Text></Dialog.Body>
      <Dialog.Footer>
        <Dialog.CloseTrigger asChild><Button variant="outline">Close</Button></Dialog.CloseTrigger>
        <Button>Confirm</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Positioner>
</Dialog.Root>`,
  Drawer: `<Drawer.Root defaultOpen modal={false}>
  <Drawer.Trigger asChild><Button variant="outline">Open drawer</Button></Drawer.Trigger>
  <Drawer.Positioner position="absolute" inset="auto">
    <Drawer.Content width="340px" boxShadow="lg">
      <Drawer.Header><Drawer.Title>Drawer title</Drawer.Title></Drawer.Header>
      <Drawer.Body><Text color="ads.muted">A closeable side-panel preview.</Text></Drawer.Body>
      <Drawer.Footer><Drawer.CloseTrigger asChild><Button variant="outline">Close</Button></Drawer.CloseTrigger></Drawer.Footer>
    </Drawer.Content>
  </Drawer.Positioner>
</Drawer.Root>`,
  HoverCard: `<HoverCard.Root open>
  <HoverCard.Trigger asChild><Button variant="outline">Hover target</Button></HoverCard.Trigger>
  <HoverCard.Positioner>
    <HoverCard.Content maxW="300px" boxShadow="md">
      <HoverCard.Arrow><HoverCard.ArrowTip /></HoverCard.Arrow>
      <Stack gap="1" p="3"><Text fontWeight="700">Hover card</Text><Text color="ads.muted">Rich contextual content anchored to a trigger.</Text></Stack>
    </HoverCard.Content>
  </HoverCard.Positioner>
</HoverCard.Root>`,
  Loader: `<Loader visible text="Loading preview" spinner={<Spinner size="sm" color="ads.accent" />} />`,
  Marquee: `<Marquee.Root width="380px">
  <Marquee.Viewport>
    <Marquee.Content>
      {["Tokens", "Components", "Themes", "MCP"].map((item) => <Marquee.Item key={item}><Badge variant="subtle">{item}</Badge></Marquee.Item>)}
    </Marquee.Content>
  </Marquee.Viewport>
</Marquee.Root>`,
  Pagination: `<Pagination.Root count={40} pageSize={10} defaultPage={2}>
  <HStack>
    <Pagination.PrevTrigger asChild><IconButton aria-label="Previous page" size="sm" variant="outline"><ChevronRight size={14} style={{ transform: "rotate(180deg)" }} /></IconButton></Pagination.PrevTrigger>
    <Pagination.Items render={(page) => <Pagination.Item {...page}>{page.value}</Pagination.Item>} />
    <Pagination.NextTrigger asChild><IconButton aria-label="Next page" size="sm" variant="outline"><ChevronRight size={14} /></IconButton></Pagination.NextTrigger>
    <Pagination.PageText format="compact" />
  </HStack>
</Pagination.Root>`,
  QRCode: `<QrCode.Root value="https://example.com" size={180} color="ads.fg">
  <QrCode.Frame bg="white" p="3" borderRadius="md" borderWidth="1px">
    <QrCode.Pattern />
  </QrCode.Frame>
</QrCode.Root>`,
  Splitter: `<Splitter.Root width="420px" height="180px" panels={[{ id: "left", size: 42 }, { id: "right", size: 58 }]}>
  <Splitter.Panel id="left"><Center h="full" bg="ads.accent.subtle" borderRadius="md">Panel A</Center></Splitter.Panel>
  <Splitter.ResizeTrigger id="left:right"><Splitter.ResizeTriggerIndicator /></Splitter.ResizeTrigger>
  <Splitter.Panel id="right"><Center h="full" bg="ads.surface.muted" borderRadius="md">Panel B</Center></Splitter.Panel>
</Splitter.Root>`,
  TagsInput: `<TagsInput.Root defaultValue={["Components", "Tokens"]} width="360px">
  <TagsInput.Label>Tags</TagsInput.Label>
  <TagsInput.Control>
    <TagsInput.Items>
      {(item) => (
        <TagsInput.Item key={item.value} index={item.index} value={item.value}>
          <TagsInput.ItemPreview>
            <TagsInput.ItemText>{item.value}</TagsInput.ItemText>
            <TagsInput.ItemDeleteTrigger />
          </TagsInput.ItemPreview>
          <TagsInput.ItemInput />
        </TagsInput.Item>
      )}
    </TagsInput.Items>
    <TagsInput.Input placeholder="Add tag" />
  </TagsInput.Control>
</TagsInput.Root>`,
  Toggle: `<Toggle.Root defaultPressed aria-label="Toggle preview" px="4" py="2" borderWidth="1px" borderRadius="md">
  <HStack><Toggle.Indicator fallback={<Search size={16} />}><Check size={16} /></Toggle.Indicator><Span>Pressed state</Span></HStack>
</Toggle.Root>`,
  TreeView: `<TreeView.Root collection={createTreeCollection({ rootNode: { value: "root", label: "Explorer", children: [{ value: "tokens", label: "Tokens", children: [{ value: "colors", label: "Colors" }, { value: "motion", label: "Motion" }] }, { value: "components", label: "Components", children: [{ value: "button", label: "Button" }, { value: "dialog", label: "Dialog" }] }] } })} defaultExpandedValue={["tokens", "components"]} width="320px">
  <TreeView.Label>Explorer tree</TreeView.Label>
  <TreeView.Tree>
    <TreeView.Branch value="tokens">
      <TreeView.BranchControl><TreeView.BranchIndicator /><TreeView.BranchText>Tokens</TreeView.BranchText></TreeView.BranchControl>
      <TreeView.BranchContent><TreeView.Item value="colors"><TreeView.ItemText>Colors</TreeView.ItemText></TreeView.Item><TreeView.Item value="motion"><TreeView.ItemText>Motion</TreeView.ItemText></TreeView.Item></TreeView.BranchContent>
    </TreeView.Branch>
    <TreeView.Branch value="components">
      <TreeView.BranchControl><TreeView.BranchIndicator /><TreeView.BranchText>Components</TreeView.BranchText></TreeView.BranchControl>
      <TreeView.BranchContent><TreeView.Item value="button"><TreeView.ItemText>Button</TreeView.ItemText></TreeView.Item><TreeView.Item value="dialog"><TreeView.ItemText>Dialog</TreeView.ItemText></TreeView.Item></TreeView.BranchContent>
    </TreeView.Branch>
  </TreeView.Tree>
</TreeView.Root>`,
  AbsoluteCenter: `<Box position="relative" width="320px" height="180px" borderWidth="1px" borderRadius="md" bg="ads.accent.subtle">
  <AbsoluteCenter><Badge colorPalette="blue">Centered overlay</Badge></AbsoluteCenter>
</Box>`,
  Bleed: `<Box width="320px" borderWidth="1px" borderRadius="md" overflow="hidden" p="5">
  <Bleed inline="5" blockStart="5"><Box bg="ads.accent" color="ads.fg.inverse" p="3">Bleed header</Box></Bleed>
  <Text mt="4">Content keeps the parent rhythm while the header reaches the edge.</Text>
</Box>`,
  ClientOnly: `<ClientOnly fallback={<Skeleton width="220px" height="40px" />}>
  <Badge colorPalette="green">Client-only content mounted</Badge>
</ClientOnly>`,
  DownloadTrigger: `<DownloadTrigger data="ADS Light export" fileName="ads-light.txt" mimeType="text/plain" asChild>
  <Button variant="outline"><Copy size={16} /> Download text</Button>
</DownloadTrigger>`,
  Em: `<Text>Use <Em>emphasis</Em> for a short phrase inside body copy.</Text>`,
  Environment: `<EnvironmentProvider value={() => document}>
  <Badge variant="subtle">Environment provider active</Badge>
</EnvironmentProvider>`,
  Float: `<Box position="relative" boxSize="160px" bg="ads.accent.subtle" borderRadius="md">
  <Float placement="top-end"><Badge colorPalette="red">3</Badge></Float>
</Box>`,
  FocusTrap: `<FocusTrap disabled>
  <Box width="320px" borderWidth="1px" borderRadius="md" p="4">
    <Stack gap="3"><Text fontWeight="700">Focus trap region</Text><Input placeholder="Focusable input" /><Button size="sm">Action</Button></Stack>
  </Box>
</FocusTrap>`,
  For: `<HStack>{["Spec", "Render", "Verify"].map((item) => <Badge key={item} variant="subtle">{item}</Badge>)}</HStack>`,
  Format: `<HStack><FormatNumber value={1234.56} style="currency" currency="USD" /><Separator orientation="vertical" height="5" /><FormatByte value={2048000} /></HStack>`,
  Highlight: `<Text maxW="360px">
  <Highlight query={["queryable", "renderable"]} styles={{ px: "1", rounded: "sm", bg: "ads.accent.subtle", color: "ads.accent" }}>
    Agentic design systems are queryable, renderable, and verifiable.
  </Highlight>
</Text>`,
  Locale: `<LocaleProvider locale="en-US"><FormatNumber value={123456.789} /></LocaleProvider>`,
  Portal: `<Box width="320px" borderWidth="1px" borderRadius="md" p="4">
  <Text color="ads.muted">Portal renders content outside the local DOM tree.</Text>
  <Portal><Box position="fixed" right="4" bottom="4" bg="ads.accent" color="ads.fg.inverse" px="3" py="2" borderRadius="md">Portal layer</Box></Portal>
</Box>`,
  Presence: `<Presence present>
  <Box px="4" py="3" borderWidth="1px" borderRadius="md" bg="ads.success.subtle">Presence-mounted content</Box>
</Presence>`,
  Quote: `<Quote>Query before guessing.</Quote>`,
  Radiomark: `<HStack><Radiomark checked /><Text>Selected option</Text></HStack>`,
  Show: `<Show when={true} fallback={<Badge>Hidden</Badge>}><Badge colorPalette="green">Shown when condition is true</Badge></Show>`,
  SimpleGrid: `<SimpleGrid columns={3} gap="3" width="300px">{[1,2,3,4,5,6].map((item) => <Box key={item} h="48px" bg="ads.accent.subtle" borderRadius="md" />)}</SimpleGrid>`,
  SkipNav: `<Stack gap="3"><SkipNavLink>Skip to content</SkipNavLink><Box id="chakra-skip-nav" tabIndex="-1" p="4" borderWidth="1px" borderRadius="md">Main content target</Box></Stack>`,
  Spacer: `<Flex width="340px" align="center"><Badge>Left</Badge><Spacer /><Badge colorPalette="blue">Right</Badge></Flex>`,
  Span: `<Text>Inline <Span color="ads.accent" fontWeight="700">span styling</Span> inside text.</Text>`,
  Square: `<Square size="96px" bg="ads.accent.subtle" color="ads.accent" borderRadius="md"><Search size={28} /></Square>`,
  Sticky: `<Box height="180px" width="320px" overflow="auto" borderWidth="1px" borderRadius="md" tabIndex={0} aria-label="Scrollable list" role="region">
  <Sticky top="0"><Box bg="ads.accent" color="ads.fg.inverse" p="2">Sticky header</Box></Sticky>
  <Stack p="3">{Array.from({ length: 6 }, (_, index) => <Text key={index}>Scrollable row {index + 1}</Text>)}</Stack>
</Box>`,
  Strong: `<Text><Strong>Strong text</Strong> marks the most important phrase.</Text>`,
  VisuallyHidden: `<Button>
  <Search size={16} />
  <VisuallyHidden>Search</VisuallyHidden>
</Button>`,
  Wrap: `<Wrap maxW="340px">{["Button", "Input", "Card", "Dialog", "Tabs"].map((item) => <Badge key={item} variant="subtle">{item}</Badge>)}</Wrap>`,
});

Object.assign(previewSnippets, {
  Carousel: `<Carousel.Root width="380px" slideCount={2}>
  <Carousel.ItemGroup>
    <Carousel.Item index={0}><Center h="180px" bg="ads.accent.subtle" borderRadius="md" color="ads.accent" fontWeight="700">Slide 1</Center></Carousel.Item>
    <Carousel.Item index={1}><Center h="180px" bg="ads.success.subtle" borderRadius="md" color="ads.success" fontWeight="700">Slide 2</Center></Carousel.Item>
  </Carousel.ItemGroup>
  <Carousel.Control>
    <Carousel.PrevTrigger asChild><IconButton aria-label="Previous" size="sm" variant="outline"><ChevronRight size={16} style={{ transform: "rotate(180deg)" }} /></IconButton></Carousel.PrevTrigger>
    <Carousel.NextTrigger asChild><IconButton aria-label="Next" size="sm" variant="outline"><ChevronRight size={16} /></IconButton></Carousel.NextTrigger>
  </Carousel.Control>
  <Carousel.IndicatorGroup><Carousel.Indicators /></Carousel.IndicatorGroup>
</Carousel.Root>`,
  ColorPicker: `<ColorPicker.Root defaultValue={parseColor("#145fc4")} width="320px">
  <ColorPicker.Label>Brand color</ColorPicker.Label>
  <ColorPicker.Control>
    <ColorPicker.ValueSwatch />
    <ColorPicker.Input />
    <ColorPicker.Trigger asChild><Button variant="outline" size="sm">Pick</Button></ColorPicker.Trigger>
  </ColorPicker.Control>
  <Stack mt="3" gap="2">
    <Box height="120px" borderRadius="md" borderWidth="1px" bg="linear-gradient(90deg, #fff, #145fc4), linear-gradient(0deg, #000, transparent)" bgBlendMode="multiply" position="relative">
      <Box position="absolute" right="5" top="5" boxSize="3" borderRadius="full" borderWidth="2px" borderColor="white" boxShadow="sm" />
    </Box>
    <Box height="10px" borderRadius="full" bg="linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red)" />
  </Stack>
</ColorPicker.Root>`,
  ColorSwatch: `<HStack gap="4">
  {["#145fc4", "#15803d", "#b45309", "#b42318"].map((value) => (
    <Stack key={value} align="center" gap="2">
      <ColorSwatch value={value} boxSize="44px" borderRadius="md" borderWidth="1px" />
      <Code fontSize="xs">{value}</Code>
    </Stack>
  ))}
</HStack>`,
  QRCode: `<Stack align="center" gap="3">
  <QrCode.Root value="https://example.com" color="black" style={{ width: "180px", height: "180px" }}>
    <QrCode.Frame bg="white" width="180px" height="180px" borderRadius="md" borderWidth="1px" boxShadow="sm">
      <QrCode.Pattern />
    </QrCode.Frame>
  </QrCode.Root>
  <Text fontSize="sm" color="ads.muted">https://example.com</Text>
</Stack>`,
  TreeView: `<Box width="320px" borderWidth="1px" borderRadius="md" p="4">
  <TreeView.Root collection={createTreeCollection({ rootNode: { value: "root", label: "Explorer", children: [] } })}>
    <TreeView.Label>Explorer tree</TreeView.Label>
  </TreeView.Root>
  <Stack gap="2" mt="3">
    <HStack><ChevronRight size={14} /><Text fontWeight="700">Tokens</Text></HStack>
    <Stack gap="1" ps="6"><Text color="ads.muted">Colors</Text><Text color="ads.muted">Motion</Text></Stack>
    <HStack><ChevronRight size={14} /><Text fontWeight="700">Components</Text></HStack>
    <Stack gap="1" ps="6"><Text color="ads.muted">Button</Text><Text color="ads.muted">Dialog</Text></Stack>
  </Stack>
</Box>`,
  Marquee: `<Marquee.Root width="380px">
  <Marquee.Viewport>
    <Marquee.Content>
      {["Tokens", "Components", "Themes", "MCP"].map((item) => <Marquee.Item key={item}><Badge variant="subtle">{item}</Badge></Marquee.Item>)}
    </Marquee.Content>
  </Marquee.Viewport>
</Marquee.Root>`,
  Splitter: `<Splitter.Root width="420px" height="180px" panels={[{ id: "left", size: 42 }, { id: "right", size: 58 }]}>
  <Splitter.Panel id="left"><Center h="full" bg="ads.accent.subtle" borderRadius="md">Panel A</Center></Splitter.Panel>
  <Splitter.ResizeTrigger id="left:right"><Splitter.ResizeTriggerIndicator /></Splitter.ResizeTrigger>
  <Splitter.Panel id="right"><Center h="full" bg="ads.surface.muted" borderRadius="md">Panel B</Center></Splitter.Panel>
</Splitter.Root>`,
});

Object.assign(previewSnippets, {
  CloseButton: `<Box width="320px" borderWidth="1px" borderRadius="md" p="4">
  <HStack justify="space-between" align="start">
    <Stack gap="1">
      <Heading size="sm">Notifications</Heading>
      <Text color="ads.muted" fontSize="sm">You have 3 unread alerts.</Text>
    </Stack>
    <CloseButton aria-label="Dismiss notifications" />
  </HStack>
</Box>`,
  // Toaster renders into a portal and is driven at runtime by createToaster(),
  // which is not in the sandbox scope. Preview a static stand-in of stacked
  // toasts (mirroring how Toast is previewed) and document the live API in the spec.
  Toaster: `<Stack width="360px" gap="3">
  <Alert.Root status="success" variant="surface">
    <Alert.Indicator />
    <Alert.Content><Alert.Title>Saved</Alert.Title><Alert.Description>Your changes are synced.</Alert.Description></Alert.Content>
    <CloseButton aria-label="Dismiss notification" size="sm" />
  </Alert.Root>
  <Alert.Root status="error" variant="surface">
    <Alert.Indicator />
    <Alert.Content><Alert.Title>Upload failed</Alert.Title><Alert.Description>Check your connection and retry.</Alert.Description></Alert.Content>
    <CloseButton aria-label="Dismiss notification" size="sm" />
  </Alert.Root>
  <Text fontSize="xs" color="ads.muted">Static preview — toasts are created at runtime via createToaster().</Text>
</Stack>`,
});

function jsxText(value) {
  return String(value ?? "").replace(/[<>{}]/g, "").trim() || "Preview";
}

function jsxAttr(name, value) {
  if (value === true) return name;
  if (value === false || value == null || value === "") return "";
  return `${name}="${String(value).replace(/"/g, "&quot;")}"`;
}

function joinAttrs(attrs) {
  return attrs.filter(Boolean).join(" ");
}

function getPropOptions(component, propName) {
  const keyProp = component?.keyProps?.find((prop) => (prop.name ?? prop) === propName);
  return keyProp?.options ?? component?.variantDimensions?.[propName] ?? [];
}

function getInitialControls(component, params = new URLSearchParams()) {
  const variantOptions = component?.variants?.filter((item) => item !== "default") ?? [];
  const sizeOptions = component?.sizes ?? getPropOptions(component, "size");
  const states = component?.states?.length ? component.states : defaultStates;
  const defaults = Object.fromEntries((component?.controls ?? []).map((control) => {
    // Boolean prop toggles start OFF regardless of generated metadata, so the
    // default preview stays clean and the user opts each one in. Disclosure
    // state (open) keeps its default so overlay previews render visible.
    if (control.type === "boolean" && control.bindsTo !== "disclosure-state") return [control.name, "false"];
    return [control.name, control.default ?? ""];
  }));
  defaults.variant ??= component?.defaultVariants?.variant ?? variantOptions[0] ?? "default";
  defaults.size ??= component?.defaultVariants?.size ?? sizeOptions[0] ?? "md";
  defaults.colorPalette ??= component?.keyProps?.some((prop) => (prop.name ?? prop) === "colorPalette") ? "brand" : "";
  defaults.state ??= states.includes("default") ? "default" : states[0] ?? "default";
  defaults.label ??= component?.name === "Button" ? "Save changes" : component?.name ?? "Preview";
  defaults.description ??= "Rendered in the active ADS Light brand.";
  defaults.value ??= "Preview value";
  defaults.icon ??= "Search";
  defaults.leftIcon ??= defaults.icon ?? "Search";
  defaults.rightIcon ??= defaults.icon ?? "ChevronRight";
  defaults.iconLeft ??= component?.name === "Button" ? "true" : "false";
  defaults.iconRight ??= "false";

  for (const [key, value] of params.entries()) {
    if (key === "variant") {
      defaults.variant = variantAliases[value.toLowerCase()] ?? value;
      continue;
    }
    if (key === "color") {
      defaults.colorPalette = colorAliases[value.toLowerCase()] ?? value.toLowerCase();
      continue;
    }
    if (controlParamNames.has(key) || component?.variantDimensions?.[key]) defaults[key] = value;
  }
  if (params.has("icon") && !params.has("leftIcon")) defaults.leftIcon = defaults.icon;
  if (params.has("icon") && !params.has("rightIcon")) defaults.rightIcon = defaults.icon;
  return defaults;
}

// Controls the renderer can actually apply, by name. Everything else shown in
// the panel was dead UI (raw style/structural props like bg, p, css, as,
// children rendered as text inputs that changed nothing).
const AXIS_OR_CONTENT_CONTROLS = new Set([
  "variant", "size", "colorPalette", "state", "status",
  "label", "value", "description",
  "icon", "leftIcon", "rightIcon", "iconLeft", "iconRight",
]);
const APPLIED_BINDINGS = new Set([
  "state-simulation", "chakra-recipe-dimension", "disclosure-state", "slot", "preview-content",
]);

// A control is worth showing only if the renderer does something with it:
// a known axis/content control, a recipe dimension, a disclosure/slot binding,
// or a boolean prop (disabled, loading, striped, ...). Raw style/structural
// props are hidden — tune those in the JSX editor instead.
// Captured at module load, before any history rewrite (syncUrl drops unknown
// params), so the inert-controls generator's bypass survives interaction.
const AUDIT_CONTROLS = typeof window !== "undefined" && new URLSearchParams(window.location.search).has("auditControls");

function isMeaningfulControl(control) {
  if (AXIS_OR_CONTENT_CONTROLS.has(control.name)) return true;
  if (APPLIED_BINDINGS.has(control.bindsTo)) return true;
  if (control.type === "boolean") return true;
  return false;
}

function getControlSchema(component) {
  if (component?.controls?.length) {
    // Controls proven inert for this component by `generate:inert-controls`
    // (the renderer ignores them — Chakra has no such prop, or the preview
    // fixes that state). Showing a dead control is worse than hiding it.
    // AUDIT_CONTROLS (captured once at load) bypasses the hide so the generator
    // can re-test every control against the unfiltered panel.
    const inert = AUDIT_CONTROLS ? new Set() : new Set(inertControls[component.name] ?? []);
    return component.controls.filter((control) => {
      if (!isMeaningfulControl(control)) return false;
      if (inert.has(control.name)) return false;
      // Drop a select that offers nothing but "default" (variant/state/etc.):
      // a dropdown with one inert option does nothing.
      if (control.type === "select") {
        const real = (control.options ?? []).filter((option) => option !== "default");
        return real.length > 0;
      }
      return true;
    });
  }
  const schema = [];
  const variantOptions = component?.variants?.filter((item) => item !== "default") ?? [];
  const sizeOptions = component?.sizes ?? getPropOptions(component, "size");
  const states = component?.states?.length ? component.states : defaultStates;

  if (variantOptions.length) schema.push({ name: "variant", label: "Variant", type: "select", options: variantOptions });
  if (sizeOptions.length) schema.push({ name: "size", label: "Size", type: "select", options: sizeOptions });
  if (component?.keyProps?.some((prop) => (prop.name ?? prop) === "colorPalette")) {
    schema.push({ name: "colorPalette", label: "Color", type: "select", options: colorPalettes });
  }
  if (states.length) schema.push({ name: "state", label: "State", type: "select", options: Array.from(new Set(["default", ...states])) });

  Object.entries(component?.variantDimensions ?? {}).forEach(([name, options]) => {
    if (["variant", "size"].includes(name) || schema.some((control) => control.name === name)) return;
    if (Array.isArray(options) && options.length > 1) {
      schema.push({ name, label: name.replace(/([A-Z])/g, " $1"), type: "select", options });
    }
  });

  if (labelLikeComponents.has(component?.name)) {
    schema.push({ name: "label", label: "Label", type: "text" });
  }
  if (component?.name === "Input" || component?.name === "Textarea") {
    schema.push({ name: "value", label: "Value", type: "text" });
  }
  if (component?.name === "Alert" || component?.name === "Card") {
    schema.push({ name: "description", label: "Description", type: "text" });
  }
  if (["Button", "IconButton", "Toggle"].includes(component?.name)) {
    schema.push({ name: "icon", label: "Icon", type: "select", options: lucideIconNames });
    if (component?.name === "Button") {
      schema.push({ name: "iconLeft", label: "Left icon", type: "boolean" });
      schema.push({ name: "leftIcon", label: "Left icon name", type: "select", options: lucideIconNames });
      schema.push({ name: "iconRight", label: "Right icon", type: "boolean" });
      schema.push({ name: "rightIcon", label: "Right icon name", type: "select", options: lucideIconNames });
    }
  }
  return schema;
}

// Canonical, control-aware name for the current preview, e.g.
// "brand-outline--button", "lg--circle", "striped-interactive--table".
// Modifiers are the non-default controls; bare component slug when untouched.
function buildVariantName(component, values, customCode) {
  const slug = (component?.name ?? "component").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  if (customCode) return `custom--${slug}`;
  const schema = getControlSchema(component);
  const skip = new Set(["label", "value", "description", "icon", "leftIcon", "rightIcon", "iconLeft", "iconRight"]);
  const kebab = (s) => String(s).replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  const token = {};
  for (const control of schema) {
    if (skip.has(control.name)) continue;
    const value = values[control.name];
    if (control.type === "boolean") {
      if (value === "true") token[control.name] = kebab(control.name);
      continue;
    }
    if (control.name === "state") {
      if (value && value !== "default") token.state = kebab(value);
      continue;
    }
    if (!value || value === "default") continue;
    // colorPalette always names the variant; others only when off their default.
    if (control.name !== "colorPalette" && String(value) === String(control.default ?? "")) continue;
    token[control.name] = kebab(value);
  }
  const ordered = ["colorPalette", "variant", "size"]
    .concat(schema.map((c) => c.name).filter((n) => !["colorPalette", "variant", "size", "state"].includes(n)))
    .concat(["state"]);
  const parts = [...new Set(ordered)].map((n) => token[n]).filter(Boolean);
  return parts.length ? `${parts.join("-")}--${slug}` : slug;
}

function getStateAttrs(state) {
  return {
    "data-hover": state === "hover",
    "data-focus-visible": state === "focus-visible",
    "data-active": state === "active",
    disabled: state === "disabled",
    invalid: state === "invalid",
    readOnly: state === "readOnly",
    loading: state === "loading",
  };
}

// Props the dedicated builders / content slots own — never emitted as plain
// attributes (they're rendered as children, explicit props, or icon slots).
const NEVER_ATTR = new Set([
  "variant", "colorPalette", "state",
  "label", "value", "description", "status",
  "icon", "leftIcon", "rightIcon", "iconLeft", "iconRight",
]);

// Box-shaped primitives size by boxSize, not the container-scale `size` tokens.
const BOX_PRIMITIVES = new Set(["Box", "Circle", "Square", "Center", "AbsoluteCenter", "Icon"]);
const BOX_PRIMITIVE_SIZE = { xs: "40px", sm: "56px", md: "72px", lg: "96px", xl: "128px", "2xl": "160px", auto: "auto" };
// Typography has no `size` recipe; its scale lives on fontSize tokens.
const TYPE_SIZED = new Set(["Text", "Span", "Strong", "Em", "Mark", "Quote", "Highlight", "Link", "Code", "Kbd"]);
// Icon is boxSize-driven but at icon scale, not card scale.
const ICON_SIZE = { xs: "12px", sm: "16px", md: "20px", lg: "24px", xl: "32px", "2xl": "40px", auto: "auto" };

// Build the prop map a control panel implies. colorPalette and a real variant
// always apply; every other axis (size, recipe dimensions, boolean props,
// applicable selects) applies only when the user moved it off its default, so
// a preview snippet's curated values (e.g. Circle's size="72px") stay intact
// until deliberately changed. The injector then overrides those in place.
function buildAttrMap(component, values) {
  const dims = component?.variantDimensions ?? {};
  const attrMap = {};

  if (values.colorPalette) attrMap.colorPalette = values.colorPalette;
  if (values.variant && values.variant !== "default") attrMap.variant = values.variant;

  for (const control of component?.controls ?? []) {
    const name = control.name;
    if (NEVER_ATTR.has(name) || !isMeaningfulControl(control)) continue;
    const value = values[name];
    if (control.type === "boolean") {
      if (value === "true") attrMap[name] = true;
      continue;
    }
    const dflt = control.default ?? "";
    if (value !== undefined && value !== "" && String(value) !== String(dflt)) attrMap[name] = value;
  }

  // Recipe dimensions not already surfaced as a named control (those are
  // handled above; re-emitting here would double-write, e.g. interactive="false").
  const controlNames = new Set((component?.controls ?? []).map((control) => control.name));
  for (const [name, options] of Object.entries(dims)) {
    if (["variant", "size"].includes(name) || name in attrMap || controlNames.has(name)) continue;
    if (values[name] && values[name] !== options?.[0]) attrMap[name] = values[name];
  }

  // Box primitives have no useful `size` recipe — the tokens resolve to
  // container widths (lg ≈ 32rem) and Box has no `size` prop at all. Translate
  // a chosen size into a concrete boxSize so the control actually resizes them.
  const cname = component?.name;
  if (BOX_PRIMITIVES.has(cname) && attrMap.size) {
    const scale = cname === "Icon" ? ICON_SIZE : BOX_PRIMITIVE_SIZE;
    const px = scale[attrMap.size] ?? attrMap.size;
    // Set both: `size` replaces the snippet's own size attribute; `boxSize`
    // covers primitives (Box, Center, Icon) that don't honor `size`.
    attrMap.size = px;
    attrMap.boxSize = px;
  } else if (TYPE_SIZED.has(cname) && attrMap.size) {
    // Typography scales via fontSize tokens, not a size recipe.
    attrMap.fontSize = attrMap.size;
    delete attrMap.size;
  }
  // Flex/Stack expose direction as their "variant"; map it to the real prop.
  if (cname === "Flex" && attrMap.variant) {
    const v = attrMap.variant;
    delete attrMap.variant;
    if (v === "inline") attrMap.display = "inline-flex";
    else attrMap.direction = v;
  } else if (cname === "Stack" && attrMap.variant) {
    const v = attrMap.variant;
    delete attrMap.variant;
    attrMap.direction = v === "horizontal" ? "row" : "column";
  }

  // State simulation overrides (interaction data-* + real status props).
  for (const [name, value] of Object.entries(getStateAttrs(values.state))) {
    if (value) attrMap[name] = value;
  }
  return attrMap;
}

function buildCommonAttrs(component, values) {
  return joinAttrs(Object.entries(buildAttrMap(component, values)).map(([name, value]) => jsxAttr(name, value)));
}

// Merge attrs into a component's root opening tag, replacing any attribute the
// snippet already sets so the user's control value wins (no duplicate props).
// Returns null when the root tag can't be located.
function injectRootAttrs(source, componentName, attrMap) {
  const entries = Object.entries(attrMap);
  if (!entries.length) return source;
  const tagRe = new RegExp(`<${componentName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:\\.Root)?\\b`);
  const m = source.match(tagRe);
  if (!m) return null;
  const attrsStart = m.index + m[0].length;
  // Walk to the end of the opening tag, respecting quotes and brace depth.
  let i = attrsStart;
  let depth = 0;
  let quote = null;
  for (; i < source.length; i += 1) {
    const ch = source[i];
    if (quote) {
      if (ch === quote) quote = null;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
    } else if (ch === "{") {
      depth += 1;
    } else if (ch === "}") {
      depth -= 1;
    } else if (ch === ">" && depth === 0) {
      break;
    }
  }
  if (i >= source.length) return null;
  const selfClose = source[i - 1] === "/";
  let attrs = source.slice(attrsStart, selfClose ? i - 1 : i);
  for (const [name, value] of entries) {
    const rendered = value === true ? ` ${name}` : ` ${name}="${String(value).replace(/"/g, "&quot;")}"`;
    const existing = new RegExp(`\\s${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:=(?:"[^"]*"|'[^']*'|\\{[^{}]*\\}))?(?=\\s|$)`);
    attrs = existing.test(attrs) ? attrs.replace(existing, rendered) : `${attrs}${rendered}`;
  }
  return `${source.slice(0, attrsStart)}${attrs}${selfClose ? " /" : ""}${source.slice(i)}`;
}

function iconTag(name) {
  const iconName = lucideIconNames.includes(name) ? name : "Search";
  return `Lucide${iconName}`;
}

function iconJsx(name, size = 16) {
  return `<${iconTag(name)} size={${size}} />`;
}

function buildButtonCode(component, values) {
  const attrs = buildCommonAttrs(component, values);
  const leftIconName = values.leftIcon || values.icon || "Search";
  const rightIconName = values.rightIcon || values.icon || "ChevronRight";
  const leftIcon = values.iconLeft === "true" ? iconJsx(leftIconName) : "";
  const rightIcon = values.iconRight === "true" ? iconJsx(rightIconName) : "";
  return `<Button ${attrs}>${leftIcon}${jsxText(values.label)}${rightIcon}</Button>`;
}

function buildControlledCode(component, values) {
  if (!component) return "<Button>Preview</Button>";
  const attrs = buildCommonAttrs(component, values);
  const label = jsxText(values.label);
  const description = jsxText(values.description);

  if (component.name === "Button") return buildButtonCode(component, values);
  if (component.name === "IconButton") return `<IconButton aria-label="${label}" ${attrs}>${iconJsx(values.icon || "Search")}</IconButton>`;
  if (component.name === "Badge") return `<Badge ${attrs}>${label}</Badge>`;
  if (component.name === "Tag") return `<Tag.Root ${attrs}><Tag.Label>${label}</Tag.Label></Tag.Root>`;
  if (component.name === "Alert") {
    const status = values.status && values.status !== "default" ? values.status : "info";
    return `<Alert.Root ${attrs} status="${status}" maxW="380px">
  <Alert.Indicator />
  <Alert.Content>
    <Alert.Title>${label}</Alert.Title>
    <Alert.Description>${description}</Alert.Description>
  </Alert.Content>
</Alert.Root>`;
  }
  if (component.name === "Card") {
    return `<Card.Root ${attrs} width="340px">
  <Card.Header><Heading size="sm">${label}</Heading></Card.Header>
  <Card.Body><Text color="ads.muted">${description}</Text></Card.Body>
  <Card.Footer><Button size="sm" variant="outline">Open</Button></Card.Footer>
</Card.Root>`;
  }
  if (component.name === "Input") return `<Input ${attrs} width="320px" placeholder="${label}" defaultValue="${jsxText(values.value)}" />`;
  if (component.name === "Textarea") return `<Textarea ${attrs} width="340px" aria-label="${label}" defaultValue="${jsxText(values.value)}" />`;
  if (component.name === "Toggle") return `<Toggle.Root ${attrs} aria-label="${label}" px="4" py="2" borderWidth="1px" borderRadius="md"><HStack>${iconJsx(values.icon || "Search")}<Span>${label}</Span></HStack></Toggle.Root>`;

  const source = getPreviewCode(component);
  const attrMap = buildAttrMap(component, values);
  const injected = injectRootAttrs(source, component.name, attrMap);
  if (injected !== null) return injected;
  // Root tag not found in the preview (e.g. a fallback card): wrap so state
  // simulation still has somewhere to land.
  return attrs ? `<Box className="ads-controlled-preview" ${getStateAttrs(values.state)["data-hover"] ? "data-hover" : ""}>${source}</Box>` : source;
}

function syncUrl(componentName, values, code, custom = false) {
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("component", componentName);
  if (custom) {
    url.searchParams.set("mode", "sandbox");
    url.searchParams.set("code", encodeBase64Url(code));
  } else {
    Object.entries(values).forEach(([key, value]) => {
      if (value != null && value !== "" && controlParamNames.has(key)) url.searchParams.set(key, value);
    });
  }
  window.history.replaceState(null, "", url);
}

function getPreviewCode(component) {
  if (!component) return "<Button>Preview</Button>";
  const existing = component.examples?.[0]?.jsx ?? "";
  if (previewSnippets[component.name]) return previewSnippets[component.name];
  if (existing && !existing.includes(generatedStarterText)) return existing;
  return `<Card.Root width="320px" variant="outline">
  <Card.Body>
    <Stack gap="3">
      <HStack>
        <Icon as={Settings} color="ads.accent" />
        <Heading size="sm">${component.name}</Heading>
      </HStack>
      <Text color="ads.muted">${component.description ?? "Component preview."}</Text>
      <Badge variant="subtle">${component.category}</Badge>
    </Stack>
  </Card.Body>
</Card.Root>`;
}

function decodeBase64Url(value) {
  if (!value) return "";
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(normalized);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function encodeBase64Url(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function normalizeSnippet(source) {
  const trimmed = source.trim();
  if (!trimmed) return "return null;";
  if (trimmed.startsWith("<")) return `return (${trimmed});`;
  if (/export\s+default\s+function\s+([A-Za-z0-9_]+)/.test(trimmed)) {
    const name = trimmed.match(/export\s+default\s+function\s+([A-Za-z0-9_]+)/)?.[1] ?? "Demo";
    return `${trimmed.replace("export default ", "")}\nreturn React.createElement(${name});`;
  }
  if (/function\s+Demo\s*\(/.test(trimmed) || /const\s+Demo\s*=/.test(trimmed)) {
    return `${trimmed}\nreturn React.createElement(Demo);`;
  }
  if (/\breturn\b/.test(trimmed)) return trimmed;
  return `return (${trimmed});`;
}

function renderSnippet(source) {
  const prepared = normalizeSnippet(source);
  const executable = `function __ADS_RENDER__() {\n${prepared}\n}\nconst __ADS_RESULT__ = __ADS_RENDER__();`;
  const transformed = Babel.transform(executable, {
    presets: [["react", { runtime: "classic" }]],
  }).code;
  const scopeKeys = Object.keys(iconScope);
  const scopeValues = Object.values(iconScope);
  const componentNames = Object.keys(Chakra).filter((key) => /^[A-Z]/.test(key) || key === "createListCollection" || key === "createTreeCollection" || key === "parseColor");
  const factory = new Function(
    "React",
    "Chakra",
    ...scopeKeys,
    `const { ${componentNames.join(", ")} } = Chakra;\n${transformed}\nreturn __ADS_RESULT__;`,
  );
  return factory(React, Chakra, ...scopeValues);
}

function useExplorerState() {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const componentName = params.get("component") ?? "Button";
    const encodedCode = params.get("code");
    const isSandbox = params.get("mode") === "sandbox" || Boolean(encodedCode);
    const component = explorerSpecs.find((item) => item.name === componentName) ?? explorerSpecs[0];
    const initialControls = getInitialControls(component, params);
    const initialView = component.name === "DesignTokens" ? "tokens" : component.name === "LucideIcons" ? "icons" : "component";
    return {
      initialComponent: component.name,
      initialControls,
      initialCustomCode: isSandbox,
      initialCode: encodedCode ? decodeBase64Url(encodedCode) : buildControlledCode(component, initialControls),
      initialView,
      initialDark: params.get("colorMode") === "dark",
    };
  }, []);
}

// Components shown in the left nav, grouped by category. DesignTokens and the
// icon catalog are surfaced from the header instead, not as list rows.
const navCategoryOrder = ["Foundations", "Inputs", "Data display", "Feedback", "Navigation", "Surfaces", "Layout"];

function groupByCategory(components) {
  const groups = new Map();
  for (const component of components) {
    if (component.name === "DesignTokens" || component.name === "LucideIcons") continue;
    const list = groups.get(component.category) ?? [];
    list.push(component);
    groups.set(component.category, list);
  }
  const ordered = [];
  for (const category of navCategoryOrder) {
    if (groups.has(category)) ordered.push([category, groups.get(category)]);
  }
  for (const [category, list] of groups) {
    if (!navCategoryOrder.includes(category)) ordered.push([category, list]);
  }
  return ordered;
}

function NavList({ components, selected, onSelect }) {
  const groups = groupByCategory(components);
  if (!groups.length) {
    return <Text color="ads.muted" fontSize="sm" px="2">No components match your search.</Text>;
  }
  return (
    <Box className="nav-scroll">
      {groups.map(([category, list]) => (
        <Box className="nav-group" key={category}>
          <Box className="nav-group-label">
            <span>{category}</span>
            <span className="nav-group-count">{list.length}</span>
          </Box>
          {list.map((component) => (
            <button
              type="button"
              key={component.name}
              className={`nav-item${selected === component.name ? " selected" : ""}`}
              onClick={() => onSelect(component.name)}
            >
              {component.name}
              <span className="nav-item-meta">{component.variants?.length ? `${component.variants.length}v` : ""}</span>
            </button>
          ))}
        </Box>
      ))}
    </Box>
  );
}

function Preview({ code, colorMode = "light" }) {
  const dark = colorMode === "dark";
  // Chakra resolves _dark tokens for descendants of a `.dark` ancestor, so the
  // dark class goes on the wrapper and the render target inside picks up dark
  // surfaces/foregrounds (including its own background).
  const stage = (children) => (
    <Box className={dark ? "dark" : undefined}>
      <Box
        id="ads-render-target"
        className="preview-stage"
        data-color-mode={colorMode}
        {...(dark ? { bg: "ads.bg", color: "ads.fg", p: "6", borderRadius: "lg" } : {})}
      >
        {children}
      </Box>
    </Box>
  );
  try {
    return stage(renderSnippet(code));
  } catch (error) {
    return stage(
      <Chakra.Alert.Root status="error" variant="surface">
        <Chakra.Alert.Indicator />
        <Chakra.Alert.Content>
          <Chakra.Alert.Title>Render failed</Chakra.Alert.Title>
          <Chakra.Alert.Description>{String(error.message ?? error)}</Chakra.Alert.Description>
        </Chakra.Alert.Content>
      </Chakra.Alert.Root>,
    );
  }
}

function ControlField({ control, value, onChange }) {
  if (control.type === "boolean") {
    return (
      <label className="control-check">
        <input type="checkbox" checked={value === "true"} onChange={(event) => onChange(event.target.checked ? "true" : "false")} />
        <span>{control.label}</span>
      </label>
    );
  }

  return (
    <Field.Root>
      <Field.Label>{control.label}</Field.Label>
      {control.type === "select" ? (
        <select className="control-select" value={value ?? ""} onChange={(event) => onChange(event.target.value)}>
          {control.options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <Input value={value ?? ""} onChange={(event) => onChange(event.target.value)} />
      )}
    </Field.Root>
  );
}

function ControlPanel({ component, values, onChange, onReset, customCode }) {
  const schema = getControlSchema(component);
  const dimensions = Object.entries(component?.variantDimensions ?? {}).length;
  return (
    <Stack gap="4">
      <Flex justify="space-between" align="center" gap="3">
        <Stack gap="0">
          <Heading size="sm">Controls</Heading>
          <Text color="ads.muted" fontSize="sm">{schema.length} generated inputs</Text>
        </Stack>
        <Button size="sm" variant="outline" onClick={onReset}>Reset</Button>
      </Flex>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", xl: "1fr" }} gap="3">
        {schema.map((control) => (
          <ControlField
            key={control.name}
            control={control}
            value={values[control.name]}
            onChange={(next) => onChange(control.name, next)}
          />
        ))}
      </Grid>
      {customCode ? (
        <Badge alignSelf="start" variant="subtle" colorPalette="orange">Sandbox code mode</Badge>
      ) : (
        <HStack wrap="wrap">
          <Badge variant="subtle">{component?.variants?.length ?? 0} variants</Badge>
          <Badge variant="outline">{component?.sizes?.length ?? 0} sizes</Badge>
          <Badge variant="outline">{component?.states?.length ?? 0} states</Badge>
          <Badge variant="outline">{dimensions} dimensions</Badge>
        </HStack>
      )}
    </Stack>
  );
}

function isColorValue(value) {
  return /^#|^rgb|^hsl|^var\(--color-/.test(value);
}

function tokenLabel(name) {
  return name.replace(/^--/, "");
}

function tokenGroup(filter) {
  return tokenData.tokens.filter(filter);
}

function TokenCard({ token, compact = false }) {
  const swatch = isColorValue(token.value);
  return (
    <Box className={compact ? "token-card compact" : "token-card"}>
      {swatch ? (
        <Box className="token-swatch" style={{ background: token.value }} />
      ) : (
        <Box className="token-preview">
          {token.name.includes("space") ? <Box className="space-bar" style={{ width: token.value }} /> : null}
          {token.name.includes("radius") ? <Box className="radius-box" style={{ borderRadius: token.value }} /> : null}
          {token.name.includes("shadow") ? <Box className="shadow-box" style={{ boxShadow: token.value }} /> : null}
          {token.name.includes("motion") ? <Box className="motion-dot" /> : null}
        </Box>
      )}
      <Box minW="0">
        <Text fontWeight="700" fontSize="sm">{tokenLabel(token.name)}</Text>
        <Code className="token-code">{token.value}</Code>
        {!compact ? (
          <Stack gap="1" mt="2">
            <HStack gap="1" wrap="wrap">
              <Badge size="sm" variant="subtle">{token.category}</Badge>
              <Badge size="sm" variant="outline">{token.role}</Badge>
              <Badge size="sm" variant="outline">{token.mode}</Badge>
            </HStack>
            <Text color="ads.muted" fontSize="xs">{token.description}</Text>
          </Stack>
        ) : null}
      </Box>
    </Box>
  );
}

function TokenSection({ eyebrow, title, summary, children }) {
  return (
    <Stack className="token-section" gap="0">
      <Flex className="token-section-head" justify="space-between" gap="4" align="start">
        <Box>
          <Text className="token-eyebrow">{eyebrow}</Text>
          <Heading size="md">{title}</Heading>
        </Box>
        {summary ? <Badge variant="outline">{summary}</Badge> : null}
      </Flex>
      {children}
    </Stack>
  );
}

function SemanticMode({ mode, tokens }) {
  return (
    <Box className={`semantic-mode ${mode === "dark" ? "dark-preview" : ""}`}>
      <Flex justify="space-between" align="center" mb="3">
        <Heading size="sm">{mode === "dark" ? "Dark mode" : "Light mode"}</Heading>
        <Badge variant="subtle">{tokens.length} tokens</Badge>
      </Flex>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))" }} gap="2">
        {tokens.map((token) => <TokenCard key={`${mode}-${token.name}`} token={token} compact />)}
      </Grid>
    </Box>
  );
}

function TypeScale({ tokens }) {
  const get = (name) => tokens.find((token) => token.name === name)?.value ?? "";
  const roleOrder = ["display", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle", "body-1", "body-2", "caption", "overline", "button"];
  const roles = roleOrder.filter((role) => tokens.some((token) => token.name === `--type-desktop-${role}-size` || token.name === `--type-mobile-${role}-size`));
  const modes = ["desktop", "mobile"];
  const families = tokens.filter((token) => token.name.startsWith("--font-family-"));
  const scaleTokens = tokens.filter((token) => token.name.startsWith("--font-size-") || token.name.startsWith("--font-weight-") || token.name.startsWith("--line-height-"));
  const sampleText = (role) => {
    if (role === "display") return "Display";
    if (role.startsWith("h")) return `Heading ${role.replace("h", "")}`;
    if (role === "subtitle") return "Subtitle for section context";
    if (role === "body-1") return "Body 1 text for primary reading content.";
    if (role === "body-2") return "Body 2 text for denser supporting content.";
    if (role === "caption") return "Caption / metadata";
    if (role === "overline") return "OVERLINE LABEL";
    if (role === "button") return "Button Label";
    return role;
  };
  return (
    <Stack gap="4" p="4">
      <Grid templateColumns={{ base: "1fr", xl: "1fr 1fr" }} gap="4">
        {modes.map((mode) => (
          <Box key={mode} className="type-mode">
            <Flex justify="space-between" align="center" mb="3">
              <Heading size="sm">{mode === "desktop" ? "Desktop" : "Mobile"}</Heading>
              <Badge variant="subtle">{roles.length} roles</Badge>
            </Flex>
            <Stack gap="3">
              {roles.map((role) => {
                const size = get(`--type-${mode}-${role}-size`);
                const lineHeight = get(`--type-${mode}-${role}-line-height`);
                const weight = get(`--type-${mode}-${role}-weight`);
                return (
                  <Box key={`${mode}-${role}`} className="type-role-card">
                    <Text
                      className="type-role-sample"
                      style={{ fontSize: size, lineHeight, fontWeight: weight }}
                    >
                      {sampleText(role)}
                    </Text>
                    <Grid templateColumns="repeat(3, minmax(0, 1fr))" gap="2">
                      <Box className="type-spec"><Text>Size</Text><Code>{size}</Code></Box>
                      <Box className="type-spec"><Text>Line</Text><Code>{lineHeight}</Code></Box>
                      <Box className="type-spec"><Text>Weight</Text><Code>{weight}</Code></Box>
                    </Grid>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        ))}
      </Grid>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="4">
        <Stack gap="3">
          <Heading size="sm">Font Families</Heading>
          {families.map((token) => <TokenCard key={token.name} token={token} compact />)}
        </Stack>
        <Stack gap="3">
          <Heading size="sm">Raw Scale</Heading>
          {scaleTokens.map((token) => <TokenCard key={token.name} token={token} compact />)}
        </Stack>
      </Grid>
    </Stack>
  );
}

function TokenExplorer() {
  const primitiveColors = tokenGroup((token) => token.category === "color" && token.role === "primitive");
  const spacing = tokenGroup((token) => token.category === "spacing");
  const radius = tokenGroup((token) => token.category === "radius");
  const breakpoints = tokenGroup((token) => token.category === "breakpoint");
  const borders = tokenGroup((token) => token.category === "border");
  const opacity = tokenGroup((token) => token.category === "opacity");
  const elevation = tokenGroup((token) => token.category === "elevation");
  const durations = tokenGroup((token) => token.name.startsWith("--duration-"));
  const easings = tokenGroup((token) => token.name.startsWith("--ease-"));
  const motionRecipes = tokenGroup((token) => token.name.startsWith("--motion-"));
  const typography = tokenGroup((token) => token.layer === "typography");
  const lightSemantic = tokenGroup((token) => token.source.includes("themes/light"));
  const darkSemantic = tokenGroup((token) => token.source.includes("themes/dark"));
  const componentTokens = tokenGroup((token) => token.layer === "component");

  return (
    <Stack gap="5">
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr 1fr" }} gap="3">
        {Object.entries(tokenData.byCategory).slice(0, 8).map(([category, count]) => (
          <Box key={category} className="token-stat">
            <Text className="token-eyebrow">{category}</Text>
            <Heading size="lg">{count}</Heading>
          </Box>
        ))}
      </Grid>

      <TokenSection eyebrow="Colors" title="Primitive Palette" summary={`${primitiveColors.length} swatches`}>
        <Grid className="token-grid" templateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))", xl: "repeat(3, minmax(0, 1fr))" }} gap="3" p="4">
          {primitiveColors.map((token) => <TokenCard key={token.name} token={token} />)}
        </Grid>
      </TokenSection>

      <TokenSection eyebrow="Themes" title="Semantic Colors" summary="light + dark">
        <Grid templateColumns={{ base: "1fr", xl: "1fr 1fr" }} gap="4" p="4">
          <SemanticMode mode="light" tokens={lightSemantic} />
          <SemanticMode mode="dark" tokens={darkSemantic} />
        </Grid>
      </TokenSection>

      <TokenSection eyebrow="Typography" title="Type Scale" summary={`${typography.length} tokens`}>
        <TypeScale tokens={typography} />
      </TokenSection>

      <TokenSection eyebrow="Layout" title="Spacing, Radius, Borders, and Breakpoints" summary={`${spacing.length + radius.length + borders.length + opacity.length + breakpoints.length} tokens`}>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }} gap="4" p="4">
          <Stack gap="2">{spacing.map((token) => <TokenCard key={token.name} token={token} compact />)}</Stack>
          <Stack gap="2">
            {radius.map((token) => <TokenCard key={token.name} token={token} compact />)}
            {borders.map((token) => <TokenCard key={token.name} token={token} compact />)}
            {opacity.map((token) => <TokenCard key={token.name} token={token} compact />)}
          </Stack>
          <Stack gap="2">{breakpoints.map((token) => <TokenCard key={token.name} token={token} compact />)}</Stack>
        </Grid>
      </TokenSection>

      <TokenSection eyebrow="Behavior" title="Elevation and Motion" summary={`${elevation.length + durations.length + easings.length + motionRecipes.length} tokens`}>
        <Grid templateColumns={{ base: "1fr", xl: "1fr 1fr 1fr 1fr" }} gap="4" p="4">
          <Stack gap="3">{elevation.map((token) => <TokenCard key={token.name} token={token} />)}</Stack>
          <Stack gap="3">{durations.map((token) => <TokenCard key={token.name} token={token} />)}</Stack>
          <Stack gap="3">{easings.map((token) => <TokenCard key={token.name} token={token} />)}</Stack>
          <Stack gap="3">{motionRecipes.map((token) => <TokenCard key={token.name} token={token} />)}</Stack>
        </Grid>
      </TokenSection>

      <TokenSection eyebrow="Components" title="Component Tokens" summary={`${componentTokens.length} tokens`}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))", xl: "repeat(3, minmax(0, 1fr))" }} gap="3" p="4">
          {componentTokens.map((token) => <TokenCard key={token.name} token={token} />)}
        </Grid>
      </TokenSection>
    </Stack>
  );
}

function IconGallery() {
  const [iconQuery, setIconQuery] = useState("");
  const filteredIcons = lucideIconNames.filter((name) => name.toLowerCase().includes(iconQuery.toLowerCase()));

  return (
    <Stack gap="5">
      <Box className="pane">
        <Flex justify="space-between" align="center" gap="4" wrap="wrap">
          <Stack gap="1">
            <Heading size="md">Lucide Icons</Heading>
            <Text color="ads.muted">{lucideIconNames.length} icons preloaded in the sandbox scope.</Text>
          </Stack>
          <Badge variant="subtle" colorPalette="blue">{filteredIcons.length} visible</Badge>
        </Flex>
        <Field.Root mt="4">
          <Field.Label>Search icons</Field.Label>
          <Input value={iconQuery} onChange={(event) => setIconQuery(event.target.value)} placeholder="search, arrow, chart..." />
        </Field.Root>
      </Box>

      <Grid className="icon-grid" templateColumns={{ base: "repeat(2, minmax(0, 1fr))", md: "repeat(4, minmax(0, 1fr))", xl: "repeat(6, minmax(0, 1fr))" }} gap="3">
        {filteredIcons.map((name) => {
          const IconComponent = Lucide[name];
          return (
            <Box key={name} className="icon-card">
              {IconComponent ? <IconComponent size={22} strokeWidth={1.8} /> : null}
              <Text fontSize="xs" fontWeight="650">{name}</Text>
            </Box>
          );
        })}
      </Grid>
    </Stack>
  );
}

function AppShell() {
  const { initialComponent, initialControls, initialCustomCode, initialCode, initialView, initialDark } = useExplorerState();
  const [query, setQuery] = useState("");
  const [selectedName, setSelectedName] = useState(initialComponent);
  const [controlValues, setControlValues] = useState(initialControls);
  const [customCode, setCustomCode] = useState(initialCustomCode);
  const [code, setCode] = useState(initialCode);
  const [view, setView] = useState(initialView);
  const [dark, setDark] = useState(initialDark);
  const theme = useMemo(() => createTheme(themeTokens), []);
  const colorMode = dark ? "dark" : "light";

  // Whole-explorer dark mode: data-theme flips the CSS-variable chrome, .dark
  // flips Chakra's _dark semantic tokens. Both go on the document root.
  useEffect(() => {
    const el = document.documentElement;
    el.dataset.theme = dark ? "dark" : "light";
    el.classList.toggle("dark", dark);
  }, [dark]);

  const selected = explorerSpecs.find((item) => item.name === selectedName) ?? explorerSpecs[0];
  const chakraCoverage = spec.components.filter((item) => item.chakraModule).length;
  // Search components by identity (name/category/variants/props), not prose —
  // matching description/usage text made short queries like "to" hit everything.
  const filtered = explorerSpecs.filter((component) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    const haystack = [
      component.name,
      component.category,
      component.variants?.join(" "),
      component.keyProps?.map((prop) => prop.name ?? prop).join(" "),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });

  const setComponent = (name) => {
    const next = explorerSpecs.find((item) => item.name === name);
    const nextControls = getInitialControls(next);
    setSelectedName(name);
    setControlValues(nextControls);
    setCustomCode(false);
    setView("component");
    const nextCode = buildControlledCode(next, nextControls);
    setCode(nextCode);
    syncUrl(name, nextControls, nextCode, false);
  };

  const setControl = (name, value) => {
    const nextValues = { ...controlValues, [name]: value };
    const nextCode = buildControlledCode(selected, nextValues);
    setControlValues(nextValues);
    setCustomCode(false);
    setCode(nextCode);
    syncUrl(selected.name, nextValues, nextCode, false);
  };

  const resetControls = () => {
    const nextValues = getInitialControls(selected);
    const nextCode = buildControlledCode(selected, nextValues);
    setControlValues(nextValues);
    setCustomCode(false);
    setCode(nextCode);
    syncUrl(selected.name, nextValues, nextCode, false);
  };

  const updateCode = (value) => {
    setCode(value);
    setCustomCode(true);
    syncUrl(selected.name, controlValues, value, true);
  };

  const shareUrl = () => {
    const url = new URL(window.location.href);
    if (customCode) {
      url.search = "";
      url.searchParams.set("component", selected.name);
      url.searchParams.set("mode", "sandbox");
      url.searchParams.set("code", encodeBase64Url(code));
    }
    navigator.clipboard?.writeText(url.toString());
  };

  return (
    <ChakraProvider value={theme}>
      <Box className={dark ? "dark" : undefined} minH="100vh" bg="ads.bg" color="ads.fg">
        <Box as="header" className="app-header">
          <Container maxW="1560px" py="3">
            <Flex align="center" justify="space-between" gap="4" wrap="wrap">
              <HStack gap="3" align="center">
                <Flex className="brand-mark" align="center" justify="center" aria-hidden="true">
                  <Tag size={20} />
                </Flex>
                <Stack gap="0">
                  <Heading size="md">ADS Light Explorer</Heading>
                  <Text color="ads.muted" fontSize="sm">Composable primitives · machine-readable rules · live brand theme</Text>
                </Stack>
              </HStack>
              <HStack gap="2" wrap="wrap">
                <Badge variant="subtle" colorPalette="blue">{chakraCoverage} modules</Badge>
                <Badge variant="outline">{spec.components.length} specs</Badge>
                <Button
                  size="sm"
                  variant={view === "tokens" ? "solid" : "outline"}
                  colorPalette={view === "tokens" ? "brand" : "gray"}
                  onClick={() => setView("tokens")}
                >
                  <Palette size={16} /> Tokens
                </Button>
                <Button
                  size="sm"
                  variant={view === "icons" ? "solid" : "outline"}
                  colorPalette={view === "icons" ? "brand" : "gray"}
                  onClick={() => setView("icons")}
                >
                  <Search size={16} /> Icons
                </Button>
                <IconButton
                  size="sm"
                  variant="outline"
                  colorPalette="gray"
                  aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                  aria-pressed={dark}
                  onClick={() => setDark((value) => !value)}
                >
                  {dark ? <Sun size={16} /> : <Moon size={16} />}
                </IconButton>
              </HStack>
            </Flex>
          </Container>
        </Box>

        <Container maxW="1560px" py="5">
          <Grid templateColumns={{ base: "1fr", lg: "300px minmax(0, 1fr)" }} gap="5" alignItems="start">
            <Box as="nav" className="nav-pane">
              <Box className="nav-search">
                <InputGroup startElement={<Search size={16} />}>
                  <Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search components..."
                  />
                </InputGroup>
              </Box>
              <NavList components={filtered} selected={selectedName} onSelect={setComponent} />
            </Box>

            {view === "tokens" ? (
              <TokenExplorer />
            ) : view === "icons" ? (
              <IconGallery />
            ) : (
              <Grid templateColumns={{ base: "1fr", xl: "minmax(0, 1fr) 360px" }} gap="5" alignItems="start">
                <Stack gap="5" minW="0">
                  <Stack className="pane" gap="4">
                    <Flex align="center" justify="space-between" gap="3">
                      <Stack gap="1" minW="0">
                        <HStack gap="2" align="baseline">
                          <Heading size="md">{selected.name}</Heading>
                          <Text color="ads.muted" fontSize="sm">{selected.category}</Text>
                        </HStack>
                        <Code className="variant-name" title="Canonical name for the current controls">
                          {buildVariantName(selected, controlValues, customCode)}
                        </Code>
                      </Stack>
                      <HStack>
                        <IconButton aria-label="Copy preview URL" variant="outline" onClick={shareUrl}>
                          <Copy size={18} />
                        </IconButton>
                        <Button variant="outline" onClick={resetControls}>Reset</Button>
                      </HStack>
                    </Flex>
                    <Preview code={code} colorMode={colorMode} />
                  </Stack>

                  <Stack className="pane" gap="3">
                    <Flex align="center" justify="space-between" gap="3">
                      <Heading size="sm">JSX render input</Heading>
                      <Text color="ads.muted" fontSize="sm">All ADS Light components and lucide icons are in scope.</Text>
                    </Flex>
                    <Textarea
                      className="code-editor"
                      value={code}
                      onChange={(event) => updateCode(event.target.value)}
                      spellCheck={false}
                      rows={9}
                    />
                  </Stack>

                  <Stack className="pane" gap="4">
                    <Stack gap="1">
                      <Heading size="sm">Usage guidance</Heading>
                      {selected.description ? <Text color="ads.muted">{selected.description}</Text> : null}
                    </Stack>

                    <Box>
                      <Text className="usage-label">When to use</Text>
                      <Stack gap="2" mt="2">
                        {selected.whenToUse.map((item) => (
                          <HStack key={item} align="start" gap="2" className="usage-row">
                            <Box className="usage-icon usage-good"><Check size={13} /></Box>
                            <Text>{item}</Text>
                          </HStack>
                        ))}
                      </Stack>
                    </Box>

                    <Box>
                      <Text className="usage-label">Never use for</Text>
                      <Stack gap="2" mt="2">
                        {selected.neverUseFor.map((item) => (
                          <HStack key={item} align="start" gap="2" className="usage-row">
                            <Box className="usage-icon usage-bad"><Ban size={13} /></Box>
                            <Text>{item}</Text>
                          </HStack>
                        ))}
                      </Stack>
                    </Box>

                    {selected.relatedComponents?.length ? (
                      <Box>
                        <Text className="usage-label">Reach for instead / alongside</Text>
                        <HStack wrap="wrap" mt="2" gap="2">
                          {selected.relatedComponents.map((name) => (
                            explorerSpecs.some((c) => c.name === name) ? (
                              <Button key={name} size="xs" variant="outline" colorPalette="gray" onClick={() => setComponent(name)}>
                                {name} <ChevronRight size={12} />
                              </Button>
                            ) : (
                              <Badge key={name} variant="subtle">{name}</Badge>
                            )
                          ))}
                        </HStack>
                      </Box>
                    ) : null}

                    <Box>
                      <Text className="usage-label">Key props</Text>
                      <HStack wrap="wrap" mt="2" gap="2">
                        {selected.keyProps.map((prop) => (
                          <Code key={prop.name ?? prop}>{prop.name ?? prop}</Code>
                        ))}
                      </HStack>
                    </Box>
                  </Stack>
                </Stack>

                <Box className="controls-float">
                  <ControlPanel
                    component={selected}
                    values={controlValues}
                    onChange={setControl}
                    onReset={resetControls}
                    customCode={customCode}
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default function App() {
  return <AppShell />;
}
