const words = ["Signature Facials", "Lived-in Colour", "Precision Cuts", "Brows & Lashes", "Bridal Artistry", "Skin Therapy", "Restorative Rituals"];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="group relative overflow-hidden border-y border-espresso/10 bg-blush py-6 sm:py-7" aria-label="Our disciplines">
      <ul className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
        {row.map((w, i) => (
          <li key={i} aria-hidden={i >= words.length} className="flex items-center">
            <span className="px-7 font-display text-[1.9rem] leading-none font-light italic text-espresso sm:px-10 sm:text-[2.4rem]">
              {w}
            </span>
            <svg viewBox="0 0 24 24" className="size-4 text-rose-deep" aria-hidden>
              <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" fill="currentColor" />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
}
