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
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-5 px-6 py-12">
        <div className="flex items-center gap-2.5">
          <Logo size={22} />
          <span className="text-sm font-semibold tracking-tight">BetterPomo</span>
        </div>

        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a
            href={SOCIALS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <InstagramIcon className="size-4" />
            Instagram
          </a>
          <a
            href={SOCIALS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <TikTokIcon className="size-4" />
            TikTok
          </a>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
          <span aria-hidden>·</span>
          <Link href="/terms" className="transition-colors hover:text-foreground">Terms</Link>
          <span aria-hidden>·</span>
          <Link href="/license" className="transition-colors hover:text-foreground">License</Link>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BetterPomo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
