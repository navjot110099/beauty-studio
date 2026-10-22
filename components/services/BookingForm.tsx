"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Loader2 } from "lucide-react";
import { useId, useState, useSyncExternalStore, type FormEvent, type ReactNode } from "react";
import { categories, packages, team } from "@/lib/data";
import { site } from "@/lib/site";
import { useBooking } from "./BookingContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type Values = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  specialist: string;
  notes: string;
};
type Errors = Partial<Record<keyof Values, string>>;

const noopSubscribe = () => () => {};
function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

const empty: Values = { name: "", email: "", phone: "", service: "", date: "", time: "", specialist: "", notes: "" };

function validate(v: Values, minDate: string): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please tell us your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone.replace(/\D/g, "").length < 7) e.phone = "Please enter a phone number we can reach you on.";
  if (!v.service) e.service = "Choose a treatment, or select a consultation.";
  if (!v.date) e.date = "Choose a preferred date.";
  else if (minDate && v.date < minDate) e.date = "Please choose a date from today onwards.";
  else if (new Date(`${v.date}T12:00:00`).getDay() === 1) e.date = "We're closed on Mondays — please pick another day.";
  if (!v.time) e.time = "Choose a preferred time of day.";
  if (v.notes.length > 500) e.notes = "Please keep notes under 500 characters.";
  return e;
}

function Field({
  id,
  label,
  error,
  children,
  className,
  optional,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
  optional?: boolean;
}) {
  return (
    <div className={cn("group/field", className)}>
      <label
        htmlFor={id}
        className="eyebrow mb-2 flex justify-between text-ivory/60 transition-colors group-focus-within/field:text-champagne"
      >
        {label}
        {optional && <span className="tracking-[0.1em] normal-case opacity-70">Optional</span>}
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden pt-2 text-xs text-[#f0a39a]"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputCls = (err?: string, muted = false) =>
  cn(
    "w-full appearance-none rounded-none border-0 border-b bg-transparent py-3 text-base transition-colors duration-300 placeholder:text-ivory/35 focus:border-champagne focus:outline-none",
    err ? "border-[#f0a39a]" : "border-ivory/25 hover:border-ivory/50",
    muted ? "text-ivory/50" : "text-ivory",
  );

export function BookingForm() {
  const uid = useId();
  const { selection } = useBooking();
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  // Today's date only exists on the client; the server renders without a minimum.
  const minDate = useSyncExternalStore(noopSubscribe, todayISO, () => "");

  // When a "Book" button elsewhere on the page picks a service, reflect it here.
  const [seenNonce, setSeenNonce] = useState(selection.nonce);
  if (selection.nonce !== seenNonce) {
    setSeenNonce(selection.nonce);
    setValues((v) => ({ ...v, service: selection.service }));
    setErrors((e) => ({ ...e, service: undefined }));
    setStatus("idle");
  }

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    const next = { ...values, [k]: e.target.value };
    setValues(next);
    if (touched[k]) setErrors(validate(next, minDate));
  };
  const blur = (k: keyof Values) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values, minDate));
  };
  const err = (k: keyof Values) => (touched[k] ? errors[k] : undefined);
  const describedBy = (k: keyof Values) => (err(k) ? `${uid}-${k}-error` : undefined);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values, minDate);
    setErrors(found);
    setTouched({ name: true, email: true, phone: true, service: true, date: true, time: true, notes: true });
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }
    setStatus("loading");
    // Demo only — there is no booking backend; we simulate the round-trip.
    window.setTimeout(() => setStatus("success"), 1400);
  }

  const id = (k: keyof Values) => `${uid}-${k}`;

  return (
    <section id="book" className="scroll-mt-28 bg-espresso text-ivory" aria-labelledby="book-title">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-32">
        <div className="lg:col-span-4">
          <SectionHeading
            id="book-title"
            tone="light"
            eyebrow="Reservations"
            title={[{ text: "Request an" }, { text: "appointment.", className: "italic text-champagne" }]}
            intro="Tell us what you'd like and when suits you. Our front desk confirms every request personally — usually within two working hours."
          />
          <Reveal delay={0.2} className="mt-12 space-y-8 border-t border-ivory/15 pt-10 text-sm text-ivory/75">
            <div>
              <p className="eyebrow mb-2 text-champagne">Prefer to talk?</p>
              <a href={site.phoneHref} className="link-underline pb-0.5 font-display text-2xl text-ivory">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2 text-champagne">Opening hours</p>
              {site.hours.map((h) => (
                <p key={h.d} className="flex max-w-[16rem] justify-between">
                  <span>{h.d}</span>
                  <span className="tabular-nums">{h.h}</span>
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full flex-col justify-center border border-ivory/15 p-8 sm:p-12"
                role="status"
              >
                <span className="grid size-14 place-items-center rounded-full bg-champagne text-espresso">
                  <Check className="size-6" aria-hidden />
                </span>
                <h3 className="mt-8 font-display text-4xl leading-tight font-light sm:text-5xl">
                  Thank you, {values.name.split(" ")[0]}.
                </h3>
                <p className="mt-5 max-w-lg leading-relaxed text-ivory/75">
                  We&rsquo;ve noted your request for <em className="text-champagne">{values.service}</em> on{" "}
                  {new Date(`${values.date}T12:00:00`).toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}{" "}
                  ({values.time.toLowerCase()}). In a live studio, our front desk would now confirm by email to{" "}
                  {values.email}.
                </p>
                <p className="mt-4 text-xs text-ivory/50">
                  This is a demonstration site — no request has been sent and no booking was made.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setValues(empty);
                    setTouched({});
                    setErrors({});
                    setStatus("idle");
                  }}
                  className="link-underline mt-10 w-fit pb-1 text-[0.72rem] font-semibold tracking-[0.22em] uppercase"
                >
                  Make another request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                noValidate
                exit={{ opacity: 0, y: -12 }}
                className="grid gap-x-8 gap-y-9 sm:grid-cols-2"
              >
                <Field id={id("name")} label="Full name" error={err("name")}>
                  <input
                    id={id("name")}
                    autoComplete="name"
                    value={values.name}
                    onChange={set("name")}
                    onBlur={blur("name")}
                    aria-invalid={!!err("name")}
                    aria-describedby={describedBy("name")}
                    className={cn(inputCls(err("name")))}
                    placeholder="Charlotte Wells"
                  />
                </Field>
                <Field id={id("email")} label="Email" error={err("email")}>
                  <input
                    id={id("email")}
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={values.email}
                    onChange={set("email")}
                    onBlur={blur("email")}
                    aria-invalid={!!err("email")}
                    aria-describedby={describedBy("email")}
                    className={cn(inputCls(err("email")))}
                    placeholder="you@example.com"
                  />
                </Field>
                <Field id={id("phone")} label="Phone" error={err("phone")}>
                  <input
                    id={id("phone")}
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={values.phone}
                    onChange={set("phone")}
                    onBlur={blur("phone")}
                    aria-invalid={!!err("phone")}
                    aria-describedby={describedBy("phone")}
                    className={cn(inputCls(err("phone")))}
                    placeholder="+44 7700 900123"
                  />
                </Field>
                <Field id={id("service")} label="Treatment" error={err("service")}>
                  <div className="relative">
                    <select
                      id={id("service")}
                      value={values.service}
                      onChange={set("service")}
                      onBlur={blur("service")}
                      aria-invalid={!!err("service")}
                      aria-describedby={describedBy("service")}
                      className={cn(
                        inputCls(err("service"), !values.service),
                        "cursor-pointer pr-8 [&_optgroup]:bg-espresso [&_option]:bg-espresso [&_option]:text-ivory",
                      )}
                    >
                      <option value="">Select a treatment</option>
                      <option value="Complimentary consultation">Not sure — complimentary consultation</option>
                      {categories.map((c) => (
                        <optgroup key={c.id} label={c.title}>
                          {c.services.map((s) => (
                            <option key={s.name} value={s.name}>
                              {s.name} — {s.price}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                      <optgroup label="Packages">
                        {packages.map((p) => (
                          <option key={p.name} value={p.name}>
                            {p.name} — {p.price}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                    <ChevronDown className="pointer-events-none absolute top-1/2 right-0 size-4 -translate-y-1/2 text-ivory/60" aria-hidden />
                  </div>
                </Field>
                <Field id={id("date")} label="Preferred date" error={err("date")}>
                  <input
                    id={id("date")}
                    type="date"
                    min={minDate || undefined}
                    value={values.date}
                    onChange={set("date")}
                    onBlur={blur("date")}
                    aria-invalid={!!err("date")}
                    aria-describedby={describedBy("date")}
                    className={cn(inputCls(err("date")), "[color-scheme:dark]")}
                  />
                </Field>
                <Field id={id("time")} label="Time of day" error={err("time")}>
                  <div className="relative">
                    <select
                      id={id("time")}
                      value={values.time}
                      onChange={set("time")}
                      onBlur={blur("time")}
                      aria-invalid={!!err("time")}
                      aria-describedby={describedBy("time")}
                      className={cn(
                        inputCls(err("time"), !values.time),
                        "cursor-pointer pr-8 [&_option]:bg-espresso [&_option]:text-ivory",
                      )}
                    >
                      <option value="">Select a time</option>
                      <option>Morning (9:00 – 12:00)</option>
                      <option>Afternoon (12:00 – 16:00)</option>
                      <option>Evening (16:00 – 20:00)</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute top-1/2 right-0 size-4 -translate-y-1/2 text-ivory/60" aria-hidden />
                  </div>
                </Field>
                <Field id={id("specialist")} label="Specialist" optional className="sm:col-span-2">
                  <div className="relative">
                    <select
                      id={id("specialist")}
                      value={values.specialist}
                      onChange={set("specialist")}
                      className={cn(
                        inputCls(undefined, !values.specialist),
                        "cursor-pointer pr-8 [&_option]:bg-espresso [&_option]:text-ivory",
                      )}
                    >
                      <option value="">No preference</option>
                      {team.map((m) => (
                        <option key={m.name} value={m.name}>
                          {m.name} — {m.role}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute top-1/2 right-0 size-4 -translate-y-1/2 text-ivory/60" aria-hidden />
                  </div>
                </Field>
                <Field id={id("notes")} label="Anything we should know?" optional error={err("notes")} className="sm:col-span-2">
                  <textarea
                    id={id("notes")}
                    rows={3}
                    value={values.notes}
                    onChange={set("notes")}
                    onBlur={blur("notes")}
                    aria-invalid={!!err("notes")}
                    aria-describedby={describedBy("notes")}
                    className={cn(inputCls(err("notes")), "resize-none")}
                    placeholder="Skin concerns, allergies, an occasion you're preparing for…"
                  />
                  <p className="mt-2 text-right text-[0.7rem] text-ivory/40 tabular-nums">{values.notes.length}/500</p>
                </Field>
                <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-xs leading-relaxed text-ivory/50">
                    Demonstration form: your details are checked in the browser but never sent or stored.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative isolate inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-champagne px-8 py-4 text-[0.75rem] font-semibold tracking-[0.22em] text-espresso uppercase transition-colors duration-500 before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:rounded-full before:bg-ivory before:transition-transform before:duration-500 before:ease-lux hover:before:scale-y-100 disabled:cursor-wait disabled:opacity-80"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" aria-hidden /> Sending request
                      </>
                    ) : (
                      <>
                        Request appointment
                        <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
