import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Team from "@/components/Team";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About — Food Systems & Supply Chain Technology",
  description:
    "Innaya Nutri Foods Private Limited (INFPL) builds enterprise software for agricultural supply chains and operates high-nutrition consumer brands.",
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: "About Innaya Nutri Foods",
    description:
      "Enterprise software for agricultural supply chains and high-nutrition consumer brands.",
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
          eyebrow="Company Overview"
          title="Building Modern Food Systems from South India"
          blurb={
            <>
              Innaya Nutri Foods was founded in Kakkanad, Kerala, to solve two critical challenges:
              chronic post-harvest spoilage at rural farmgates, and the absence of clean, high-protein
              staples in daily Indian pantries.
            </>
          }
        />
        <About />
        <Team showSectionNumber={false} showOperatingTeam={true} />
      </main>
      <Footer />
    </>
  );
}
