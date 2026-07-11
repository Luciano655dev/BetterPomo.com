import { WaitlistForm } from "@/components/landing/WaitlistForm";
import { StoreBadges } from "@/components/landing/StoreBadges";
import { APP_URL } from "@/lib/api";

export function FinalCta() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center px-6 py-24 text-center sm:py-32">
        <h2 className="text-3xl font-semibold leading-snug tracking-tight sm:text-4xl">
          Your next focus session doesn&apos;t have to be alone.
        </h2>

        <div className="mt-10 w-full">
          <WaitlistForm />
        </div>

        <div className="mt-12 w-full">
          <StoreBadges />
        </div>

        <a
          href={APP_URL}
          className="mt-6 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
        >
          or use the web app →
        </a>
      </div>
    </section>
  );
}
