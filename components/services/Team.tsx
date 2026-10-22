import { team } from "@/lib/data";
import { Img } from "@/components/ui/Img";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function Team() {
  return (
    <section id="team" className="scroll-mt-32 border-t border-espresso/10 py-24 lg:py-32" aria-labelledby="team-title">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            id="team-title"
            className="lg:col-span-7"
            eyebrow="The Specialists"
            title={[{ text: "Hands you can" }, { text: "trust with your face.", className: "italic text-rose-deep" }]}
          />
          <p className="text-[0.95rem] leading-relaxed text-cocoa lg:col-span-4 lg:col-start-9">
            Fourteen specialists, each trained in one discipline. Meet the senior team who lead them — and request any of
            them by name when you book.
          </p>
        </div>
        <Stagger className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-x-8" stagger={0.1}>
          {team.map((m, i) => (
            <StaggerItem key={m.name} className={cn(i % 2 === 1 && "mt-10 lg:mt-16")}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-sand">
                  <Img
                    id={m.image.id}
                    alt={m.image.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 46vw"
                    className="[filter:sepia(0.25)_saturate(0.8)] transition-[transform,filter] duration-[1400ms] ease-lux group-hover:scale-105 group-hover:[filter:sepia(0)_saturate(1)]"
                  />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-espresso/85 p-4 text-ivory backdrop-blur-sm transition-transform duration-700 ease-lux group-hover:translate-y-0 max-lg:hidden">
                    <p className="eyebrow text-champagne">Specialism</p>
                    <p className="mt-1.5 text-sm">{m.focus}</p>
                  </div>
                </div>
                <h3 className="mt-5 font-display text-2xl leading-tight sm:text-[1.75rem]">{m.name}</h3>
                <p className="mt-1 text-[0.8rem] text-cocoa">{m.role}</p>
                <p className="eyebrow mt-3 text-rose-deep">{m.years}</p>
                <p className="mt-2 text-xs text-cocoa lg:hidden">{m.focus}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
