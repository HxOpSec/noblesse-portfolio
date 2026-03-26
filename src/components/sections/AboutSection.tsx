"use client";

import { motion } from "framer-motion";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";
import { aboutStats, softSkills } from "@/lib/data";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <motion.section
      id="about"
      className="section-padding"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container-noble">
        <SectionTitle eyebrow="Identity" title={t("about_title")} description={t("about_subtitle")} />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <article className="card-noble rounded-2xl p-6 leading-8 text-violet-100/90">
            <p>{t("about_bio1")}</p>
            <p className="mt-5">{t("about_bio2")}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {softSkills.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-violet-400/40 px-3 py-1 text-xs font-mono text-violet-200/95 transition-all duration-500 ease-in-out hover:border-[#a855f7] hover:shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {aboutStats.map((stat) => (
              <article key={stat.label} className="card-noble rounded-2xl border-l-[3px] border-l-[#a855f7] p-6">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-violet-100/80">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
