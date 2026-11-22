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
          title={
            <>
              Operating the physical<br />
              <em className="text-leaf-deep">and digital layers of food.</em>
            </>
          }
          blurb={
            <>
              Innaya Nutri Foods Private Limited operates at the intersection of agricultural
              supply chains and consumer nutrition. We build autonomous voice and telemetry
              software for food logistics while formulating everyday millet staples under our
              brand PAN8.
            </>
          }
        />
        <About />
        <Team />
      </main>
      <Footer />
    </>
  );
}
