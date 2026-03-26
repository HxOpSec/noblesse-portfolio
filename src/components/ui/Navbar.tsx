"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 14);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/45 backdrop-blur-xl border-b border-violet-400/20" : "bg-transparent",
      )}
    >
      <nav className="container-noble flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="font-heading text-lg tracking-[0.18em] text-noble-gradient glow-text">
          NOBLESSE
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-violet-100/85 transition hover:text-violet-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-violet-100 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 border-t border-violet-500/20 bg-black/80 backdrop-blur-xl",
          mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="container-noble flex flex-col gap-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-1 text-violet-100/90"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
