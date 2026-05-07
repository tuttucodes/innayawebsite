import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Sustainability from "@/components/Sustainability";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Sustainability — millets, water, and the climate equation",
  description:
    "Why millet matters: ~70% less water than rice, ~40% less than wheat. PAN8 reduces household water footprint while improving nutrition footprint.",
  alternates: { canonical: `${SITE.url}/sustainability` },
};

export default function SustainabilityPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <PageHero
          eyebrow="Sustainability"
          title={
            <>
              Less water.<br />
              <em className="text-leaf-deep">More nutrition.</em>
            </>
          }
          blurb={
            <>
              Millets need ~70% less water than rice and ~40% less than wheat. Every
              PAN8 pack reduces a household&apos;s water footprint while improving
              its nutrition footprint — directly aligned with India&apos;s
              millet-mission and climate-resilience goals.
            </>
          }
        />
        <Sustainability />
      </main>
      <Footer />
    </>
  );
}
