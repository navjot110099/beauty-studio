"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="announcement"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden bg-espresso text-ivory"
          role="region"
          aria-label="Studio announcement"
        >
          <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-3 px-12 py-2.5 text-center text-[0.72rem] tracking-[0.06em] sm:text-[0.78rem]">
            <span className="hidden h-1 w-1 rounded-full bg-champagne sm:inline-block" aria-hidden />
            <p>
              <span className="font-display text-[0.95rem] italic text-champagne sm:text-base">Autumn Rituals</span>
              <span className="mx-2 opacity-50">—</span>
              Complimentary scalp therapy with every Signature Facial until 30 November.
              <Link href="/services#book" className="link-underline ml-2 font-semibold whitespace-nowrap">
                Reserve
              </Link>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-1/2 right-3 grid size-8 -translate-y-1/2 place-items-center rounded-full text-ivory/70 transition hover:bg-ivory/10 hover:text-ivory"
            aria-label="Dismiss announcement"
          >
            <X className="size-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
