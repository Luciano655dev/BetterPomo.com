import { buttonVariants } from "@/components/ui/button";
import { WaitlistForm } from "@/components/landing/WaitlistForm";
import { APP_URL } from "@/lib/api";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-sm flex-col items-center px-6 pt-20 pb-24 text-center sm:pt-28 sm:pb-32">
      <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
        Focus together.
        <br />
        See your time add up.
      </h1>

      <p className="mt-6 text-base leading-relaxed text-muted-foreground">
        Start a shared focus room, invite your people, and keep a record of the
        time you actually spent focused.
      </p>

      <div className="mt-12 w-full">
        <WaitlistForm autoFocus />
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Free while in early access. No spam — one email when your seat is ready.
      </p>

      <div className="mt-10 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="h-px w-8 bg-border" />
        already have an account?
        <span className="h-px w-8 bg-border" />
      </div>

      <a
        href={APP_URL}
        className={buttonVariants({
          variant: "outline",
          size: "lg",
          className: "mt-6 h-12 w-full rounded-xl text-base",
        })}
      >
        Use the web app
      </a>
    </section>
  );
}
