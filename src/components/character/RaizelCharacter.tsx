"use client";

import { useState } from "react";

import { useMouseParallax } from "@/hooks/useMouseParallax";

import { AuraEffect } from "./AuraEffect";
import { CharacterLayers } from "./CharacterLayers";

export function RaizelCharacter() {
  const [hovered, setHovered] = useState(false);
  const mouse = useMouseParallax();

  const translateX = mouse.x * 8;
  const translateY = mouse.y * 5;

  return (
    <div
      className="group relative mx-auto h-[380px] w-[280px] md:h-[500px] md:w-[360px] lg:h-[650px] lg:w-[480px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Noble character"
    >
      <svg
        viewBox="0 0 500 700"
        className="h-full w-full"
        style={{
          transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          filter: hovered ? "drop-shadow(0 0 30px rgba(168,85,247,0.6))" : "none",
        }}
        role="img"
        aria-label="Elegant long-haired character with mystical aura"
      >
        <defs>
          <radialGradient id="deepAuraGradient" cx="50%" cy="44%" r="65%">
            <stop offset="0%" stopColor="rgba(107,33,168,0.0)" />
            <stop offset="55%" stopColor="rgba(168,85,247,0.5)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0)" />
          </radialGradient>
          <radialGradient id="mistGradient" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(124,58,237,0.15)" />
            <stop offset="100%" stopColor="rgba(124,58,237,0)" />
          </radialGradient>
          <linearGradient id="cloakGradient" x1="250" y1="154" x2="250" y2="655">
            <stop offset="0%" stopColor="#1a0a2e" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
          <linearGradient id="torsoGradient" x1="250" y1="208" x2="250" y2="475">
            <stop offset="0%" stopColor="#0d0618" />
            <stop offset="100%" stopColor="#140826" />
          </linearGradient>

          <filter id="eyeGlowBase" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <AuraEffect hovered={hovered} />
        <CharacterLayers hovered={hovered} />
      </svg>
    </div>
  );
}
