import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Bucket-B layout primitives — Chakra layout components that have no shadcn
 * equivalent, re-expressed as thin Tailwind-based `div` wrappers. They forward
 * `className` so authors style with utilities (the ADS no-raw-color rule still
 * applies: use semantic tokens like `bg-primary`, not arbitrary hex).
 */

type DivProps = React.HTMLAttributes<HTMLDivElement>;

const make = (base: string, display = "Primitive") => {
  const C = React.forwardRef<HTMLDivElement, DivProps>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn(base, className)} {...props} />
  ));
  C.displayName = display;
  return C;
};

export const Box = make("", "Box");
export const Flex = make("flex", "Flex");
export const Center = make("flex items-center justify-center", "Center");
export const Circle = make("flex items-center justify-center rounded-full", "Circle");
export const Square = make("flex items-center justify-center aspect-square", "Square");
export const Grid = make("grid", "Grid");
export const Wrap = make("flex flex-wrap gap-2", "Wrap");
export const Sticky = make("sticky top-0", "Sticky");
export const Container = make("mx-auto w-full max-w-5xl px-4", "Container");

export const Stack = React.forwardRef<
  HTMLDivElement,
  DivProps & { direction?: "row" | "column"; gap?: number }
>(({ className, direction = "column", gap = 4, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex", direction === "row" ? "flex-row" : "flex-col", className)}
    style={{ gap: `calc(var(--spacing) * ${gap})`, ...props.style }}
    {...props}
  />
));
Stack.displayName = "Stack";

export const HStack = React.forwardRef<HTMLDivElement, DivProps & { gap?: number }>(
  ({ className, gap = 3, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-row items-center", className)}
      style={{ gap: `calc(var(--spacing) * ${gap})`, ...props.style }}
      {...props}
    />
  ),
);
HStack.displayName = "HStack";

export const VStack = React.forwardRef<HTMLDivElement, DivProps & { gap?: number }>(
  ({ className, gap = 3, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col", className)}
      style={{ gap: `calc(var(--spacing) * ${gap})`, ...props.style }}
      {...props}
    />
  ),
);
VStack.displayName = "VStack";

export const SimpleGrid = React.forwardRef<HTMLDivElement, DivProps & { columns?: number }>(
  ({ className, columns = 3, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("grid gap-3", className)}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, ...props.style }}
      {...props}
    />
  ),
);
SimpleGrid.displayName = "SimpleGrid";

export const Spacer = make("flex-1", "Spacer");

export const Group = make("inline-flex items-center [&>*:not(:first-child)]:ml-px", "Group");

export const AbsoluteCenter = make("absolute inset-0 grid place-items-center", "AbsoluteCenter");

export const Float = React.forwardRef<
  HTMLDivElement,
  DivProps & { placement?: "top-end" | "top-start" | "bottom-end" | "bottom-start" }
>(({ className, placement = "top-end", ...props }, ref) => {
  const pos = {
    "top-end": "top-0 right-0 -translate-y-1/2 translate-x-1/2",
    "top-start": "top-0 left-0 -translate-y-1/2 -translate-x-1/2",
    "bottom-end": "bottom-0 right-0 translate-y-1/2 translate-x-1/2",
    "bottom-start": "bottom-0 left-0 translate-y-1/2 -translate-x-1/2",
  }[placement];
  return <div ref={ref} className={cn("absolute", pos, className)} {...props} />;
});
Float.displayName = "Float";

export const Bleed = React.forwardRef<HTMLDivElement, DivProps & { inline?: number; block?: number }>(
  ({ className, inline = 4, block = 0, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        marginInline: `calc(var(--spacing) * ${inline} * -1)`,
        marginBlock: block ? `calc(var(--spacing) * ${block} * -1)` : undefined,
        ...props.style,
      }}
      {...props}
    />
  ),
);
Bleed.displayName = "Bleed";

export const ColorSwatch = React.forwardRef<
  HTMLDivElement,
  DivProps & { value?: string; size?: number }
>(({ className, value, size = 32, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("inline-block rounded-md border border-border", className)}
    style={{ width: size, height: size, background: value, ...props.style }}
    {...props}
  />
));
ColorSwatch.displayName = "ColorSwatch";
