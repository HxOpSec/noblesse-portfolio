"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Braces,
  Code2,
  Container,
  FileCode2,
  GitBranch,
  Orbit,
  Paintbrush,
  Palette,
  PenTool,
  Rocket,
  Server,
  Sparkles,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { skills } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  FileCode2,
  Palette,
  Braces,
  Code2,
  Atom,
  Rocket,
  Paintbrush,
  Sparkles,
  WandSparkles,
  Orbit,
  Server,
  GitBranch,
  PenTool,
  Container,
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-noble">
        <SectionTitle
          eyebrow="Arcane Arsenal"
          title="Skills"
          description="A battle-tested frontend stack, sharpened through production delivery and motion-focused interface systems."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon] ?? Code2;

            return (
              <article key={skill.name} className="card-noble rounded-2xl p-5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-violet-300" />
                    <h3 className="font-medium text-white">{skill.name}</h3>
                  </div>
                  <span className="skill-tag">{skill.level}%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-violet-900/40">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-300"
                  />
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
