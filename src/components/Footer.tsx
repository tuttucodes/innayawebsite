import { SITE } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-bone">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-24 md:px-10 md:pt-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
              {SITE.legal}
            </span>
            <h2 className="mt-6 font-serif text-[clamp(3rem,1rem+7vw,7rem)] leading-[0.92] tracking-[-0.03em]">
              Nutrition,<br />
              <em className="text-amber">at scale.</em>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-[1.6] text-bone/70">
              An AI-first food technology company, headquartered in Kerala. Building the
              brands India will eat tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-6 md:grid-cols-3">
            <Col title="Sitemap">
              <a href="#about">Company</a>
              <a href="#ai">AI Layer</a>
              <a href="#brands">Brands</a>
              <a href="#products">Products</a>
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
            </Col>
            <Col title="Brands">
              <a href="https://www.pan8.in" target="_blank" rel="noopener noreferrer">
                pan8.in ↗
              </a>
            </Col>
            <Col title="Reach us">
              <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
              <a href={`mailto:${SITE.brandEmail}`}>{SITE.brandEmail}</a>
              <span className="text-bone/55">{SITE.hq}</span>
            </Col>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-bone/15 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55 md:flex-row md:items-center md:justify-between">
          <span>© {year} {SITE.legal}. All rights reserved.</span>
          <span>Made in India · Kakkanad, Kerala</span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none px-5 pb-6 md:px-10"
      >
        <span className="block font-serif text-[clamp(5rem,1rem+22vw,22rem)] leading-[0.85] tracking-[-0.04em] text-bone/[0.06]">
          INNAYA
        </span>
      </div>
    </footer>
  );
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
        {title}
      </span>
      <div className="mt-4 flex flex-col gap-2 text-[14px] text-bone/85 [&_a]:transition-colors [&_a:hover]:text-amber">
        {children}
      </div>
    </div>
  );
}
