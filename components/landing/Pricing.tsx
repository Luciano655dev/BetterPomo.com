import { APP_URL } from "@/lib/api";

/** Paid plans are built but not launched — the section stays hidden until
 *  NEXT_PUBLIC_BILLING_ENABLED=true (matching the app + API flags). */
export const BILLING_ENABLED = process.env.NEXT_PUBLIC_BILLING_ENABLED === "true";

const TIERS: {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
  flag?: string;
}[] = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    tagline: "Everything you need to start focusing together.",
    features: [
      "Unlimited sessions, friends & messages",
      "Sessions with up to 5 people",
      "Last 30 days of history & weekly stats",
      "6 timers per session",
      "Basic ambient sounds",
    ],
    cta: "Start free",
    href: APP_URL,
  },
  {
    name: "Pro",
    price: "$4.99",
    cadence: "/mo · or $29.99/yr",
    tagline: "Your full record, private rooms, and every power feature.",
    features: [
      "Full focus history — forever",
      "Week, month & year stats + CSV export",
      "Private & password-protected sessions",
      "Sessions & group chats with up to 25 people",
      "10 timers + session templates",
      "Full sound library + your own uploads",
      "PRO badge on your profile",
    ],
    cta: "Start 7-day free trial",
    href: `${APP_URL}/upgrade`,
    highlight: true,
    flag: "Most popular",
  },
  {
    name: "Lifetime",
    price: "$69.99",
    cadence: "one payment",
    tagline: "Everything in Pro, forever — for people in it for the long run.",
    features: [
      "Everything in Pro, forever",
      "One payment — never billed again",
      "Exclusive Founder badge",
    ],
    cta: "Become a Founder",
    href: `${APP_URL}/upgrade`,
  },
];

export function Pricing() {
  if (!BILLING_ENABLED) return null;
  return (
    <section id="pricing" className="border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Pricing
        </p>
        <h2 className="mt-4 max-w-lg text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
          Free to focus. Pro when you&apos;re all in.
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
          Sessions, friends, and chat are free forever. Pro unlocks your full
          record and the power features — with a 7-day free trial, and a clear
          reminder before it ends.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={[
                "relative flex flex-col rounded-2xl border p-7",
                tier.highlight ? "border-foreground" : "border-border",
              ].join(" ")}
            >
              {tier.flag && (
                <span className="absolute -top-2.5 left-7 rounded-full bg-foreground px-2.5 py-0.5 text-[11px] font-medium text-background">
                  {tier.flag}
                </span>
              )}
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {tier.name}
              </h3>
              <p className="mt-3 text-3xl font-semibold tracking-tight">
                {tier.price}
                <span className="ml-1.5 text-sm font-normal text-muted-foreground">
                  {tier.cadence}
                </span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{tier.tagline}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm leading-relaxed">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span aria-hidden className="mt-[3px] text-muted-foreground">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                className={[
                  "mt-8 inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors",
                  tier.highlight
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border border-border hover:bg-muted",
                ].join(" ")}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Prices in USD. Subscribe on the web with Stripe, or in the iOS/Android
          app through the App Store and Google Play. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
