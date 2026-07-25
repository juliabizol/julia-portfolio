"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

/**
 * GoogleAnalytics only calls gtag('config', ...) once on mount, which GA4
 * treats as the first page_view. It has no App Router route-change listener,
 * so client-side navigations aren't tracked unless "Enhanced measurement >
 * Page changes based on browser history events" is enabled on the GA4
 * property — an account setting outside this codebase. This tracks
 * navigations explicitly instead of depending on that toggle, skipping the
 * initial mount since gtag's own config call already reports it.
 */
export function AnalyticsPageView() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    sendGAEvent("event", "page_view", { page_path: pathname });
  }, [pathname]);

  return null;
}
