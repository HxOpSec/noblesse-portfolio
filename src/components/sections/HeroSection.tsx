"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { AtSign, Download, GitFork, Send } from "lucide-react";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

import { AizenCharacter } from "@/components/character/AizenCharacter";
import { useLanguage } from "@/context/LanguageContext";
import { heroContent, socialLinks } from "@/lib/data";

const iconMap = {
  GitHub: GitFork,
  Telegram: Send,
  Instagram: AtSign,
};

export function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      if (sectionRef.current) {
        timeline.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: "power2.out" }, 0);
      }
      if (characterRef.current) {
        timeline.fromTo(characterRef.current, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.2);
      }
      if (copyRef.current) {
        timeline.fromTo(copyRef.current, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.75);
      }
      if (actionsRef.current) {
        timeline.fromTo(actionsRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 1);
      }
      if (socialRef.current) {
        timeline.fromTo(socialRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 1.1);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="hero-bg section-padding relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_18%,rgba(124,58,237,0.26),transparent_40%),radial-gradient(circle_at_35%_85%,rgba(168,85,247,0.2),transparent_44%)]" />
      <div className="container-noble relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div ref={copyRef} className="opacity-0">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-violet-300">{heroContent.location}</p>
          <h1 className="mt-5 font-heading text-[clamp(2.8rem,7vw,5.4rem)] leading-[0.92] text-white">
            <span className="text-noble-gradient">{heroContent.name}</span>
            <span className="mt-2 block text-base font-sans uppercase tracking-[0.3em] text-violet-100/80 md:text-lg">{heroContent.realName}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm uppercase tracking-[0.22em] text-violet-100/90 md:text-base">{t("hero_role")}</p>

          <div className="mt-6 max-w-2xl font-mono text-base text-violet-200 md:text-lg">
            <TypeAnimation sequence={[t("hero_sub"), 1500, ...heroContent.typewriterLines.flatMap((line) => [line, 1500])]} speed={48} repeat={Infinity} />
          </div>

          <div ref={actionsRef} className="mt-8 flex flex-wrap items-center gap-3 opacity-0">
            <a href="#projects" className="btn-noble px-6 py-3 text-sm font-semibold">
              Explore Projects
            </a>
            <a href={heroContent.cvUrl} className="btn-noble-solid inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold">
              <Download size={16} /> Download CV
            </a>
          </div>

          <div ref={socialRef} className="mt-7 flex items-center gap-3 opacity-0">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.name as keyof typeof iconMap];
              if (!Icon) return null;

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.ariaLabel}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-400/35 bg-violet-500/10 transition-all duration-500 ease-in-out hover:border-violet-300/65 hover:bg-violet-500/25"
                >
                  <Icon size={17} />
                </motion.a>
              );
            })}
          </div>
        </div>

        <div ref={characterRef} className="opacity-0">
          <AizenCharacter />
        </div>
      </div>
    </section>
  );
}
