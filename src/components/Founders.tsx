import Image from "next/image";
import { TEAM } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionIntro from "./ui/SectionIntro";

interface FoundersProps {
  showIntro?: boolean;
}

function portraitFor(name: string): string {
  return `/images/team-${name.toLowerCase().replace(/\s+/g, "-")}.jpg`;
}

/** Founder portraits with role and remit. Used on Home and About. */
export default function Founders({ showIntro = true }: FoundersProps) {
  return (
    <section className="wrap py-24 md:py-36">
      {showIntro && (
        <SectionIntro
          kicker="Leadership"
          title="Built by operators."
          accent="Not by spreadsheets."
          body="An engineer and a product designer from Kerala, running sourcing, manufacturing and software from the same desk."
        />
      )}
      <ul className="mt-16 grid gap-14 sm:grid-cols-2 md:mt-24 md:gap-8">
        {TEAM.map((m, i) => (
          <Reveal as="li" key={m.name} delay={i * 0.1} className={i === 1 ? "md:mt-24" : undefined}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-paper-deep md:max-w-[520px]">
              <Image
                src={portraitFor(m.name)}
                alt={`Portrait of ${m.name}`}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover grayscale"
              />
            </div>
            <div className="mt-6 md:max-w-[520px]">
              <h3 className="text-[24px] font-normal tracking-[-0.03em] text-ink">{m.name}</h3>
              <p className="mt-1 text-[14px] text-forest">{m.role}</p>
              <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.65] text-ink-soft">{m.bio}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
