import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JobsSchema from "@/components/JobsSchema";
import PageHeader from "@/components/ui/PageHeader";
import Arrow from "@/components/ui/Arrow";
import Headline from "@/components/ui/Headline";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import { JOBS } from "@/data/careers";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at Innaya Nutri Foods and PAN8 in Kerala: tech, brand, operations, design and growth. Send us your work, not your CV.",
  alternates: { canonical: `${SITE.url}/careers` },
  openGraph: {
    title: "Careers at Innaya Nutri Foods",
    description: "Build India's assured buyer for millets and pulses, from Kerala.",
    url: `${SITE.url}/careers`,
    type: "website",
  },
};

interface Reason {
  title: string;
  body: string;
}

const REASONS: Reason[] = [
  { title: "Ground floor", body: "Year one of a venture-track food company. What you decide this quarter shapes next year." },
  { title: "Ownership", body: "Eligible roles carry ESOPs. Real upside for the people who build it." },
  { title: "Real-world software", body: "Code that changes what a truck driver or a grader does tomorrow morning." },
  { title: "Kerala", body: "Based in Kakkanad. Hybrid for operating roles, remote-friendly for engineering." },
];

export default function CareersPage() {
  return (
    <>
      <JobsSchema />
      <Nav />
      <main id="main" className="overflow-x-clip">
        <PageHeader
          crumbs={[{ label: "Careers" }]}
          kicker="Careers"
          title="Build the buyer India's farmers need."
          accent="From Kerala."
          lede="A small team covering food, brand, operations and software under one roof. Every application is read by the founders."
          facts={[
            { value: String(JOBS.length), label: "Open roles" },
            { value: String(new Set(JOBS.map((j) => j.team)).size), label: "Teams hiring" },
            { value: "Kochi", label: "Headquarters" },
            { value: "ESOP", label: "On eligible roles" },
          ]}
        />

        <section className="wrap py-24 md:py-32">
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {REASONS.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 0.05} className="border-t border-line pt-6">
                <h2 className="text-[20px] font-normal tracking-[-0.02em] text-ink">{r.title}</h2>
                <p className="mt-3 text-[15px] leading-[1.65] text-ink-soft">{r.body}</p>
              </Reveal>
            ))}
          </ul>
        </section>

        <section className="bg-paper-deep">
          <div className="wrap py-24 md:py-32">
            <SectionIntro
              kicker="Open roles"
              title="Where you'd fit."
              body={
                <>
                  Don&apos;t see your role? Write to{" "}
                  <a href={`mailto:${SITE.hrEmail}`} className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink">
                    {SITE.hrEmail}
                  </a>{" "}
                  with what you&apos;d like to build.
                </>
              }
            />
            <ul className="mt-14 border-t border-line-strong md:mt-20">
              {JOBS.map((job) => (
                <li key={job.slug} id={job.slug}>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="group grid gap-3 border-b border-line py-7 transition-colors hover:bg-paper/60 md:grid-cols-12 md:items-center md:gap-8 md:px-4"
                  >
                    <span className="text-[clamp(1.2rem,1rem+0.6vw,1.6rem)] tracking-[-0.025em] text-ink md:col-span-5">
                      {job.title}
                    </span>
                    <span className="text-[14px] text-ink-soft md:col-span-2">{job.team}</span>
                    <span className="text-[14px] text-ink-soft md:col-span-2">{job.location}</span>
                    <span className="text-[14px] text-mute md:col-span-2">
                      {job.type} · {job.experience}
                    </span>
                    <span className="hidden justify-end md:col-span-1 md:flex">
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 transition-colors group-hover:border-forest-deep group-hover:bg-forest-deep group-hover:text-paper">
                        <Arrow />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-forest-deep text-paper">
          <div className="wrap grid gap-12 py-24 md:grid-cols-12 md:py-36">
            <div className="md:col-span-7">
              <p className="kicker mb-7 text-paper/70">A note from the founders</p>
              <Headline size="xl" tone="dark" accent="Not your CV.">
                Send us your work.
              </Headline>
            </div>
            <div className="space-y-5 text-[16px] leading-[1.7] text-paper/70 md:col-span-4 md:col-start-9 md:self-end">
              <p>
                The thing you shipped, the essay you wrote, the campaign you ran. Show us what you
                made and why. We read every email.
              </p>
              <p>
                <a
                  href={`mailto:${SITE.hrEmail}?subject=${encodeURIComponent("I'd like to work at Innaya")}`}
                  className="text-paper underline decoration-paper/30 underline-offset-4 hover:decoration-paper"
                >
                  {SITE.hrEmail}
                </a>
                , with the role in the subject line.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
