"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useFocusTrap, useLockBody, useScrolled } from "@/lib/hooks";

const ease = [0.22, 1, 0.36, 1] as const;

function NavLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  const active = !href.includes("#") && pathname === href;
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="link-underline pb-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-espresso/80 transition-colors hover:text-espresso aria-[current=page]:text-espresso"
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(112);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useLockBody(open);
  useFocusTrap(menuRef, open, close);

  const left = site.nav.slice(0, 3);
  const right = site.nav.slice(3);

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.05 }}
        className={cn(
          "sticky top-0 transition-[background-color,box-shadow,backdrop-filter] duration-500",
          open ? "z-[80]" : "z-50",
          scrolled || open ? "bg-ivory/90 shadow-[0_1px_0_rgba(42,29,22,0.08)] backdrop-blur-md" : "bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 transition-[padding] duration-500 sm:px-8 lg:px-12",
            scrolled ? "py-3.5" : "py-5 lg:py-6",
          )}
        >
          {/* Left: desktop links / mobile toggle */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => {
                if (!open && headerRef.current) setMenuTop(headerRef.current.getBoundingClientRect().bottom + 16);
                setOpen((o) => !o);
              }}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-[70] -ml-2 grid size-11 place-items-center lg:hidden"
            >
              <span className="relative block h-3 w-7">
                <span
                  className={cn(
                    "absolute left-0 h-px w-7 bg-espresso transition-all duration-500 ease-lux",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-px bg-espresso transition-all duration-500 ease-lux",
                    open ? "top-1.5 w-7 -rotate-45" : "top-3 w-4",
                  )}
                />
              </span>
            </button>
            <ul className="hidden items-center gap-9 lg:flex">
              {left.map((l) => (
                <li key={l.href}>
                  <NavLink {...l} pathname={pathname} />
                </li>
              ))}
            </ul>
          </div>

          <Logo className="relative z-[70]" onClick={close} />

          <div className="flex items-center justify-end gap-9">
            <ul className="hidden items-center gap-9 lg:flex">
              {right.map((l) => (
                <li key={l.href}>
                  <NavLink {...l} pathname={pathname} />
                </li>
              ))}
            </ul>
            <Link
              href="/services#book"
              className="group relative hidden overflow-hidden rounded-full border border-espresso/60 px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-500 hover:text-ivory sm:inline-flex"
            >
              <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 rounded-full bg-espresso transition-transform duration-500 ease-lux group-hover:scale-y-100" />
              Book Appointment
            </Link>
            <Link
              href="/services#book"
              className="link-underline pb-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] sm:hidden"
            >
              Book
            </Link>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.75, ease }}
            style={{ paddingTop: menuTop }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ivory px-6 pb-10 lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
              className="flex flex-col divide-y divide-espresso/10 border-y border-espresso/10"
            >
              {[{ label: "Home", href: "/" }, ...site.nav].map((l, i) => (
                <motion.li
                  key={l.href}
                  variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.7, ease }}
                >
                  <Link
                    href={l.href}
                    onClick={close}
                    aria-current={l.href === pathname ? "page" : undefined}
                    className="flex items-baseline justify-between py-4 font-display text-[2.4rem] leading-none font-light aria-[current=page]:italic aria-[current=page]:text-rose-deep"
                  >
                    {l.label}
                    <span className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] text-cocoa">0{i + 1}</span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.65, duration: 0.6, ease } }}
              exit={{ opacity: 0 }}
              className="mt-auto pt-10"
            >
              <Link
                href="/services#book"
                onClick={close}
                className="flex w-full items-center justify-center rounded-full bg-espresso px-6 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-ivory"
              >
                Book Appointment
              </Link>
              <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-cocoa">
                <div>
                  <p className="eyebrow mb-2 text-rose-deep">Visit</p>
                  {site.address.map((a) => (
                    <p key={a}>{a}</p>
                  ))}
                </div>
                <div>
                  <p className="eyebrow mb-2 text-rose-deep">Call</p>
                  <a href={site.phoneHref} className="link-underline">
                    {site.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
