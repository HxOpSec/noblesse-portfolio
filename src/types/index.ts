export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  status?: string;
}

export interface Skill {
  name: string;
  level?: number;
  icon: string;
  label: string;
  color: string;
  badgeOnly?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  hue: number;
}
