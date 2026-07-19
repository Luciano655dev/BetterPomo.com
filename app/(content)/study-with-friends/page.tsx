import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { APP_URL, CREATOR_NAME, SITE_URL } from "@/lib/site";

const title = "Study With Friends Online Using a Shared Timer | BetterPomo";
const description =
  "A practical guide to studying with friends online: create a shared focus room, agree on one task, run a synchronized timer, and take breaks together.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/study-with-friends" },
  openGraph: {
    title,
    description,
    url: "/study-with-friends",
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
      headline: "How to study with friends online using a shared timer",
      description,
      mainEntityOfPage: `${SITE_URL}/study-with-friends`,
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
          name: "Study with friends online",
          item: `${SITE_URL}/study-with-friends`,
        },
      ],
    },
  ],
};

const tips = [
  ["Name the goal", "Before the timer starts, each person chooses one specific outcome for the focus block."],
  ["Keep the room quiet", "Use chat for quick check-ins, then let the synchronized clock replace repeated status messages."],
  ["Take the break", "Stand up, get water, and return when the shared break ends. Recovery is part of the method."],
  ["Review the round", "At the end, mark completed tasks and decide whether the group needs another focus block."],
] as const;

export default function StudyWithFriendsPage() {
  return (
    <article>
      <JsonLd data={structuredData} />
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-sm font-semibold text-lime-ink">Study together online</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            Study with friends, even when you are apart.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            The simplest online study group needs one agreed goal, one shared timer,
            and a short check-in at the end. BetterPomo puts those pieces in a focus
            room your friends can join with a code.
          </p>
          <a
            href={APP_URL}
            className="mt-8 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Create a study room
          </a>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-tint-purple p-7 sm:p-9">
            <h2 className="text-2xl font-semibold tracking-tight text-tint-purple-ink">What is virtual body doubling?</h2>
            <p className="mt-4 leading-7 text-foreground/75">
              Virtual body doubling means working while another person is present
              online. You do not need to work on the same subject. The value comes
              from starting together, knowing someone else is focusing, and checking
              in when the block ends.
            </p>
          </div>
          <div className="rounded-3xl bg-tint-blue p-7 sm:p-9">
            <h2 className="text-2xl font-semibold tracking-tight text-tint-blue-ink">What does BetterPomo add?</h2>
            <p className="mt-4 leading-7 text-foreground/75">
              Everyone sees the same work timer, break timer, and participants. Each
              person can keep private notes and to-dos, while room chat handles the
              small amount of coordination the group actually needs.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            A study-room rhythm that stays out of the way
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {tips.map(([heading, detail], index) => (
              <div key={heading} className="rounded-3xl border border-border p-6 sm:p-8">
                <span className="font-mono text-sm font-semibold text-lime-ink">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold">{heading}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Good uses for a shared study room</h2>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              <li>Exam revision and problem sets</li>
              <li>Reading, research, and thesis writing</li>
              <li>Language practice and independent coursework</li>
              <li>Remote work sprints and coworking</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Choose a timer that fits</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Start with 25 minutes if the group is new or the task feels difficult.
              Use a longer focus block when everyone already has momentum. Learn more
              in the <Link className="font-medium text-foreground underline underline-offset-4" href="/pomodoro-timer">shared Pomodoro timer guide</Link>.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
