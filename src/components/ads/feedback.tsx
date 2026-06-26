import * as React from "react";
import { Loader2, Check, Copy, Search } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Bucket-D custom feedback components — no first-party shadcn equivalent.
 * Spinner, Loader, ProgressCircle, EmptyState, Clipboard.
 */

const SPINNER_SIZE: Record<string, number> = { xs: 12, sm: 16, md: 20, lg: 28, xl: 36 };

export const Spinner = ({ size = "md", className }: { size?: string; className?: string }) => (
  <Loader2 className={cn("animate-spin text-muted-foreground", className)} size={SPINNER_SIZE[size] ?? 20} aria-label="Loading" />
);

export const Loader = ({ text = "Loading", size = "md", className }: { text?: string; size?: string; className?: string }) => (
  <div className={cn("flex items-center gap-2 text-sm text-muted-foreground", className)} role="status">
    <Spinner size={size} />
    {text ? <span>{text}</span> : null}
  </div>
);

const PROGRESS_TONE: Record<string, string> = {
  primary: "var(--primary)",
  success: "var(--success)",
  warning: "var(--warning)",
  danger: "var(--destructive)",
  info: "var(--info)",
};

export const ProgressCircle = ({
  value = 0,
  size = 56,
  thickness = 6,
  tone = "primary",
  className,
}: {
  value?: number;
  size?: number;
  thickness?: number;
  tone?: keyof typeof PROGRESS_TONE;
  className?: string;
}) => {
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(100, Math.max(0, value)) / 100) * c;
  return (
    <div className={cn("relative inline-grid place-items-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" role="img" aria-label={`${value}%`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--muted)" strokeWidth={thickness} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={PROGRESS_TONE[tone] ?? PROGRESS_TONE.primary}
          strokeWidth={thickness}
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-xs font-semibold text-foreground">{Math.round(value)}%</span>
    </div>
  );
};

export const EmptyState = ({
  title = "No results",
  description,
  icon,
  action,
  className,
}: {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border p-8 text-center", className)}>
    <div className="text-muted-foreground">{icon ?? <Search size={28} />}</div>
    <p className="font-semibold text-foreground">{title}</p>
    {description ? <p className="max-w-sm text-sm text-muted-foreground">{description}</p> : null}
    {action ? <div className="mt-2">{action}</div> : null}
  </div>
);

export const Clipboard = ({ value, label, className }: { value: string; label?: string; className?: string }) => {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <div className={cn("space-y-1", className)}>
      {label ? <span className="text-sm font-medium text-foreground">{label}</span> : null}
      <div className="flex items-center gap-2 rounded-md border border-input px-3 py-1.5">
        <code className="flex-1 truncate font-mono text-sm text-foreground">{value}</code>
        <button
          type="button"
          onClick={copy}
          aria-label="Copy to clipboard"
          className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        >
          {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  );
};
