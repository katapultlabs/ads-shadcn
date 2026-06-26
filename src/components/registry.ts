/**
 * The explorer render scope. Every component the ADS spec can reference is
 * collected here into a flat name→component map, so the explorer can eval
 * authored JSX against it. shadcn components are exposed by their real named
 * exports (Accordion, AccordionItem, …); primitives/typography/custom add the
 * rest. This replaces the old `import * as Chakra` namespace.
 */

import * as Accordion from "@/components/ui/accordion";
import * as Alert from "@/components/ui/alert";
import * as AspectRatio from "@/components/ui/aspect-ratio";
import * as Avatar from "@/components/ui/avatar";
import * as Badge from "@/components/ui/badge";
import * as Breadcrumb from "@/components/ui/breadcrumb";
import * as Button from "@/components/ui/button";
import * as Calendar from "@/components/ui/calendar";
import * as Card from "@/components/ui/card";
import * as Carousel from "@/components/ui/carousel";
import * as Checkbox from "@/components/ui/checkbox";
import * as Collapsible from "@/components/ui/collapsible";
import * as Command from "@/components/ui/command";
import * as Dialog from "@/components/ui/dialog";
import * as Drawer from "@/components/ui/drawer";
import * as DropdownMenu from "@/components/ui/dropdown-menu";
import * as Form from "@/components/ui/form";
import * as HoverCard from "@/components/ui/hover-card";
import * as Input from "@/components/ui/input";
import * as InputOTP from "@/components/ui/input-otp";
import * as Label from "@/components/ui/label";
import * as Pagination from "@/components/ui/pagination";
import * as Popover from "@/components/ui/popover";
import * as Progress from "@/components/ui/progress";
import * as RadioGroup from "@/components/ui/radio-group";
import * as Resizable from "@/components/ui/resizable";
import * as ScrollArea from "@/components/ui/scroll-area";
import * as Select from "@/components/ui/select";
import * as Separator from "@/components/ui/separator";
import * as Sheet from "@/components/ui/sheet";
import * as Skeleton from "@/components/ui/skeleton";
import * as Slider from "@/components/ui/slider";
import * as Sonner from "@/components/ui/sonner";
import * as Switch from "@/components/ui/switch";
import * as Table from "@/components/ui/table";
import * as Tabs from "@/components/ui/tabs";
import * as Textarea from "@/components/ui/textarea";
import * as Toggle from "@/components/ui/toggle";
import * as ToggleGroup from "@/components/ui/toggle-group";
import * as Tooltip from "@/components/ui/tooltip";
import * as NavigationMenu from "@/components/ui/navigation-menu";
import * as Menubar from "@/components/ui/menubar";
import * as ContextMenu from "@/components/ui/context-menu";
import * as Chart from "@/components/ui/chart";
// Only the chart primitives the examples need — NOT `import * as recharts`,
// which exports generic names (Label, Tooltip, Text, Legend) that would clobber
// the shadcn/typography components of the same name in the render scope.
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";

import * as Primitives from "@/components/primitives";
import * as Typography from "@/components/typography";
import * as FeedbackAds from "@/components/ads/feedback";
import * as DataAds from "@/components/ads/data";
import * as InputsAds from "@/components/ads/inputs";
import * as MiscAds from "@/components/ads/misc";

export const scope: Record<string, unknown> = {
  ...Accordion,
  ...Alert,
  ...AspectRatio,
  ...Avatar,
  ...Badge,
  ...Breadcrumb,
  ...Button,
  ...Calendar,
  ...Card,
  ...Carousel,
  ...Checkbox,
  ...Collapsible,
  ...Command,
  ...Dialog,
  ...Drawer,
  ...DropdownMenu,
  ...Form,
  ...HoverCard,
  ...Input,
  ...InputOTP,
  ...Label,
  ...Pagination,
  ...Popover,
  ...Progress,
  ...RadioGroup,
  ...Resizable,
  ...ScrollArea,
  ...Select,
  ...Separator,
  ...Sheet,
  ...Skeleton,
  ...Slider,
  ...Sonner,
  ...Switch,
  ...Table,
  ...Tabs,
  ...Textarea,
  ...Toggle,
  ...ToggleGroup,
  ...Tooltip,
  ...NavigationMenu,
  ...Menubar,
  ...ContextMenu,
  ...Chart,
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, ResponsiveContainer,
  PieChart, Pie, Cell,
  ...Primitives,
  ...Typography,
  ...FeedbackAds,
  ...DataAds,
  ...InputsAds,
  ...MiscAds,
};
