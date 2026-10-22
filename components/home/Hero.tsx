"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";
import { useRef } from "react";
import { Img } from "@/components/ui/Img";
import { Button } from "@/components/ui/Button";
import { WordReveal } from "@/components/motion/WordReveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const circleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={ref} className="relative overflow-hidden" aria-labelledby="hero-title">
      {/* soft rose wash behind the composition */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[44rem] w-[44rem] rounded-full bg-blush/70 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-5 pt-8 pb-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pt-10 lg:pb-28">
        <div className="lg:col-span-6 lg:pr-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
            className="eyebrow mb-8 flex items-center gap-4 text-rose-deep"
          >
            <span className="h-px w-10 bg-current" aria-hidden />
            Marylebone, London · Est. 2014
          </motion.p>

          <WordReveal
            id="hero-title"
            as="h1"
            immediate
            delay={0.45}
            stagger={0.07}
            segments={[
              { text: "Beauty, refined to its most" },
              { text: "effortless", className: "italic text-rose-deep" },
              { text: "form." },
            ]}
            className="font-display text-[3.1rem] leading-[0.98] font-light tracking-[-0.02em] text-espresso min-[400px]:text-[3.5rem] sm:text-7xl lg:text-[5.4rem] xl:text-[6.2rem]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.05 }}
            className="mt-8 max-w-[30rem] text-[1.02rem] leading-relaxed text-cocoa"
          >
            Velora is a quiet studio for skin, hair and colour — where every treatment is tailored, unhurried and
            finished by hand by people who have spent their careers studying faces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
          >
            <Button href="/services#book">Book Appointment</Button>
            <Button href="/services" variant="text">
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="mt-14 flex items-center gap-5 border-t border-espresso/10 pt-6 text-sm text-cocoa"
          >
            <div className="flex -space-x-2" aria-hidden>
              {["1544005313-94ddf0286df2", "1582896911227-c966f6e7fb93", "1667053508464-eb11b394df83"].map((id) => (
                <span key={id} className="relative size-9 overflow-hidden rounded-full ring-2 ring-ivory">
                  <Img id={id} alt="" fill sizes="36px" />
                </span>
              ))}
            </div>
            <p>
              <span className="flex items-center gap-1 font-semibold text-espresso">
                4.9
                <Star className="size-3.5 fill-champagne text-champagne" aria-hidden />
                <span className="sr-only">out of 5</span>
              </span>
              from 2,300+ client reviews
            </p>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:col-span-6 lg:max-w-none lg:pl-10">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.6, ease, delay: 0.35 }}
            className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-sand lg:ml-auto lg:w-[88%]"
          >
            <motion.div
              className="absolute inset-[-6%_0]"
              style={{ y: reduce ? 0 : imageY }}
              initial={{ scale: 1.18 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.4, ease, delay: 0.35 }}
            >
              <Img
                id="1593351799227-75df2026356b"
                alt="Portrait of a woman with a pale flower tucked behind her ear, lit in warm studio light"
                fill
                preload
                sizes="(min-width: 1024px) 44vw, (min-width: 640px) 34rem, 92vw"
                className="object-[50%_30%]"
              />
            </motion.div>
          </motion.div>

          {/* secondary circular image */}
          <motion.div
            style={{ y: reduce ? 0 : circleY }}
            className="absolute -bottom-6 -left-2 w-[38%] sm:-left-8 lg:bottom-10 lg:left-0 lg:w-[34%]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, ease, delay: 1.25 }}
              className="relative aspect-square overflow-hidden rounded-full border-[6px] border-ivory bg-sand shadow-[0_30px_60px_-30px_rgba(42,29,22,0.45)] sm:border-8"
            >
              <Img
                id="1761718209835-c8586b7dcac0"
                alt="Therapist brushing a cream mask onto a client's skin"
                fill
                sizes="(min-width: 1024px) 15vw, 36vw"
              />
            </motion.div>
          </motion.div>

          {/* rotating booking seal */}
          <motion.div
            initial={{ opacity: 0, rotate: -40 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease, delay: 1.45 }}
            className="absolute top-6 right-0 sm:-right-4 lg:top-16 lg:-right-2"
          >
            <Link
              href="/services#book"
              aria-label="Book your ritual"
              className="group relative grid size-28 place-items-center rounded-full bg-espresso text-ivory transition-colors duration-500 hover:bg-rose-deep sm:size-32"
            >
              <svg viewBox="0 0 120 120" className="absolute inset-0 animate-spin-slow" aria-hidden>
                <defs>
                  <path id="seal-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <text className="fill-ivory text-[9.5px] font-semibold tracking-[0.32em] uppercase">
                  <textPath href="#seal-circle">Book your ritual · Velora Atelier ·</textPath>
                </text>
              </svg>
              <span className="font-display text-3xl italic transition-transform duration-700 ease-lux group-hover:rotate-[20deg]">
                V
              </span>
            </Link>
          </motion.div>

          {/* floating treatment card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 1.6 }}
            className="absolute right-3 -bottom-10 w-[58%] max-w-[15rem] bg-ivory/95 p-4 shadow-[0_24px_50px_-24px_rgba(42,29,22,0.35)] backdrop-blur sm:p-5 lg:right-6 lg:bottom-16"
          >
            <p className="eyebrow text-rose-deep">Now booking</p>
            <p className="mt-2 font-display text-xl leading-tight sm:text-2xl">The Velora Signature Facial</p>
            <p className="mt-2 flex items-center justify-between text-xs text-cocoa">
              <span>75 minutes</span>
              <span className="font-semibold text-espresso">£145</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
