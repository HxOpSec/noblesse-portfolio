"use client";

import { useState } from "react";

import { useMouseParallax } from "@/hooks/useMouseParallax";
import { mapRange } from "@/lib/utils";

import { AuraEffect } from "./AuraEffect";
import { CharacterLayers } from "./CharacterLayers";

export function RaizelCharacter() {
  const [hovered, setHovered] = useState(false);
  const mouse = useMouseParallax();

  const translateX = mapRange(mouse.x, -1, 1, -8, 8);
  const translateY = mapRange(mouse.y, -1, 1, -5, 5);

  return (
    <div
      className="group relative mx-auto w-full max-w-[420px] animate-float"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Raizel inspired character"
    >
      <div
        className="absolute inset-0 -z-10 rounded-[42%] bg-violet-600/20 blur-3xl transition-all duration-500"
        style={{ opacity: hovered ? 0.65 : 0.35 }}
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 400 600"
        className="w-full h-auto"
        style={{ transform: `translate3d(${translateX}px, ${translateY}px, 0)` }}
        role="img"
        aria-label="Mystical noble character"
      >
        <defs>
          <radialGradient id="auraGradient" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(168,85,247,0.55)" />
            <stop offset="65%" stopColor="rgba(124,58,237,0.22)" />
            <stop offset="100%" stopColor="rgba(5,3,10,0)" />
          </radialGradient>
          <radialGradient id="mistGradient" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(196,181,253,0.22)" />
            <stop offset="100%" stopColor="rgba(5,3,10,0)" />
          </radialGradient>
          <linearGradient id="cloakGradient" x1="200" y1="142" x2="200" y2="506">
            <stop offset="0%" stopColor="#1b1130" />
            <stop offset="55%" stopColor="#0f0a1f" />
            <stop offset="100%" stopColor="#05030a" />
          </linearGradient>
          <linearGradient id="hairGradient" x1="200" y1="76" x2="200" y2="370">
            <stop offset="0%" stopColor="#0a0812" />
            <stop offset="100%" stopColor="#020204" />
          </linearGradient>
          <filter id="eyeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="eyeGlowStrong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.8" result="blur" />
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
