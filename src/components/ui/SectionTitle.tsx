import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionTitle({ eyebrow, title, description, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-10", className)}>
      {eyebrow ? (
        <p className="mb-2 text-xs uppercase tracking-[0.34em] text-violet-300/80">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl md:text-4xl text-white">{title}</h2>
      <div className="mt-3 h-px w-24 bg-gradient-to-r from-violet-400 to-transparent" />
      {description ? <p className="mt-4 max-w-2xl text-violet-100/80 leading-7">{description}</p> : null}
    </div>
  );
}
