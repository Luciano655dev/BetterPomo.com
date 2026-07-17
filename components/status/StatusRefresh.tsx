"use client";

import { useEffect, useState, useTransition } from "react";
import { RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

const REFRESH_SECONDS = 60;

export function StatusRefresh() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [seconds, setSeconds] = useState(REFRESH_SECONDS);

  useEffect(() => {
    let remaining = REFRESH_SECONDS;
    const interval = window.setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        remaining = REFRESH_SECONDS;
        startTransition(() => router.refresh());
      }
      setSeconds(remaining);
    }, 1_000);
    return () => window.clearInterval(interval);
  }, [router]);

  function refresh() {
    setSeconds(REFRESH_SECONDS);
    startTransition(() => router.refresh());
  }

  return (
    <button
      type="button"
      onClick={refresh}
      disabled={isPending}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium text-muted-foreground shadow-sm transition-colors hover:text-foreground disabled:cursor-wait disabled:opacity-70"
      aria-label="Refresh current status"
    >
      <RefreshCw className={`size-3.5 ${isPending ? "animate-spin" : ""}`} aria-hidden="true" />
      {isPending ? "Refreshing" : `Refresh in ${seconds}s`}
    </button>
  );
}
