import { WordReveal, type Segment } from "@/components/motion/WordReveal";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: Segment[];
  intro?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "dark" | "light";
  id?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "left", className, tone = "dark", id }: Props) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      <Reveal variant="fade">
        <p
          className={cn(
            "eyebrow mb-6 flex items-center gap-4",
            align === "center" && "justify-center",
            tone === "dark" ? "text-rose-deep" : "text-champagne",
          )}
        >
          <span className="h-px w-8 bg-current" aria-hidden />
          {eyebrow}
        </p>
      </Reveal>
      <WordReveal
        id={id}
        segments={title}
        className={cn(
          "font-display text-[2.6rem] leading-[1.02] font-light tracking-[-0.01em] sm:text-5xl lg:text-[3.75rem]",
          tone === "dark" ? "text-espresso" : "text-ivory",
        )}
      />
      {intro && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              "mt-6 max-w-xl text-[0.975rem] leading-relaxed",
              align === "center" && "mx-auto",
              tone === "dark" ? "text-cocoa" : "text-ivory/75",
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
