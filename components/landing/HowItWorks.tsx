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
  },
  {
    number: "03",
    title: "Focus together",
    body: "Timers stay in sync for everyone. Chat between rounds, see who's in, and your history saves itself.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-28">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How it works</h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          From zero to a shared focus session in under a minute.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="bg-background p-7">
              <span className="font-mono text-xs text-muted-foreground">{step.number}</span>
              <h3 className="mt-4 text-base font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
