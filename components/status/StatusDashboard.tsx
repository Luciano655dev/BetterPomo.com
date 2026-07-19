import {
  Activity,
  CircleAlert,
  Clock3,
  Radio,
  Server,
  Timer,
  UserPlus,
  Users,
} from "lucide-react";
import type { HealthState, PublicStatus } from "@/lib/api";
import { StatusChart } from "@/components/status/StatusChart";
import { StatusRefresh } from "@/components/status/StatusRefresh";

const STATE_LABELS: Record<HealthState, string> = {
  operational: "All systems operational",
  degraded: "Some systems are degraded",
  outage: "Service interruption detected",
};

const STATE_STYLES: Record<HealthState, { dot: string; panel: string; text: string }> = {
  operational: { dot: "bg-lime", panel: "bg-lime-tint", text: "text-lime-ink" },
  degraded: { dot: "bg-amber-500", panel: "bg-amber-50", text: "text-amber-900" },
  outage: { dot: "bg-red-500", panel: "bg-red-50", text: "text-red-900" },
};

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en", { notation: value >= 10_000 ? "compact" : "standard" }).format(value);
}

function checkedTime(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "just now";
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

export function StatusDashboard({ status }: { status: PublicStatus | null }) {
  if (!status) {
    return (
      <main className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center px-4 py-20 sm:px-6">
        <div className="w-full rounded-4xl border border-red-200 bg-red-50 p-8 text-center sm:p-14">
          <CircleAlert className="mx-auto size-10 text-red-600" aria-hidden="true" />
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">Status data is unavailable</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            The public status endpoint did not respond. BetterPomo may still be available; try opening the app or refresh this page shortly.
          </p>
          <div className="mt-7 flex justify-center"><StatusRefresh /></div>
        </div>
      </main>
    );
  }

  const metrics = status.metrics;
  const stats = metrics ? [
    { label: "Accounts created", value: metrics.accountsTotal, detail: `+${formatNumber(metrics.accountsLast7Days)} in 7 days`, icon: UserPlus },
    { label: "Sessions created", value: metrics.sessionsTotal, detail: `+${formatNumber(metrics.sessionsLast7Days)} in 7 days`, icon: Timer },
    { label: "Sessions live now", value: metrics.sessionsActive, detail: "Waiting or focusing", icon: Radio },
    { label: "People live now", value: metrics.peopleActive, detail: "Active participants", icon: Users },
  ] : [];

  return (
    <main className="px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <section className="text-center">
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {STATE_LABELS[status.status]}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Live service checks and anonymous product activity from across BetterPomo. No personal account or session data is published here.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-3.5" aria-hidden="true" />
              Checked at {checkedTime(status.checkedAt)}
            </span>
            <StatusRefresh />
          </div>
        </section>

        <section aria-labelledby="services-heading" className="mt-16">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Live checks</p>
              <h2 id="services-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Services</h2>
            </div>
            <p className="hidden text-xs text-muted-foreground sm:block">Response time from the API region</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {status.services.map((service) => {
              const serviceStyle = STATE_STYLES[service.status];
              return (
                <article key={service.name} className="rounded-3xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-muted">
                      <Server className="size-4" aria-hidden="true" />
                    </span>
                    <span className={`mt-1 size-2.5 rounded-full ${serviceStyle.dot}`} role="img" aria-label={service.status} />
                  </div>
                  <h3 className="mt-5 font-bold">{service.name}</h3>
                  <p className="mt-1 min-h-10 text-xs leading-5 text-muted-foreground">{service.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs">
                    <span className={`font-semibold capitalize ${serviceStyle.text}`}>{service.status}</span>
                    <span className="font-mono text-muted-foreground">
                      {service.responseTimeMs === null ? "—" : `${service.responseTimeMs} ms`}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="activity-heading" className="mt-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Product activity</p>
            <h2 id="activity-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">BetterPomo by the numbers</h2>
          </div>

          {metrics ? (
            <>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <article key={stat.label} className="rounded-3xl border border-border bg-card p-5 shadow-sm">
                    <stat.icon className="size-4 text-muted-foreground" aria-hidden="true" />
                    <p className="mt-5 text-3xl font-extrabold tracking-tight">{formatNumber(stat.value)}</p>
                    <h3 className="mt-1 text-sm font-semibold">{stat.label}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.detail}</p>
                  </article>
                ))}
              </div>

              <div className="mt-5 grid gap-5 xl:grid-cols-2">
                <StatusChart
                  title="Account growth"
                  description="New accounts created each day, last 30 days"
                  points={metrics.series}
                  series={[{ key: "accountsCreated", label: "Accounts", color: "#111111" }]}
                />
                <StatusChart
                  title="Session activity"
                  description="Rooms created and peak concurrent rooms, last 30 days"
                  points={metrics.series}
                  series={[
                    { key: "sessionsCreated", label: "Created", color: "#111111" },
                    { key: "activeSessionsPeak", label: "Peak live", color: "#737373" },
                  ]}
                />
              </div>
            </>
          ) : (
            <div className="mt-5 rounded-3xl border border-amber-200 bg-amber-50 p-7">
              <div className="flex items-start gap-3">
                <Activity className="mt-0.5 size-5 text-amber-700" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-amber-950">Activity metrics are temporarily unavailable</h3>
                  <p className="mt-1 text-sm leading-6 text-amber-900/70">Service availability is still being checked normally. The aggregate metrics store did not respond to this update.</p>
                </div>
              </div>
            </div>
          )}
        </section>

        <aside className="mt-12 flex items-start gap-3 rounded-3xl bg-muted p-5 text-sm text-muted-foreground">
          <Activity className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>
            Availability is based on live probes refreshed every minute, not a historical uptime guarantee. Daily metrics are aggregate counts and never include usernames, room names, messages, or other personal data.
          </p>
        </aside>
      </div>
    </main>
  );
}
