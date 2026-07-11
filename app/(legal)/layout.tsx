import Link from "next/link";
import { Logo } from "@/components/Logo";

/**
 * Shared shell for the public legal pages (/privacy, /terms, /license).
 * Server-rendered static content — these routes are exempted from the auth
 * redirect in proxy.ts so logged-out visitors and crawlers can reach them.
 */
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-6 py-10">
      <header>
        <Link href="/" className="inline-flex items-center gap-2.5">
          <Logo size={26} />
          <span className="text-base font-semibold tracking-tight">BetterPomo</span>
        </Link>
      </header>

      <article className="mt-10 flex-1 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_p]:mt-3 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_li]:text-sm [&_li]:leading-relaxed [&_li]:text-muted-foreground [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </article>

      <footer className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 border-t pt-6 text-xs text-muted-foreground">
        <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
        <span aria-hidden>·</span>
        <Link href="/terms" className="transition-colors hover:text-foreground">Terms</Link>
        <span aria-hidden>·</span>
        <Link href="/license" className="transition-colors hover:text-foreground">License</Link>
        <span aria-hidden>·</span>
        <Link href="/" className="transition-colors hover:text-foreground">Back to BetterPomo</Link>
      </footer>
    </div>
  );
}
