"use client";

const particleCount = 10;

export function SectionDivider() {
  return (
    <div className="container-noble py-4" aria-hidden="true">
      <div className="relative h-6 overflow-hidden">
        <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-violet-500/80 to-transparent" />
        {Array.from({ length: particleCount }).map((_, index) => (
          <span
            key={index}
            className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-violet-300/85"
            style={{
              left: "-2%",
              animation: `dividerParticle ${7 + (index % 4)}s linear infinite`,
              animationDelay: `${index * 0.7}s`,
              opacity: 0.25 + (index % 5) * 0.12,
            }}
          />
        ))}
      </div>
    </div>
  );
}
