import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
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
    default: "Innaya — AI Operating System for Food Supply Chains",
    template: "%s · Innaya Nutri Foods",
  },
  description:
    "Innaya Nutri Foods Pvt Ltd (INFPL) builds the AI operating system for food supply chains — sourcing, quality, logistics, and traceability through multilingual AI agents. Parent company of PAN8, India's millet-based plant-protein nutrition brand.",
  keywords: [
    "Innaya Nutri Foods",
    "Innaya Nutri Foods Pvt Ltd",
    "INFPL",
    "PAN8",
    "Pan8 millet",
    "food supply chain AI",
    "supply chain intelligence",
    "multilingual AI agents",
    "food logistics AI",
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
    title: "Innaya — AI Operating System for Food Supply Chains",
    description:
      "AI operating system for food supply chains. Multilingual AI agents, procurement intelligence, quality inspection. Parent company of PAN8.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innaya — AI Operating System for Food Supply Chains",
    description:
      "AI operating system for food supply chains. Multilingual AI agents, procurement intelligence. Parent company of PAN8.",
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
      className={`${sans.variable} ${serif.variable} ${mono.variable} antialiased`}
    >
      <body className="bg-bone text-ink min-h-screen">{children}</body>
    </html>
  );
}
