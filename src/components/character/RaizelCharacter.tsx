"use client";

import Image from "next/image";

import { useMouseParallax } from "@/hooks/useMouseParallax";

export function RaizelCharacter() {
  const mouse = useMouseParallax();

  const translateX = mouse.x * 10;
  const translateY = mouse.y * 8;

  return (
    <div
      className="relative mx-auto h-[400px] w-[280px] md:h-[540px] md:w-[360px] lg:h-[680px] lg:w-[460px]"
      style={{
        transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
        transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      data-cursor="character"
      aria-label="Character portrait"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[200px] w-[600px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(107,33,168,0.5) 0%, rgba(168,85,247,0.2) 40%, transparent 70%)",
          filter: "blur(40px)",
          animation: "auraBreathe 5s ease-in-out infinite",
        }}
      />

      <div
        className="pointer-events-none absolute bottom-10 left-1/2 h-16 w-36 -translate-x-[58%] rounded-[999px]"
        style={{
          background: "rgba(124,58,237,0.2)",
          filter: "blur(20px)",
          animation: "mistDrift 7s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 h-14 w-32 -translate-x-[2%] rounded-[999px]"
        style={{
          background: "rgba(168,85,247,0.15)",
          filter: "blur(20px)",
          animation: "mistDrift 9s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-12 left-1/2 h-12 w-28 -translate-x-[130%] rounded-[999px]"
        style={{
          background: "rgba(124,58,237,0.2)",
          filter: "blur(20px)",
          animation: "mistDrift 11s ease-in-out infinite",
        }}
      />

      <Image
        src="/images/character.png"
        alt="HxOpSec character"
        fill
        priority
        sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 460px"
        className="object-contain drop-shadow-[0_0_45px_rgba(168,85,247,0.38)]"
      />
    </div>
  );
}
