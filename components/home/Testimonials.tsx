"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

const DURATION = 8000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;
  const go = useCallback((d: number) => setIndex((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => go(1), DURATION);
    return () => window.clearTimeout(t);
  }, [index, paused, go]);

  const t = testimonials[index];

  return (
    <section
      className="relative overflow-hidden bg-blush py-24 lg:py-36"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 font-display text-[22rem] leading-none text-rose/25 select-none sm:text-[30rem]"
      >
        &ldquo;
      </span>
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal variant="fade">
          <p className="eyebrow mb-12 text-rose-deep">Kind Words</p>
        </Reveal>
        <div className="grid min-h-[19rem] place-items-center sm:min-h-[16rem]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-display text-[1.75rem] leading-[1.2] font-light text-espresso sm:text-4xl lg:text-[2.75rem]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-10">
                <span className="font-display text-xl italic">{t.name}</span>
                <span className="mx-3 text-rose-deep" aria-hidden>
                  —
                </span>
                <span className="eyebrow text-cocoa">{t.detail}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="group grid size-12 place-items-center rounded-full border border-espresso/25 transition-colors duration-500 hover:bg-espresso hover:text-ivory"
          >
            <ArrowLeft className="size-4 transition-transform duration-500 group-hover:-translate-x-0.5" />
          </button>
          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index}
                className="relative h-px w-10 overflow-hidden bg-espresso/20 py-2 bg-clip-content"
              >
                {i === index && (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="absolute inset-x-0 top-1/2 h-px origin-left -translate-y-1/2 bg-espresso"
                    initial={{ scaleX: paused ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: paused ? 0 : DURATION / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="group grid size-12 place-items-center rounded-full border border-espresso/25 transition-colors duration-500 hover:bg-espresso hover:text-ivory"
          >
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
