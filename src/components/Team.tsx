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
  { k: "Sales & Marketing", v: "Outbound · Modern Trade · Retail Seeding" },
  { k: "Tech & Product", v: "pan8.in · E-commerce · FirstMile Network" },
  { k: "Design & Social", v: "Brand Systems · Packaging · Content" },
  { k: "Operations & Logistics", v: "Contract Processing · Cold-Chain · Dispatch" },
];

export default function Team({
  showSectionNumber = true,
  showOperatingTeam = true,
}: TeamProps) {
  return (
    <SectionShell id="team">
      <SectionHead
        index="05"
        showSectionNumber={showSectionNumber}
        eyebrow="Leadership & Governance"
        title={
          <>
            Executive{" "}
            <span className="font-serif italic font-normal text-leaf-deep">Leadership.</span>
          </>
        }
        blurb="Guiding software architecture, proprietary food formulation, and regional agricultural operations across South India."
      />

      <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
        {TEAM.map((m, i) => (
          <motion.article
            key={m.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex flex-col justify-between rounded-2xl border border-line bg-bone-deep/40 p-7 transition-all hover:border-ink/30 hover:bg-bone-deep/70 md:p-8"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                <span>Executive · 0{i + 1}</span>
                <span>{m.focus}</span>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5">
                <PortraitFrame name={m.name} />
                <div>
                  <h3 className="font-sans text-2xl font-bold tracking-tight text-ink">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-leaf-deep">{m.role}</p>
                </div>
              </div>

              <p className="mt-5 text-[15px] leading-[1.65] text-ink-soft">{m.bio}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Symmetric 4-Column Operating Team Row with Full-Width Header */}
      {showOperatingTeam && (
        <div className="mt-12 rounded-2xl border border-line bg-ink p-7 text-bone sm:p-10 md:p-12">
          <div className="border-b border-bone/15 pb-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber">
              Operating Infrastructure
            </span>
            <h3 className="mt-2 font-sans text-2xl font-bold tracking-tight text-bone sm:text-3xl">
              Cross-Functional Operations Team
            </h3>
            <p className="mt-2 text-sm text-bone/70 max-w-2xl">
              Multi-disciplinary operators spanning agronomy, food science, cloud engineering, and retail execution.
            </p>
          </div>

          <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {FUNCTIONS.map((f) => (
              <div
                key={f.k}
                className="rounded-xl border border-bone/15 bg-bone/[0.04] p-5 transition-colors hover:bg-bone/[0.08]"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber font-medium">
                  {f.k}
                </span>
                <p className="mt-2 text-[13px] leading-[1.55] text-bone/85">{f.v}</p>
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
      <div className="relative grid h-16 w-16 shrink-0 place-items-center rounded-xl border border-line bg-bone-deep text-ink font-serif text-lg font-normal">
        {initials}
      </div>
    );
  }

  return (
    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-line bg-bone-deep">
      <Image
        src={imgPath}
        alt={name}
        fill
        className="object-cover grayscale contrast-125"
        onError={() => setImgError(true)}
      />
      <div className="absolute inset-0 grid place-items-center bg-bone-deep text-ink font-serif text-lg font-normal">
        {initials}
      </div>
    </div>
  );
}
