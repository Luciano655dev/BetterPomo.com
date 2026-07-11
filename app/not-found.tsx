import Link from "next/link";
import { Logo } from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="flex items-center gap-2.5">
        <Logo size={26} />
        <span className="text-base font-semibold tracking-tight">BetterPomo</span>
      </div>
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-xl" })}
      >
        Back home
      </Link>
    </main>
  );
}
