import { buttonVariants } from "@/components/ui/button";
import { NewsletterForm } from "@/components/landing/NewsletterForm";
import { StoreBadges } from "@/components/landing/StoreBadges";
import { APP_URL } from "@/lib/api";

export function FinalCta() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center px-6 py-24 text-center sm:py-32">
        <h2 className="text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
          Your next focus session doesn&apos;t have to be alone.
        </h2>

        <a
          href={APP_URL}
          className={buttonVariants({
            size: "lg",
            className: "mt-10 h-12 w-full rounded-xl text-base",
          })}
        >
          Try the open beta
        </a>

        <div className="mt-12 w-full">
          <StoreBadges />
        </div>

        <div className="mt-12 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          stay in the loop
          <span className="h-px w-8 bg-border" />
        </div>

        <div className="mt-6 w-full">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
