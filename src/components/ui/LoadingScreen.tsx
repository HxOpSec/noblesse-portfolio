"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "hxopsec-loader-seen";
const SESSION_KEY = "hxopsec-loader-session-seen";
const DURATION = 1800;
const BRAND = "HxOpSec";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "split" | "done">(() => {
    if (typeof window === "undefined") return "loading";
    return sessionStorage.getItem(SESSION_KEY) === "true" ? "done" : "loading";
  });

  useEffect(() => {
    const sessionSeen = sessionStorage.getItem(SESSION_KEY) === "true";
    if (sessionSeen) {
      return;
    }

    localStorage.setItem(STORAGE_KEY, "true");
    sessionStorage.setItem(SESSION_KEY, "true");

    const start = performance.now();
    let frame = 0;

    const animate = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setProgress(next);

      if (elapsed >= DURATION) {
        setPhase("split");
        window.setTimeout(() => {
          setPhase("done");
        }, 760);
        return;
      }

      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const visibleText = useMemo(() => {
    const count = Math.max(1, Math.round((progress / 100) * BRAND.length));
    return BRAND.slice(0, count);
  }, [progress]);

  if (phase === "done") {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black"
      style={{
        opacity: 1,
        pointerEvents: "auto",
      }}
      aria-hidden="true"
    >
      <div className="relative z-10 flex w-[min(420px,88vw)] flex-col items-center gap-6 text-center">
        <h1 className="font-heading text-5xl tracking-[0.2em] text-white md:text-6xl">{visibleText}</h1>
        <p className="font-mono text-xs tracking-[0.36em] text-violet-200">INITIALIZING...</p>
        <div className="h-1.5 w-full overflow-hidden rounded-full border border-violet-500/40 bg-violet-950/50">
          <div
            className="h-full bg-gradient-to-r from-violet-700 via-violet-400 to-violet-300"
            style={{
              width: `${progress}%`,
              transition: "width 120ms linear",
            }}
          />
        </div>
        <p className="font-mono text-sm text-violet-100/85">{progress}%</p>
      </div>

      <div
        className="absolute inset-y-0 left-0 w-1/2 bg-black"
        style={{
          transform: phase === "split" ? "translateX(-100%)" : "translateX(0)",
          transition: "transform 760ms cubic-bezier(0.4,0,0.2,1)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-black"
        style={{
          transform: phase === "split" ? "translateX(100%)" : "translateX(0)",
          transition: "transform 760ms cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </div>
  );
}
