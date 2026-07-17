// Fail the production build if the API URL is missing rather than silently
// baking in localhost (which would break the contact form in production). Runs
// server-side only, so it never white-screens a visitor.
if (!process.env.NEXT_PUBLIC_API_URL && process.env.NODE_ENV === "production" && typeof window === "undefined") {
  throw new Error("NEXT_PUBLIC_API_URL must be set in production builds");
}
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

/** The app the marketing site links into (login / "use the web app"). */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.betterpomo.com";

export type HealthState = "operational" | "degraded" | "outage";

export interface ServiceHealth {
  name: string;
  description: string;
  status: HealthState;
  responseTimeMs: number | null;
}

export interface StatusMetricPoint {
  date: string;
  accountsCreated: number;
  sessionsCreated: number;
  activeSessionsPeak: number;
}

export interface PublicStatusMetrics {
  accountsTotal: number;
  sessionsTotal: number;
  sessionsActive: number;
  peopleActive: number;
  accountsLast7Days: number;
  sessionsLast7Days: number;
  series: StatusMetricPoint[];
}

export interface PublicStatus {
  status: HealthState;
  checkedAt: string;
  services: ServiceHealth[];
  metrics: PublicStatusMetrics | null;
}

/** Fetches the anonymous aggregate status document on the server. */
export async function getPublicStatus(): Promise<PublicStatus | null> {
  try {
    const res = await fetch(`${API_URL}/api/public/status`, {
      cache: "no-store",
      signal: AbortSignal.timeout(7_000),
    });
    if (!res.ok) return null;
    const body = await res.json() as { data?: PublicStatus };
    return body.data ?? null;
  } catch {
    return null;
  }
}

export type ContactTopic = "feedback" | "question" | "bug" | "other";

/** Submit the public contact form. The API validates and rate-limits it. */
export async function sendContactMessage(payload: {
  name: string;
  email: string;
  topic: ContactTopic;
  message: string;
  website: string;
}): Promise<void> {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const json = await res.json().catch(() => ({}));
    throw new Error(json.error ?? "Something went wrong — please try again.");
  }
}
