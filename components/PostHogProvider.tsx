"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initAnalytics, trackPageview } from "@/lib/analytics";

/** Boots PostHog and captures a pageview on every route change. */
export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageview();
  }, [pathname]);

  return <>{children}</>;
}
