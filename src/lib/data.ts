import type { NavLink, Project, Skill, SocialLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/HxOpSec", ariaLabel: "Visit HxOpSec on GitHub" },
  { name: "Telegram", href: "https://t.me/umedxo", ariaLabel: "Chat with Umed on Telegram" },
  { name: "Instagram", href: "https://instagram.com/umzhall", ariaLabel: "Visit Umed on Instagram" },
];

export const aboutParagraphs = [
  "My name is Umed, known online as HxOpSec. I am a cybersecurity student building from first principles on Parrot OS and Linux workflows.",
  "I am self-taught, three months deep, and focused on becoming a SOC analyst who can detect patterns, respond fast, and keep learning under pressure.",
];

export const aboutStats = [
  { label: "Focused Learning", value: "3 Months" },
  { label: "Primary Environment", value: "Parrot OS" },
  { label: "Direction", value: "SOC Analyst" },
  { label: "Mindset", value: "Relentless" },
];

export const softSkills = ["Pattern Recognition", "Discipline", "Curiosity", "Consistency", "Self-Direction", "Calm Under Pressure"];

export const skills: Skill[] = [
  { name: "C++", level: 25, icon: "FileCode2", label: "foundational growth", color: "#60a5fa" },
  { name: "Linux", level: 70, icon: "Terminal", label: "daily native usage", color: "#a3e635" },
  { name: "Parrot OS", level: 72, icon: "ShieldCheck", label: "primary system", color: "#22d3ee" },
  { name: "TCP/IP", level: 48, icon: "Network", label: "active practice", color: "#c084fc" },
  { name: "Networking", level: 50, icon: "Router", label: "building depth", color: "#a855f7" },
  { name: "Git", level: 74, icon: "GitBranch", label: "daily workflow", color: "#f97316" },
  { name: "GitHub", level: 76, icon: "GitFork", label: "project publishing", color: "#e2e8f0" },
  { name: "Cisco NetAcad", icon: "BadgeCheck", label: "in progress", color: "#1ba0d7", badgeOnly: true },
  { name: "IBM SkillsBuild", icon: "Award", label: "in progress", color: "#054ada", badgeOnly: true },
];

export const projects: Project[] = [
  {
    title: "PhantomScan",
    description:
      "A multi-threaded C++ network scanner focused on practical port discovery and system insight while keeping learning and safe experimentation at the center.",
    tags: ["C++", "Linux", "Networking", "Multi-threading"],
    githubUrl: "https://github.com/HxOpSec/PhantomScan",
    demoUrl: "https://github.com/HxOpSec/PhantomScan",
    status: "Live",
    quote: "Every open port is a story. I just learned to listen.",
  },
  {
    title: "Future Project 2",
    description:
      "A sandboxed lab workflow for controlled offensive simulations, logging outcomes and defensive lessons for SOC-style thinking.",
    tags: ["Lab", "Blue Team", "Automation"],
    githubUrl: "https://github.com/HxOpSec",
    demoUrl: "https://github.com/HxOpSec",
    status: "Planning",
    quote: "The best way to learn security is to break things safely.",
  },
  {
    title: "Future Project 3",
    description:
      "A packet and flow pattern notebook for building intuition on network anomalies and translating those findings into clear alerts.",
    tags: ["Network Analysis", "Detection", "SOC"],
    githubUrl: "https://github.com/HxOpSec",
    demoUrl: "https://github.com/HxOpSec",
    status: "Exploration",
    quote: "Code is just logic. Networks are just patterns. Find them.",
  },
  {
    title: "Future Project 4",
    description:
      "An open documentation stream for my cybersecurity growth path, including tools, failures, fixes, and practical runbooks.",
    tags: ["Documentation", "Linux", "Growth"],
    githubUrl: "https://github.com/HxOpSec",
    demoUrl: "https://github.com/HxOpSec",
    status: "Concept",
    quote: "You don't need permission to start learning.",
  },
];

export const heroContent = {
  name: "HxOpSec",
  realName: "Umed",
  role: "Cybersecurity Student & Aspiring SOC Analyst",
  location: "Parrot OS · Linux native",
  typewriterLines: [
    "Learning to see what others miss.",
    "Self-taught. Parrot OS. 3 months deep.",
    "C++ · Linux · Networks · Curiosity",
    "Future SOC Analyst. Building the path.",
    "I don't fear complexity. I chase it.",
  ],
  cvUrl: "/cv.pdf",
};
