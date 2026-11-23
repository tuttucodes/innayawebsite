import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions of use for Innaya Nutrifoods Private Limited web properties.",
  alternates: { canonical: `${SITE.url}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <PageHeader
          crumbs={[{ label: "Terms" }]}
          kicker="Legal"
          title="Terms of use."
          accent="Last updated November 2026."
          lede={`The terms that govern your use of this website and your dealings with Innaya Nutri Foods Private Limited. CIN ${SITE.cin}.`}
        />

        <article className="wrap pb-24 md:pb-36"><div className="prose-ledger max-w-[70ch] border-t border-line pt-10">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the websites and services operated by Innaya Nutri Foods Private Limited (&quot;INFPL&quot;),
              you agree to comply with and be bound by these Terms of Use.
            </p>
          </section>

          <section>
            <h2>2. Commercial &amp; Wholesale Inquiries</h2>
            <p>
              Information provided on this site regarding PAN8 product SKUs, wholesale pricing, and platform pilots
              does not constitute a binding legal contract until formal purchase orders or master service agreements (MSAs)
              are executed between authorized company signatories.
            </p>
          </section>

          <section>
            <h2>3. Intellectual Property</h2>
            <p>
              All proprietary trademarks, logos, brand names (including &quot;Innaya&quot;, &quot;PAN8 — Just pan it!&quot;,
              and &quot;Innaya FirstMile&quot;), software code, and editorial research publications are the intellectual property
              of Innaya Nutri Foods Private Limited and protected by applicable copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2>4. Governing Law &amp; Jurisdiction</h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising in connection with these terms
              shall be subject to the exclusive jurisdiction of the competent courts in Ernakulam, Kerala, India.
            </p>
          </section>
        </div></article>
      </main>
      <Footer />
    </>
  );
}
