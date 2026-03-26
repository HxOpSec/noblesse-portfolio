"use client";

import { motion } from "framer-motion";
import { GitFork } from "lucide-react";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  const project = projects[0];

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
        <SectionTitle eyebrow="Build Log" title="Projects" description="One real project, built to learn deeply and improve fast." />

        <article className="card-noble mx-auto max-w-3xl rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-2xl text-white">{project.title}</h3>
            <span className="rounded-full border border-violet-300/40 bg-violet-500/10 px-3 py-1 text-xs font-mono text-violet-100/90">
              {project.status}
            </span>
          </div>

          <p className="mt-4 leading-8 text-violet-100/84">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-violet-400/50 px-3 py-1 text-xs font-mono text-violet-200/90">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-noble inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold"
            >
              <GitFork size={16} /> GitHub Repository
            </a>
          </div>
        </article>
      </div>
    </motion.section>
  );
}
