import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use — Innaya Nutri Foods Private Limited",
  description: "Terms and conditions of use for Innaya Nutrifoods Private Limited web properties.",
  alternates: { canonical: `${SITE.url}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip bg-bone">
        <PageHero
          eyebrow="Corporate Governance"
          title={
            <>
              Terms of Use &amp;<br />
              <em className="font-serif italic font-normal text-leaf-deep">Commercial Conditions.</em>
            </>
          }
          blurb={
            <>
              Standard terms governing the use of Innaya Nutri Foods Private Limited
              (CIN: {SITE.cin}) corporate websites and platform portals.
            </>
          }
        />

        <article className="mx-auto w-full max-w-[900px] px-5 py-16 sm:px-8 md:py-24 text-[15px] sm:text-[16px] leading-[1.75] text-ink-soft space-y-8">
          <section>
            <h2 className="font-sans text-2xl font-bold text-ink">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing or using the websites and services operated by Innaya Nutri Foods Private Limited (&quot;INFPL&quot;),
              you agree to comply with and be bound by these Terms of Use.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-2xl font-bold text-ink">2. Commercial &amp; Wholesale Inquiries</h2>
            <p className="mt-3">
              Information provided on this site regarding PAN8 product SKUs, wholesale pricing, and platform pilots
              does not constitute a binding legal contract until formal purchase orders or master service agreements (MSAs)
              are executed between authorized company signatories.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-2xl font-bold text-ink">3. Intellectual Property</h2>
            <p className="mt-3">
              All proprietary trademarks, logos, brand names (including &quot;Innaya&quot;, &quot;PAN8 — Just pan it!&quot;,
              and &quot;Innaya FirstMile&quot;), software code, and editorial research publications are the intellectual property
              of Innaya Nutri Foods Private Limited and protected by applicable copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-2xl font-bold text-ink">4. Governing Law &amp; Jurisdiction</h2>
            <p className="mt-3">
              These terms are governed by the laws of India. Any disputes arising in connection with these terms
              shall be subject to the exclusive jurisdiction of the competent courts in Ernakulam, Kerala, India.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
