const PILLARS = [
  {
    title: "Today",
    body: "Synced Pomodoro sessions in the browser — create, share a code, focus together.",
  },
  {
    title: "Next",
    body: "Native iOS and Android apps, so a session follows you from desk to library to train.",
  },
  {
    title: "Then",
    body: "Team spaces — recurring rooms, shared stats, and focus culture for whole organizations.",
  },
];

export function Vision() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Where this is going
        </p>
        <h2 className="mt-4 max-w-lg text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
          The focus layer for how people actually work now.
        </h2>

        <div className="mt-6 max-w-lg space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Remote work and online studying turned focus into a group problem.
            Millions already recreate the answer by hand — study-with-me
            streams, virtual coworking rooms, Discord servers with a timer bot.
            The demand is proven; the product is missing.
          </p>
          <p>
            BetterPomo productizes it: shared, synced focus sessions with the
            social layer built in — friends, history, and accountability that
            compounds. We&apos;re onboarding the waitlist in small cohorts and
            building in the open.
          </p>
        </div>

        {/* Roadmap pillars — swap for a real metrics row (waitlist size,
            sessions run, hours focused) once the numbers are worth showing. */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="bg-background p-7">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
