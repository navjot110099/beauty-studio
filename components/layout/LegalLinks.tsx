"use client";

import { X } from "lucide-react";
import { useRef, useState } from "react";

const docs = {
  Privacy: [
    "Velora Beauty Ltd collects only the details needed to book and deliver your treatments: your name, contact details, appointment history and any health notes you choose to share.",
    "We never sell your data. Treatment notes are stored securely and kept for six years in line with insurance requirements. You can ask to see, correct or delete your information at any time by emailing hello@velorabeauty.co.uk.",
  ],
  Terms: [
    "Bookings over £100 require a 50% deposit, deducted from your final bill. We ask for 48 hours' notice to change or cancel an appointment; within that window the deposit is retained.",
    "Gift cards are valid for 12 months from purchase and cannot be exchanged for cash. Prices include VAT and may change seasonally; the price confirmed at booking is honoured.",
  ],
  Cookies: [
    "This site uses only essential cookies needed for it to function. We do not run advertising trackers.",
    "If we introduce analytics in the future, we will ask for your consent first and you can change your choice at any time.",
  ],
} as const;

type Doc = keyof typeof docs;

export function LegalLinks() {
  const ref = useRef<HTMLDialogElement>(null);
  const [doc, setDoc] = useState<Doc>("Privacy");

  function open(d: Doc) {
    setDoc(d);
    ref.current?.showModal();
  }

  return (
    <>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {(Object.keys(docs) as Doc[]).map((d) => (
          <li key={d}>
            <button type="button" onClick={() => open(d)} className="link-underline pb-0.5 hover:text-ivory">
              {d}
            </button>
          </li>
        ))}
      </ul>
      <dialog
        ref={ref}
        aria-labelledby="legal-title"
        className="m-auto w-[min(92vw,34rem)] rounded-sm bg-ivory p-0 text-espresso backdrop:bg-espresso/60 backdrop:backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === ref.current) ref.current?.close();
        }}
      >
        <div className="p-8 sm:p-10">
          <div className="mb-6 flex items-start justify-between gap-6">
            <h2 id="legal-title" className="font-display text-4xl font-light">
              {doc} {doc === "Terms" ? "of Booking" : "Policy"}
            </h2>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="grid size-10 shrink-0 place-items-center rounded-full border border-espresso/20 transition hover:rotate-90 hover:bg-espresso hover:text-ivory"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="space-y-4 text-[0.95rem] leading-relaxed text-cocoa">
            {docs[doc].map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
