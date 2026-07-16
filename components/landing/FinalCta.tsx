import { StoreBadges } from "@/components/landing/StoreBadges";
import { APP_URL } from "@/lib/api";

const STATS = [
  { value: "25:00", label: "the classic block" },
  { value: "24h", label: "chat, then gone" },
  { value: "0", label: "installs needed" },
];

export function FinalCta() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <p className="text-sm italic text-muted-foreground">
          built in the open — free while in beta
        </p>

        <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Your next focus session doesn&apos;t have to be alone.
        </h2>

        <div className="mt-10 flex w-full max-w-lg items-start justify-center gap-8 border-y border-border py-6 sm:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-mono text-2xl font-semibold tabular-nums sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={APP_URL}
            className="inline-flex h-12 items-center rounded-full bg-primary px-7 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Try the open beta
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center rounded-full border border-border bg-card px-7 text-base font-medium transition-colors hover:bg-muted"
          >
            Say hello
          </a>
        </div>

        <div className="mt-12">
          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
