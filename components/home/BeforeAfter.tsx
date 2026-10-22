"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Img } from "@/components/ui/Img";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const steps = [
  { n: "01", t: "Skin analysis", d: "Daylight assessment and photography to map pigmentation, texture and barrier health." },
  { n: "02", t: "Three peels, three LED sessions", d: "Alternating fortnightly so skin renews without ever feeling stripped." },
  { n: "03", t: "Home prescription", d: "A pared-back routine of four products, adjusted at every visit." },
];

function CompareSlider() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  // A single gentle sweep the first time it is seen, hinting that it can be dragged.
  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(50, [50, 26, 70, 50], {
      duration: 2.6,
      ease: "easeInOut",
      delay: 0.4,
      onUpdate: (v) => setPos(v),
    });
    return () => controls.stop();
  }, [inView, reduce]);

  return (
    <div ref={ref} className="relative aspect-[4/5] w-full touch-pan-y overflow-hidden bg-sand select-none">
      <Img
        id="1551184451-76b762941ad6"
        alt="After: even, luminous skin following twelve weeks of treatment"
        fill
        sizes="(min-width: 1024px) 42vw, 92vw"
        className="object-[50%_30%]"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Img
          id="1551184451-76b762941ad6"
          alt="Before: dull, uneven skin tone at the first consultation"
          fill
          sizes="(min-width: 1024px) 42vw, 92vw"
          className="object-[50%_30%] [filter:saturate(0.62)_contrast(0.88)_brightness(0.9)_sepia(0.18)]"
        />
      </div>

      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare skin before and after the Clarity Programme"
        aria-valuetext={`${Math.round(pos)}% before`}
        className="peer absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />

      <div className="pointer-events-none absolute inset-y-0 z-10 w-px bg-ivory" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ivory/70 bg-ivory/20 text-ivory backdrop-blur-md">
          <MoveHorizontal className="size-5" aria-hidden />
        </span>
      </div>
      <span className="pointer-events-none absolute inset-0 z-10 ring-2 ring-rose-deep ring-inset opacity-0 transition-opacity peer-focus-visible:opacity-100" />

      <span className="eyebrow pointer-events-none absolute top-5 left-5 z-10 bg-espresso/70 px-3 py-2 text-ivory backdrop-blur-sm">
        Before
      </span>
      <span className="eyebrow pointer-events-none absolute top-5 right-5 z-10 bg-ivory/80 px-3 py-2 text-espresso backdrop-blur-sm">
        After · Week 12
      </span>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="results" className="bg-ivory-deep py-24 lg:py-36" aria-labelledby="results-title">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-12">
        <div className="lg:col-span-5">
          <SectionHeading
          id="results-title"
            eyebrow="Results"
            title={[{ text: "Visible change," }, { text: "honestly earned.", className: "italic text-rose-deep" }]}
            intro="The Clarity Programme is our twelve-week course for pigmentation, congestion and uneven tone. No filters, no retouching — just consistent, carefully paced treatment."
          />
          <Stagger className="mt-12 space-y-7" stagger={0.1}>
            {steps.map((s) => (
              <StaggerItem key={s.n} className="flex gap-6 border-t border-espresso/10 pt-6">
                <span className="font-display text-2xl text-rose-deep italic">{s.n}</span>
                <div>
                  <h3 className="text-[0.95rem] font-semibold">{s.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cocoa">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="/services#packages" variant="outline">
              The Clarity Programme
            </Button>
            <p className="max-w-[16rem] text-xs leading-relaxed text-cocoa">
              Results shown are representative. Individual results vary with skin type and adherence to home care.
            </p>
          </Reveal>
        </div>
        <Reveal variant="scale" className="lg:col-span-6 lg:col-start-7" duration={1.2}>
          <CompareSlider />
        </Reveal>
      </div>
    </section>
  );
}
