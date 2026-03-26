interface CharacterLayersProps {
  hovered: boolean;
}

const particles = [
  { cx: 84, cy: 130, r: 2.2 },
  { cx: 306, cy: 116, r: 2.4 },
  { cx: 72, cy: 250, r: 1.8 },
  { cx: 328, cy: 260, r: 2 },
  { cx: 116, cy: 468, r: 2.1 },
  { cx: 286, cy: 478, r: 2.2 },
  { cx: 198, cy: 78, r: 1.6 },
  { cx: 248, cy: 86, r: 1.4 },
];

export function CharacterLayers({ hovered }: CharacterLayersProps) {
  return (
    <>
      <path
        d="M136 200 C112 260, 108 352, 120 506 L280 506 C292 352, 288 260, 264 200 C250 164, 232 146, 200 142 C168 146, 150 164, 136 200 Z"
        fill="url(#cloakGradient)"
      />
      <path
        d="M165 236 C152 282, 154 352, 164 480 L236 480 C246 352, 248 282, 235 236 C228 208, 218 192, 200 188 C182 192, 172 208, 165 236 Z"
        fill="rgba(17,10,28,0.92)"
      />
      <ellipse cx="200" cy="145" rx="47" ry="58" fill="#f8efff" />
      <path
        d="M154 136 C156 96, 182 72, 210 76 C246 82, 260 114, 252 152 C242 142, 224 136, 202 138 C184 140, 166 146, 154 158 Z"
        fill="#0a0812"
      />
      <path
        d="M146 172 C142 118, 170 76, 210 76 C246 76, 272 112, 264 178 C256 228, 248 284, 248 370 C236 314, 230 264, 226 214 C222 182, 210 164, 192 164 C172 164, 158 182, 152 214 C146 260, 142 314, 140 370 C140 298, 144 238, 146 172 Z"
        fill="url(#hairGradient)"
      />
      <ellipse cx="186" cy="148" rx="4.2" ry="2.6" fill={hovered ? "#ff4b6a" : "#d33a55"} opacity="0.95" />
      <ellipse cx="214" cy="148" rx="4.2" ry="2.6" fill={hovered ? "#ff4b6a" : "#d33a55"} opacity="0.95" />
      <ellipse
        cx="186"
        cy="148"
        rx="9"
        ry="6"
        fill="none"
        stroke={hovered ? "rgba(255,80,120,0.95)" : "rgba(255,80,120,0.4)"}
        strokeWidth="0.8"
        style={{ filter: hovered ? "url(#eyeGlowStrong)" : "url(#eyeGlow)" }}
      />
      <ellipse
        cx="214"
        cy="148"
        rx="9"
        ry="6"
        fill="none"
        stroke={hovered ? "rgba(255,80,120,0.95)" : "rgba(255,80,120,0.4)"}
        strokeWidth="0.8"
        style={{ filter: hovered ? "url(#eyeGlowStrong)" : "url(#eyeGlow)" }}
      />
      <g opacity={hovered ? 1 : 0} className="transition-opacity duration-500">
        {particles.map((particle) => (
          <circle
            key={`${particle.cx}-${particle.cy}`}
            cx={particle.cx}
            cy={particle.cy}
            r={particle.r}
            fill="rgba(233,213,255,0.95)"
            className="animate-starTwinkle"
          />
        ))}
      </g>
    </>
  );
}
