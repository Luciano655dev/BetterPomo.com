"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { subscribeNewsletter } from "@/lib/api";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Reusable newsletter capture. Posts to the public POST /api/wishlist endpoint
 * (no auth). Used in both the hero and the closing CTA.
 */
export function NewsletterForm({ autoFocus = false }: { autoFocus?: boolean }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await subscribeNewsletter(email);
      track("newsletter_subscribed");
      setSubscribed(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong — please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (subscribed) {
    return (
      <div className="flex w-full items-center gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3.5 text-left text-sm">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
          <Check className="size-3.5" />
        </span>
        You&apos;re subscribed. We&apos;ll send the occasional update — no spam.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2.5">
      <Input
        type="email"
        inputMode="email"
        autoComplete="email"
        autoFocus={autoFocus}
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 w-full rounded-xl text-base"
      />
      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="h-12 w-full rounded-xl text-base"
      >
        {loading ? "Subscribing…" : "Subscribe for updates"}
      </Button>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </form>
  );
}
