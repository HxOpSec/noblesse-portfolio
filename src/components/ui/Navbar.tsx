"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 16);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter((section): section is HTMLElement => section instanceof HTMLElement);

      let current = "#home";
      for (const section of sections) {
        if (scrollY >= section.offsetTop - 140) {
          current = `#${section.id}`;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[70] border-b transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
        isScrolled ? "border-violet-400/30 bg-black/75 backdrop-blur-xl" : "border-transparent bg-transparent",
      )}
    >
      <nav className="container-noble flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="text-noble-gradient font-heading text-lg tracking-[0.16em]" data-cursor="magnetic-target">
          HxOpSec
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1 text-xs uppercase tracking-[0.22em] transition-all duration-300",
                  active === link.href
                    ? "bg-violet-500/20 text-violet-100 shadow-[0_0_18px_rgba(168,85,247,0.3)]"
                    : "text-violet-100/70 hover:text-violet-200",
                )}
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
          "overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="border-t border-violet-400/25 bg-black/90 backdrop-blur-xl">
          <ul className="container-noble flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm uppercase tracking-[0.18em] transition duration-300",
                    active === link.href ? "bg-violet-500/15 text-violet-200" : "text-violet-100/85",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
