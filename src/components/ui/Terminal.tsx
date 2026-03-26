"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

import { projects, skills, socialLinks } from "@/lib/data";

const bootLines = [
  "[SYSTEM] Initializing HxOpSec portfolio v1.0...",
  "[NETWORK] Scanning localhost... OK",
  "[SECURITY] No threats detected.",
  "[STATUS] All systems operational.",
  "> _",
];

const commandOutput = (command: string): string[] => {
  const normalized = command.trim().toLowerCase();

  if (normalized === "whoami") {
    return ["HxOpSec — cybersecurity student"];
  }

  if (normalized === "skills") {
    return ["Skills:", ...skills.map((skill) => `- ${skill.name} (${skill.label})`)];
  }

  if (normalized === "projects") {
    return ["Projects:", ...projects.map((project) => `- ${project.title}: ${project.status ?? "active"}`)];
  }

  if (normalized === "contact") {
    return ["Contact:", ...socialLinks.map((social) => `- ${social.name}: ${social.href}`)];
  }

  if (normalized === "help") {
    return ["Commands: whoami, skills, projects, contact, clear, exit"];
  }

  return ["Command not recognized. Type 'help' for commands."];
};

export function Terminal() {
  const [open, setOpen] = useState(false);
  const [bootIndex, setBootIndex] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const openTerminal = () => {
    setBootIndex(0);
    setHistory([]);
    setInput("");
    setOpen(true);
  };

  const closeTerminal = () => {
    setOpen(false);
  };

  useEffect(() => {
    const onShortcut = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "`") {
        event.preventDefault();
        if (open) {
          closeTerminal();
        } else {
          openTerminal();
        }
      }
    };

    window.addEventListener("keydown", onShortcut);
    return () => window.removeEventListener("keydown", onShortcut);
  }, [open]);

  useEffect(() => {
    if (!open || bootIndex >= bootLines.length) {
      return;
    }

    const timer = window.setTimeout(() => {
      setHistory((prev) => [...prev, bootLines[bootIndex]]);
      setBootIndex((prev) => prev + 1);
    }, 220);

    return () => window.clearTimeout(timer);
  }, [open, bootIndex]);

  const ready = useMemo(() => open && bootIndex >= bootLines.length, [open, bootIndex]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const command = input.trim();
    if (!command) return;

    if (command.toLowerCase() === "exit") {
      closeTerminal();
      return;
    }

    if (command.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = commandOutput(command);
    setHistory((prev) => [...prev, `> ${command}`, ...output]);
    setInput("");
  };

  return (
    <aside
      className="fixed inset-x-0 bottom-0 z-[9997]"
      style={{
        transform: open ? "translateY(0)" : "translateY(102%)",
        transition: "transform 420ms cubic-bezier(0.4,0,0.2,1)",
      }}
      aria-hidden={!open}
    >
      <div className="mx-auto w-full max-w-6xl rounded-t-2xl border border-[#00ff41]/30 bg-black/95 px-5 py-4 shadow-[0_-10px_40px_rgba(0,0,0,0.6)]">
        <div className="mb-3 flex items-center justify-between text-xs font-mono uppercase tracking-[0.18em] text-[#00ff41]/80">
          <span>secure shell // HxOpSec</span>
          <button
            type="button"
            className="rounded border border-[#00ff41]/40 px-2 py-1 text-[10px] hover:bg-[#00ff41]/10"
            onClick={closeTerminal}
          >
            close
          </button>
        </div>
        <div className="max-h-56 overflow-y-auto rounded border border-[#00ff41]/20 bg-black p-3 font-mono text-sm text-[#00ff41]">
          {history.map((line, index) => (
            <p key={`${line}-${index}`} className="leading-6">
              {line}
            </p>
          ))}
          {!ready ? <p className="opacity-70">booting...</p> : null}
        </div>
        <form onSubmit={onSubmit} className="mt-3 flex items-center gap-2 font-mono text-sm text-[#00ff41]">
          <span>&gt;</span>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled={!ready}
            className="w-full bg-transparent outline-none disabled:opacity-40"
            aria-label="Terminal command input"
            autoComplete="off"
          />
        </form>
      </div>
    </aside>
  );
}
