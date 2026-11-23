import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { toTopic } from "@/data/contact";
import PageHeader from "@/components/ui/PageHeader";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the founders of Innaya Nutri Foods and PAN8. Investors, retailers, distributors, processors and press. Replies within two working days.",
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: "Contact Innaya Nutri Foods",
    description: "Investors, retail, distribution, sourcing and press enquiries.",
    url: `${SITE.url}/contact`,
    type: "website",
  },
};

interface ContactPageProps {
  searchParams: Promise<{ topic?: string | string[] }>;
}

interface Line {
  label: string;
  value: string;
  href?: string;
  note?: string;
}

const LINES: Line[] = [
  { label: "Founders' office", value: SITE.contactEmail, href: `mailto:${SITE.contactEmail}`, note: "Investment, partnerships, press" },
  { label: "PAN8 sales", value: SITE.brandEmail, href: `mailto:${SITE.brandEmail}`, note: "Retail, modern trade, export" },
  { label: "Sales desk", value: "+91 90744 17293", href: "tel:+919074417293" },
  { label: "Careers", value: SITE.hrEmail, href: `mailto:${SITE.hrEmail}` },
];

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { topic } = await searchParams;

  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <PageHeader
          crumbs={[{ label: "Contact" }]}
          kicker="Contact"
          title="Let's talk."
          accent="The founders will reply."
          lede="Whether you want to stock PAN8, source grain, run a software pilot or invest, start here. We answer within two working days."
        />

        <section className="wrap pb-24 md:pb-36">
          <div className="grid gap-16 md:grid-cols-12">
            <aside className="md:col-span-4">
              <dl className="border-t border-line">
                {LINES.map((l) => (
                  <div key={l.label} className="border-b border-line py-6">
                    <dt className="text-[13px] text-mute">{l.label}</dt>
                    <dd className="mt-1.5">
                      {l.href ? (
                        <a
                          href={l.href}
                          className="break-all text-[17px] tracking-[-0.01em] text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
                        >
                          {l.value}
                        </a>
                      ) : (
                        <span className="text-[17px] text-ink">{l.value}</span>
                      )}
                      {l.note && <span className="mt-1 block text-[13px] text-mute">{l.note}</span>}
                    </dd>
                  </div>
                ))}
                <div className="py-6">
                  <dt className="text-[13px] text-mute">Office</dt>
                  <dd className="mt-1.5 text-[15px] leading-[1.6] text-ink">
                    F223, DLF New Town Heights
                    <br />
                    Seaport Airport Road, Kakkanad
                    <br />
                    Ernakulam, Kerala 682037
                  </dd>
                </div>
              </dl>
            </aside>
            <div className="md:col-span-7 md:col-start-6">
              <ContactForm initialTopic={toTopic(topic)} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
