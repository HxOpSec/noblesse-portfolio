"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { Download, AtSign, GitFork, Send } from "lucide-react";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

import { RaizelCharacter } from "@/components/character/RaizelCharacter";
import { heroContent, socialLinks } from "@/lib/data";

const iconMap = {
  GitHub: GitFork,
  Telegram: Send,
  Instagram: AtSign,
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.fromTo(".hero-bg", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" }, 0);
      timeline.fromTo(
        ".hero-character",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.3,
      );
      timeline.fromTo(
        ".hero-aura",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        0.8,
      );
      timeline.fromTo(".hero-name", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55 }, 1.0);
      timeline.fromTo(".hero-role", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55 }, 1.2);
      timeline.fromTo(".hero-type", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, 1.4);
      timeline.fromTo(".hero-buttons", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, 1.6);
      timeline.fromTo(".hero-social", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, 1.8);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="hero-bg section-padding min-h-screen flex items-center">
      <div className="container-noble flex flex-col items-center text-center">
        <div className="hero-character hero-aura opacity-0">
          <RaizelCharacter />
        </div>

        <h1
          className="hero-name text-noble-gradient mt-6 font-heading text-[clamp(2.5rem,6vw,5rem)] leading-none opacity-0"
          style={{ letterSpacing: "0.04em" }}
        >
          {heroContent.name}
        </h1>

        <p className="hero-role mt-4 text-[1.1rem] uppercase tracking-[0.3em] text-noble-light/90 opacity-0">
          {heroContent.role}
        </p>

        <div className="hero-type mt-4 font-mono text-base text-violet-300 opacity-0">
          <TypeAnimation
            sequence={[
              heroContent.typewriterLines[0],
              1800,
              heroContent.typewriterLines[1],
              1800,
              heroContent.typewriterLines[2],
              1800,
              heroContent.typewriterLines[3],
              1800,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <div className="hero-buttons mt-8 flex flex-wrap justify-center gap-3 opacity-0">
          <a href="#projects" className="btn-noble px-6 py-3 text-sm font-semibold">
            View Projects
          </a>
          <a href={heroContent.cvUrl} className="btn-noble-solid inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold">
            <Download size={16} /> Download CV
          </a>
        </div>

        <div className="hero-social mt-8 flex items-center gap-3 opacity-0">
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
                whileHover={{ y: -2, scale: 1.04 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/35 bg-violet-500/10 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-violet-500/25"
              >
                <Icon size={16} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
