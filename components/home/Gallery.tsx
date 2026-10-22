import { Img } from "@/components/ui/Img";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const shots = [
  {
    id: "1594465919760-441fe5908ab0",
    alt: "Model with luminous skin, a soft red lip and gold hoop earrings",
    caption: "Evening Glamour",
    cls: "col-span-2 row-span-2 lg:col-span-5 lg:row-span-2",
  },
  {
    id: "1629397685944-7073f5589754",
    alt: "Stylist shaping loose curls with a curling iron",
    caption: "Occasion Hair",
    cls: "lg:col-span-4",
  },
  {
    id: "1695990190064-e8ca2ca16af6",
    alt: "Freckled woman resting her face in her hands, skin glowing",
    caption: "Calm Barrier Facial",
    cls: "row-span-2 lg:col-span-3 lg:row-span-2",
  },
  {
    id: "1612817288484-6f916006741a",
    alt: "Amber serum bottles arranged with smooth river stones and evergreen",
    caption: "Velora Treatment Blends",
    cls: "lg:col-span-4",
  },
  {
    id: "1616394584738-fc6e612e71b9",
    alt: "Client resting on a towel with a hydrating cream mask applied",
    caption: "Hydra Glow Infusion",
    cls: "col-span-2 lg:col-span-7",
  },
  {
    id: "1596462502278-27bfdc403348",
    alt: "Blush-pink makeup brushes fanned out on a pale surface",
    caption: "The Makeup Bar",
    cls: "col-span-2 lg:col-span-5",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36" aria-labelledby="gallery-title">
      <SectionHeading
          id="gallery-title"
        eyebrow="Gallery"
        title={[{ text: "Inside the" }, { text: "atelier.", className: "italic text-rose-deep" }]}
        className="mb-14 lg:mb-20"
      />
      <Stagger className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-12 lg:auto-rows-[250px] lg:gap-5" stagger={0.09}>
        {shots.map((s) => (
          <StaggerItem key={s.id} variant="scale" className={cn("group relative overflow-hidden bg-sand", s.cls)}>
            <figure className="h-full">
              <Img
                id={s.id}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 50vw"
                className="brightness-[0.97] transition-[transform,filter] duration-[1400ms] ease-lux group-hover:scale-105 group-hover:brightness-[0.82]"
              />
              <figcaption className="absolute bottom-0 left-0 flex w-full translate-y-full items-center justify-between p-4 text-ivory transition-transform duration-700 ease-lux group-hover:translate-y-0 sm:p-5">
                <span className="font-display text-xl italic sm:text-2xl">{s.caption}</span>
                <span className="eyebrow hidden sm:inline">Velora</span>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
