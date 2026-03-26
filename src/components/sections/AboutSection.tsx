"use client";

import { motion } from "framer-motion";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { aboutStats } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-noble">
        <SectionTitle
          eyebrow="Biography"
          title="About"
          description="Noblesse-inspired frontend engineer focused on creating elegant products with animation polish, accessibility discipline, and performance-aware architecture."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, staggerChildren: 0.12 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {aboutStats.map((stat) => (
            <motion.article key={stat.label} variants={fadeInUp} className="card-noble rounded-2xl p-6">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-violet-100/75">{stat.label}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
