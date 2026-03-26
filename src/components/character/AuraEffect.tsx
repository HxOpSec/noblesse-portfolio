interface AuraEffectProps {
  hovered: boolean;
}

const mistEllipses = [
  { cx: 185, cy: 616, rx: 115, ry: 34, delay: "0s" },
  { cx: 250, cy: 626, rx: 138, ry: 38, delay: "1.2s" },
  { cx: 314, cy: 614, rx: 110, ry: 30, delay: "2.4s" },
  { cx: 250, cy: 646, rx: 164, ry: 28, delay: "3.1s" },
];

export function AuraEffect({ hovered }: AuraEffectProps) {
  return (
    <>
      <g
        className="transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          opacity: hovered ? 0.92 : 0.46,
          transform: `scale(${hovered ? 1.2 : 1})`,
          transformOrigin: "250px 320px",
        }}
      >
        <ellipse cx="250" cy="320" rx="250" ry="300" fill="url(#deepAuraGradient)" className="animate-auraBreathe" />
      </g>

      <g className="transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ opacity: hovered ? 0.95 : 0.58 }}>
        {mistEllipses.map((mist) => (
          <ellipse
            key={`${mist.cx}-${mist.cy}`}
            cx={mist.cx}
            cy={mist.cy}
            rx={hovered ? mist.rx * 1.12 : mist.rx}
            ry={hovered ? mist.ry * 1.16 : mist.ry}
            fill="url(#mistGradient)"
            style={{
              animation: "mistDrift 8s ease-in-out infinite",
              animationDelay: mist.delay,
              transformOrigin: `${mist.cx}px ${mist.cy}px`,
            }}
          />
        ))}
      </g>

      <g className="animate-pulseGlow">
        <ellipse
          cx="236"
          cy="188"
          rx={hovered ? 14 : 10}
          ry={hovered ? 9 : 6}
          fill={hovered ? "rgba(200,0,0,0.9)" : "rgba(200,0,0,0.4)"}
          className="transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        />
        <ellipse
          cx="264"
          cy="188"
          rx={hovered ? 14 : 10}
          ry={hovered ? 9 : 6}
          fill={hovered ? "rgba(200,0,0,0.9)" : "rgba(200,0,0,0.4)"}
          className="transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        />
      </g>
    </>
  );
}
