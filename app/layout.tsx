import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope, Newsreader } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeScript } from "@/components/theme-script";

const sans = Manrope({
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
  title: {
    default: "Himanshu Dongre",
    template: "%s | Himanshu Dongre",
  },
  description:
    "Personal website for Himanshu Dongre, an AI systems engineer and research-driven builder working on intelligent systems, production ML, and thoughtful technical work.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Himanshu Dongre",
    description:
      "Trying to understand intelligence by building it.",
    url: "https://himanshudongre.com",
    siteName: "Himanshu Dongre",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Dongre",
    description:
      "Trying to understand intelligence by building it.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4efe6" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1017" },
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
