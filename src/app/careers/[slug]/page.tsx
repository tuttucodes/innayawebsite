import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JobApplyButton from "@/components/JobApplyButton";
import PageHeader from "@/components/ui/PageHeader";
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
    title: `${job.title} · Careers`,
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
      <main id="main" className="overflow-x-clip">
        <PageHeader
          crumbs={[{ label: "Careers", href: "/careers" }, { label: job.title }]}
          kicker={`${job.team} · ${job.location}`}
          title={job.title}
          lede={job.about}
          actions={<JobApplyButton job={job} />}
          facts={[
            { value: job.type, label: "Employment" },
            { value: job.experience, label: "Experience" },
            { value: job.location.split(",")[0], label: "Based in" },
            { value: job.compensation.split("·")[0].trim(), label: "Compensation" },
          ]}
        />

        <section className="wrap grid gap-12 py-20 md:grid-cols-12 md:gap-16 md:py-28">
          <div className="md:col-span-7">
            <Block title="What you'll do" items={job.responsibilities} />
            <Block title="What we're looking for" items={job.requirements} />
            {job.niceToHave && (
              <Block title="Nice to have" items={job.niceToHave} muted />
            )}
          </div>
          <aside className="md:col-span-5">
            <div className="sticky top-28 rounded-[6px] bg-paper-deep p-8">
              <span className="text-[13px] text-mute">
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
              <span className="text-[13px] text-mute">
                Or email directly
              </span>
              <a
                href={`mailto:${SITE.hrEmail}?subject=${encodeURIComponent(
                  `Application — ${job.title}`,
                )}`}
                className="mt-2 block break-all text-[18px] tracking-[-0.015em] text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink"
              >
                {SITE.hrEmail}
              </a>
              <hr className="my-6 border-line" />
              <span className="text-[13px] text-mute">
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
      <h2 className="text-[26px] font-normal tracking-[-0.03em] text-ink">{title}</h2>
      <ul className="mt-6 space-y-3">
        {items.map((it, i) => (
          <li
            key={i}
            className={`relative pl-6 text-[16px] leading-[1.6] ${muted ? "text-ink-soft" : "text-ink"}`}
          >
            <span aria-hidden="true" className="absolute left-0 top-[0.05em] text-sand">+</span>
            {it}
          </li>
        ))}
      </ul>
    </section>
  );
}
