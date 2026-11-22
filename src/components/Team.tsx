"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { SectionHead, SectionShell } from "./Section";
import { TEAM } from "@/data/site";

interface TeamProps {
  showSectionNumber?: boolean;
  showOperatingTeam?: boolean;
}

const FUNCTIONS = [
  { k: "Sales & Distribution", v: "Modern Trade · Quick-Commerce · Retail Seeding" },
  { k: "Food Technology", v: "Formulation R&D · Shelf Stability · Clean Label" },
  { k: "Brand & Packaging", v: "Identity Systems · Sustainable Packaging · D2C" },
  { k: "Supply & Logistics", v: "FPO Aggregation · Contract Units · Cold-Chain" },
];

export default function Team({
  showSectionNumber = true,
  showOperatingTeam = true,
}: TeamProps) {
  return (
    <SectionShell id="team">
      <SectionHead
        index="04"
        showSectionNumber={showSectionNumber}
        eyebrow="Leadership & Governance"
        title="Executive Leadership"
        blurb="Guided by technology, food science, and deep regional operating experience across Kerala and Tamil Nadu."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {TEAM.map((m, i) => (
          <motion.article
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group flex flex-col justify-between rounded-3xl border border-line/70 bg-bone/90 backdrop-blur-md p-7 sm:p-8 shadow-[0_16px_36px_-12px_rgba(26,22,20,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all hover:border-ink/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(26,22,20,0.1)]"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <PortraitFrame name={m.name} />
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ink">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-leaf-deep">{m.role}</p>
                  <p className="mt-1 text-xs font-mono uppercase tracking-[0.12em] text-mute">{m.focus}</p>
                </div>
              </div>

              <p className="mt-6 text-[15px] leading-[1.68] text-ink-soft">{m.bio}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Symmetric 4-Column Operating Team Row */}
      {showOperatingTeam && (
        <div className="mt-12 rounded-3xl border border-line/70 bg-bone-deep/50 backdrop-blur-md p-7 sm:p-10 shadow-[0_16px_32px_-12px_rgba(26,22,20,0.04),inset_0_1px_0_rgba(255,255,255,0.7)]">
          <div className="border-b border-line pb-6">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-mute">
              Operating Disciplines
            </span>
            <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-normal text-ink">
              Cross-Functional Operations
            </h3>
            <p className="mt-2 text-sm text-ink-soft max-w-2xl">
              Specialized operators spanning agronomy, food science, cloud engineering, and retail execution.
            </p>
          </div>

          <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {FUNCTIONS.map((f) => (
              <div
                key={f.k}
                className="rounded-2xl border border-line/70 bg-bone/90 p-5 shadow-xs transition-all hover:border-ink/30 hover:-translate-y-1"
              >
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-leaf-deep font-semibold">
                  {f.k}
                </span>
                <p className="mt-2 text-xs leading-[1.6] text-ink-soft">{f.v}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionShell>
  );
}

function PortraitFrame({ name }: { name: string }) {
  const [imgError, setImgError] = useState(false);
  const slug = name.toLowerCase().replace(/ /g, "-");
  const imgPath = `/images/team-${slug}.jpg`;

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (imgError) {
    return (
      <div className="relative grid h-24 w-24 shrink-0 place-items-center rounded-2xl border border-line bg-bone-deep text-ink font-serif text-2xl font-normal shadow-xs">
        {initials}
      </div>
    );
  }

  return (
    <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl border border-line bg-bone-deep shadow-xs">
      <Image
        src={imgPath}
        alt={name}
        fill
        sizes="112px"
        className="object-cover grayscale contrast-110"
        onError={() => setImgError(true)}
      />
    </div>
  );
}
