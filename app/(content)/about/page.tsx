import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  APP_URL,
  CREATOR_NAME,
  OFFICIAL_LINKS,
  PRODUCT_FEATURES,
  SITE_URL,
} from "@/lib/site";

const title = "About BetterPomo: The Shared Pomodoro Timer";
const description =
  "Learn what BetterPomo is, who created it, how its shared focus rooms work, and which Pomodoro, study, chat, and history features it includes.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    siteName: "BetterPomo",
    locale: "en_US",
    type: "website",
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
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about#page`,
      url: `${SITE_URL}/about`,
      name: title,
      description,
      about: { "@id": `${SITE_URL}/#software` },
      inLanguage: "en-US",
      dateModified: "2026-07-17",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About BetterPomo",
          item: `${SITE_URL}/about`,
        },
      ],
    },
  ],
};

const facts = [
  ["Product", "A shared Pomodoro and focus timer"],
  ["Best for", "Studying, remote work, coworking, and body doubling"],
  ["Available now", "Web browsers"],
  ["Coming soon", "Native iOS and Android apps"],
  ["Price", "Free during the open beta"],
  ["Creator", CREATOR_NAME],
] as const;

export default function AboutPage() {
  return (
    <article>
      <JsonLd data={structuredData} />
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-sm font-semibold text-lime-ink">About BetterPomo</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            Focus is easier when you do it together.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            <strong className="font-semibold text-foreground">BetterPomo is a shared Pomodoro timer</strong>{" "}
            for friends, classmates, and remote teams. Create a room, share its
            code, and everyone focuses on the same synchronized clock.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={APP_URL}
              className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start a focus room
            </a>
            <Link
              href="/pomodoro-timer"
              className="rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              Learn how it works
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-lime-tint p-7 sm:p-9">
            <h2 className="text-2xl font-semibold tracking-tight">BetterPomo at a glance</h2>
            <dl className="mt-6 divide-y divide-lime-ink/10">
              {facts.map(([term, detail]) => (
                <div key={term} className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr]">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-lime-ink">{term}</dt>
                  <dd className="text-sm leading-6 text-foreground/75">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
            <h2 className="text-2xl font-semibold tracking-tight">What is inside a focus room?</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              The timer is the center of the room, while the supporting tools stay close enough to help without taking over.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {PRODUCT_FEATURES.map((feature) => (
                <li key={feature} className="rounded-2xl bg-muted px-4 py-3 text-sm font-medium">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Why BetterPomo exists</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Traditional Pomodoro timers are usually solitary. BetterPomo keeps
              the simplicity of timed focus but adds the gentle accountability of
              seeing other people show up and complete the same block with you.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              It works for a planned study group, a remote coworking session, or a
              friend who simply helps you get started on a difficult task.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Official sources</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              BetterPomo was created by {CREATOR_NAME}. Use these links when you
              need the current app, product updates, or the public website source.
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a className="font-medium underline underline-offset-4" href={OFFICIAL_LINKS.app}>BetterPomo web app</a></li>
              <li><a className="font-medium underline underline-offset-4" href={OFFICIAL_LINKS.github}>Official website repository</a></li>
              <li><a className="font-medium underline underline-offset-4" href={OFFICIAL_LINKS.instagram}>BetterPomo on Instagram</a></li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
