import Link from "next/link";
import { SITE } from "@/data/site";
import Arrow from "./Arrow";
import Headline from "./Headline";

interface Route {
  num: string;
  who: string;
  what: string;
  href: string;
  cta: string;
}

const ROUTES: Route[] = [
  {
    num: "01",
    who: "Retail & distribution",
    what: "Stock PAN8 in modern trade, quick-commerce or export markets. Cartons, COA and pricing on request.",
    href: `mailto:${SITE.brandEmail}?subject=${encodeURIComponent("PAN8 distribution enquiry")}`,
    cta: "Write to sales",
  },
  {
    num: "02",
    who: "Sourcing & processing",
    what: "Buy graded millets and pulses, or contract batch capacity through our South Indian corridors.",
    href: "/contact?topic=Partnership",
    cta: "Talk to operations",
  },
  {
    num: "03",
    who: "Investors & institutions",
    what: "Unit economics, farmgate pilot data and the phased plan, shared under NDA.",
    href: "/contact?topic=Investment",
    cta: "Request a briefing",
  },
];

interface WorkWithUsProps {
  title?: string;
  accent?: string;
}

/** Closing band used across the site: three audiences, three direct routes. */
export default function WorkWithUs({
  title = "Bring us the harvest.",
  accent = "We'll bring the buyer.",
}: WorkWithUsProps) {
  return (
    <section className="bg-forest-deep text-paper">
      <div className="wrap py-24 md:py-36">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="kicker mb-7 text-paper/70">Work with Innaya</p>
            <Headline size="xl" tone="dark" accent={accent}>
              {title}
            </Headline>
          </div>
          <p className="max-w-[40ch] text-[16px] leading-[1.7] text-paper/65 md:col-span-4 md:self-end">
            The founders read every message. Expect a direct reply within two working days.
          </p>
        </div>

        <ul className="mt-16 grid gap-px md:mt-24 md:grid-cols-3">
          {ROUTES.map((r) => {
            const inner = (
              <>
                <span className="text-[13px] text-sand-soft">/{r.num}</span>
                <span className="mt-6 block text-[22px] font-normal tracking-[-0.025em]">{r.who}</span>
                <span className="mt-3 block max-w-[36ch] text-[15px] leading-[1.65] text-paper/60">
                  {r.what}
                </span>
                <span className="mt-8 inline-flex items-center gap-2 border-b border-paper/25 pb-1.5 text-[14px] font-medium transition-colors group-hover:border-paper">
                  {r.cta}
                  <Arrow
                    direction="up-right"
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </>
            );
            const cls = "group flex h-full flex-col items-start border-t border-paper/20 pt-6 pb-10 md:pr-10";
            return (
              <li key={r.who}>
                {r.href.startsWith("mailto:") ? (
                  <a href={r.href} className={cls}>
                    {inner}
                  </a>
                ) : (
                  <Link href={r.href} className={cls}>
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
