import Link from "next/link";
import { Logo } from "@/components/Logo";
import { GitHubIcon, InstagramIcon } from "@/components/landing/BrandIcons";

// ── Edit these with your real handles ────────────────────────────────────────
const SOCIALS = {
  instagram: "https://instagram.com/betterpomo",
  github: "https://github.com/luciano655dev",
};

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 sm:px-6">
      <div className="mx-auto w-full max-w-5xl border-t border-border pt-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo size={22} />
              <span className="text-sm font-bold tracking-tight">BetterPomo</span>
            </div>
            <p className="mt-3 max-w-xs text-xs leading-5 text-muted-foreground">
              A shared Pomodoro timer for studying and working with friends on one synchronized clock.
            </p>
          </div>

          <nav aria-label="Explore BetterPomo">
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Explore</p>
            <div className="mt-3 grid gap-2 text-xs text-muted-foreground">
              <Link href="/about" className="transition-colors hover:text-foreground">About</Link>
              <Link href="/pomodoro-timer" className="transition-colors hover:text-foreground">Shared Pomodoro timer</Link>
              <Link href="/study-with-friends" className="transition-colors hover:text-foreground">Study with friends</Link>
            </div>
          </nav>

          <nav aria-label="BetterPomo information">
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Information</p>
            <div className="mt-3 grid gap-2 text-xs text-muted-foreground">
              <Link href="/status" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
                <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
                Status
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
              <Link href="/terms" className="transition-colors hover:text-foreground">Terms</Link>
              <Link href="/license" className="transition-colors hover:text-foreground">License</Link>
            </div>
          </nav>

          <div className="flex items-start gap-2">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <GitHubIcon className="size-4" />
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} BetterPomo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
