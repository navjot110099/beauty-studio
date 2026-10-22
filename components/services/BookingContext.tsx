"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type Selection = { service: string; nonce: number };
type BookingCtx = { selection: Selection; selectAndScroll: (s: string) => void };

const Ctx = createContext<BookingCtx | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selection, setSelection] = useState<Selection>({ service: "", nonce: 0 });
  const selectAndScroll = useCallback((s: string) => {
    setSelection((prev) => ({ service: s, nonce: prev.nonce + 1 }));
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#book");
  }, []);
  return <Ctx.Provider value={{ selection, selectAndScroll }}>{children}</Ctx.Provider>;
}

export function useBooking() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useBooking must be used inside <BookingProvider>");
  return ctx;
}

export function BookButton({ service, className }: { service: string; className?: string }) {
  const { selectAndScroll } = useBooking();
  return (
    <button
      type="button"
      onClick={() => selectAndScroll(service)}
      className={className}
      aria-label={`Book ${service}`}
    >
      Book
    </button>
  );
}
