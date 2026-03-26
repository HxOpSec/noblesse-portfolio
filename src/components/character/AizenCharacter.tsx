"use client";

import Image from "next/image";

export function AizenCharacter() {
  return (
    <div className="group relative mx-auto h-[360px] w-full max-w-[420px] md:h-[480px]">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.12) 45%, transparent 75%)",
          filter: "blur(26px)",
          animation: "pulseGlow 3s ease-in-out infinite",
        }}
      />

      <Image
        src="/images/aizen-base.jpg"
        alt="Sosuke Aizen with glasses"
        fill
        priority
        sizes="(max-width: 768px) 360px, 480px"
        className="absolute inset-0 object-contain drop-shadow-[0_0_42px_rgba(124,58,237,0.6)] transition-all duration-[600ms] ease-in-out group-hover:opacity-0 group-hover:blur-[8px]"
      />

      <Image
        src="/images/aizen-hogyoku.jpg"
        alt=""
        fill
        priority
        aria-hidden
        sizes="(max-width: 768px) 360px, 480px"
        className="absolute inset-0 translate-y-5 object-contain opacity-0 transition-all duration-[600ms] ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
      />

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-[90%] -translate-x-1/2 rounded-[999px] opacity-0 transition-opacity duration-[600ms] ease-in-out group-hover:opacity-100"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.18) 45%, transparent 75%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}
