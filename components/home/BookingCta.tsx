import { Phone } from "lucide-react";
import { Img } from "@/components/ui/Img";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { WordReveal } from "@/components/motion/WordReveal";
import { site } from "@/lib/site";

export function BookingCta() {
  return (
    <section className="grid lg:grid-cols-2" aria-labelledby="book-cta-title">
      <Parallax offset={70} className="min-h-[24rem] bg-sand sm:min-h-[30rem] lg:min-h-[44rem]">
        <Img
          id="1552693673-1bf958298935"
          alt="Skin therapist applying a treatment to a relaxed client"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </Parallax>
      <div className="grain relative flex items-center bg-espresso-soft px-5 py-20 text-ivory sm:px-12 lg:px-20">
        <div className="relative max-w-lg">
          <Reveal variant="fade">
            <p className="eyebrow mb-6 text-champagne">Reservations</p>
          </Reveal>
          <WordReveal
            id="book-cta-title"
            segments={[{ text: "Reserve your" }, { text: "ritual.", className: "italic text-champagne" }]}
            className="font-display text-5xl leading-none font-light sm:text-6xl lg:text-7xl"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 text-[0.98rem] leading-relaxed text-ivory/75">
              New to Velora? Book a complimentary fifteen-minute consultation and we&rsquo;ll guide you to the right
              treatment and specialist. Appointments are available six days a week, including late evenings.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Button href="/services#book" variant="light">
              Book Appointment
            </Button>
            <a href={site.phoneHref} className="group inline-flex items-center gap-3 text-sm">
              <Phone className="size-4 text-champagne transition-transform duration-500 group-hover:-rotate-12" aria-hidden />
              <span className="link-underline pb-0.5">{site.phone}</span>
            </a>
          </Reveal>
          <Reveal delay={0.35} className="mt-14 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-ivory/15 pt-8 text-sm">
            {site.hours.map((h) => (
              <p key={h.d} className="flex justify-between gap-3 text-ivory/70">
                <span>{h.d}</span>
                <span className="tabular-nums text-ivory">{h.h}</span>
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
