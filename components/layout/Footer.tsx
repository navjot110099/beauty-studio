import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NewsletterForm } from "./NewsletterForm";
import { LegalLinks } from "./LegalLinks";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="relative overflow-hidden bg-espresso text-ivory">
      <div className="mx-auto max-w-[1440px] px-5 pt-20 sm:px-8 lg:px-12 lg:pt-28">
        <Reveal className="flex flex-col items-start justify-between gap-10 border-b border-ivory/12 pb-16 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl font-display text-[2.6rem] leading-[1.02] font-light sm:text-6xl">
            Make time for yourself. <em className="text-champagne">We&rsquo;ll take care</em> of the rest.
          </h2>
          <Button href="/services#book" variant="light">
            Book Appointment
          </Button>
        </Reveal>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-12">
            <p className="eyebrow mb-5 text-champagne">The Velora Letter</p>
            <NewsletterForm />
          </div>

          <div className="lg:col-span-3 lg:col-start-5">
            <p className="eyebrow mb-5 text-champagne">Visit</p>
            <address className="space-y-1 text-[0.95rem] not-italic text-ivory/80">
              {site.address.map((a) => (
                <p key={a}>{a}</p>
              ))}
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Marylebone+High+Street+London"
              target="_blank"
              rel="noreferrer"
              className="group mt-4 inline-flex items-center gap-2 text-sm text-ivory/80 hover:text-ivory"
            >
              <span className="link-underline pb-0.5">Get directions</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
            <div className="mt-6 space-y-1 text-[0.95rem] text-ivory/80">
              <a href={site.phoneHref} className="link-underline block w-fit pb-0.5">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="link-underline block w-fit pb-0.5">
                {site.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-8">
            <p className="eyebrow mb-5 text-champagne">Hours</p>
            <dl className="space-y-2 text-[0.95rem]">
              {site.hours.map((h) => (
                <div key={h.d} className="flex justify-between gap-6 text-ivory/80">
                  <dt>{h.d}</dt>
                  <dd className="tabular-nums">{h.h}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-3 lg:col-start-10 lg:pl-6">
            <nav aria-label="Footer">
              <p className="eyebrow mb-5 text-champagne">Explore</p>
              <ul className="space-y-2 text-[0.95rem] text-ivory/80">
                {[{ label: "Home", href: "/" }, ...site.nav].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link-underline pb-0.5 hover:text-ivory">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="eyebrow mb-5 text-champagne">Follow</p>
              <ul className="space-y-2 text-[0.95rem] text-ivory/80">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" className="link-underline pb-0.5 hover:text-ivory">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-[0.22em] text-center font-display text-[27vw] leading-[0.8] font-light italic tracking-[-0.03em] text-ivory/[0.06]">
          Velora
        </p>
      </div>

      <div className="relative border-t border-ivory/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-6 text-xs text-ivory/55 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>
            © {year} Velora Beauty Ltd. Registered in England &amp; Wales. Prices include VAT.
          </p>
          <LegalLinks />
        </div>
      </div>
    </footer>
  );
}
