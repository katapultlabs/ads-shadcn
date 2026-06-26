import * as React from "react";
import { X, Minus, Plus, Check, Star, Upload, Circle as CircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tag } from "@/components/ads/data";

/**
 * Bucket-D custom input components — no first-party shadcn equivalent.
 * CloseButton, Checkmark, Radiomark, NumberInput, Input{Group,Addon,Element},
 * CheckboxCard, RadioCard, RatingGroup, TagsInput, Editable, FileUpload.
 */

export const CloseButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { size?: number }
>(({ className, size = 16, "aria-label": ariaLabel = "Close", ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    aria-label={ariaLabel}
    className={cn("inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground", className)}
    {...props}
  >
    <X size={size} />
  </button>
));
CloseButton.displayName = "CloseButton";

export const Checkmark = ({ checked = true, className }: { checked?: boolean; className?: string }) => (
  <span
    className={cn(
      "inline-flex size-5 items-center justify-center rounded border",
      checked ? "border-primary bg-primary text-primary-foreground" : "border-input",
      className,
    )}
  >
    {checked ? <Check size={12} /> : null}
  </span>
);

export const Radiomark = ({ checked = true, className }: { checked?: boolean; className?: string }) => (
  <span className={cn("inline-flex size-5 items-center justify-center rounded-full border", checked ? "border-primary" : "border-input", className)}>
    {checked ? <CircleIcon size={10} className="fill-primary text-primary" /> : null}
  </span>
);

export const NumberInput = ({
  defaultValue = 0,
  min,
  max,
  step = 1,
  className,
}: {
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}) => {
  const [val, setVal] = React.useState(defaultValue);
  const clamp = (n: number) => Math.min(max ?? Infinity, Math.max(min ?? -Infinity, n));
  return (
    <div className={cn("inline-flex h-9 items-stretch rounded-md border border-input", className)}>
      <button type="button" aria-label="Decrement" onClick={() => setVal((v) => clamp(v - step))} className="grid w-8 place-items-center text-muted-foreground hover:bg-accent">
        <Minus size={14} />
      </button>
      <input
        type="text"
        inputMode="numeric"
        value={val}
        onChange={(e) => setVal(clamp(Number(e.target.value) || 0))}
        className="w-12 border-x border-input bg-transparent text-center text-sm focus:outline-none"
        aria-label="Value"
      />
      <button type="button" aria-label="Increment" onClick={() => setVal((v) => clamp(v + step))} className="grid w-8 place-items-center text-muted-foreground hover:bg-accent">
        <Plus size={14} />
      </button>
    </div>
  );
};

export const InputGroup = ({
  startElement,
  endElement,
  children,
  className,
}: {
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative flex items-center", className)}>
    {startElement ? <span className="pointer-events-none absolute left-3 text-muted-foreground">{startElement}</span> : null}
    <div className={cn("flex-1 [&_input]:w-full", startElement && "[&_input]:pl-9", endElement && "[&_input]:pr-9")}>{children}</div>
    {endElement ? <span className="pointer-events-none absolute right-3 text-muted-foreground">{endElement}</span> : null}
  </div>
);

export const InputAddon = ({
  addon,
  placement = "start",
  children,
  className,
}: {
  addon: React.ReactNode;
  placement?: "start" | "end";
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex items-stretch", className)}>
    {placement === "start" ? (
      <span className="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-foreground">{addon}</span>
    ) : null}
    <div className={cn("flex-1 [&_input]:rounded-none", placement === "start" ? "[&_input]:rounded-r-md" : "[&_input]:rounded-l-md")}>{children}</div>
    {placement === "end" ? (
      <span className="inline-flex items-center rounded-r-md border border-l-0 border-input bg-muted px-3 text-sm text-foreground">{addon}</span>
    ) : null}
  </div>
);

export const InputElement = InputGroup;

export const CheckboxCard = ({
  label,
  description,
  defaultChecked,
  className,
}: {
  label: string;
  description?: string;
  defaultChecked?: boolean;
  className?: string;
}) => {
  const [checked, setChecked] = React.useState(!!defaultChecked);
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors",
        checked ? "border-primary ring-1 ring-primary" : "border-border hover:border-muted-foreground/40",
        className,
      )}
    >
      <Checkbox checked={checked} onCheckedChange={(v) => setChecked(!!v)} className="mt-0.5" />
      <span className="space-y-0.5">
        <span className="block text-sm font-medium text-foreground">{label}</span>
        {description ? <span className="block text-sm text-muted-foreground">{description}</span> : null}
      </span>
    </label>
  );
};

export const RadioCard = ({
  options,
  defaultValue,
  className,
}: {
  options: { value: string; label: string; description?: string }[];
  defaultValue?: string;
  className?: string;
}) => {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <div className={cn("grid gap-2", className)} role="radiogroup">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={cn(
            "flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors",
            value === opt.value ? "border-primary ring-1 ring-primary" : "border-border hover:border-muted-foreground/40",
          )}
        >
          <Radiomark checked={value === opt.value} />
          <input type="radio" className="sr-only" checked={value === opt.value} onChange={() => setValue(opt.value)} name="radio-card" />
          <span className="space-y-0.5">
            <span className="block text-sm font-medium text-foreground">{opt.label}</span>
            {opt.description ? <span className="block text-sm text-muted-foreground">{opt.description}</span> : null}
          </span>
        </label>
      ))}
    </div>
  );
};

export const RatingGroup = ({ defaultValue = 0, count = 5, className }: { defaultValue?: number; count?: number; className?: string }) => {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <div className={cn("inline-flex gap-1", className)} role="radiogroup" aria-label="Rating">
      {Array.from({ length: count }, (_, i) => i + 1).map((n) => (
        <button key={n} type="button" aria-label={`${n} stars`} onClick={() => setValue(n)}>
          <Star size={20} className={cn(n <= value ? "fill-warning text-warning" : "text-muted-foreground")} />
        </button>
      ))}
    </div>
  );
};

export const TagsInput = ({ defaultValue = [], placeholder = "Add tag", className }: { defaultValue?: string[]; placeholder?: string; className?: string }) => {
  const [tags, setTags] = React.useState(defaultValue);
  const [draft, setDraft] = React.useState("");
  const add = () => {
    const v = draft.trim();
    if (v && !tags.includes(v)) setTags([...tags, v]);
    setDraft("");
  };
  return (
    <div className={cn("flex flex-wrap items-center gap-1.5 rounded-md border border-input p-1.5", className)}>
      {tags.map((t) => (
        <Tag key={t} onClose={() => setTags(tags.filter((x) => x !== t))}>{t}</Tag>
      ))}
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), add())}
        placeholder={placeholder}
        className="flex-1 bg-transparent px-1 text-sm focus:outline-none"
        aria-label="Add tag"
      />
    </div>
  );
};

export const Editable = ({ defaultValue = "", className }: { defaultValue?: string; className?: string }) => {
  const [editing, setEditing] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue);
  return editing ? (
    <Input
      autoFocus
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => setEditing(false)}
      onKeyDown={(e) => e.key === "Enter" && setEditing(false)}
      className={className}
    />
  ) : (
    <button type="button" onClick={() => setEditing(true)} className={cn("rounded px-2 py-1 text-left text-sm text-foreground hover:bg-accent", className)}>
      {value || "Click to edit"}
    </button>
  );
};

export const FileUpload = ({ className }: { className?: string }) => (
  <label className={cn("flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border p-8 text-center hover:border-muted-foreground/50", className)}>
    <Upload className="text-muted-foreground" size={24} />
    <span className="text-sm font-medium text-foreground">Drop files here</span>
    <span className="text-xs text-muted-foreground">PNG, JPG, or PDF</span>
    <input type="file" className="sr-only" />
  </label>
);
