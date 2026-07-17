import Link from "next/link";
import { Logo } from "@/components/Logo";
import { InstagramIcon, TikTokIcon } from "@/components/landing/BrandIcons";

// ── Edit these with your real handles ────────────────────────────────────────
const SOCIALS = {
  instagram: "https://instagram.com/betterpomo",
  tiktok: "https://tiktok.com/@betterpomo",
};

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 sm:px-6">
      <div className="mx-auto w-full max-w-5xl border-t border-border pt-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <Logo size={22} />
            <span className="text-sm font-bold tracking-tight">BetterPomo</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <Link href="/status" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
              <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
              Status
            </Link>
            <span aria-hidden>·</span>
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <span aria-hidden>·</span>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <span aria-hidden>·</span>
            <Link href="/license" className="transition-colors hover:text-foreground">
              License
            </Link>
          </div>

          <div className="flex items-center gap-2">
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
              href={SOCIALS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <TikTokIcon className="size-4" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} BetterPomo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
