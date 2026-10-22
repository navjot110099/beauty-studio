import { Img } from "@/components/ui/Img";
import { Parallax } from "@/components/motion/Parallax";
import { WordReveal } from "@/components/motion/WordReveal";
import { Reveal } from "@/components/motion/Reveal";

export function EditorialBreak() {
  return (
    <section className="relative" aria-label="Velora philosophy">
      <Parallax offset={90} className="h-[78vh] min-h-[32rem] bg-espresso lg:h-[92vh]">
        <Img
          id="1555820585-c5ae44394b79"
          alt="A woman with closed eyes photographed through softly fogged glass"
          fill
          sizes="100vw"
          className="object-[50%_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/25 to-espresso/10" />
      </Parallax>
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 lg:px-12 lg:pb-24">
          <Reveal variant="fade">
            <p className="eyebrow mb-6 text-champagne">The Velora Philosophy</p>
          </Reveal>
          <WordReveal
            as="p"
            segments={[
              { text: "We don’t chase trends." },
              { text: "We study faces.", className: "italic text-champagne" },
            ]}
            className="max-w-4xl font-display text-[2.8rem] leading-[1] font-light text-ivory sm:text-6xl lg:text-[5.6rem]"
          />
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-ivory/80">
              The most beautiful result is the one nobody can quite put their finger on — skin that looks rested, colour
              that looks inherited, makeup that looks like you.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
