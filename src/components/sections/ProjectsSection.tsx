"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-noble">
        <SectionTitle
          eyebrow="Selected Works"
          title="Projects"
          description="A curated set of dark, animated products demonstrating UI engineering, interactivity, and visual storytelling."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08, duration: 0.65 }}
              className="card-noble flex h-full flex-col rounded-2xl p-5"
            >
              <h3 className="text-lg text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-violet-100/75">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-noble inline-flex items-center gap-2 px-4 py-2 text-xs"
                >
                  <GitFork size={14} /> GitHub
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-noble-solid inline-flex items-center gap-2 px-4 py-2 text-xs"
                >
                  <ExternalLink size={14} /> Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
