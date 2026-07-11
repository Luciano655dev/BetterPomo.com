import Image from "next/image";

/**
 * Brand logo. One transparent asset (a black watch mark) is recolored for dark
 * mode with `dark:invert` — a dark mark on light backgrounds, a white mark on
 * dark ones, always transparent (no opaque box). Toggled purely with CSS via the
 * `dark` class on <html>, so there's no JS theme dependency or hydration flash.
 */
export function Logo({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/Logo-transparent.png"
      alt="BetterPomo"
      width={size}
      height={size}
      className={`${className ? `${className} ` : ""}dark:invert`}
    />
  );
}
