import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Products from "@/components/Products";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Products — 13 millet-first SKUs by PAN8",
  description:
    "Explore the full PAN8 product range — 3 pancake mixes, 5 dosa mixes, 2 upma mixes and 3 protein bars. All millet-first, plant-protein dense, gluten-free and vegan.",
  alternates: { canonical: `${SITE.url}/products` },
  openGraph: {
    title: "PAN8 — 13 millet-first SKUs",
    description:
      "Pancake, dosa, upma mixes and on-the-go protein bars. Millet-first, plant-protein dense, gluten-free, vegan.",
    url: `${SITE.url}/products`,
    type: "website",
  },
  keywords: [
    "millet pancake mix",
    "ragi dosa mix",
    "moringa dosa",
    "millet upma",
    "plant protein bar India",
    "gluten free breakfast",
  ],
};

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <PageHero
          eyebrow="Products"
          title={
            <>
              13 SKUs.<br />
              <em className="text-leaf-deep">One philosophy.</em>
            </>
          }
          blurb={
            <>
              Every PAN8 pack is millet-first, plant-protein dense (15–24g per 100g),
              gluten-free, vegan, and free of preservatives. Pancake mixes, dosa
              mixes, upma mixes, and on-the-go bars — engineered for the moments
              Indian families already eat.
            </>
          }
        />
        <Products />
      </main>
      <Footer />
    </>
  );
}
