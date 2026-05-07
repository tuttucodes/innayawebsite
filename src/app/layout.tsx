import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Innaya Nutri Foods — AI-Powered Nutrition Company",
    template: "%s · Innaya Nutri Foods",
  },
  description:
    "Innaya Nutri Foods Pvt Ltd builds AI-driven food technology. Home of PAN8, India's millet-based plant-protein nutrition brand. Headquartered in Kakkanad, Kerala.",
  keywords: [
    "Innaya Nutri Foods",
    "PAN8",
    "millet protein",
    "AI food tech",
    "plant protein India",
    "Indian FMCG",
    "millet pancake mix",
    "millet dosa mix",
    "millet protein bar",
    "Kerala food startup",
  ],
  authors: [{ name: "Innaya Nutri Foods Pvt Ltd" }],
  creator: "Innaya Nutri Foods Pvt Ltd",
  publisher: "Innaya Nutri Foods Pvt Ltd",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Innaya Nutri Foods",
    title: "Innaya Nutri Foods — AI-Powered Nutrition Company",
    description:
      "AI-driven food tech company. Home of PAN8 — millet-based plant-protein nutrition for modern India.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innaya Nutri Foods — AI-Powered Nutrition Company",
    description:
      "AI-driven food tech company. Home of PAN8 — millet-based plant-protein nutrition.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Food & Beverages",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} ${mono.variable} antialiased`}
    >
      <body className="bg-bone text-ink min-h-screen">{children}</body>
    </html>
  );
}
