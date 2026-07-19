"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { BILLING_ENABLED } from "@/components/landing/Pricing";
import { APP_URL } from "@/lib/api";

const LINKS: { id: string; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "preview", label: "Preview" },
  { id: "features", label: "Features" },
  ...(BILLING_ENABLED ? [{ id: "pricing", label: "Pricing" }] : []),
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export function PillNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A narrow band around the upper-middle of the viewport: whichever
      // section crosses it becomes the active nav pill.
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const { id } of LINKS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Main"
        className="flex items-center gap-1 rounded-full bg-card/90 px-2 py-1.5 shadow-lg shadow-black/5 ring-1 ring-black/5 backdrop-blur"
      >
        <a href="#home" className="flex items-center gap-2 pl-1.5 pr-2">
          <Logo size={24} />
          <span className="text-sm font-bold tracking-tight max-sm:hidden">
            BetterPomo
          </span>
        </a>

        <div className="flex items-center gap-1 max-sm:hidden">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={[
                "rounded-full px-3.5 py-1.5 text-sm transition-colors",
                active === link.id
                  ? "bg-lime-soft font-medium text-lime-ink"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/status"
          className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground lg:flex"
        >
          <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
          Status
        </a>

        <a
          href={APP_URL}
          className="ml-1 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Log in
        </a>
      </nav>
    </header>
  );
}
