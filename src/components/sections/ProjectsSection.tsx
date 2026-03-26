"use client";

import { motion } from "framer-motion";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

const projectCards = [
  {
    title: "PhantomScan",
    description:
      "A multi-threaded C++ network scanner focused on practical port discovery and system insight while keeping learning and safe experimentation at the center.",
    tags: ["C++", "Linux", "Networking", "Multi-threading"],
    status: "Live",
    showHoverQuote: true,
  },
  {
    title: "Next Operation",
    description: "The next operation is already in progress. Details are not yet declassified.",
    tags: ["[REDACTED]", "[REDACTED]", "[REDACTED]"],
    status: "[CLASSIFIED]",
    showHoverQuote: false,
  },
] as const;

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <motion.section
      id="projects"
      className="section-padding"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container-noble">
        <SectionTitle
          eyebrow="Build Log"
          title={t("projects_title")}
          description={t("projects_subtitle")}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projectCards.map((project) => (
            <article
              key={project.title}
              className="project-card group relative min-h-[300px] overflow-hidden rounded-2xl border border-violet-500/35 bg-violet-950/25 p-6 transition-all duration-500 ease-in-out hover:border-violet-300/60"
            >
              <div className="space-y-4 transition-opacity duration-500 ease-in-out group-hover:opacity-20">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl text-white">{project.title}</h3>
                  {project.status ? (
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-mono ${
                        project.title === "Next Operation"
                          ? "border-[#dc2626]/60 bg-[#dc2626]/10 text-[#dc2626]"
                          : "border-violet-300/40 bg-violet-500/10 text-violet-100/90"
                      }`}
                    >
                      {project.status}
                    </span>
                  ) : null}
                </div>
                <p className="leading-7 text-violet-100/86">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.title}-${tag}-${index}`}
                      className={`rounded-full border border-violet-400/45 px-3 py-1 text-xs font-mono text-violet-200/90 ${project.title === "Next Operation" ? "blur-[4px]" : ""}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.showHoverQuote ? (
                <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-end gap-5 bg-[rgba(0,0,0,0.85)] p-6 text-center transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                  <p className="font-heading text-xl italic leading-8 text-violet-100 drop-shadow-[0_0_14px_rgba(168,85,247,0.55)]">“Every open port is a story. I just learned to listen.”</p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
