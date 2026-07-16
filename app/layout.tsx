import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Geist_Mono,
  Special_Gothic_Expanded_One,
} from "next/font/google";
import { PostHogProvider } from "@/components/PostHogProvider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Wide display face for the giant timer numerals — the typographic signature
 * of the new identity. Single weight (400) by design. */
const display = Special_Gothic_Expanded_One({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const SITE_URL = "https://betterpomo.com";
const DESCRIPTION =
  "BetterPomo is a shared Pomodoro room: one code, one clock — you and your people on the same 25 minutes. Synced timers, live chat, and a focus history that adds up.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BetterPomo — Focus together, live",
    template: "%s — BetterPomo",
  },
  description: DESCRIPTION,
  keywords: [
    "pomodoro",
    "pomodoro timer",
    "shared timer",
    "focus timer",
    "study together",
    "body doubling",
    "coworking timer",
    "productivity",
  ],
  icons: {
    icon: [
      {
        url: "/Icon_light.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Icon_dark.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    title: "BetterPomo — Focus together, live",
    description: DESCRIPTION,
    url: "/",
    siteName: "BetterPomo",
    type: "website",
    images: [
      {
        url: "/preview-image.png",
        width: 1731,
        height: 909,
        alt: "BetterPomo — focus is better, together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BetterPomo — Focus together, live",
    description: DESCRIPTION,
    images: ["/preview-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geistMono.variable} ${display.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
