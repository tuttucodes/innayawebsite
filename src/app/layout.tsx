import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://innayanutrifoods.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f0e6" },
    { media: "(prefers-color-scheme: dark)", color: "#1f1a14" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Innaya Nutri Foods",
  title: {
    default: "Innaya Nutri Foods — AI-Powered Food Technology Company",
    template: "%s · Innaya Nutri Foods",
  },
  description:
    "Innaya Nutri Foods Pvt Ltd (INFPL) is an AI-first food technology company from Kerala, India. Parent company of PAN8 — India's millet-based plant-protein nutrition brand. End-to-end FMCG: sourcing, formulation, manufacturing, distribution.",
  keywords: [
    "Innaya Nutri Foods",
    "Innaya Nutri Foods Pvt Ltd",
    "INFPL",
    "PAN8",
    "Pan8 millet",
    "AI food tech India",
    "AI FMCG company",
    "millet protein India",
    "plant protein India",
    "food technology Kerala",
    "Kerala food technology company",
    "millet pancake mix",
    "millet dosa mix",
    "millet protein bar",
    "Indian food tech holding company",
    "Rahul Babu Innaya",
    "Irfan Habeeb Innaya",
  ],
  authors: [{ name: "Innaya Nutri Foods Pvt Ltd", url: SITE_URL }],
  creator: "Innaya Nutri Foods Pvt Ltd",
  publisher: "Innaya Nutri Foods Pvt Ltd",
  alternates: {
    canonical: SITE_URL,
    languages: { "en-IN": SITE_URL, "x-default": SITE_URL },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Innaya Nutri Foods",
    title: "Innaya Nutri Foods — AI-Powered Food Technology Company",
    description:
      "AI-first food technology company from Kerala. Parent company of PAN8. End-to-end FMCG, powered by A.I. — sourcing to shelf.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innaya Nutri Foods — AI-Powered Food Technology Company",
    description:
      "AI-first food technology company from Kerala. Parent company of PAN8. End-to-end FMCG, powered by A.I.",
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
  category: "Food & Beverages",
  formatDetection: { email: false, address: false, telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${serif.variable} ${mono.variable} antialiased`}
    >
      <body className="bg-bone text-ink min-h-screen">{children}</body>
    </html>
  );
}
