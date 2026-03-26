"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AtSign, GitFork, Link2, Send } from "lucide-react";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

import { RaizelCharacter } from "@/components/character/RaizelCharacter";
import { heroContent, socialLinks } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.16,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const iconMap = {
  GitHub: GitFork,
  LinkedIn: Link2,
  Telegram: Send,
  X: AtSign,
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        },
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="section-padding min-h-screen flex items-center">
      <div className="container-noble grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-reveal order-2 lg:order-1"
        >
          <RaizelCharacter />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-1 lg:order-2"
        >
          <motion.p variants={itemVariants} className="hero-reveal mb-3 text-xs uppercase tracking-[0.34em] text-violet-300/80">
            ── Noble Title ──
          </motion.p>
          <motion.h1 variants={itemVariants} className="hero-reveal text-4xl md:text-5xl xl:text-6xl text-white leading-tight">
            {heroContent.name}
          </motion.h1>
          <motion.h2 variants={itemVariants} className="hero-reveal mt-3 text-xl md:text-2xl text-noble-gradient">
            {heroContent.role}
          </motion.h2>
          <motion.div variants={itemVariants} className="hero-reveal mt-5 text-violet-100/90 text-lg">
            <TypeAnimation
              sequence={[
                "Cinematic web experiences.",
                1400,
                "Mystical interaction design.",
                1400,
                "Performance-first frontend systems.",
                1400,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <motion.p variants={itemVariants} className="hero-reveal mt-6 max-w-xl leading-7 text-violet-100/80">
            {heroContent.description}
          </motion.p>

          <motion.div variants={itemVariants} className="hero-reveal mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-noble px-6 py-3 text-sm font-semibold">
              View Projects
            </a>
            <a href={heroContent.cvUrl} className="btn-noble-solid px-6 py-3 text-sm font-semibold">
              Download CV
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-reveal mt-8 flex items-center gap-3">
            {socialLinks
              .filter((link) => ["GitHub", "LinkedIn", "Telegram"].includes(link.name))
              .map((link) => {
                const Icon = iconMap[link.name as keyof typeof iconMap];

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.ariaLabel}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/35 bg-violet-500/10 transition hover:bg-violet-500/25"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
