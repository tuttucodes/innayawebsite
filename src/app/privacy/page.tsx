import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data governance practices for Innaya Nutrifoods Private Limited.",
  alternates: { canonical: `${SITE.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <PageHeader
          crumbs={[{ label: "Privacy" }]}
          kicker="Legal"
          title="Privacy policy."
          accent="Last updated November 2026."
          lede={`How Innaya Nutri Foods Private Limited collects, protects and handles information across our software and consumer operations. CIN ${SITE.cin}.`}
        />

        <article className="wrap pb-24 md:pb-36"><div className="prose-ledger max-w-[70ch] border-t border-line pt-10">
          <section>
            <h2>1. Information Collection</h2>
            <p>
              We collect information that you provide directly to us when submitting executive inquiries,
              requesting platform pilots, or entering into supplier and distribution agreements. This includes
              contact names, corporate affiliations, telephone numbers, and email addresses.
            </p>
          </section>

          <section>
            <h2>2. Enterprise Software &amp; Telephony</h2>
            <p>
              For logistics operators and suppliers utilizing the Innaya Intelligence Suite (including Innaya Voice and
              Innaya FirstMile), vernacular telephony calls are conducted with explicit consent and recorded solely
              for the purpose of logging operational delivery ETAs, weighment records, and intake quality certificates.
            </p>
          </section>

          <section>
            <h2>3. Data Security &amp; Retention</h2>
            <p>
              Operational records and customer inquiries are stored in secure, access-controlled cloud infrastructure
              hosted in the AWS Asia Pacific (Mumbai) region. We do not sell or monetize personal or transaction data
              to third-party advertising networks.
            </p>
          </section>

          <section>
            <h2>4. Contact &amp; Grievance Officer</h2>
            <p>
              In accordance with the Information Technology Act 2000 and the Digital Personal Data Protection Act 2023,
              the Grievance Officer can be contacted at:
            </p>
            <div className="mt-5 rounded-[6px] border border-line bg-paper-deep px-5 py-4 text-[15px] leading-[1.7] text-ink">
              <p className="!mt-0 font-medium">{SITE.legal}</p>
              <p className="!mt-0">CIN: {SITE.cin}</p>
              <p className="!mt-0">Grievance Officer: CEO Office</p>
              <p className="!mt-0">Email: {SITE.contactEmail}</p>
              <p className="!mt-0">Address: {SITE.hq}</p>
            </div>
          </section>
        </div></article>
      </main>
      <Footer />
    </>
  );
}
