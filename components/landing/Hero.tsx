import { SessionPreview } from "@/components/landing/SessionPreview";
import { APP_URL } from "@/lib/api";

export function Hero() {
  return (
    <section id="home" className="px-4 pb-20 pt-28 sm:px-6 sm:pt-36">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
          Focus together.
          <br />
          Feel the time add up.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          BetterPomo is a shared Pomodoro room. One code, one clock — you and
          your people, on the same 25 minutes. Runs in your browser, no
          download needed.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={APP_URL}
            className="inline-flex h-12 items-center rounded-full bg-primary px-7 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Try the open beta
          </a>
          <a
            href="#preview"
            className="inline-flex h-12 items-center rounded-full bg-lime-soft px-7 text-base font-medium text-lime-ink transition-opacity hover:opacity-90"
          >
            See it live ↓
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-14 w-full max-w-6xl sm:mt-20">
        {/* Soft lime glow anchoring the panel to the page. */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -z-10 h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/15 blur-3xl"
        />
        <SessionPreview />
      </div>

      <div className="mx-auto mt-7 flex w-full max-w-6xl flex-col items-center justify-between gap-4 rounded-3xl border border-border bg-card px-5 py-4 text-center shadow-sm sm:flex-row sm:px-6 sm:text-left">
        <div>
          <p className="text-sm font-semibold">This preview is yours to try.</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Switch timers, pause, write a note, mix sounds, and send a message.
          </p>
        </div>
        <a
          href={APP_URL}
          className="inline-flex h-10 shrink-0 items-center rounded-full bg-lime px-5 text-sm font-semibold text-background transition-transform hover:scale-[1.02] active:scale-95"
        >
          Create a real room →
        </a>
      </div>
    </section>
  );
}
