"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { AtSign, GitFork, Send } from "lucide-react";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";
import { socialLinks } from "@/lib/data";

const iconMap = {
  GitHub: GitFork,
  Telegram: Send,
  Instagram: AtSign,
};

export function ContactSection() {
  const { t } = useLanguage();
  const [notice, setNotice] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice("Signal received. Direct message me on Telegram or GitHub while backend relay is offline.");
  };

  return (
    <motion.section
      id="contact"
      className="section-padding"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container-noble">
        <SectionTitle eyebrow="Connect" title={t("contact_title")} description={t("contact_subtitle")} />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <form className="card-noble rounded-2xl p-6" onSubmit={handleSubmit} aria-label="Contact form">
            <div className="grid gap-4">
              <label htmlFor="name" className="text-sm text-violet-100/85">
                {t("contact_name")}
              </label>
              <input id="name" name="name" required className="input-noble rounded-xl px-4 py-3" />

              <label htmlFor="email" className="text-sm text-violet-100/85">
                {t("contact_email")}
              </label>
              <input id="email" name="email" type="email" required className="input-noble rounded-xl px-4 py-3" />

              <label htmlFor="message" className="text-sm text-violet-100/85">
                {t("contact_message")}
              </label>
              <textarea id="message" name="message" required rows={4} className="input-noble rounded-xl px-4 py-3" />

              <button
                type="submit"
                className="btn-noble-solid btn-pulse mt-2 inline-flex w-fit items-center gap-2 px-6 py-3 text-sm font-semibold transition-transform duration-500 ease-in-out"
              >
                {t("contact_send")} <Send size={16} />
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
                const Icon = iconMap[link.name as keyof typeof iconMap];
                if (!Icon) return null;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.ariaLabel}
                    className="flex items-center gap-2 rounded-lg border border-violet-500/20 px-3 py-2 text-violet-100/90 transition-all duration-200 ease-in-out hover:translate-x-1 hover:border-violet-300/40 hover:bg-violet-500/10 hover:text-[#a855f7] hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.55)]"
                  >
                    <Icon size={15} />
                    {link.name}
                  </a>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </motion.section>
  );
}
