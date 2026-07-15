import { buttonVariants } from "@/components/ui/button";
import { APP_URL } from "@/lib/api";

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100svh-5.25rem)] w-full max-w-sm flex-col items-center justify-center px-6 py-16 text-center sm:py-20">
      <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
        Focus together.
        <br />
        See your time add up.
      </h1>

      <p className="mt-6 text-base leading-relaxed text-muted-foreground">
        Start a shared focus room, invite your people, and keep a record of the
        time you actually spent focused.
      </p>

      <a
        href={APP_URL}
        className={buttonVariants({
          size: "lg",
          className: "mt-10 h-12 w-full rounded-xl text-base",
        })}
      >
        Try the open beta
      </a>

      <p className="mt-4 text-xs text-muted-foreground">
        Free while in beta. Runs in your browser — no download needed.
      </p>
    </section>
  );
}
