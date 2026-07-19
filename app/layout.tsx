import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Geist_Mono,
  Special_Gothic_Expanded_One,
} from "next/font/google";
import { PostHogProvider } from "@/components/PostHogProvider";
import {
  CREATOR_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: CREATOR_NAME, url: "https://github.com/luciano655dev" }],
  creator: CREATOR_NAME,
  publisher: SITE_NAME,
  category: "productivity",
  keywords: [
    "shared Pomodoro timer",
    "pomodoro timer",
    "online Pomodoro timer",
    "shared timer",
    "focus timer",
    "study together",
    "study with friends online",
    "body doubling",
    "coworking timer",
    "focus room",
  ],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {
        url: "/Icon_light.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Icon_light.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/preview-image.png",
        width: 1731,
        height: 909,
        alt: "BetterPomo shared Pomodoro timer and focus room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/preview-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
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
