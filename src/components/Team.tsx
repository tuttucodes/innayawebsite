"use client";

import { motion } from "motion/react";
import { SectionHead, SectionShell } from "./Section";
import { TEAM } from "@/data/site";

export default function Team() {
  return (
    <SectionShell id="team">
      <SectionHead
        index="05"
        eyebrow="Leadership"
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
            className="group relative flex flex-col justify-between rounded-2xl border border-line bg-bone-deep/40 p-7 transition-all hover:border-ink/30 hover:bg-bone-deep/70 md:p-9"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                <span>Executive · 0{i + 1}</span>
                <span>{m.focus}</span>
              </div>
              <div className="mt-6">
                <h3 className="font-sans text-2xl font-bold tracking-tight text-ink md:text-3xl">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-leaf-deep">{m.role}</p>
              </div>
              <p className="mt-4 text-[15px] leading-[1.65] text-ink-soft">{m.bio}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
