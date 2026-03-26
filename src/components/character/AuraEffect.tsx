interface AuraEffectProps {
  hovered: boolean;
}

export function AuraEffect({ hovered }: AuraEffectProps) {
  return (
    <g
      className="origin-center transition-all duration-500"
      style={{
        opacity: hovered ? 0.9 : 0.4,
        transform: `scale(${hovered ? 1.15 : 1})`,
      }}
    >
      <ellipse cx="200" cy="290" rx="145" ry="210" fill="url(#auraGradient)" className="animate-auraBreathe" />
      <ellipse cx="200" cy="300" rx="170" ry="240" fill="url(#mistGradient)" className="animate-mistDrift" />
      <circle cx="200" cy="302" r="160" fill="none" stroke="rgba(196,181,253,0.25)" strokeWidth="1.4" />
      <circle cx="200" cy="302" r="182" fill="none" stroke="rgba(168,85,247,0.2)" strokeWidth="1" />
    </g>
  );
}
