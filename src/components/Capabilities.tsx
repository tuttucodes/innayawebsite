"use client";

import { motion } from "motion/react";
import { SectionHead, SectionShell } from "./Section";

const STAGES = [
  {
    id: "01",
    title: "Sourcing",
    body: "Direct lines into mandis, FPOs and smallholder farmers. AI signals price elasticity, quality cohorts, and harvest-cycle timing across Indian millet belts.",
    points: ["Mandi price intelligence", "Quality scoring", "Counter-party risk"],
  },
  {
    id: "02",
    title: "Formulation",
    body: "Recipe-and-nutrition models that hold protein, fibre, glycaemic and palate targets simultaneously — re-engineering Indian formats with millet and pulses.",
    points: ["Plant-protein engines", "Sensory mapping", "Cost-of-pack modelling"],
  },
  {
    id: "03",
    title: "Manufacturing",
    body: "FSSAI-licensed contract manufacturing partners. Automated production planning against forecast, with QC sampling and traceability built in.",
    points: ["FSSAI-compliant plants", "Production planning", "Batch traceability"],
  },
  {
    id: "04",
    title: "Brand & Packaging",
    body: "In-house design and content. Packaging engineered for kirana shelves, modern trade, and quick-commerce thumbnails. Brand systems that stay consistent at scale.",
    points: ["Pack design", "Content engine", "Photography pipeline"],
  },
  {
    id: "05",
    title: "Distribution",
    body: "Routing intelligence across D2C, modern trade, e-commerce and quick-commerce. Each SKU goes to the right lane in the right pin-code at the right time.",
    points: ["Channel routing", "Marketplace ops", "Quick-commerce"],
  },
  {
    id: "06",
    title: "Demand & Insights",
    body: "Time-series demand forecasting, retention curves, and cohort intelligence feeding back into procurement and production runs. Closed loop, not a dashboard.",
    points: ["Forecasting", "Cohort intel", "Closed-loop ops"],
  },
];

export default function Capabilities() {
  return (
    <SectionShell id="capabilities">
      <SectionHead
        index="02"
        eyebrow="What we do"
        title={
          <>
            End-to-end FMCG.<br />
            <span className="italic text-leaf-deep">Powered by AI.</span>
          </>
        }
        blurb="Innaya is a parent food-tech company. We don't just ship a brand — we run the full FMCG stack from sourcing to distribution, with AI threaded through every layer. Brands that sit on top inherit the entire operating system."
      />

      <ol className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:mt-28 md:grid-cols-2 lg:grid-cols-3">
        {STAGES.map((s, i) => (
          <motion.li
            key={s.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: (i % 3) * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex flex-col gap-6 bg-bone p-8 transition-colors hover:bg-bone-deep/60"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                {s.id} · stage
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-full border border-line text-mute transition-all group-hover:border-leaf-deep group-hover:bg-leaf-deep group-hover:text-bone">
                →
              </span>
            </div>
            <h3 className="font-serif text-3xl tracking-tight">{s.title}</h3>
            <p className="text-sm leading-[1.6] text-ink-soft">{s.body}</p>
            <ul className="mt-auto flex flex-wrap gap-2">
              {s.points.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-line bg-bone px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mute"
                >
                  {p}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>

      <div className="mt-12 grid gap-4 rounded-3xl border border-line bg-bone-deep/40 p-8 md:grid-cols-3 md:p-12">
        <div className="md:col-span-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
            Operating model
          </span>
          <h3 className="mt-3 font-serif text-[clamp(1.6rem,1rem+1.6vw,2.4rem)] leading-[1.1] tracking-tight">
            We treat FMCG as a system, not a series of departments.
          </h3>
        </div>
        <p className="text-[15px] leading-[1.65] text-ink-soft md:col-span-1">
          Every brand that comes out of Innaya inherits the full sourcing, formulation,
          manufacturing, brand, and distribution stack. New products go from idea to
          first commercial batch in a fraction of the typical FMCG timeline.
        </p>
      </div>
    </SectionShell>
  );
}
