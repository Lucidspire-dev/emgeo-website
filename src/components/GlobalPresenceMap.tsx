"use client";

import dynamic from "next/dynamic";

const GlobalPresenceMapInner = dynamic(
  () => import("./GlobalPresenceMapInner"),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex h-[420px] w-full items-center justify-center rounded-2xl bg-white font-['Plus_Jakarta_Sans'] text-sm text-[#0B1F2D]/50 sm:h-[480px] lg:h-[520px]"
        role="status"
        aria-live="polite"
      >
        Loading map…
      </div>
    ),
  },
);

/** Interactive world map (Leaflet) for global presence — must load client-only. */
export function GlobalPresenceMap() {
  return <GlobalPresenceMapInner />;
}
