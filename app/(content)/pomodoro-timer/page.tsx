import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { APP_URL, CREATOR_NAME, SITE_URL } from "@/lib/site";

const title = "Shared Pomodoro Timer Online for Friends | BetterPomo";
const description =
  "Use a shared Pomodoro timer online with friends. Learn how Pomodoro focus blocks work and how BetterPomo keeps an entire focus room on one clock.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/pomodoro-timer" },
  openGraph: {
    title,
    description,
    url: "/pomodoro-timer",
    siteName: "BetterPomo",
    locale: "en_US",
    type: "article",
    images: [{ url: "/preview-image.png", width: 1731, height: 909, alt: "BetterPomo shared Pomodoro timer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/preview-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How to use a shared Pomodoro timer with friends",
      description,
      mainEntityOfPage: `${SITE_URL}/pomodoro-timer`,
      author: { "@type": "Person", name: CREATOR_NAME },
      publisher: { "@type": "Person", name: CREATOR_NAME },
      dateModified: "2026-07-17",
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Shared Pomodoro timer",
          item: `${SITE_URL}/pomodoro-timer`,
        },
      ],
    },
  ],
};

const steps = [
  ["Create a room", "Open BetterPomo, start a focus room, and choose a clear name for the session."],
  ["Invite your people", "Share the room code with friends, classmates, or coworkers so they can join the same session."],
  ["Choose a focus block", "Select a 25-minute Pomodoro, a longer deep-work timer, or a custom work and break rhythm."],
  ["Focus on one clock", "Start together. The room timer remains synchronized for everyone, including pauses and breaks."],
] as const;

export default function PomodoroTimerPage() {
  return (
    <article>
      <JsonLd data={structuredData} />
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-sm font-semibold text-lime-ink">Shared Pomodoro timer</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            One online Pomodoro timer for the whole room.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            A shared Pomodoro timer gives every participant the same work and
            break schedule. BetterPomo turns that schedule into a live focus room
            with a synchronized clock, participants, chat, notes, and session history.
          </p>
          <a
            href={APP_URL}
            className="mt-8 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Use the free web timer
          </a>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto w-full max-w-5xl rounded-[2.5rem] bg-lime-tint p-8 sm:p-14">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">What is the Pomodoro technique?</h2>
            </div>
            <div className="space-y-4 leading-7 text-foreground/75">
              <p>
                The Pomodoro technique divides work into focused intervals followed
                by short breaks. A common pattern is 25 minutes of focus and a
                5-minute break, with a longer break after several rounds.
              </p>
              <p>
                The timer makes the next step concrete: work on one thing until the
                bell, then step away briefly. BetterPomo also supports longer blocks
                and a running timer, so the method can fit the work instead of forcing
                every task into exactly 25 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            How to start a shared Pomodoro session
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {steps.map(([heading, detail], index) => (
              <li key={heading} className="rounded-3xl border border-border p-6 sm:p-8">
                <span className="font-mono text-sm font-semibold text-lime-ink">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold">{heading}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Why share the timer?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              A shared clock removes the small coordination problems that interrupt
              group focus. Nobody has to ask when the round started, whether the
              timer is paused, or when everyone will return from a break.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Who is it for?</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Use it for exam study, writing sprints, remote coworking, pair
              accountability, or quiet body-doubling sessions. For a practical setup,
              read the guide to <Link className="font-medium text-foreground underline underline-offset-4" href="/study-with-friends">studying with friends online</Link>.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
