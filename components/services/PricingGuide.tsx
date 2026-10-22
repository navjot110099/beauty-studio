import { pricingTiers } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const notes = [
  { t: "Deposits", d: "A 50% deposit secures appointments over £100 and is taken off your final bill." },
  { t: "Cancellations", d: "Please give 48 hours' notice to move or cancel. Late changes forfeit the deposit." },
  { t: "Consultations", d: "Complimentary 15-minute consultations, in person or by video, for any new treatment." },
];

export function PricingGuide() {
  return (
    <section id="pricing" className="scroll-mt-32 py-24 lg:py-32" aria-labelledby="pricing-title">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className="min-w-0 lg:col-span-4">
          <SectionHeading
            id="pricing-title"
            eyebrow="Pricing"
            title={[{ text: "Clear prices," }, { text: "no surprises.", className: "italic text-rose-deep" }]}
            intro="Hair prices reflect the experience of your stylist. Skin, makeup and facial treatments are priced the same whoever you see. All prices include VAT."
          />
        </div>
        <div className="min-w-0 lg:col-span-7 lg:col-start-6">
          <Reveal>
            <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[34rem] border-collapse text-left">
                <caption className="sr-only">Hair service prices by stylist level</caption>
                <thead>
                  <tr className="border-b border-espresso">
                    <th scope="col" className="eyebrow py-4 pr-4 font-semibold text-cocoa">
                      Service
                    </th>
                    {pricingTiers.levels.map((l) => (
                      <th key={l} scope="col" className="eyebrow py-4 pl-4 text-right font-semibold text-cocoa">
                        {l}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.rows.map((r) => (
                    <tr key={r.service} className="group border-b border-espresso/10 transition-colors hover:bg-ivory-deep">
                      <th scope="row" className="py-5 pr-4 font-display text-xl font-normal">
                        {r.service}
                      </th>
                      {r.prices.map((p, i) => (
                        <td key={i} className="py-5 pl-4 text-right tabular-nums">
                          {p}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 grid gap-8 sm:grid-cols-3">
            {notes.map((n) => (
              <div key={n.t}>
                <p className="font-display text-xl italic text-rose-deep">{n.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-cocoa">{n.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
