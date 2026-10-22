"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const links = [
  { id: "facials", label: "Facials" },
  { id: "hair", label: "Hair" },
  { id: "makeup", label: "Makeup" },
  { id: "skin", label: "Skin" },
  { id: "packages", label: "Packages" },
  { id: "pricing", label: "Pricing" },
  { id: "team", label: "Team" },
  { id: "faq", label: "FAQ" },
  { id: "book", label: "Book" },
];
const ids = links.map((l) => l.id);

export function CategoryNav() {
  const active = useActiveSection(ids);
  return (
    <nav
      aria-label="Service categories"
      className="sticky top-[4.4rem] z-40 border-y border-espresso/10 bg-ivory/90 backdrop-blur-md"
    >
      <ul className="mx-auto flex max-w-[1440px] gap-1 overflow-x-auto px-5 py-2.5 [scrollbar-width:none] sm:px-8 lg:justify-center lg:px-12 [&::-webkit-scrollbar]:hidden">
        {links.map((l) => {
          const isActive = active === l.id;
          return (
            <li key={l.id} className="shrink-0">
              <a
                href={`#${l.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative isolate block rounded-full px-4 py-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-300",
                  isActive ? "text-ivory" : "text-cocoa hover:text-espresso",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="category-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-espresso"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
