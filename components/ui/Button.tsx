import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "light" | "text";

const styles: Record<Variant, string> = {
  solid: "bg-espresso text-ivory before:bg-rose-deep",
  outline: "border border-espresso/70 text-espresso hover:text-ivory before:bg-espresso",
  light: "bg-ivory text-espresso hover:text-ivory before:bg-rose-deep",
  text: "",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
};

/** Pill button with a fill that rises from below and an arrow that slides on hover. */
export function Button({ href, children, variant = "solid", className, arrow = true, onClick }: Props) {
  if (variant === "text") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "group inline-flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.2em]",
          className,
        )}
      >
        <span className="link-underline pb-1">{children}</span>
        {arrow && (
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform duration-500 ease-lux group-hover:translate-x-1.5"
          />
        )}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative isolate inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-500",
        "before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:rounded-full before:transition-transform before:duration-500 before:ease-lux hover:before:scale-y-100",
        styles[variant],
        className,
      )}
    >
      <span>{children}</span>
      {arrow && (
        <span className="relative flex size-4 overflow-hidden" aria-hidden>
          <ArrowRight className="absolute size-4 transition-transform duration-500 ease-lux group-hover:translate-x-5" />
          <ArrowRight className="absolute size-4 -translate-x-5 transition-transform duration-500 ease-lux group-hover:translate-x-0" />
        </span>
      )}
    </Link>
  );
}
