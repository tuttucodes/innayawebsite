import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import JobApplyButton from "@/components/JobApplyButton";
import JobsSchema from "@/components/JobsSchema";
import { JOBS } from "@/data/careers";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers — join the team building India's AI-first nutrition company",
  description:
    "Open roles at Innaya Nutri Foods (PAN8). We're hiring across tech, brand, ops, design and growth. Based in Kerala. Apply via email.",
  alternates: { canonical: `${SITE.url}/careers` },
  openGraph: {
    title: "Careers at Innaya Nutri Foods",
    description:
      "Build the AI operating layer underneath India's millet-first nutrition company. Open roles in tech, brand, ops, design and growth.",
    url: `${SITE.url}/careers`,
    type: "website",
  },
};

const TEAMS = [
  "Founder's Office",
  "Tech & Product",
  "Sales & Marketing",
  "Design & Social",
  "Operations & Logistics",
] as const;

export default function CareersPage() {
  return (
    <>
      <JobsSchema />
      <Nav />
      <main className="overflow-x-clip">
        <PageHero
          eyebrow="Careers"
          title={
            <>
              Build the company<br />
              India will <em className="text-leaf-deep">eat tomorrow.</em>
            </>
          }
          blurb={
            <>
              We&apos;re a 15-person team in Kerala building an AI-first food
              technology company. Tech, brand, ops, design, and growth — all under
              one roof. Apply directly. Every email lands in the founders&apos; inbox.
            </>
          }
        />

        <section className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
            <Why
              k="Ground floor"
              v="Year-one of a venture-track FMCG company. Decisions you make this quarter live in next year's strategy."
            />
            <Why
              k="ESOP track"
              v="Eligible roles get equity. Real upside, real downside."
            />
            <Why
              k="AI-native"
              v="Tools, ops, and decisions are powered by AI. You'll work alongside it, not against it."
            />
            <Why
              k="In Kerala"
              v="Kakkanad headquarters. Hybrid for some, remote-friendly for tech."
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-5 pb-24 md:px-10 md:pb-32">
          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-8">
            <h2 className="font-serif text-[clamp(2rem,1rem+3.5vw,4rem)] leading-[0.96] tracking-[-0.02em]">
              Open roles · {JOBS.length}
            </h2>
            <p className="max-w-md text-sm text-ink-soft">
              Don&apos;t see a fit? Email{" "}
              <a
                href={`mailto:${SITE.hrEmail}`}
                className="underline decoration-line underline-offset-4 hover:decoration-ink"
              >
                {SITE.hrEmail}
              </a>{" "}
              with what you&apos;d like to build.
            </p>
          </div>

          <div className="mt-10 space-y-px overflow-hidden rounded-3xl border border-line bg-line">
            {JOBS.map((job, i) => (
              <article
                key={job.slug}
                id={job.slug}
                className="group relative grid gap-4 bg-bone p-6 transition-colors hover:bg-bone-deep md:grid-cols-12 md:items-start md:gap-8 md:p-8"
              >
                <div className="flex items-center gap-3 md:col-span-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="md:col-span-7">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="block font-serif text-[clamp(1.4rem,1rem+0.8vw,2rem)] tracking-tight text-ink hover:text-leaf-deep"
                  >
                    {job.title}
                  </Link>
                  <p className="mt-2 max-w-2xl text-sm leading-[1.55] text-ink-soft">
                    {job.about}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {[job.team, job.location, job.type, job.experience].map((m) => (
                      <li
                        key={m}
                        className="rounded-full border border-line bg-bone px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mute"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between gap-3 md:col-span-4 md:justify-end">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline"
                  >
                    Read role →
                  </Link>
                  <JobApplyButton job={job} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-line bg-bone-deep/40">
          <div className="mx-auto grid w-full max-w-[1400px] gap-px overflow-hidden px-5 py-20 md:grid-cols-5 md:px-10">
            {TEAMS.map((t) => {
              const count = JOBS.filter((j) => j.team === t).length;
              return (
                <div key={t} className="bg-bone-deep/40 p-6 first:pl-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                    {t}
                  </span>
                  <span className="mt-2 block font-serif text-3xl tracking-tight">
                    {count} {count === 1 ? "role" : "roles"}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 rounded-3xl bg-ink p-10 text-bone md:grid-cols-2 md:gap-16 md:p-16">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
                A note from the founders
              </span>
              <h2 className="mt-4 font-serif text-[clamp(2rem,1rem+3vw,3.6rem)] leading-[0.98] tracking-[-0.02em]">
                Send us your work, not your CV.
              </h2>
            </div>
            <div className="flex flex-col gap-6 text-[15px] leading-[1.65] text-bone/80">
              <p>
                Show us the thing you shipped, the post you wrote, the deck you owned,
                the campaign you ran. We read every email.
              </p>
              <p>
                Send to{" "}
                <a
                  href={`mailto:${SITE.hrEmail}?subject=${encodeURIComponent(
                    "I'd like to work at Innaya",
                  )}`}
                  className="text-amber underline decoration-amber/40 underline-offset-4 hover:decoration-amber"
                >
                  {SITE.hrEmail}
                </a>{" "}
                with the role title in your subject line.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Why({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-bone p-7">
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
        {k}
      </span>
      <p className="mt-3 text-[15px] leading-[1.55] text-ink">{v}</p>
    </div>
  );
}
