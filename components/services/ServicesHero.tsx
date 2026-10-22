"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Img } from "@/components/ui/Img";
import { Button } from "@/components/ui/Button";
import { WordReveal } from "@/components/motion/WordReveal";

const ease = [0.22, 1, 0.36, 1] as const;

const facts = [
  { k: "20", v: "Treatments" },
  { k: "4", v: "Disciplines" },
  { k: "15′", v: "Free consultation" },
];

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="services-title">
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -left-40 h-[36rem] w-[36rem] rounded-full bg-blush/60 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 pt-6 pb-20 sm:px-8 lg:grid-cols-12 lg:items-end lg:gap-8 lg:px-12 lg:pt-10 lg:pb-24">
        <div className="lg:col-span-7">
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 flex items-center gap-2 text-xs text-cocoa"
          >
            <Link href="/" className="link-underline pb-0.5">
              Home
            </Link>
            <ChevronRight className="size-3" aria-hidden />
            <span aria-current="page" className="text-espresso">
              Services
            </span>
          </motion.nav>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
            className="eyebrow mb-7 flex items-center gap-4 text-rose-deep"
          >
            <span className="h-px w-10 bg-current" aria-hidden />
            The Treatment Menu · Autumn 2026
          </motion.p>
          <WordReveal
            id="services-title"
            as="h1"
            immediate
            delay={0.45}
            stagger={0.08}
            segments={[{ text: "Treatments," }, { text: "considered.", className: "italic text-rose-deep" }]}
            className="font-display text-[3.4rem] leading-[0.95] font-light tracking-[-0.02em] sm:text-7xl lg:text-[6.5rem]"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.95 }}
            className="mt-8 max-w-xl text-[1.02rem] leading-relaxed text-cocoa"
          >
            Facials, hair, makeup and advanced skin — each delivered by a specialist who does nothing else. Every
            appointment includes a consultation, time to settle in, and honest advice on what you actually need.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
          >
            <Button href="#book">Request an Appointment</Button>
            <Button href="#packages" variant="text">
              See packages
            </Button>
          </motion.div>
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.35 }}
            className="mt-14 grid max-w-lg grid-cols-3 border-t border-espresso/10 pt-6"
          >
            {facts.map((f) => (
              <div key={f.v}>
                <dt className="sr-only">{f.v}</dt>
                <dd className="font-display text-4xl font-light">{f.k}</dd>
                <dd className="mt-1 text-xs tracking-[0.08em] text-cocoa" aria-hidden>
                  {f.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative lg:col-span-4 lg:col-start-9">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.5, ease, delay: 0.35 }}
            className="relative mx-auto aspect-[3/4] max-w-[26rem] overflow-hidden rounded-t-full bg-sand"
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.2, ease, delay: 0.35 }}
            >
              <Img
                id="1761718210089-ba3bb5ccb54f"
                alt="Client receiving a calming facial treatment with eyes closed"
                fill
                preload
                sizes="(min-width: 1024px) 30vw, 26rem"
              />
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-5 text-center font-display text-lg text-cocoa italic"
          >
            The treatment suite, second floor
          </motion.p>
        </div>
      </div>
    </section>
  );
}
