"use client";

import { motion } from "framer-motion";
import { Camera, Link2, Mail, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

const links = {
  github: "https://github.com/your-username",
  instagram: "https://instagram.com/your-handle",
  linkedin: "https://linkedin.com/in/your-handle",
  email: "hello@example.com",
  telegram: "https://t.me/username",
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Three.js",
];

const projects = [
  {
    name: "Astral Commerce",
    description:
      "A premium storefront experience with rich animations, ambient particles, and fast interactions.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/your-username/astral-commerce",
    liveDemoUrl: "https://example.com/astral-commerce",
  },
  {
    name: "Nebula Control",
    description:
      "A futuristic dashboard for real-time monitoring with cinematic transitions and modular UI architecture.",
    tags: ["React", "Framer Motion", "Charts"],
    githubUrl: "https://github.com/your-username/nebula-control",
  },
  {
    name: "Noctis Showcase",
    description:
      "An immersive product reveal page with layered storytelling and subtle motion choreography.",
    tags: ["GSAP", "UI/UX", "Performance"],
    liveDemoUrl: "https://example.com/noctis-showcase",
  },
];

const sectionTransition = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.04c-3.35.73-4.05-1.42-4.05-1.42a3.2 3.2 0 0 0-1.34-1.76c-1.09-.74.08-.72.08-.72a2.55 2.55 0 0 1 1.86 1.25 2.6 2.6 0 0 0 3.56 1.02 2.6 2.6 0 0 1 .77-1.64c-2.67-.31-5.47-1.34-5.47-5.97a4.68 4.68 0 0 1 1.25-3.25 4.36 4.36 0 0 1 .12-3.2s1.02-.33 3.35 1.24a11.6 11.6 0 0 1 6.1 0c2.32-1.57 3.35-1.24 3.35-1.24a4.36 4.36 0 0 1 .12 3.2 4.68 4.68 0 0 1 1.25 3.25c0 4.64-2.8 5.65-5.48 5.96a2.9 2.9 0 0 1 .82 2.24v3.32c0 .32.21.69.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export default function Home() {
  const [contactNotice, setContactNotice] = useState("");
  const telegramHandle = useMemo(
    () => links.telegram.split("/").filter(Boolean).at(-1) ?? "username",
    [],
  );

  const onContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactNotice("Message captured. Connect a backend endpoint to send it.");
  };

  return (
    <main className="relative overflow-hidden bg-[#05030d] text-violet-50">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.2),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.18),transparent_36%),radial-gradient(circle_at_50%_100%,rgba(76,29,149,0.32),transparent_42%),linear-gradient(180deg,#05030d_0%,#080512_45%,#04030a_100%)]" />
      <div className="stars pointer-events-none fixed inset-0 -z-10 opacity-40" />

      <section
        id="hero"
        className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-14 px-6 pb-16 pt-28 md:grid-cols-[1fr_480px]"
      >
        <motion.div {...sectionTransition}>
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-violet-300/80">
            Noblesse-Inspired Portfolio
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            Raizel-grade presence.
            <span className="block text-violet-300">Cinematic frontend craft.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-violet-100/80 md:text-lg">
            I build elegant, high-performance interfaces with modern animation,
            immersive storytelling, and premium interaction detail.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full border border-violet-300/50 bg-violet-500/20 px-6 py-3 text-sm font-medium text-violet-100 transition hover:-translate-y-0.5 hover:bg-violet-400/30"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-violet-100/25 px-6 py-3 text-sm font-medium text-violet-50 transition hover:-translate-y-0.5 hover:border-violet-300/60 hover:bg-violet-200/10"
            >
              Contact Me
            </a>
            <a
              href="/cv-placeholder.txt"
              download
              className="rounded-full border border-violet-200/30 px-6 py-3 text-sm font-medium text-violet-100 transition hover:-translate-y-0.5 hover:bg-violet-100/10"
            >
              Download CV
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-violet-200/20 p-2.5 transition hover:bg-violet-300/20"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-violet-200/20 p-2.5 transition hover:bg-violet-300/20"
            >
              <Camera className="h-4 w-4" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-violet-200/20 p-2.5 transition hover:bg-violet-300/20"
            >
              <Link2 className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div {...sectionTransition} className="group relative mx-auto w-full max-w-[460px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.3rem] border border-violet-400/30 bg-[#0b0816] shadow-[0_0_80px_rgba(139,92,246,0.2)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.15),transparent_35%),radial-gradient(circle_at_70%_65%,rgba(139,92,246,0.3),transparent_48%)] transition duration-700 group-hover:opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(167,139,250,0.28),transparent_34%),radial-gradient(circle_at_50%_80%,rgba(91,33,182,0.4),transparent_56%)] opacity-55 blur-2xl transition duration-700 group-hover:opacity-100 group-hover:blur-3xl" />
            <div className="absolute -inset-[22%] bg-[conic-gradient(from_160deg,transparent,rgba(167,139,250,0.2),transparent,rgba(167,139,250,0.25),transparent)] opacity-0 blur-2xl transition duration-700 group-hover:opacity-100" />

            <div className="absolute inset-6 rounded-[1.8rem] border border-violet-200/20 bg-gradient-to-b from-violet-300/10 to-transparent">
              <div className="absolute left-1/2 top-[20%] h-32 w-32 -translate-x-1/2 rounded-full bg-violet-200/12 blur-2xl transition duration-500 group-hover:bg-violet-100/25" />
              <div className="absolute left-1/2 top-[22%] h-52 w-[62%] -translate-x-1/2 rounded-[44%] border border-violet-100/25 bg-gradient-to-b from-violet-100/10 to-violet-600/15 shadow-[0_0_40px_rgba(167,139,250,0.18)]" />
              <div className="absolute left-1/2 top-[25%] h-6 w-20 -translate-x-1/2 rounded-full bg-white/70 opacity-70 blur-[1px] transition duration-500 group-hover:opacity-95" />
              <div className="absolute left-[36%] top-[30%] h-2.5 w-2.5 rounded-full bg-violet-100 transition duration-500 group-hover:scale-110 group-hover:bg-white" />
              <div className="absolute right-[36%] top-[30%] h-2.5 w-2.5 rounded-full bg-violet-100 transition duration-500 group-hover:scale-110 group-hover:bg-white" />
              <div className="absolute left-1/2 top-[37%] h-1 w-16 -translate-x-1/2 rounded-full bg-violet-100/80 transition duration-500 group-hover:h-1.5 group-hover:w-20 group-hover:bg-white" />
              <div className="absolute left-1/2 top-[45%] h-[40%] w-[58%] -translate-x-1/2 rounded-[36%] border border-violet-300/20 bg-gradient-to-b from-violet-200/8 to-violet-700/15" />
            </div>

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07050f] to-transparent" />
          </div>
          <p className="mt-3 text-center text-xs tracking-[0.25em] text-violet-300/70">
            HOVER TO AWAKEN AURA
          </p>
        </motion.div>
      </section>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24">
        <motion.section id="about" {...sectionTransition}>
          <h2 className="text-3xl font-semibold text-white">About Me</h2>
          <p className="mt-5 max-w-3xl text-violet-100/80 leading-8">
            I focus on blending engineering discipline with visual storytelling.
            My goal is to craft interfaces that feel calm, mysterious, and
            unmistakably premium while staying maintainable and accessible.
          </p>
        </motion.section>

        <motion.section id="skills" {...sectionTransition}>
          <h2 className="text-3xl font-semibold text-white">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-violet-200/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" {...sectionTransition}>
          <h2 className="text-3xl font-semibold text-white">Projects</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-violet-300/20 bg-violet-400/8 p-5 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium text-white">{project.name}</h3>
                <p className="mt-3 text-sm leading-7 text-violet-100/75">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-violet-200/10 px-3 py-1 text-xs text-violet-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3 text-xs">
                  {project.githubUrl ? (
                    <a
                      className="underline decoration-violet-300/40"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  ) : null}
                  {project.liveDemoUrl ? (
                    <a
                      className="underline decoration-violet-300/40"
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" {...sectionTransition}>
          <h2 className="text-3xl font-semibold text-white">Contact</h2>
          <div className="mt-7 grid gap-6 rounded-3xl border border-violet-300/20 bg-violet-400/10 p-6 md:grid-cols-[1.3fr_1fr]">
            <form
              className="grid gap-3"
              aria-label="Contact form"
              method="post"
              onSubmit={onContactSubmit}
            >
              <label className="text-sm text-violet-100/80" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-xl border border-violet-100/25 bg-black/30 px-4 py-3 outline-none transition focus:border-violet-300"
                placeholder="Your name"
              />
              <label className="text-sm text-violet-100/80" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-xl border border-violet-100/25 bg-black/30 px-4 py-3 outline-none transition focus:border-violet-300"
                placeholder="you@example.com"
              />
              <label className="text-sm text-violet-100/80" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="rounded-xl border border-violet-100/25 bg-black/30 px-4 py-3 outline-none transition focus:border-violet-300"
                placeholder="Let’s build something elegant"
              />
              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-violet-300/40 bg-violet-400/20 px-5 py-2.5 text-sm font-medium transition hover:bg-violet-300/30"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
              {contactNotice ? (
                <p className="text-sm text-violet-200/85" role="status">
                  {contactNotice}
                </p>
              ) : null}
            </form>

            <div className="space-y-4 rounded-2xl border border-violet-200/20 bg-black/25 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-violet-300/80">
                Direct Reach
              </p>
              <a href={`mailto:${links.email}`} className="flex items-center gap-3 text-violet-100">
                <Mail className="h-4 w-4" /> {links.email}
              </a>
              <a href={links.telegram} className="flex items-center gap-3 text-violet-100">
                <Send className="h-4 w-4" /> @{telegramHandle}
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
