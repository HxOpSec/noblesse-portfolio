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
  { name: "LinkedIn", href: "https://linkedin.com", ariaLabel: "Visit LinkedIn profile" },
  { name: "Telegram", href: "https://t.me/username", ariaLabel: "Visit Telegram profile" },
  { name: "X", href: "https://x.com/username", ariaLabel: "Visit X profile" },
];

export const aboutStats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Built", value: "15+" },
  { label: "UI Components", value: "80+" },
];

export const skills: Skill[] = [
  { name: "HTML5", level: 95, icon: "FileCode2" },
  { name: "CSS3", level: 93, icon: "Palette" },
  { name: "JavaScript", level: 90, icon: "Braces" },
  { name: "TypeScript", level: 92, icon: "Code2" },
  { name: "React", level: 94, icon: "Atom" },
  { name: "Next.js", level: 92, icon: "Rocket" },
  { name: "Tailwind CSS", level: 95, icon: "Paintbrush" },
  { name: "Framer Motion", level: 88, icon: "Sparkles" },
  { name: "GSAP", level: 86, icon: "WandSparkles" },
  { name: "Three.js", level: 75, icon: "Orbit" },
  { name: "Node.js", level: 82, icon: "Server" },
  { name: "Git", level: 90, icon: "GitBranch" },
  { name: "Figma", level: 88, icon: "PenTool" },
  { name: "Docker", level: 78, icon: "Container" },
];

export const projects: Project[] = [
  {
    title: "Noblesse Portfolio",
    description:
      "A cinematic, galaxy-themed portfolio experience built with smooth section choreography and mystical visuals.",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    githubUrl: "https://github.com/HxOpSec/noblesse-portfolio",
    demoUrl: "#home",
  },
  {
    title: "Void Dashboard",
    description:
      "An analytics command center with dynamic visualizations, dark UI architecture, and real-time system insights.",
    tags: ["React", "TypeScript", "Recharts"],
    githubUrl: "https://github.com/HxOpSec/void-dashboard",
    demoUrl: "https://example.com/void-dashboard",
  },
  {
    title: "Ethereal UI Kit",
    description:
      "A reusable design system and component library delivering elegant motions and premium interaction patterns.",
    tags: ["React", "Storybook", "Design System"],
    githubUrl: "https://github.com/HxOpSec/ethereal-ui-kit",
    demoUrl: "https://example.com/ethereal-ui-kit",
  },
  {
    title: "Galaxy Music Player",
    description:
      "A WebAudio visualizer wrapped in a dark cosmic shell with immersive controls and ambient response effects.",
    tags: ["WebAudio API", "Canvas", "JavaScript"],
    githubUrl: "https://github.com/HxOpSec/galaxy-music-player",
    demoUrl: "https://example.com/galaxy-music-player",
  },
];

export const heroContent = {
  name: "HxOpSec",
  role: "Frontend Developer",
  description:
    "I craft premium interactive web experiences with elegant animations, clean architecture, and cinematic visual storytelling.",
  cvUrl: "/cv.pdf",
};
