import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Logo";
import { APP_URL } from "@/lib/api";

export function StatusHeader() {
  return (
    <header className="px-4 pt-4 sm:px-6">
      <nav
        aria-label="Status page"
        className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full bg-card/90 px-3 py-2 shadow-lg shadow-black/5 ring-1 ring-black/5 backdrop-blur"
      >
        <Link href="/" className="flex items-center gap-2 rounded-full px-2 py-1">
          <Logo size={28} />
          <span className="text-sm font-bold tracking-tight">BetterPomo</span>
          <span className="hidden text-sm text-muted-foreground sm:inline">/ Status</span>
        </Link>

        <div className="flex items-center gap-1.5">
          <Link
            href="/"
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:flex"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            Home
          </Link>
          <a
            href={APP_URL}
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Open BetterPomo
          </a>
        </div>
      </nav>
    </header>
  );
}
