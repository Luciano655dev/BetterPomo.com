import posthog from "posthog-js";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

let initialized = false;

/** Init once in the browser. No-op when NEXT_PUBLIC_POSTHOG_KEY is unset. */
export function initAnalytics() {
  if (initialized || !KEY || typeof window === "undefined") return;
  posthog.init(KEY, { api_host: HOST, capture_pageview: false });
  initialized = true;
}

export function trackPageview() {
  if (initialized) posthog.capture("$pageview");
}

export function track(event: string, props?: Record<string, unknown>) {
  if (initialized) posthog.capture(event, props);
}
