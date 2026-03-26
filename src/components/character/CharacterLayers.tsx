interface CharacterLayersProps {
  hovered: boolean;
}

const particles = [
  { cx: 82, cy: 138, r: 2.4, color: "#a855f7", delay: "0.2s", opacity: 0.6 },
  { cx: 412, cy: 122, r: 1.8, color: "#ffffff", delay: "2.1s", opacity: 0.45 },
  { cx: 66, cy: 240, r: 2.2, color: "#c084fc", delay: "1.6s", opacity: 0.5 },
  { cx: 438, cy: 262, r: 2.8, color: "#a855f7", delay: "0.8s", opacity: 0.72 },
  { cx: 108, cy: 365, r: 1.9, color: "#ffffff", delay: "3.2s", opacity: 0.36 },
  { cx: 398, cy: 388, r: 2.1, color: "#c084fc", delay: "2.8s", opacity: 0.53 },
  { cx: 92, cy: 496, r: 2.5, color: "#a855f7", delay: "1.2s", opacity: 0.62 },
  { cx: 398, cy: 520, r: 1.6, color: "#ffffff", delay: "3.9s", opacity: 0.34 },
  { cx: 180, cy: 95, r: 2.2, color: "#c084fc", delay: "0.4s", opacity: 0.48 },
  { cx: 320, cy: 84, r: 2.6, color: "#a855f7", delay: "2.4s", opacity: 0.68 },
  { cx: 250, cy: 60, r: 1.5, color: "#ffffff", delay: "3.5s", opacity: 0.33 },
  { cx: 256, cy: 640, r: 2.9, color: "#a855f7", delay: "1.9s", opacity: 0.71 },
  { cx: 140, cy: 620, r: 1.7, color: "#c084fc", delay: "0.7s", opacity: 0.43 },
  { cx: 368, cy: 614, r: 2.3, color: "#ffffff", delay: "2.7s", opacity: 0.38 },
];

export function CharacterLayers({ hovered }: CharacterLayersProps) {
  return (
    <>
      <g>
        <path
          d="M170 208 C140 255, 114 350, 110 655 L390 655 C386 350, 360 255, 330 208 C307 170, 280 154, 250 154 C220 154, 193 170, 170 208 Z"
          fill="url(#cloakGradient)"
        />
        <path
          d="M170 208 C140 255, 114 350, 110 655 L390 655 C386 350, 360 255, 330 208 C307 170, 280 154, 250 154 C220 154, 193 170, 170 208 Z"
          fill="none"
          stroke="rgba(168,85,247,0.18)"
          strokeWidth="1.4"
        />
        <path
          d="M165 230 C145 302, 156 460, 172 655"
          fill="none"
          stroke="rgba(168,85,247,0.1)"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </g>

      <g>
        <path
          d="M195 256 C182 300, 185 380, 192 475 L308 475 C315 380, 318 300, 305 256 C297 230, 280 212, 250 208 C220 212, 203 230, 195 256 Z"
          fill="url(#torsoGradient)"
        />
        <path d="M228 204 L250 228 L272 204" fill="none" stroke="#f6f1e8" strokeWidth="8" strokeLinecap="round" />
      </g>

      <g>
        <path
          d="M206 184 C206 145, 226 118, 250 118 C274 118, 294 145, 294 184 C294 224, 275 255, 250 258 C225 255, 206 224, 206 184 Z"
          fill="#e8ddd0"
        />
        <path d="M225 206 C233 214, 267 214, 275 206" fill="none" stroke="rgba(120,90,84,0.28)" strokeWidth="1.6" />
        <path d="M240 229 Q250 233 260 229" fill="none" stroke="rgba(70,40,40,0.45)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M212 188 Q220 196 232 194" fill="none" stroke="rgba(120,90,84,0.24)" strokeWidth="1.2" />
        <path d="M288 188 Q280 196 268 194" fill="none" stroke="rgba(120,90,84,0.24)" strokeWidth="1.2" />
      </g>

      <g style={{ transformOrigin: "250px 170px" }} className="animate-hairSway">
        <path
          d="M180 190 C164 130, 188 82, 244 80 C304 78, 338 120, 324 198 C316 250, 316 318, 326 404 C310 336, 292 295, 278 258 C266 225, 250 214, 230 222 C208 230, 198 248, 190 286 C182 326, 180 366, 174 418 C174 336, 176 260, 180 190 Z"
          fill="#0a0a0a"
        />
        <path
          d="M206 100 C226 82, 252 76, 280 88"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M232 128 C236 156, 232 184, 224 220" fill="none" stroke="rgba(0,0,0,0.86)" strokeWidth="14" strokeLinecap="round" />
      </g>

      <g>
        <ellipse cx="236" cy="188" rx="4" ry="2.3" fill="#cc0000" filter="url(#eyeGlowBase)" />
        <ellipse cx="264" cy="188" rx="4" ry="2.3" fill="#cc0000" filter="url(#eyeGlowBase)" />
      </g>

      <g opacity={hovered ? 1 : 0.6} className="transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
        {particles.map((particle) => (
          <circle
            key={`${particle.cx}-${particle.cy}`}
            cx={particle.cx}
            cy={particle.cy}
            r={particle.r}
            fill={particle.color}
            style={{
              animation: `particleFloat ${6 + particle.r * 0.6}s ease-in-out infinite`,
              animationDelay: particle.delay,
              opacity: hovered ? 1 : particle.opacity,
              transformOrigin: `${particle.cx}px ${particle.cy}px`,
            }}
          />
        ))}
      </g>
    </>
  );
}
