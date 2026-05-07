import type { MetadataRoute } from "next";
import { JOBS } from "@/data/careers";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://innayanutrifoods.com";
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/brands/pan8`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/products`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/sustainability`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/careers`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];

  const jobPages: MetadataRoute.Sitemap = JOBS.map((j) => ({
    url: `${base}/careers/${j.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...jobPages];
}
