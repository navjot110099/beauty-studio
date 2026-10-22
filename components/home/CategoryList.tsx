"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { Img } from "@/components/ui/Img";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { useMediaQuery } from "@/lib/hooks";

const rows = [
  {
    n: "01",
    title: "Facials",
    detail: "5 treatments",
    from: "from £70",
    href: "/services#facials",
    image: { id: "1570172619644-dfd03ed5d881", alt: "Client relaxing during a facial mask treatment" },
  },
  {
    n: "02",
    title: "Hair & Colour",
    detail: "6 services",
    from: "from £55",
    href: "/services#hair",
    image: { id: "1560869713-7d0a29430803", alt: "Stylist holding a curling tong beside a client" },
  },
  {
    n: "03",
    title: "Makeup",
    detail: "4 services",
    from: "from £95",
    href: "/services#makeup",
    image: { id: "1709477542149-f4e0e21d590b", alt: "Close-up of eyeshadow being applied with a brush" },
  },
  {
    n: "04",
    title: "Skin Treatments",
    detail: "5 treatments",
    from: "from £60",
    href: "/services#skin",
    image: { id: "1598440947619-2c35fc9aa908", alt: "Skincare bottles and a jade roller arranged on linen" },
  },
  {
    n: "05",
    title: "Packages",
    detail: "3 curated rituals",
    from: "from £295",
    href: "/services#packages",
    image: { id: "1589710751893-f9a6770ad71b", alt: "Lash artist applying extensions with fine tweezers" },
  },
];

export function CategoryList() {
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 140, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 140, damping: 20, mass: 0.4 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  return (
    <section className="bg-ivory-deep py-24 lg:py-36" aria-labelledby="menu-title">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="menu-title"
          eyebrow="The Menu at a Glance"
          title={[{ text: "Everything we do," }, { text: "done slowly.", className: "italic text-rose-deep" }]}
          intro="Five disciplines under one roof, each led by a specialist. Hover to preview, select to see every treatment, duration and price."
          className="mb-14 max-w-3xl lg:mb-20"
        />

        <div className="relative" onMouseMove={canHover ? onMove : undefined} onMouseLeave={() => setActive(null)}>
          <Stagger className="border-t border-espresso/15" stagger={0.08}>
            {rows.map((r, i) => (
              <StaggerItem key={r.n}>
                <Link
                  href={r.href}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="group relative flex items-center gap-4 border-b border-espresso/15 py-6 sm:gap-8 sm:py-8 lg:py-10"
                >
                  <span className="relative size-16 shrink-0 overflow-hidden rounded-full bg-sand sm:size-20 lg:hidden">
                    <Img id={r.image.id} alt="" fill sizes="80px" />
                  </span>
                  <span className="hidden w-14 shrink-0 text-xs font-semibold tracking-[0.2em] text-cocoa lg:block">{r.n}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[2rem] leading-none font-light transition-all duration-700 ease-lux group-hover:translate-x-3 group-hover:italic group-hover:text-rose-deep sm:text-5xl lg:text-[4.5rem]">
                      {r.title}
                    </span>
                    <span className="mt-2 block text-xs tracking-[0.12em] text-cocoa uppercase lg:hidden">
                      {r.detail} · {r.from}
                    </span>
                  </span>
                  <span className="hidden w-48 shrink-0 text-sm text-cocoa lg:block">{r.detail}</span>
                  <span className="hidden w-32 shrink-0 text-sm font-semibold lg:block">{r.from}</span>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-espresso/20 transition-all duration-500 ease-lux group-hover:rotate-45 group-hover:border-espresso group-hover:bg-espresso group-hover:text-ivory sm:size-14">
                    <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          {canHover && (
            <motion.div
              aria-hidden
              style={{ x: sx, y: sy }}
              className="pointer-events-none absolute top-0 left-0 z-10 hidden lg:block"
            >
              <motion.div
                animate={{ opacity: active === null ? 0 : 1, scale: active === null ? 0.8 : 1, rotate: active === null ? -4 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-44 -left-32 h-80 w-64 overflow-hidden rounded-t-full bg-sand shadow-2xl"
              >
                {rows.map((r, i) => (
                  <div
                    key={r.n}
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ opacity: active === i ? 1 : 0 }}
                  >
                    <Img id={r.image.id} alt="" fill sizes="256px" />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
