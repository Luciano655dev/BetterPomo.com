/** Single-color brand marks (lucide-react dropped brand icons). */
function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M3.61 1.81a1.5 1.5 0 0 0-.61 1.2v17.98a1.5 1.5 0 0 0 .61 1.2l9.02-10.19L3.61 1.81zm10.4 8.63 2.75-3.1-11.4-6.6a1.5 1.5 0 0 0-.62-.19l9.27 9.89zm0 3.12-9.27 9.89c.21-.02.42-.08.62-.19l11.4-6.6-2.75-3.1zm5.75-3.9-2.03-1.18-2.98 3.52 2.98 3.52 2.03-1.18c1.16-.67 1.16-2.35 0-3.02v-1.66z" />
    </svg>
  );
}

/** "Coming soon" store placeholders — swap for real badge links at launch. */
export function StoreBadges() {
  return (
    <div className="flex flex-col items-center gap-2.5 sm:flex-row">
      <span className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-border px-5 text-sm text-muted-foreground sm:w-auto">
        <AppleIcon className="size-4" />
        App Store — coming soon
      </span>
      <span className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-border px-5 text-sm text-muted-foreground sm:w-auto">
        <GooglePlayIcon className="size-4" />
        Google Play — coming soon
      </span>
    </div>
  );
}
