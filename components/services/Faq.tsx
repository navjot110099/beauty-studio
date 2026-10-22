"use client";

import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { faqs } from "@/lib/data";
import { site } from "@/lib/site";

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      className={`relative grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-lux ${
        open ? "rotate-45 border-espresso bg-espresso text-ivory" : "border-espresso/25"
      }`}
      aria-hidden
    >
      <span className="absolute h-px w-3.5 bg-current" />
      <span className="absolute h-3.5 w-px bg-current" />
    </span>
  );
}

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-32 bg-ivory-deep py-24 lg:py-32" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-40">
            <SectionHeading
              id="faq-title"
              eyebrow="Questions"
              title={[{ text: "Before you" }, { text: "visit.", className: "italic text-rose-deep" }]}
              intro="Everything you might want to know about booking, preparing and policies. Anything else, our front desk is happy to help."
            />
            <Reveal delay={0.2} className="mt-8 space-y-1 text-sm">
              <a href={site.phoneHref} className="link-underline block w-fit pb-0.5 font-semibold">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="link-underline block w-fit pb-0.5 text-cocoa">
                {site.email}
              </a>
            </Reveal>
          </div>
        </div>
        <Reveal className="lg:col-span-7 lg:col-start-6">
          <Accordion
            items={faqs}
            className="border-t border-espresso/15"
            itemClassName="border-b border-espresso/15"
            questionClassName="py-6 font-display text-[1.45rem] leading-snug sm:text-[1.7rem] hover:text-rose-deep transition-colors duration-300"
            answerClassName="max-w-2xl pb-7 pr-14 text-[0.95rem] leading-relaxed text-cocoa"
            icon={(open) => <PlusIcon open={open} />}
          />
        </Reveal>
      </div>
    </section>
  );
}
