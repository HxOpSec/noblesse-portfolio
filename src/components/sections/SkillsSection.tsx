"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, FileCode2, GitBranch, GitFork, Network, Router, ShieldCheck, Terminal, type LucideIcon } from "lucide-react";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";
import { skills } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  FileCode2,
  GitBranch,
  GitFork,
  Terminal,
  ShieldCheck,
  Network,
  Router,
  BadgeCheck,
  Award,
};

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <motion.section
      id="skills"
      className="section-padding"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container-noble">
        <SectionTitle
          eyebrow="Growth Map"
          title={t("skills_title")}
          description={t("skills_subtitle")}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon] ?? FileCode2;
            const isBadgeOnly = skill.badgeOnly || typeof skill.level !== "number";

            return (
              <article
                key={skill.name}
                className="card-noble rounded-2xl border border-violet-500/35 p-5 transition-all duration-500 ease-in-out hover:border-[rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Icon size={18} style={{ color: skill.color }} />
                    <h3 className="font-medium text-white">{skill.name}</h3>
                  </div>

                  {isBadgeOnly ? (
                    <span
                      className="rounded-full border px-3 py-1 text-xs font-mono uppercase tracking-wide"
                      style={{ borderColor: `${skill.color}99`, color: skill.color }}
                    >
                      {skill.label}
                    </span>
                  ) : (
                    <span className="text-sm font-mono text-violet-100/85">{skill.level}% · {skill.label}</span>
                  )}
                </div>

                {!isBadgeOnly ? (
                  <div className="relative mt-3 h-2 overflow-hidden rounded-full bg-violet-900/40">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #6b21a8, #a855f7)",
                        boxShadow: "0 0 12px rgba(168,85,247,0.55)",
                      }}
                    >
                      <motion.div
                        initial={{ x: "-140%" }}
                        whileInView={{ x: "180%" }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                      />
                    </motion.div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
