import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Newsreader, Public_Sans } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeScript } from "@/components/theme-script";

const sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://himanshudongre.com"),
  applicationName: "Himanshu Dongre",
  title: {
    default: "Himanshu Dongre",
    template: "%s | Himanshu Dongre",
  },
  description:
    "Personal website of Himanshu Dongre, an AI systems engineer building production ML systems and research-driven software.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Himanshu Dongre",
    description: "Trying to understand intelligence by building it.",
    url: "https://himanshudongre.com",
    siteName: "Himanshu Dongre",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Himanshu Dongre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Dongre",
    description: "Trying to understand intelligence by building it.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f1e8" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1218" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
        <SiteHeader />
        <main className="page-shell">
          <div className="shell main-content">{children}</div>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
