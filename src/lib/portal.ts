import * as React from "react";

// Container for Radix portals (Dialog, Popover, Tooltip, …). The ADS explorer
// provides the preview's in-target node via this context so overlays render
// inside the screenshot region; everything OUTSIDE the provider (the explorer
// chrome, and any real app) gets undefined → Radix's default (document.body).
// Context-scoped (not a global lookup) so the explorer's own control dropdowns
// are never hijacked into the preview.
export const PortalContainerContext = React.createContext<HTMLElement | null>(null);

export function usePortalContainer(): HTMLElement | undefined {
  return React.useContext(PortalContainerContext) ?? undefined;
}
