import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Img } from "@/components/ui/Img";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const rituals = [
  {
    n: "01",
    name: "The Velora Facial",
    desc: "Lymphatic sculpting, enzyme exfoliation and a mask blended for your skin on the day.",
    meta: "75 min · Facial",
    price: "£145",
    href: "/services#facials",
    image: { id: "1643684391140-c5056cfd3436", alt: "Therapist performing a sculpting facial massage" },
  },
  {
    n: "02",
    name: "Lived-in Balayage",
    desc: "Hand-painted, diffused colour designed to grow out softly for months, not weeks.",
    meta: "3 hrs · Colour",
    price: "from £280",
    href: "/services#hair",
    image: { id: "1580618672591-eb180b1a973f", alt: "Stylist smoothing freshly coloured hair with a round brush" },
  },
  {
    n: "03",
    name: "Editorial Makeup",
    desc: "Skin-first, camera-ready artistry for shoots, launches and once-in-a-lifetime evenings.",
    meta: "60 min · Makeup",
    price: "£110",
    href: "/services#makeup",
    image: { id: "1773688189414-7637b9b138e1", alt: "Makeup artist sweeping blush across a client's cheekbone" },
  },
];

export function SignatureRituals() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36" aria-labelledby="rituals-title">
      <div className="mb-16 grid gap-10 lg:mb-24 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          id="rituals-title"
          className="lg:col-span-7"
          eyebrow="Signature Rituals"
          title={[{ text: "Three treatments our clients" }, { text: "return for", className: "italic text-rose-deep" }, { text: "every season." }]}
        />
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.15}>
          <p className="text-[0.975rem] leading-relaxed text-cocoa">
            Every Velora appointment starts with a consultation and ends with time to sit, sip and settle. These are the
            rituals that define us — each one adjustable to your skin, hair and calendar.
          </p>
          <Button href="/services" variant="text" className="mt-6">
            View the full menu
          </Button>
        </Reveal>
      </div>

      <Stagger className="grid gap-12 md:grid-cols-3 md:gap-6 lg:gap-10" stagger={0.15}>
        {rituals.map((r, i) => (
          <StaggerItem key={r.n} className={cn(i === 1 && "md:mt-20")}>
            <Link href={r.href} className="group block" aria-label={`${r.name} — ${r.meta}, ${r.price}`}>
              <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                <Img
                  id={r.image.id}
                  alt={r.image.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 92vw"
                  className="transition-transform duration-[1600ms] ease-lux group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/0 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <span className="eyebrow absolute top-5 left-5 text-ivory mix-blend-difference">{r.n}</span>
                <span className="absolute bottom-6 left-6 flex translate-y-4 items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ivory opacity-0 transition-all duration-700 ease-lux group-hover:translate-y-0 group-hover:opacity-100">
                  Discover the ritual <ArrowRight className="size-3.5" aria-hidden />
                </span>
              </div>
              <div className="mt-7 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-[1.9rem] leading-none font-normal transition-colors duration-500 group-hover:text-rose-deep">
                  {r.name}
                </h3>
                <span className="shrink-0 text-sm font-semibold">{r.price}</span>
              </div>
              <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-cocoa">{r.desc}</p>
              <p className="eyebrow mt-5 text-rose-deep">{r.meta}</p>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
