import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — talk to the founders of Innaya Nutri Foods",
  description:
    "Talk to the team at Innaya Nutri Foods (PAN8). Investors, retailers, distributors, modern trade and press — drop us a note. Replies within 48 hours.",
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: "Contact Innaya Nutri Foods",
    description:
      "Investors, retailers, distributors, modern trade, export and press enquiries.",
    url: `${SITE.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <PageHero
          eyebrow="Contact"
          title={
            <>
              Investors, retailers,<br />
              <em className="text-leaf-deep">distributors</em> — say hi.
            </>
          }
          blurb={
            <>
              Drop a note and our form drafts an email straight to the CEO. We reply
              to every relevant message within 48 hours.
            </>
          }
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
