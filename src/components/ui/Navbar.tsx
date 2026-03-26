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
      setIsScrolled(scrollY > 12);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter((section): section is HTMLElement => section instanceof HTMLElement);

      let current = "#home";
      for (const section of sections) {
        if (scrollY >= section.offsetTop - 130) {
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
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
        isScrolled ? "bg-dark-glass border-noble" : "bg-transparent",
      )}
    >
      <nav className="container-noble flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="font-heading text-lg tracking-[0.16em] text-noble-gradient">
          HxOpSec
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm tracking-wide transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  active === link.href ? "text-violet-200" : "text-violet-100/80 hover:text-violet-300",
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
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="bg-dark-glass border-noble border-t">
          <ul className="container-noble flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "block py-1 transition duration-300",
                    active === link.href ? "text-violet-200" : "text-violet-100/90",
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
