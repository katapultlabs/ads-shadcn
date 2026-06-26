import * as React from "react";
import { QRCodeSVG } from "qrcode.react";
import { Check, Copy, Download } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Bucket-D custom components — no first-party shadcn equivalent.
 * CodeBlock, ColorPicker, Highlight, Steps, ActionBar, FloatingPanel,
 * Marquee, DownloadTrigger, QRCode.
 */

export const CodeBlock = ({ code, title, language = "tsx", className }: { code: string; title?: string; language?: string; className?: string }) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border", className)}>
      <div className="flex items-center justify-between border-b border-border bg-muted px-3 py-1.5">
        <span className="font-mono text-xs text-foreground">{title ?? language}</span>
        <button
          type="button"
          aria-label="Copy code"
          onClick={() => {
            navigator.clipboard?.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="text-muted-foreground hover:text-foreground"
        >
          {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
        </button>
      </div>
      <pre tabIndex={0} className="overflow-auto bg-card p-3 text-sm">
        <code className="font-mono text-foreground">{code}</code>
      </pre>
    </div>
  );
};

export const ColorPicker = ({ defaultValue = "#145fc4", label, className }: { defaultValue?: string; label?: string; className?: string }) => {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <div className={cn("space-y-1", className)}>
      {label ? <span className="text-sm font-medium text-foreground">{label}</span> : null}
      <div className="flex items-center gap-2 rounded-md border border-input px-2 py-1.5">
        <input type="color" value={value} onChange={(e) => setValue(e.target.value)} className="size-7 cursor-pointer rounded border-0 bg-transparent p-0" aria-label="Pick color" />
        <input value={value} onChange={(e) => setValue(e.target.value)} className="flex-1 bg-transparent font-mono text-sm focus:outline-none" aria-label="Color value" />
      </div>
    </div>
  );
};

export const Highlight = ({ text, query, className }: { text: string; query: string | string[]; className?: string }) => {
  const queries = Array.isArray(query) ? query : [query];
  const re = new RegExp(`(${queries.map((q) => q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  const parts = text.split(re);
  return (
    <span className={className}>
      {parts.map((part, i) =>
        queries.some((q) => q.toLowerCase() === part.toLowerCase()) ? (
          <mark key={i} className="rounded-sm bg-accent px-0.5 text-accent-foreground">{part}</mark>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </span>
  );
};

export const Steps = ({ steps, current = 0, className }: { steps: string[]; current?: number; className?: string }) => (
  <ol className={cn("flex items-center gap-2", className)}>
    {steps.map((label, i) => (
      <li key={i} className="flex flex-1 items-center gap-2">
        <span
          className={cn(
            "grid size-7 shrink-0 place-items-center rounded-full border text-sm font-medium",
            i < current ? "border-primary bg-primary text-primary-foreground" : i === current ? "border-primary text-primary" : "border-border text-muted-foreground",
          )}
        >
          {i < current ? <Check size={14} /> : i + 1}
        </span>
        <span className={cn("text-sm", i === current ? "font-medium text-foreground" : "text-muted-foreground")}>{label}</span>
        {i < steps.length - 1 ? <span className="h-px flex-1 bg-border" aria-hidden /> : null}
      </li>
    ))}
  </ol>
);

export const ActionBar = ({ selectedLabel, children, className }: { selectedLabel?: string; children?: React.ReactNode; className?: string }) => (
  <div className={cn("inline-flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2 shadow-lg", className)}>
    {selectedLabel ? <span className="text-sm text-muted-foreground">{selectedLabel}</span> : null}
    {selectedLabel ? <span className="h-5 w-px bg-border" aria-hidden /> : null}
    {children}
  </div>
);

export const FloatingPanel = ({ title, children, className }: { title?: string; children?: React.ReactNode; className?: string }) => (
  <div className={cn("w-72 overflow-hidden rounded-lg border border-border bg-card shadow-xl", className)}>
    <div className="flex items-center justify-between border-b border-border px-3 py-2">
      <span className="text-sm font-medium text-foreground">{title ?? "Panel"}</span>
    </div>
    <div className="p-3 text-sm text-muted-foreground">{children}</div>
  </div>
);

export const Marquee = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("overflow-hidden", className)}>
    <div className="flex w-max animate-[marquee_12s_linear_infinite] gap-4">
      {children}
      {children}
    </div>
    <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
  </div>
);

export const DownloadTrigger = ({ data, fileName = "download.txt", mimeType = "text/plain", children, className }: { data: string; fileName?: string; mimeType?: string; children?: React.ReactNode; className?: string }) => {
  const href = `data:${mimeType};charset=utf-8,${encodeURIComponent(data)}`;
  return (
    <a href={href} download={fileName} className={cn("inline-flex items-center gap-2 rounded-md border border-input px-3 py-1.5 text-sm font-medium text-foreground hover:bg-accent", className)}>
      {children ?? (<><Download size={16} /> Download</>)}
    </a>
  );
};

export const QRCode = ({ value, size = 160, className }: { value: string; size?: number; className?: string }) => (
  <div className={cn("inline-block rounded-md border border-border bg-white p-3", className)}>
    <QRCodeSVG value={value} size={size} title={value} />
  </div>
);
