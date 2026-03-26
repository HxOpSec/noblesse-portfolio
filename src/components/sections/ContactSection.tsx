"use client";

import { FormEvent, useState } from "react";
import { AtSign, GitFork, Link2, Send } from "lucide-react";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { socialLinks } from "@/lib/data";

export function ContactSection() {
  const [notice, setNotice] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice("Message captured. Connect an API endpoint to deliver submissions.");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-noble">
        <SectionTitle
          eyebrow="Summon Me"
          title="Contact"
          description="Available for frontend projects, UI architecture, and premium web experience collaborations."
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <form className="card-noble rounded-2xl p-6" onSubmit={handleSubmit} aria-label="Contact form">
            <div className="grid gap-4">
              <label htmlFor="name" className="text-sm text-violet-100/85">
                Name
              </label>
              <input id="name" name="name" required className="input-noble rounded-xl px-4 py-3" />

              <label htmlFor="email" className="text-sm text-violet-100/85">
                Email
              </label>
              <input id="email" name="email" type="email" required className="input-noble rounded-xl px-4 py-3" />

              <label htmlFor="message" className="text-sm text-violet-100/85">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="input-noble rounded-xl px-4 py-3"
              />

              <button type="submit" className="btn-noble-solid mt-2 inline-flex w-fit items-center gap-2 px-6 py-3 text-sm font-semibold">
                Send Message <Send size={16} />
              </button>

              {notice ? (
                <p role="status" className="text-sm text-violet-200/90">
                  {notice}
                </p>
              ) : null}
            </div>
          </form>

          <aside className="card-noble rounded-2xl p-6">
            <h3 className="text-xl text-white">Social Links</h3>
            <div className="mt-4 space-y-3">
              {socialLinks.map((link) => {
                const socialIconMap = {
                  GitHub: GitFork,
                  LinkedIn: Link2,
                  Telegram: Send,
                  X: AtSign,
                } as const;
                const Icon = socialIconMap[link.name as keyof typeof socialIconMap] ?? AtSign;

                return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.ariaLabel}
                  className="flex items-center gap-2 text-violet-100/85 transition hover:text-violet-300"
                >
                  <Icon size={14} aria-hidden="true" />
                  {link.name}
                </a>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
