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
    default: "Innaya Nutri Foods — Farmgate to Consumer Nutrition",
    template: "%s · Innaya Nutri Foods",
  },
  description:
    "Innaya Nutri Foods Pvt Ltd (INFPL) bridges South Indian agriculture and everyday nutrition. Operating direct FPO procurement, farmgate telemetry, and clean-label consumer brand PAN8.",
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
    title: "Innaya Nutri Foods — Farmgate to Consumer Nutrition",
    description:
      "Bridging South Indian agriculture and everyday nutrition. Operating farmgate sourcing networks and clean consumer nutrition brand PAN8.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innaya Nutri Foods — Farmgate to Consumer Nutrition",
    description:
      "Bridging South Indian agriculture and everyday nutrition. Operating farmgate sourcing networks and clean consumer nutrition brand PAN8.",
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
