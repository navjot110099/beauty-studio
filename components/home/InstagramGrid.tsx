import { Heart } from "lucide-react";
import { Img } from "@/components/ui/Img";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const posts = [
  { id: "1512496015851-a90fb38ba796", alt: "Neatly arranged foundations, palettes and lipsticks", likes: "2,184" },
  { id: "1774660810725-fb04e002003d", alt: "Stylist pinning a soft bridal up-do", likes: "3,902" },
  { id: "1567721913486-6585f069b332", alt: "Black skincare jars stacked on stone plinths", likes: "1,476" },
  { id: "1632345031435-8727f6897d53", alt: "Client receiving a manicure in the studio", likes: "1,958" },
  { id: "1529408570047-e4414fb17e95", alt: "Black and white portrait of a woman touching her shoulders", likes: "4,311" },
  { id: "1558227108-83a15ddbbb15", alt: "Soft-focus portrait of a woman in a buttercup top", likes: "2,730" },
];

export function InstagramGrid() {
  return (
    <section className="border-t border-espresso/10 py-24 lg:py-32" aria-labelledby="ig-title">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4 text-rose-deep">On Instagram</p>
            <h2 id="ig-title" className="font-display text-4xl font-light sm:text-5xl">
              @velora<span className="italic text-rose-deep">.atelier</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="link-underline pb-1 text-[0.75rem] font-semibold tracking-[0.22em] uppercase"
          >
            Follow the studio
          </a>
        </Reveal>
      </div>
      <Stagger className="grid grid-cols-3 gap-1 sm:gap-2 md:grid-cols-6" stagger={0.06}>
        {posts.map((p) => (
          <StaggerItem key={p.id} variant="fade">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden bg-sand"
              aria-label={`${p.alt} — view on Instagram`}
            >
              <Img
                id={p.id}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 17vw, 33vw"
                className="transition-transform duration-[1200ms] ease-lux group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center gap-2 bg-espresso/55 text-sm font-semibold text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Heart className="size-4 fill-ivory" aria-hidden /> {p.likes}
              </span>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
