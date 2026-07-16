import Image from "next/image";

type LogoProps = {
  size?: number;
  variant?: "dark" | "light";
  className?: string;
};

/** Render the requested brand mark variant. */
export function Logo({ size = 40, variant = "light", className }: LogoProps) {
  return (
    <Image
      src={variant === "light" ? "/Logo_light.svg" : "/Logo_dark.svg"}
      alt="BetterPomo"
      width={size}
      height={size}
      unoptimized
      className={className}
    />
  );
}
