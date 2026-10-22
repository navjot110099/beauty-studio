"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useId, useState, type FormEvent } from "react";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function NewsletterForm() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!emailRe.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setState("loading");
    // Demo only: no mailing-list provider is connected.
    window.setTimeout(() => setState("done"), 1100);
  }

  return (
    <div className="min-h-[7.5rem]">
      <AnimatePresence mode="wait" initial={false}>
        {state === "done" ? (
          <motion.p
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3 font-display text-2xl leading-snug italic text-ivory"
            role="status"
          >
            <Check className="mt-1.5 size-5 shrink-0 text-champagne" aria-hidden />
            Thank you — you&rsquo;re on the list for the next Velora Letter.
          </motion.p>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate exit={{ opacity: 0, y: -8 }}>
            <label htmlFor={`${id}-email`} className="sr-only">
              Email address
            </label>
            <div
              className={`flex items-center border-b pb-3 transition-colors duration-300 focus-within:border-champagne ${
                error ? "border-rose" : "border-ivory/30"
              }`}
            >
              <input
                id={`${id}-email`}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : `${id}-hint`}
                className="w-full min-w-0 bg-transparent font-display text-xl text-ivory placeholder:text-ivory/40 focus:outline-none"
              />
              <button
                type="submit"
                disabled={state === "loading"}
                aria-label="Subscribe"
                className="group ml-3 grid size-11 shrink-0 place-items-center rounded-full border border-ivory/30 transition-colors duration-500 hover:border-champagne hover:bg-champagne hover:text-espresso disabled:opacity-60"
              >
                {state === "loading" ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                ) : (
                  <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5" aria-hidden />
                )}
              </button>
            </div>
            <p
              id={error ? `${id}-error` : `${id}-hint`}
              className={`mt-3 text-xs ${error ? "text-rose" : "text-ivory/50"}`}
              role={error ? "alert" : undefined}
            >
              {error || "Seasonal rituals and first access to new treatments. Four letters a year."}
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
