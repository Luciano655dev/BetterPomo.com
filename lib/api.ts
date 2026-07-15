// Fail the production build if the API URL is missing rather than silently
// baking in localhost (which would break the contact form in production). Runs
// server-side only, so it never white-screens a visitor.
if (!process.env.NEXT_PUBLIC_API_URL && process.env.NODE_ENV === "production" && typeof window === "undefined") {
  throw new Error("NEXT_PUBLIC_API_URL must be set in production builds");
}
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

/** The app the marketing site links into (login / "use the web app"). */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.betterpomo.com";

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
