import { Logo } from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";
import { BILLING_ENABLED } from "@/components/landing/Pricing";
import { APP_URL } from "@/lib/api";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
      <a href="#" className="flex items-center gap-2.5">
        <Logo size={26} />
        <span className="text-base font-semibold tracking-tight">BetterPomo</span>
      </a>

      <div className="flex items-center gap-6">
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a href="#how-it-works" className="transition-colors hover:text-foreground">
            How it works
          </a>
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          {BILLING_ENABLED && (
            <a href="#pricing" className="transition-colors hover:text-foreground">
              Pricing
            </a>
          )}
        </nav>
        <a
          href={APP_URL}
          className={buttonVariants({ variant: "outline", className: "h-9 rounded-lg px-4" })}
        >
          Log in
        </a>
      </div>
    </header>
  );
}
