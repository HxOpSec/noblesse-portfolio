"use client";

import { useEffect, useState } from "react";

import { lerp } from "@/lib/utils";

type CursorMode = "default" | "interactive" | "character";

export function CustomCursor() {
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const [mode, setMode] = useState<CursorMode>("default");

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let frame = 0;
    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const updateMode = (event: MouseEvent) => {
      const element = event.target as HTMLElement | null;
      if (!element) {
        setMode("default");
        return;
      }

      if (element.closest("[data-cursor='character']")) {
        setMode("character");
        return;
      }

      if (element.closest("a, button, [role='button'], input, textarea, select")) {
        setMode("interactive");
        return;
      }

      setMode("default");
    };

    const move = (event: MouseEvent) => {
      target = { x: event.clientX, y: event.clientY };
      setDot(target);
      updateMode(event);
    };

    const animate = () => {
      setRing((current) => ({
        x: lerp(current.x, target.x, 0.12),
        y: lerp(current.y, target.y, 0.12),
      }));
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const ringSize = mode === "default" ? 36 : 60;
  const ringColor = mode === "character" ? "rgba(200,0,0,0.3)" : mode === "interactive" ? "rgba(168,85,247,0.15)" : "transparent";
  const borderColor = mode === "character" ? "rgba(200,0,0,0.75)" : "rgba(168,85,247,0.75)";

  return (
    <>
      <div
        className="pointer-events-none fixed z-[110] hidden -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
        style={{
          left: dot.x,
          top: dot.y,
          width: 8,
          height: 8,
          opacity: mode === "default" ? 1 : 0,
          background: "#a855f7",
          boxShadow: "0 0 18px rgba(168,85,247,0.8)",
          transition: "opacity 180ms cubic-bezier(0.4,0,0.2,1)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed z-[109] hidden -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
        style={{
          left: ring.x,
          top: ring.y,
          width: ringSize,
          height: ringSize,
          border: `1px solid ${borderColor}`,
          background: ringColor,
          transition: "width 220ms cubic-bezier(0.4,0,0.2,1), height 220ms cubic-bezier(0.4,0,0.2,1), background 220ms cubic-bezier(0.4,0,0.2,1), border-color 220ms cubic-bezier(0.4,0,0.2,1)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
