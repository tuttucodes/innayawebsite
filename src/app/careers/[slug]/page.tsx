import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JobApplyButton from "@/components/JobApplyButton";
import { JOBS } from "@/data/careers";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return JOBS.map((j) => ({ slug: j.slug }));
}

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) return {};
  return {
    title: `${job.title} — Careers at Innaya Nutri Foods`,
    description: job.about,
    alternates: { canonical: `${SITE.url}/careers/${job.slug}` },
    openGraph: {
      title: `${job.title} · Innaya Nutri Foods`,
      description: job.about,
      url: `${SITE.url}/careers/${job.slug}`,
      type: "article",
    },
  };
}

export default async function JobPage({ params }: Params) {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <header className="relative overflow-hidden border-b border-line bg-bone pb-16 pt-32 sm:pt-40">
          <div className="pointer-events-none absolute -right-20 -top-10 h-[420px] w-[420px] rounded-full bg-leaf/15 blur-3xl" />
          <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-10">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-mute hover:text-ink"
            >
              <span>← All roles</span>
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
              <span>{job.team}</span>
              <span className="text-line">·</span>
              <span>{job.location}</span>
              <span className="text-line">·</span>
              <span>{job.type}</span>
              <span className="text-line">·</span>
              <span>{job.experience}</span>
            </div>
            <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.4rem,1rem+5vw,5.6rem)] leading-[0.96] tracking-[-0.025em]">
              {job.title}
            </h1>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.65] text-ink-soft">
              {job.about}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <JobApplyButton job={job} />
              <span className="text-sm text-mute">
                Compensation · {job.compensation}
              </span>
            </div>
          </div>
        </header>

        <section className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-10 md:py-28">
          <div className="md:col-span-7">
            <Block title="What you&apos;ll do" items={job.responsibilities} />
            <Block title="What we&apos;re looking for" items={job.requirements} />
            {job.niceToHave && (
              <Block title="Nice to have" items={job.niceToHave} muted />
            )}
          </div>
          <aside className="md:col-span-5">
            <div className="sticky top-28 rounded-3xl border border-line bg-bone-deep/40 p-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                Apply
              </span>
              <p className="mt-3 text-[15px] leading-[1.6] text-ink-soft">
                Hit apply, and your email client will draft a message to our HR inbox
                with this role pre-filled. Attach your CV/portfolio.
              </p>
              <div className="mt-6">
                <JobApplyButton job={job} />
              </div>
              <hr className="my-6 border-line" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                Or email directly
              </span>
              <a
                href={`mailto:${SITE.hrEmail}?subject=${encodeURIComponent(
                  `Application — ${job.title}`,
                )}`}
                className="mt-2 block break-all font-serif text-xl tracking-tight text-ink hover:text-leaf-deep"
              >
                {SITE.hrEmail}
              </a>
              <hr className="my-6 border-line" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                Hiring team
              </span>
              <p className="mt-3 text-sm text-ink-soft">
                Founders read every email. First reply within 5 business days.
              </p>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Block({
  title,
  items,
  muted = false,
}: {
  title: string;
  items: string[];
  muted?: boolean;
}) {
  return (
    <section className="mb-12 border-t border-line pt-8">
      <h2 className="font-serif text-3xl tracking-tight">{title}</h2>
      <ul className="mt-6 space-y-3">
        {items.map((it, i) => (
          <li
            key={i}
            className={`relative pl-6 text-[16px] leading-[1.6] ${muted ? "text-ink-soft" : "text-ink"}`}
          >
            <span className="absolute left-0 top-3 h-1 w-2 rounded-full bg-leaf-deep" />
            {it}
          </li>
        ))}
      </ul>
    </section>
  );
}
