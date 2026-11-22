import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AILayer from "@/components/AILayer";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Innaya Intelligence — AI Operating System for Food Supply Chains",
  description:
    "Division 01 of Innaya Nutrifoods. Vernacular telephony, mandi price aggregation, intake quality computer vision, and cold-chain telemetry.",
  alternates: { canonical: `${SITE.url}/platforms` },
  openGraph: {
    title: "Innaya Intelligence — Food Supply Chain OS",
    description:
      "Enterprise AI software suite powering procurement, quality verification, and temperature-controlled logistics.",
    url: `${SITE.url}/platforms`,
    type: "website",
  },
};

export default function PlatformsPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <PageHero
          eyebrow="Division 01 · Software & Platforms"
          title="An Operating System for Agricultural Supply Chains"
          blurb={
            <>
              Food procurement across India has historically suffered from unrecorded
              deductions, subjective quality rejections, and chaotic telephony. Innaya
              Intelligence replaces manual friction with vernacular voice coordination,
              digital lot records, and continuous cold-chain telemetry.
            </>
          }
        />

        {/* Architectural Image */}
        <div className="mx-auto w-full max-w-[1360px] px-5 pt-8 md:px-12">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-line bg-ink">
            <Image
              src="/innaya-infrastructure.jpg"
              alt="Innaya Software & Cold-Chain Logistics Infrastructure"
              fill
              priority
              sizes="(max-width: 1360px) 100vw, 1360px"
              className="object-cover"
            />
          </div>
        </div>

        {/* The Full Intelligence Matrix */}
        <div className="mt-8">
          <AILayer />
        </div>

        {/* Enterprise Cloud Architecture */}
        <section className="border-t border-line bg-bone py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 md:px-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mute">
                  Cloud Infrastructure
                </span>
                <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal leading-[1.15] tracking-tight text-ink">
                  Built on AWS for Enterprise Reliability
                </h2>
                <p className="mt-5 text-[15px] sm:text-[16px] leading-[1.65] text-ink-soft">
                  Agricultural logistics operate 24/7 across remote mandi hubs. Our platform
                  leverages Amazon Bedrock for low-latency vernacular telephony, Step Functions
                  for multi-party procurement state machines, and Aurora PostgreSQL for immutable
                  batch lineages.
                </p>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-bone transition-all duration-200 hover:bg-leaf-deep active:scale-[0.98] active:translate-y-[1px]"
                  >
                    Request Enterprise Pilot →
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                <TechSpec
                  title="Multilingual Telephony"
                  engine="Amazon Bedrock + Twilio SIP"
                  desc="Voice agents engage truck drivers and mandi suppliers in Tamil, Malayalam, Hindi, and English to log live arrival ETAs and volume weighments."
                />
                <TechSpec
                  title="Procurement State Machines"
                  engine="AWS Step Functions"
                  desc="Automated multi-step workflows coordinate RFQ quotes, freight confirmation, and intake checklists with human sign-off gates."
                />
                <TechSpec
                  title="Cold-Chain Telemetry"
                  engine="AWS IoT Core + Timestream"
                  desc="Continuous GPS and sensor logging every 180 seconds. Instant anomaly detection triggers automated dynamic re-routing."
                />
                <TechSpec
                  title="Immutable Batch Provenance"
                  engine="Amazon Aurora Serverless"
                  desc="Digital lot records linking grower mandi receipts, lab quality assays, and factory intake certificates."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function TechSpec({
  title,
  engine,
  desc,
}: {
  title: string;
  engine: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-bone-deep/50 p-6">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-leaf-deep">
        {engine}
      </span>
      <h3 className="mt-2 font-sans text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-[1.6] text-ink-soft">{desc}</p>
    </div>
  );
}
