# AGENTS.md — Noblesse Portfolio Build Instructions

## Project Goal
Build a premium, dark, mystical, galaxy-themed interactive portfolio website 
inspired by Noblesse/Raizel aesthetics. Cinematic, polished, anime-inspired.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Lucide React

## Visual Theme
- Colors: black (#05030a), deep violet (#0d0618), neon purple (#a855f7), white highlights
- Background: animated star field (canvas), fog, cosmic gradients
- Font: Cinzel (headings) + Raleway (body) from Google Fonts
- Feel: dark, mysterious, cinematic, premium anime aesthetic

## Character (Hero Section)
- Raizel-inspired semi-3D layered SVG character
- Built from layered SVG elements: background glow, body, face, aura, overlay
- Animated: floating, aura breathing, mist drifting
- Hover effects: glow intensifies, aura expands, expression changes, particles appear
- Character stays in position on hover — only visual layers change
- NO religious symbols (no cross)

## Required Files to Create

### src/components/ui/
- `StarField.tsx` — Canvas star animation (200+ stars, twinkle, nebula glows)
- `Navbar.tsx` — Fixed top nav, blur backdrop, scroll-aware, mobile menu
- `CustomCursor.tsx` — Custom purple dot cursor with trailing ring
- `Footer.tsx` — Simple footer with social links and copyright
- `SectionTitle.tsx` — Reusable section heading with decorative line

### src/components/character/
- `RaizelCharacter.tsx` — Main layered SVG character component
- `AuraEffect.tsx` — Animated SVG aura rings and particles
- `CharacterLayers.tsx` — Individual SVG layers (body, face, cloak, glow)

### src/components/sections/
- `HeroSection.tsx` — Full viewport hero with character left, text right
- `AboutSection.tsx` — Bio, stats (2+ years, 15+ projects), dark glass cards
- `SkillsSection.tsx` — Skill cards with animated progress bars and icons
- `ProjectsSection.tsx` — Project cards with tags, GitHub/Demo buttons
- `ContactSection.tsx` — Contact form + social links

### src/lib/
- `data.ts` — All content: nav links, skills, projects, social links, about stats
- `utils.ts` — cn(), lerp(), clamp(), randomBetween(), mapRange()

### src/hooks/
- `useMouseParallax.ts` — Mouse position normalized -1 to 1
- `useScrollReveal.ts` — IntersectionObserver scroll reveal hook

### src/types/index.ts
- Interfaces: Project, Skill, SocialLink, NavLink, Star

## Hero Section Layout
```
[LEFT 50%]                    [RIGHT 50%]
Character SVG                 ── Noble Title ──
with aura glow                Your Name
floating animation            Frontend Developer
                              Typewriter effect
                              
                              [View Projects] [Download CV]
                              
                              GitHub | LinkedIn | Telegram
```

## Animation Requirements
- Framer Motion: fadeInUp, staggerChildren on section entry
- GSAP: scroll-triggered reveals, timeline for hero load sequence  
- Character: CSS keyframes (float, auraBreathe, mistDrift)
- Navbar: blur + opacity transition on scroll
- Cards: hover lift + glow border
- Buttons: clip-path polygon shape, glow on hover
- Smooth scroll between sections

## Character SVG Specification
Create RaizelCharacter.tsx as a layered SVG (viewBox 0 0 400 600):

Layer 1 (bottom): Radial gradient aura glow — purple/violet
Layer 2: Long dark cloak/coat shape — deep violet to black
Layer 3: Body silhouette — elegant, slim, noble posture  
Layer 4: Face — pale, calm, red eyes (two small ellipses), dark hair
Layer 5: Hair — long black flowing hair shapes
Layer 6 (top): Floating particle dots around character

On hover (group-hover): 
- Layer 1 aura opacity 0.4 → 0.9, scale 1 → 1.15
- Layer 6 particles opacity 0 → 1
- Red eyes glow filter intensifies
- Subtle blur shadow appears behind character

## Skills Data
HTML5, CSS3, JavaScript, TypeScript, React, Next.js, 
Tailwind CSS, Framer Motion, GSAP, Three.js, 
Node.js, Git, Figma, Docker

## Projects Data (4 projects)
1. Noblesse Portfolio — this site, Next.js + Framer Motion
2. Void Dashboard — analytics dashboard, React + Recharts  
3. Ethereal UI Kit — component library, React + Storybook
4. Galaxy Music Player — WebAudio API visualizer

## Social Links
- GitHub: https://github.com/HxOpSec
- LinkedIn: https://linkedin.com (placeholder)
- Telegram: https://t.me/username (placeholder)
- X: https://x.com/username (placeholder)

## CV Button
- Label: "Download CV"
- Link to: /cv.pdf (placeholder)
- Style: btn-noble-solid class

## CSS Classes (define in globals.css)
- `.btn-noble` — clip-path polygon button, purple border, glow on hover
- `.btn-noble-solid` — filled purple gradient button
- `.card-noble` — dark glass card, purple border glow on hover
- `.input-noble` — dark input, purple focus glow
- `.skill-tag` — monospace tag with purple border
- `.text-noble-gradient` — purple gradient text
- `.bg-noble-glass` — glassmorphism background
- `.glow-purple` — purple box-shadow glow
- `.glow-text` — purple text-shadow glow
- `.container-noble` — max-width 1280px centered
- `.section-padding` — 6rem vertical padding

## Animations (define in globals.css + tailwind.config.ts)
- `float` — translateY 0 → -12px → 0, 6s infinite
- `auraBreathe` — scale 1 → 1.1, opacity 0.4 → 0.85, 4s infinite
- `mistDrift` — translate + rotate, 8s infinite
- `pulseGlow` — scale + opacity pulse, 3s infinite
- `rotateSlow` — 360deg, 20s linear infinite
- `shimmer` — background-position sweep, 2.5s linear infinite
- `starTwinkle` — opacity 0.2 → 1, 3s infinite
- `fadeInUp` — opacity 0 + translateY 40px → visible, one-shot

## Code Quality Rules
- All components use 'use client' where needed
- TypeScript strict mode — no `any`
- Proper aria labels on interactive elements
- Mobile responsive (sm/md/lg breakpoints)
- All images have alt text
- Use cn() from utils for conditional classes

## File Naming
- Components: PascalCase.tsx
- Hooks: camelCase.ts with `use` prefix
- Utilities: camelCase.ts
- Types: index.ts

## DO NOT
- Use religious symbols anywhere
- Use white/light backgrounds
- Use generic fonts (Inter, Arial, system-ui)
- Create heavy 3D scenes (keep it SVG/CSS based)
- Add unnecessary dependencies
- Break mobile layout
```

---

## Потом в Copilot Chat напиши:
```
Please read AGENTS.md and implement all the files listed there. 
Start with globals.css and tailwind.config.ts, then create all components 
in the order listed. Follow all specifications exactly.
