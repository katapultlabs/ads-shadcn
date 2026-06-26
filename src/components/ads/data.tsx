import * as React from "react";
import { ChevronRight, X, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Bucket-D custom data-display components — no first-party shadcn equivalent.
 * Stat, Status, Tag, DataList, Timeline, TreeView, Listbox.
 */

export const Stat = ({
  label,
  value,
  delta,
  className,
}: {
  label: string;
  value: React.ReactNode;
  delta?: { value: string; direction?: "up" | "down" };
  className?: string;
}) => (
  <div className={cn("space-y-1", className)}>
    <p className="text-sm text-muted-foreground">{label}</p>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-semibold text-foreground">{value}</span>
      {delta ? (
        <span className={cn("inline-flex items-center gap-0.5 text-sm font-medium", delta.direction === "down" ? "text-destructive" : "text-success")}>
          {delta.direction === "down" ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
          {delta.value}
        </span>
      ) : null}
    </div>
  </div>
);

const STATUS_TONE: Record<string, string> = {
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-destructive",
  info: "bg-info",
  neutral: "bg-muted-foreground",
};

export const Status = ({
  tone = "neutral",
  children,
  className,
}: {
  tone?: keyof typeof STATUS_TONE;
  children?: React.ReactNode;
  className?: string;
}) => (
  <span className={cn("inline-flex items-center gap-2 text-sm text-foreground", className)}>
    <span className={cn("size-2 rounded-full", STATUS_TONE[tone] ?? STATUS_TONE.neutral)} aria-hidden />
    {children}
  </span>
);

export const Tag = ({
  children,
  onClose,
  className,
}: {
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}) => (
  <span className={cn("inline-flex items-center gap-1 rounded-md border border-border bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground", className)}>
    {children}
    {onClose ? (
      <button type="button" onClick={onClose} aria-label="Remove" className="text-muted-foreground hover:text-foreground">
        <X size={12} />
      </button>
    ) : null}
  </span>
);

export const DataList = ({
  items,
  className,
}: {
  items: { label: string; value: React.ReactNode }[];
  className?: string;
}) => (
  <dl className={cn("grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm", className)}>
    {items.map((it, i) => (
      <React.Fragment key={i}>
        <dt className="text-muted-foreground">{it.label}</dt>
        <dd className="text-foreground">{it.value}</dd>
      </React.Fragment>
    ))}
  </dl>
);

export const Timeline = ({
  items,
  className,
}: {
  items: { title: string; description?: string }[];
  className?: string;
}) => (
  <ol className={cn("space-y-0", className)}>
    {items.map((it, i) => (
      <li key={i} className="relative flex gap-3 pb-5 last:pb-0">
        <div className="flex flex-col items-center">
          <span className="mt-1 size-2.5 rounded-full bg-primary" aria-hidden />
          {i < items.length - 1 ? <span className="w-px flex-1 bg-border" aria-hidden /> : null}
        </div>
        <div className="-mt-0.5">
          <p className="font-medium text-foreground">{it.title}</p>
          {it.description ? <p className="text-sm text-muted-foreground">{it.description}</p> : null}
        </div>
      </li>
    ))}
  </ol>
);

type TreeNode = { label: string; children?: TreeNode[] };

function TreeBranch({ node, depth }: { node: TreeNode; depth: number }) {
  const [open, setOpen] = React.useState(true);
  const hasChildren = !!node.children?.length;
  return (
    <li>
      <button
        type="button"
        onClick={() => hasChildren && setOpen((o) => !o)}
        className="flex w-full items-center gap-1 rounded px-1.5 py-1 text-sm text-foreground hover:bg-accent"
        style={{ paddingLeft: `${depth * 16 + 6}px` }}
      >
        {hasChildren ? (
          <ChevronRight size={14} className={cn("transition-transform", open && "rotate-90")} />
        ) : (
          <span className="inline-block w-3.5" />
        )}
        {node.label}
      </button>
      {hasChildren && open ? (
        <ul>
          {node.children!.map((c, i) => (
            <TreeBranch key={i} node={c} depth={depth + 1} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export const TreeView = ({ data, className }: { data: TreeNode[]; className?: string }) => (
  <ul className={cn("rounded-md border border-border p-1", className)}>
    {data.map((n, i) => (
      <TreeBranch key={i} node={n} depth={0} />
    ))}
  </ul>
);

export const Listbox = ({
  items,
  defaultValue,
  className,
}: {
  items: string[];
  defaultValue?: string;
  className?: string;
}) => {
  const [selected, setSelected] = React.useState(defaultValue);
  return (
    <ul className={cn("max-h-60 overflow-auto rounded-md border border-border p-1", className)} role="listbox" aria-label="Options">
      {items.map((item) => (
        <li
          key={item}
          role="option"
          aria-selected={selected === item}
          onClick={() => setSelected(item)}
          className={cn(
            "cursor-pointer rounded px-2 py-1.5 text-sm",
            selected === item ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
