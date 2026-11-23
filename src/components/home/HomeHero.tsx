"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import ButtonLink from "../ui/ButtonLink";
import Headline from "../ui/Headline";

const PILLARS = ["Assured offtake for farmers", "Clean food Indians already eat", "Software where friction costs money"];

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-forest-night text-paper"
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: imageY, scale: imageScale }}
      >
        <Image
          src="/innaya-sourcing.jpg"
          alt="Hand-thrown bowls of finger millet and foxtail millet on a stone slab"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,oklch(20%_0.035_168/0.35)_0%,oklch(20%_0.035_168/0.82)_55%,oklch(20%_0.035_168/0.95)_100%)] md:bg-[linear-gradient(90deg,oklch(20%_0.035_168/0.92)_0%,oklch(20%_0.035_168/0.72)_42%,oklch(20%_0.035_168/0.15)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-night/80 to-transparent"
      />

      <motion.div
        style={reduce ? undefined : { opacity: contentOpacity }}
        className="wrap relative flex flex-1 flex-col justify-end pb-10 pt-32 md:pb-14"
      >
        <div className="max-w-[60rem]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="kicker text-paper/75"
          >
            Farmgate to pantry · South India
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <Headline as="h1" size="display" tone="dark" accent="We build the buyer.">
              India grows the food.
            </Headline>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid gap-8 md:grid-cols-[minmax(0,30rem)_auto] md:items-end md:gap-14"
          >
            <p className="text-[17px] leading-[1.7] text-paper/75">
              Innaya Nutri Foods buys directly from farmer collectives in Kerala and Tamil Nadu,
              turns heritage millets and pulses into everyday food under our brand PAN8, and
              builds the software that keeps the chain honest.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/thesis" variant="inverse">
                Read our thesis
              </ButtonLink>
              <ButtonLink href="/brands/pan8" variant="ghostDark">
                Meet PAN8
              </ButtonLink>
            </div>
          </motion.div>
        </div>

        <ul className="mt-16 hidden gap-10 border-t border-paper/20 pt-6 text-[13px] text-paper/65 md:mt-24 md:flex">
          {PILLARS.map((p) => (
            <li key={p} className="flex items-center gap-2.5">
              <span aria-hidden="true" className="text-sand-soft">
                +
              </span>
              {p}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
