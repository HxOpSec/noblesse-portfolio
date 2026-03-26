"use client";

import { motion } from "framer-motion";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/lib/data";

export function ProjectsSection() {
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
          title="Projects"
          description="Project cards reveal the mindset behind each build — not just the stack."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="project-card group relative min-h-[280px] overflow-hidden rounded-2xl border border-violet-500/35 bg-violet-950/25 p-6 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-violet-300/60">
              <div className="space-y-4 transition-opacity duration-300 group-hover:opacity-20">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl text-white">{project.title}</h3>
                  {project.status ? (
                    <span className="rounded-full border border-violet-300/40 bg-violet-500/10 px-3 py-1 text-xs font-mono text-violet-100/90">
                      {project.status}
                    </span>
                  ) : null}
                </div>
                <p className="leading-7 text-violet-100/86">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={`${project.title}-${tag}`} className="rounded-full border border-violet-400/45 px-3 py-1 text-xs font-mono text-violet-200/90">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-center gap-5 bg-gradient-to-t from-black/90 via-violet-950/92 to-violet-900/70 p-6 text-center transition-transform duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0">
                <p className="font-heading text-xl italic leading-8 text-violet-100 drop-shadow-[0_0_14px_rgba(168,85,247,0.55)]">“{project.quote}”</p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-noble inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold"
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
