import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className={cn("group flex flex-col items-center leading-none", className)} aria-label="Velora Beauty — home">
      <span className="font-display text-[1.65rem] font-medium tracking-[0.34em] pl-[0.34em] transition-colors duration-500 group-hover:text-rose-deep">
        VELORA
      </span>
      <span className="mt-1.5 text-[0.5rem] font-semibold tracking-[0.5em] pl-[0.5em] text-cocoa">BEAUTY ATELIER</span>
    </Link>
  );
}
