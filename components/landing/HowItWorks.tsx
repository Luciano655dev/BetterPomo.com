const STEPS = [
  {
    number: "01",
    title: "Create a session",
    body: "Pick your focus and break lengths, or use classic 25/5. Public or private, your call.",
  },
  {
    number: "02",
    title: "Share the code",
    body: "One six-character code. No installs, no calendar invites — anyone can join from the browser.",
    code: "TMT4LX",
  },
  {
    number: "03",
    title: "Focus together",
    body: "Timers stay in sync for everyone. Chat between rounds, see who's in, and your history saves itself.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Zero to focused in a minute
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            No setup, no downloads — just a code you share.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl bg-card p-8 shadow-sm ring-1 ring-black/5"
            >
              <span aria-hidden className="font-display text-6xl leading-none text-lime">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
              {step.code && (
                <span className="mt-4 inline-block rounded-lg border border-border bg-muted px-3 py-1 font-mono text-sm tracking-widest text-foreground">
                  {step.code}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
