import { Clock } from "lucide-react";
import { Img } from "@/components/ui/Img";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { WordReveal } from "@/components/motion/WordReveal";
import { BookButton } from "./BookingContext";
import type { ServiceCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ServiceCategorySection({ category, flip }: { category: ServiceCategory; flip?: boolean }) {
  const { id, index, title, kicker, intro, image, services } = category;
  return (
    <section
      id={id}
      className="scroll-mt-32 border-t border-espresso/10 py-20 lg:py-28"
      aria-labelledby={`${id}-title`}
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className={cn("lg:col-span-5", flip && "lg:order-2 lg:col-start-8")}>
          <div className="lg:sticky lg:top-40">
            <Reveal variant="fade">
              <p className="eyebrow mb-5 flex items-center gap-3 text-rose-deep">
                <span className="font-display text-lg tracking-normal italic normal-case">{index}</span>
                <span className="h-px w-6 bg-current" aria-hidden />
                {kicker}
              </p>
            </Reveal>
            <WordReveal
              id={`${id}-title`}
              segments={[{ text: title }]}
              className="font-display text-5xl leading-none font-light sm:text-6xl"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-cocoa">{intro}</p>
            </Reveal>
            <Reveal delay={0.15} variant="scale" className="mt-10 hidden lg:block">
              <Parallax offset={36} className="aspect-[4/5] max-w-[24rem] rounded-t-[12rem] bg-sand">
                <Img id={image.id} alt={image.alt} fill sizes="24rem" />
              </Parallax>
            </Reveal>
          </div>
        </div>

        <div className={cn("lg:col-span-7", flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-6")}>
          <Stagger as="ul" className="border-t border-espresso/15" stagger={0.08}>
            {services.map((s) => (
              <StaggerItem as="li" key={s.name} className="group relative isolate grid grid-cols-[1fr_auto] gap-x-6 gap-y-3 border-b border-espresso/15 py-7 transition-colors duration-500 sm:py-8"
              >
                  <span className="absolute inset-y-0 -inset-x-4 -z-10 bg-ivory-deep opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:-inset-x-6" aria-hidden />
                  <div className="min-w-0">
                    <h3 className="font-display text-[1.65rem] leading-tight font-normal transition-colors duration-500 group-hover:text-rose-deep sm:text-[1.9rem]">
                      {s.name}
                    </h3>
                    {s.note && (
                      <span className="mt-2 inline-block rounded-full border border-rose-deep/40 px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.18em] text-rose-deep uppercase">
                        {s.note}
                      </span>
                    )}
                  </div>
                  <p className="text-right font-display text-2xl whitespace-nowrap sm:text-[1.75rem]">{s.price}</p>
                  <p className="col-span-2 max-w-xl text-[0.93rem] leading-relaxed text-cocoa sm:col-span-1">
                    {s.description}
                  </p>
                  <div className="col-span-2 flex items-center justify-between gap-4 sm:col-span-1 sm:row-span-1 sm:flex-col sm:items-end sm:justify-start">
                    <span className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-cocoa uppercase">
                      <Clock className="size-3.5" aria-hidden />
                      {s.duration}
                    </span>
                    <BookButton
                      service={s.name}
                      className="rounded-full border border-espresso/30 px-5 py-2 text-[0.65rem] font-semibold tracking-[0.2em] uppercase transition-colors duration-500 hover:border-espresso hover:bg-espresso hover:text-ivory"
                    />
                  </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
