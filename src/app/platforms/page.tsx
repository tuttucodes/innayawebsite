import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import WorkWithUs from "@/components/ui/WorkWithUs";
import { INTEL_MODULES, SITE, type IntelModule } from "@/data/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Innaya Intelligence",
  description:
    "Software for physical food supply chains: vernacular voice agents, mandi price discovery, intake grading by camera, cold-chain telemetry and batch traceability.",
  alternates: { canonical: `${SITE.url}/platforms` },
  openGraph: {
    title: "Innaya Intelligence · Innaya Nutri Foods",
    description: "Software that keeps the food chain honest, from farmgate call to batch record.",
    url: `${SITE.url}/platforms`,
    type: "website",
  },
};

const STATUS_STYLE: Record<IntelModule["status"], string> = {
  "Deployed in PAN8": "bg-forest text-paper",
  "Active Pilot": "bg-sand-soft/60 text-ink",
  "Core Platform": "border border-line-strong text-ink-soft",
};

interface Principle {
  title: string;
  body: string;
}

const PRINCIPLES: Principle[] = [
  {
    title: "Phone calls, not apps",
    body: "Drivers and suppliers talk to consent-aware voice agents in Tamil, Malayalam, Hindi or English. Nobody has to install anything.",
  },
  {
    title: "People sign off",
    body: "Models transcribe calls, extract quotes and flag delays. Every purchase order and grade settlement still needs a human approval.",
  },
  {
    title: "Evidence on every lot",
    body: "Each transaction carries timestamped weighments, photos and batch IDs, building a record both sides can trust.",
  },
];

interface Spec {
  title: string;
  engine: string;
  body: string;
}

const STACK: Spec[] = [
  {
    title: "Multilingual telephony",
    engine: "Amazon Bedrock, Twilio SIP",
    body: "Voice agents log arrival times and weighments with drivers and mandi suppliers.",
  },
  {
    title: "Procurement workflows",
    engine: "AWS Step Functions",
    body: "Multi-step flows for quotes, freight confirmation and intake checklists, with human sign-off gates.",
  },
  {
    title: "Cold-chain telemetry",
    engine: "AWS IoT Core, Timestream",
    body: "GPS and temperature logged every three minutes, with automatic alerts and rerouting.",
  },
  {
    title: "Batch provenance",
    engine: "Amazon Aurora Serverless",
    body: "Lot records linking mandi receipts, lab assays and factory intake certificates.",
  },
];

export default function PlatformsPage() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <PageHeader
          crumbs={[{ label: "Platforms" }]}
          kicker="Innaya Intelligence"
          title="Fewer phone calls."
          accent="Fewer arguments at the gate."
          lede="Indian food procurement still runs on unrecorded deductions, subjective grading and endless calls. We build software that replaces each of them with a record."
          actions={<ButtonLink href="/contact?topic=Partnership">Request a pilot</ButtonLink>}
          image={{ src: "/innaya-infrastructure.jpg", alt: "Refrigerated trucks at a modern pack-house", position: "50% 55%" }}
        />

        {/* Principles */}
        <section className="wrap py-24 md:py-32">
          <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
            {PRINCIPLES.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.06} className="border-t border-line pt-6">
                <p className="text-[13px] text-sand">/{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-5 text-[22px] font-normal tracking-[-0.025em] text-ink">{p.title}</h2>
                <p className="mt-3 max-w-[40ch] text-[15.5px] leading-[1.65] text-ink-soft">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Modules */}
        <section className="bg-paper-deep">
          <div className="wrap py-24 md:py-36">
            <SectionIntro
              kicker="The suite"
              title="Seven modules."
              accent="One record of the harvest."
              body="Each module stands alone. Together they follow a lot from the first call to the farmer to the batch code on a PAN8 pouch."
            />
            <ul className="mt-14 border-t border-line-strong md:mt-20">
              {INTEL_MODULES.map((m) => (
                <li key={m.id} className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-3">
                    <h3 className="text-[22px] font-normal tracking-[-0.025em] text-ink">{m.name}</h3>
                    <p className="serif-i mt-1 text-[18px] text-sand">{m.tagline}</p>
                  </div>
                  <p className="text-[15.5px] leading-[1.65] text-ink-soft md:col-span-5">{m.body}</p>
                  <p className="text-[14px] leading-[1.7] text-mute md:col-span-2">
                    {m.capabilities.join(", ")}
                  </p>
                  <div className="md:col-span-2 md:text-right">
                    <span className={cn("inline-block rounded-full px-3 py-1 text-[12px]", STATUS_STYLE[m.status])}>
                      {m.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Architecture */}
        <section className="wrap py-24 md:py-36">
          <SectionIntro
            kicker="Under the hood"
            title="Built on AWS."
            accent="Running when the mandi does."
            body="Agricultural logistics never close. The platform runs on managed AWS services chosen for uptime in remote hubs and an auditable trail."
          />
          <dl className="mt-14 grid gap-x-10 md:mt-20 md:grid-cols-2">
            {STACK.map((s) => (
              <div key={s.title} className="border-t border-line py-8">
                <dt className="flex flex-wrap items-baseline justify-between gap-3">
                  <span className="text-[20px] tracking-[-0.02em] text-ink">{s.title}</span>
                  <span className="text-[13px] text-forest">{s.engine}</span>
                </dt>
                <dd className="mt-3 max-w-[52ch] text-[15.5px] leading-[1.65] text-ink-soft">{s.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        <WorkWithUs title="Run a pilot with us." accent="Start with one corridor." />
      </main>
      <Footer />
    </>
  );
}
