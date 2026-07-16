"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactMessage, type ContactTopic } from "@/lib/api";
import { track } from "@/lib/analytics";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<ContactTopic>("feedback");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const website = String(new FormData(event.currentTarget).get("website") ?? "");
    try {
      await sendContactMessage({ name, email, topic, message, website });
      track("contact_submitted", { topic });
      setSent(true);
      setName("");
      setEmail("");
      setTopic("feedback");
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong — please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-xl border border-border bg-muted/30 px-6 py-8 text-center">
        <span className="flex size-9 items-center justify-center rounded-full bg-foreground text-background">
          <Check className="size-4" />
        </span>
        <p className="mt-4 text-sm font-medium">Message sent</p>
        <p className="mt-1 text-sm text-muted-foreground">Thanks for reaching out. We&apos;ll get back to you soon.</p>
        <Button type="button" variant="outline" className="mt-5" onClick={() => setSent(false)}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="text-sm font-medium">Name</label>
          <Input
            id="contact-name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            minLength={2}
            maxLength={80}
            required
            className="h-11"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="text-sm font-medium">Email</label>
          <Input
            id="contact-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            maxLength={254}
            required
            className="h-11"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-topic" className="text-sm font-medium">What is this about?</label>
        <select
          id="contact-topic"
          value={topic}
          onChange={(event) => setTopic(event.target.value as ContactTopic)}
          className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <option value="feedback">Feedback or suggestion</option>
          <option value="question">Question</option>
          <option value="bug">Bug report</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium">Message</label>
        <Textarea
          id="contact-message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          minLength={10}
          maxLength={4000}
          placeholder="Tell us what you think, what went wrong, or how we can help."
          required
        />
      </div>

      <div className="absolute -left-[10000px] top-auto size-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {error && <p role="alert" className="text-sm text-destructive">{error}</p>}

      <Button type="submit" size="lg" disabled={loading} className="h-12 w-full rounded-full text-base">
        {loading ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
