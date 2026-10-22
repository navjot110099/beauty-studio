import { Check } from "lucide-react";
import { packages } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { BookButton } from "./BookingContext";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <section id="packages" className="scroll-mt-32 bg-ivory-deep py-24 lg:py-32" aria-labelledby="packages-title">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          id="packages-title"
          align="center"
          eyebrow="Packages"
          title={[{ text: "Rituals," }, { text: "thoughtfully paired.", className: "italic text-rose-deep" }]}
          intro="Our most-requested combinations, priced to reward the time you give yourself. Every package can be gifted."
          className="mb-16 max-w-2xl lg:mb-20"
        />
        <Stagger className="grid gap-6 lg:grid-cols-3 lg:items-stretch" stagger={0.12}>
          {packages.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <article
                className={cn(
                  "group relative flex h-full flex-col p-8 transition-[transform,box-shadow] duration-700 ease-lux hover:-translate-y-2 sm:p-10",
                  p.featured
                    ? "bg-espresso text-ivory shadow-[0_40px_80px_-40px_rgba(42,29,22,0.7)]"
                    : "bg-ivory hover:shadow-[0_30px_60px_-35px_rgba(42,29,22,0.35)]",
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={cn(
                      "eyebrow rounded-full border px-3 py-1.5",
                      p.featured ? "border-champagne/50 text-champagne" : "border-rose-deep/40 text-rose-deep",
                    )}
                  >
                    {p.saving}
                  </span>
                  {p.featured && <span className="font-display text-lg italic text-champagne">Most gifted</span>}
                </div>
                <h3 className="mt-10 font-display text-[2.2rem] leading-none font-light">{p.name}</h3>
                <p className={cn("mt-4 text-sm leading-relaxed", p.featured ? "text-ivory/70" : "text-cocoa")}>
                  {p.description}
                </p>
                <p className="mt-8 flex items-baseline gap-3">
                  <span className="font-display text-5xl font-light">{p.price}</span>
                  <span className={cn("text-xs tracking-[0.1em] uppercase", p.featured ? "text-ivory/60" : "text-cocoa")}>
                    {p.duration}
                  </span>
                </p>
                <ul className={cn("mt-8 space-y-3 border-t pt-8 text-sm", p.featured ? "border-ivory/15" : "border-espresso/10")}>
                  {p.includes.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={cn("mt-0.5 size-4 shrink-0", p.featured ? "text-champagne" : "text-rose-deep")} aria-hidden />
                      {i}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <BookButton
                    service={p.name}
                    className={cn(
                      "w-full rounded-full px-6 py-4 text-[0.7rem] font-semibold tracking-[0.22em] uppercase transition-colors duration-500",
                      p.featured
                        ? "bg-champagne text-espresso hover:bg-ivory"
                        : "border border-espresso/30 hover:border-espresso hover:bg-espresso hover:text-ivory",
                    )}
                  />
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
