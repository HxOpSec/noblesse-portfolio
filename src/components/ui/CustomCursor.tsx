"use client";

import { useEffect, useState } from "react";

import { lerp } from "@/lib/utils";

export function CustomCursor() {
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let frame = 0;
    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const move = (event: MouseEvent) => {
      target = { x: event.clientX, y: event.clientY };
      setDot(target);
    };

    const animate = () => {
      setRing((current) => ({
        x: lerp(current.x, target.x, 0.18),
        y: lerp(current.y, target.y, 0.18),
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

  return (
    <>
      <div
        className="pointer-events-none fixed z-[80] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300 md:block"
        style={{ left: dot.x, top: dot.y }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed z-[79] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/70 md:block"
        style={{ left: ring.x, top: ring.y }}
        aria-hidden="true"
      />
    </>
  );
}
