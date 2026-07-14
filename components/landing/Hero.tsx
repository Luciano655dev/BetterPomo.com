import { buttonVariants } from "@/components/ui/button";
import { NewsletterForm } from "@/components/landing/NewsletterForm";
import { APP_URL } from "@/lib/api";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-sm flex-col items-center px-6 pt-20 pb-24 text-center sm:pt-28 sm:pb-32">
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
        <span className="size-1.5 rounded-full bg-foreground" />
        Now in open beta
      </span>

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
          className: "mt-12 h-12 w-full rounded-xl text-base",
        })}
      >
        Try the open beta
      </a>

      <p className="mt-4 text-xs text-muted-foreground">
        Free while in beta. Runs right in your browser — no download needed.
      </p>

      <div className="mt-10 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="h-px w-8 bg-border" />
        want product updates?
        <span className="h-px w-8 bg-border" />
      </div>

      <div className="mt-6 w-full">
        <NewsletterForm />
      </div>
    </section>
  );
}
