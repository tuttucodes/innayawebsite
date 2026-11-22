import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Innaya Nutri Foods Private Limited",
  description: "Privacy policy and data governance practices for Innaya Nutrifoods Private Limited.",
  alternates: { canonical: `${SITE.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip bg-bone">
        <PageHero
          eyebrow="Corporate Governance"
          title={
            <>
              Privacy Policy &amp;<br />
              <em className="font-serif italic font-normal text-leaf-deep">Data Governance.</em>
            </>
          }
          blurb={
            <>
              How Innaya Nutri Foods Private Limited (CIN: {SITE.cin}) collects, protects,
              and handles information across our enterprise software platforms and consumer operations.
            </>
          }
        />

        <article className="mx-auto w-full max-w-[900px] px-5 py-16 sm:px-8 md:py-24 text-[15px] sm:text-[16px] leading-[1.75] text-ink-soft space-y-8">
          <section>
            <h2 className="font-sans text-2xl font-bold text-ink">1. Information Collection</h2>
            <p className="mt-3">
              We collect information that you provide directly to us when submitting executive inquiries,
              requesting platform pilots, or entering into supplier and distribution agreements. This includes
              contact names, corporate affiliations, telephone numbers, and email addresses.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-2xl font-bold text-ink">2. Enterprise Software &amp; Telephony</h2>
            <p className="mt-3">
              For logistics operators and suppliers utilizing the Innaya Intelligence Suite (including Innaya Voice and
              Innaya FirstMile), vernacular telephony calls are conducted with explicit consent and recorded solely
              for the purpose of logging operational delivery ETAs, weighment records, and intake quality certificates.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-2xl font-bold text-ink">3. Data Security &amp; Retention</h2>
            <p className="mt-3">
              Operational records and customer inquiries are stored in secure, access-controlled cloud infrastructure
              hosted in the AWS Asia Pacific (Mumbai) region. We do not sell or monetize personal or transaction data
              to third-party advertising networks.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-2xl font-bold text-ink">4. Contact &amp; Grievance Officer</h2>
            <p className="mt-3">
              In accordance with the Information Technology Act 2000 and the Digital Personal Data Protection Act 2023,
              the Grievance Officer can be contacted at:
            </p>
            <div className="mt-3 rounded-2xl border border-line bg-bone-deep/50 p-5 font-mono text-xs text-ink">
              <p className="font-bold">{SITE.legal}</p>
              <p>CIN: {SITE.cin}</p>
              <p>Grievance Officer: CEO Office</p>
              <p>Email: {SITE.contactEmail}</p>
              <p>Address: {SITE.hq}</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
