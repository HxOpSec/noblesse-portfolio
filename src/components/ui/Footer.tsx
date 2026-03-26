import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-violet-500/20 py-8">
      <div className="container-noble flex flex-col items-center justify-between gap-4 text-sm text-violet-200/80 md:flex-row">
        <p>© {new Date().getFullYear()} HxOpSec. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.ariaLabel}
              className="transition hover:text-violet-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
