import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
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

const SITE_URL = "https://betterpomo.com";
const DESCRIPTION =
  "A shared Pomodoro and focus timer for teams and study groups. Run sessions together, track your history, and stay focused — better, together.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BetterPomo — Shared Pomodoro Timer",
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
    icon: "/Logo-transparent.png",
  },
  openGraph: {
    title: "BetterPomo — Shared Pomodoro Timer",
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
    title: "BetterPomo — Shared Pomodoro Timer",
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
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
