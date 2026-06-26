import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Bucket-C typography — semantic HTML elements + Tailwind, replacing Chakra's
 * Heading/Text/Span/etc. Each forwards `className` and renders the correct tag
 * so document semantics and the type scale stay intentional.
 */

const HEADING_SIZE: Record<string, string> = {
  xs: "text-sm font-semibold",
  sm: "text-base font-semibold",
  md: "text-lg font-semibold",
  lg: "text-2xl font-bold",
  xl: "text-3xl font-bold",
  "2xl": "text-4xl font-bold",
};

export const Heading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; size?: string }
>(({ as: Tag = "h2", size = "lg", className, ...props }, ref) => (
  <Tag ref={ref} className={cn("font-heading tracking-tight text-foreground", HEADING_SIZE[size] ?? HEADING_SIZE.lg, className)} {...props} />
));
Heading.displayName = "Heading";

export const Text = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-foreground leading-relaxed", className)} {...props} />
));
Text.displayName = "Text";

export const Span = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => <span ref={ref} className={cn(className)} {...props} />,
);
Span.displayName = "Span";

export const Strong = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => <strong ref={ref} className={cn("font-semibold text-foreground", className)} {...props} />,
);
Strong.displayName = "Strong";

export const Em = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => <em ref={ref} className={cn("italic", className)} {...props} />,
);
Em.displayName = "Em";

export const Mark = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => <mark ref={ref} className={cn("rounded-sm bg-accent px-1 text-accent-foreground", className)} {...props} />,
);
Mark.displayName = "Mark";

export const Code = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <code ref={ref} className={cn("rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground", className)} {...props} />
  ),
);
Code.displayName = "Code";

export const Kbd = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <kbd ref={ref} className={cn("inline-flex h-5 min-w-5 items-center justify-center rounded border border-border bg-muted px-1.5 font-mono text-xs text-foreground shadow-sm", className)} {...props} />
  ),
);
Kbd.displayName = "Kbd";

export const Link = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, ...props }, ref) => (
    <a ref={ref} className={cn("font-medium text-primary underline-offset-4 hover:underline", className)} {...props} />
  ),
);
Link.displayName = "Link";

export const Quote = React.forwardRef<HTMLQuoteElement, React.HTMLAttributes<HTMLQuoteElement>>(
  ({ className, ...props }, ref) => <q ref={ref} className={cn("italic", className)} {...props} />,
);
Quote.displayName = "Quote";

export const Blockquote = React.forwardRef<HTMLQuoteElement, React.HTMLAttributes<HTMLQuoteElement>>(
  ({ className, ...props }, ref) => (
    <blockquote ref={ref} className={cn("border-l-2 border-border pl-4 italic text-muted-foreground", className)} {...props} />
  ),
);
Blockquote.displayName = "Blockquote";

export const List = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement> & { ordered?: boolean }
>(({ className, ordered, ...props }, ref) => {
  const Tag = (ordered ? "ol" : "ul") as "ul";
  return <Tag ref={ref} className={cn(ordered ? "list-decimal" : "list-disc", "ml-5 space-y-1 text-sm text-foreground", className)} {...props} />;
});
List.displayName = "List";

export const ListItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn(className)} {...props} />,
);
ListItem.displayName = "ListItem";

export const Image = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, ...props }, ref) => <img ref={ref} className={cn("max-w-full", className)} {...props} />,
);
Image.displayName = "Image";

export const VisuallyHidden = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => <span ref={ref} className={cn("sr-only", className)} {...props} />,
);
VisuallyHidden.displayName = "VisuallyHidden";

export const Fieldset = React.forwardRef<HTMLFieldSetElement, React.FieldsetHTMLAttributes<HTMLFieldSetElement>>(
  ({ className, ...props }, ref) => (
    <fieldset ref={ref} className={cn("space-y-3 rounded-md border border-border p-4", className)} {...props} />
  ),
);
Fieldset.displayName = "Fieldset";

export const NativeSelect = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...props }, ref) => (
    <select
      ref={ref}
      className={cn("h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none", className)}
      {...props}
    />
  ),
);
NativeSelect.displayName = "NativeSelect";

export const SkipNavLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn("sr-only rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50", className)}
      {...props}
    >
      {children}
    </a>
  ),
);
SkipNavLink.displayName = "SkipNavLink";
