import type { NavLink, Project, Skill, SocialLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/HxOpSec", ariaLabel: "Visit GitHub profile" },
  { name: "Telegram", href: "https://t.me/umedxo", ariaLabel: "Visit Telegram profile" },
  { name: "Instagram", href: "https://instagram.com/umzhall", ariaLabel: "Visit Instagram profile" },
];

export const aboutParagraphs = [
  "I'm a self-taught cybersecurity student, 3 months into serious study after 6 months of finding my path. No classroom, no mentor — just curiosity, Linux, and the will to figure things out.",
  "I study through Cisco Networking Academy and IBM SkillsBuild. My goal is to become a SOC Analyst. My biggest strength isn't what I know yet — it's how fast I learn and how honest I am about where I stand.",
];

export const aboutStats = [
  { label: "Active Learning", value: "3mo" },
  { label: "Project Shipped", value: "1" },
  { label: "Certifications (in progress)", value: "2" },
  { label: "Drive to Grow", value: "∞" },
];

export const softSkills = [
  "Self-Taught",
  "Fast Learner",
  "Linux Native",
  "Honest",
  "Curious",
  "Goal-Oriented",
];

export const skills: Skill[] = [
  { name: "C++", level: 15, icon: "FileCode2", label: "just started", color: "#00599c" },
  { name: "Git", level: 70, icon: "GitBranch", label: "daily use", color: "#f05032" },
  { name: "GitHub", level: 75, icon: "Github", label: "daily use", color: "#e6edf3" },
  { name: "Linux", level: 60, icon: "Terminal", label: "comfortable", color: "#fcc624" },
  { name: "Parrot OS", level: 60, icon: "ShieldCheck", label: "main environment", color: "#00b4d8" },
  { name: "TCP/IP", level: 45, icon: "Network", label: "learning", color: "#a855f7" },
  { name: "Networking", level: 40, icon: "Router", label: "learning", color: "#7c3aed" },
  { name: "Cisco NetAcad", icon: "BadgeCheck", label: "in progress", color: "#1ba0d7", badgeOnly: true },
  { name: "IBM SkillsBuild", icon: "Award", label: "in progress", color: "#054ada", badgeOnly: true },
];

export const projects: Project[] = [
  {
    title: "PhantomScan",
    description:
      "My first real project — a multi-threaded port scanner built in C++ with AI-assisted development. Supports 50 parallel threads, OS detection via TTL analysis, service and firewall detection. Built to learn, not to impress.",
    tags: ["C++", "Networking", "Multi-threading", "Linux", "AI-assisted"],
    githubUrl: "https://github.com/HxOpSec/PhantomScan",
    demoUrl: "https://github.com/HxOpSec/PhantomScan",
    status: "First Project",
  },
];

export const heroContent = {
  name: "HxOpSec",
  role: "Cybersecurity Student",
  typewriterLines: [
    "Learning to see what others miss.",
    "Self-taught. Parrot OS. 3 months in.",
    "C++ · Linux · Networks · Curiosity",
    "Future SOC Analyst. Building the path.",
  ],
  cvUrl: "/cv.pdf",
};
