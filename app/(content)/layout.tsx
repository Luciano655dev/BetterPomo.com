import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { APP_URL } from "@/lib/site";

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-border bg-card/90 px-4 backdrop-blur sm:px-6">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Logo size={25} />
            <span className="font-semibold tracking-tight">BetterPomo</span>
          </Link>

          <nav aria-label="Learn about BetterPomo" className="hidden items-center gap-5 text-sm text-muted-foreground sm:flex">
            <Link href="/about" className="transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="/pomodoro-timer" className="transition-colors hover:text-foreground">
              Pomodoro timer
            </Link>
            <Link href="/study-with-friends" className="transition-colors hover:text-foreground">
              Study together
            </Link>
          </nav>

          <a
            href={APP_URL}
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Open BetterPomo
          </a>
        </div>
      </header>

      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
