import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionTitle({ eyebrow, title, description, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-10 text-center", className)}>
      {eyebrow ? <p className="mb-3 font-mono text-xs tracking-[0.22em] text-violet-300/85">{eyebrow}</p> : null}
      <div className="title-wrap">
        <span className="title-line" aria-hidden="true" />
        <h2 className="text-noble-gradient text-3xl md:text-4xl">{title}</h2>
        <span className="title-line" aria-hidden="true" />
      </div>
      {description ? <p className="mx-auto mt-4 max-w-2xl text-violet-100/80 leading-7">{description}</p> : null}
    </div>
  );
}
