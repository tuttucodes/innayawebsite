import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Compliance from "@/components/Compliance";
import Team from "@/components/Team";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About — AI-first food technology company in Kerala, India",
  description:
    "Innaya Nutri Foods Pvt Ltd (INFPL) — incorporated 22 July 2024, headquartered in Kakkanad, Kerala. DPIIT-recognised, FSSAI Central licensed. Building millet-first plant-protein nutrition under PAN8.",
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: "About Innaya Nutri Foods",
    description:
      "An AI-first food technology company headquartered in Kerala. DPIIT-recognised, FSSAI Central licensed.",
    url: `${SITE.url}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <PageHero
          eyebrow="About INFPL"
          title={
            <>
              We treat food the way<br />
              <em className="text-leaf-deep">software gets built.</em>
            </>
          }
          blurb={
            <>
              Innaya Nutri Foods Private Limited (INFPL) is a Kerala-headquartered
              food technology company. Incorporated 22 July 2024, DPIIT-recognised
              till 2034, FSSAI Central licensed. We ship millet-first, plant-protein
              nutrition under our consumer brand PAN8.
            </>
          }
        />
        <About />
        <Compliance />
        <Team />
      </main>
      <Footer />
    </>
  );
}
