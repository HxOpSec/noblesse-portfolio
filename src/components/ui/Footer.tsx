import { AtSign, GitFork, Send } from "lucide-react";

import { socialLinks } from "@/lib/data";

const iconMap = {
  GitHub: GitFork,
  Telegram: Send,
  Instagram: AtSign,
};

export function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto mb-6 h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-violet-500/70 to-transparent" />
      <div className="container-noble flex flex-col items-center gap-4 text-sm text-violet-200/85">
        <p>© 2024 HxOpSec · Built with curiosity</p>
        <div className="flex items-center justify-center gap-4">
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-violet-500/25"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
