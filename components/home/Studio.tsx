import { Img } from "@/components/ui/Img";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";

const stats = [
  { to: 12, suffix: "", label: "Years on Marylebone High Street" },
  { to: 18400, suffix: "+", label: "Appointments in the last year" },
  { to: 14, suffix: "", label: "Specialists, each with a single focus" },
  { to: 4.9, suffix: "", decimals: 1, label: "Average rating across 2,300 reviews" },
];

export function Studio() {
  return (
    <section id="studio" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-40" aria-labelledby="studio-title">
      <div className="grid gap-20 lg:grid-cols-12 lg:gap-8">
        <Reveal variant="left" className="relative pb-16 lg:col-span-6 lg:pb-0">
          <Parallax offset={50} className="aspect-[4/5] w-[82%] bg-sand">
            <Img
              id="1633681926019-03bd9325ec20"
              alt="Velora's bright styling floor with round mirrors, pendant lights and fresh flowers"
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
            />
          </Parallax>
          <div className="absolute right-0 bottom-0 aspect-square w-[48%] overflow-hidden border-[10px] border-ivory bg-sand lg:-bottom-12">
            <Img
              id="1521590832167-7bcbfaa6381f"
              alt="Rose velvet styling chairs facing a long mirrored counter"
              fill
              sizes="(min-width: 1024px) 24vw, 46vw"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8 lg:pt-10">
          <SectionHeading
          id="studio-title"
            eyebrow="The Studio"
            title={[
              { text: "A sanctuary built around the" },
              { text: "slow art", className: "italic text-rose-deep" },
              { text: "of care." },
            ]}
          />
          <Reveal delay={0.1} className="mt-8 space-y-5 text-[0.98rem] leading-relaxed text-cocoa">
            <p>
              Velora began as two chairs and a treatment bed above a florist. Twelve years later we occupy the whole
              Georgian townhouse — but the principle hasn&rsquo;t changed: fewer clients a day, more time with each one.
            </p>
            <p>
              Our specialists don&rsquo;t rotate between disciplines. Colourists colour, therapists treat skin, artists
              make up faces. It is a small decision that makes an enormous difference in the chair.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex items-center gap-5">
            <span className="relative size-14 overflow-hidden rounded-full bg-sand">
              <Img id="1544005313-94ddf0286df2" alt="Amélie Laurent" fill sizes="56px" />
            </span>
            <div>
              <p className="font-display text-2xl italic">Amélie Laurent</p>
              <p className="eyebrow mt-1 text-cocoa">Founder & Creative Director</p>
            </div>
          </Reveal>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-espresso/10 pt-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.08 * i}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <Counter
                    to={s.to}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                    className="font-display text-5xl leading-none font-light text-espresso lg:text-6xl"
                  />
                  <p className="mt-3 max-w-[12rem] text-[0.8rem] leading-snug text-cocoa" aria-hidden>
                    {s.label}
                  </p>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
