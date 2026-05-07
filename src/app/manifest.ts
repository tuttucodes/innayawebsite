import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Innaya Nutri Foods",
    short_name: "Innaya",
    description:
      "AI-first food technology house. Parent company of PAN8 — millet plant-protein nutrition for modern India.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f0e6",
    theme_color: "#1f1a14",
    lang: "en-IN",
    categories: ["food", "business", "lifestyle"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/maskable-icon.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
