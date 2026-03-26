"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? window.scrollY / max : 0;
      setProgress(Math.min(1, Math.max(0, value)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[9998] h-[2px] bg-transparent" aria-hidden="true">
      <div
        className="h-full origin-left transition-transform duration-500 ease-in-out"
        style={{
          transform: `scaleX(${progress})`,
          background: "linear-gradient(to right, #6b21a8, #a855f7)",
        }}
      />
    </div>
  );
}
