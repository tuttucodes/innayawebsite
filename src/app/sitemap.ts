import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://innayanutrifoods.com";
  const lastModified = new Date();
  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#brands`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#products`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
