"use client";

import { motion } from "motion/react";
import { SectionHead, SectionShell } from "./Section";
import { TAILWINDS } from "@/data/site";

export default function About() {
  return (
    <SectionShell id="about">
      <SectionHead
        index="01"
        eyebrow="The company"
        title={
          <>
            We build food, the way<br />
            <span className="italic text-leaf-deep">software gets built.</span>
          </>
        }
        blurb="Innaya Nutri Foods Pvt Ltd — INFPL — is a Kerala-headquartered food technology company. We treat formulation, sourcing, and distribution as engineering problems, and ship millet-first plant-protein nutrition under our consumer brand PAN8."
      />

      <div className="mt-20 grid gap-x-10 gap-y-16 md:mt-28 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="font-serif text-[clamp(1.4rem,0.8rem+1.6vw,2rem)] leading-[1.3] tracking-[-0.01em] text-ink">
            India eats <em className="text-leaf-deep not-italic">5,000-year-old grains</em>{" "}
            in <em className="text-leaf-deep not-italic">21st-century formats</em>. Pancakes,
            dosas, upma, bars — but engineered with millet, pulses, and modern
            nutrition science instead of refined wheat and sugar.
          </p>
          <p className="mt-8 max-w-xl text-[15px] leading-[1.65] text-ink-soft">
            We sit at the intersection of three real tailwinds: India&apos;s millet
            revival, plant-protein consumption compounding 25–30% YoY, and the fastest
            growing FMCG segment — convenient breakfast and on-the-go nutrition. We
            don&apos;t ask households to change behaviour. We meet them in the formats
            they already eat.
          </p>
        </div>

        <div className="grid gap-3 md:col-span-5 md:gap-4">
          {TAILWINDS.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-bone-deep/40 p-6 transition-all hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)]"
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                <span>{t.eyebrow}</span>
                <span>↗</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl tracking-tight">{t.title}</h3>
              <p className="mt-2 text-sm leading-[1.55] text-ink-soft">{t.body}</p>
              <span className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent transition-opacity duration-500 group-hover:via-leaf/40" />
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
