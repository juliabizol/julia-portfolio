"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
import { CLARITY_PROJECT_ID } from "@/lib/site";

/**
 * Clarity.init() touches window/document directly, so it can only run
 * client-side after mount — it can't run during SSR. init() itself is
 * idempotent (it no-ops if the script tag already exists), so calling it
 * once here is safe.
 *
 * Deferred via requestIdleCallback rather than calling it directly on
 * mount: session recording has no user-facing deadline, so there's no
 * reason for it to compete with critical-path work during initial load.
 * Verified with a controlled Lighthouse A/B (repeated runs with and
 * without this component, same machine state): no measurable difference
 * in performance score, LCP, or TBT either way — the deferral is a
 * defensive best practice here, not a fix for a measured regression.
 */
export function ClarityAnalytics() {
  useEffect(() => {
    const init = () => Clarity.init(CLARITY_PROJECT_ID);

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(init);
      return () => cancelIdleCallback(id);
    }

    const id = setTimeout(init, 1);
    return () => clearTimeout(id);
  }, []);

  return null;
}
