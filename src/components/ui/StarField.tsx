"use client";

import { useEffect, useRef } from "react";

import { randomBetween } from "@/lib/utils";

interface StarNode {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  phase: number;
  speed: number;
  color: [number, number, number];
  flare?: number;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: [number, number, number];
  alpha: number;
  driftX: number;
  driftY: number;
  phase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  angle: number;
  start: number;
  duration: number;
}

const COLOR_TABLE: Array<{ weight: number; value: [number, number, number] }> = [
  { weight: 0.6, value: [255, 255, 255] },
  { weight: 0.2, value: [180, 200, 255] },
  { weight: 0.1, value: [255, 240, 180] },
  { weight: 0.1, value: [255, 180, 150] },
];

const pickStarColor = (): [number, number, number] => {
  const roll = Math.random();
  let cumulative = 0;

  for (const item of COLOR_TABLE) {
    cumulative += item.weight;
    if (roll <= cumulative) {
      return item.value;
    }
  }

  return [255, 255, 255];
};

const rgba = (color: [number, number, number], alpha: number): string =>
  `rgba(${color[0]},${color[1]},${color[2]},${alpha})`;

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animation = 0;
    let nextMeteor = performance.now() + randomBetween(4000, 8000);
    let shooting: ShootingStar | null = null;

    const pointer = { x: 0, y: 0 };

    const backgroundStars: StarNode[] = [];
    const midStars: StarNode[] = [];
    const foregroundStars: StarNode[] = [];
    const milkyWayDust: StarNode[] = [];
    const nebulae: Nebula[] = [];

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const repopulate = () => {
      backgroundStars.length = 0;
      midStars.length = 0;
      foregroundStars.length = 0;
      milkyWayDust.length = 0;
      nebulae.length = 0;

      const width = window.innerWidth;
      const height = window.innerHeight;

      for (let i = 0; i < 2400; i += 1) {
        backgroundStars.push({
          x: randomBetween(0, width),
          y: randomBetween(0, height),
          radius: randomBetween(0.2, 0.8),
          alpha: randomBetween(0.1, 0.9),
          phase: randomBetween(0, Math.PI * 2),
          speed: randomBetween(0.15, 0.45),
          color: pickStarColor(),
        });
      }

      for (let i = 0; i < 500; i += 1) {
        midStars.push({
          x: randomBetween(0, width),
          y: randomBetween(0, height),
          radius: randomBetween(0.5, 1.5),
          alpha: randomBetween(0.25, 0.95),
          phase: randomBetween(0, Math.PI * 2),
          speed: randomBetween(0.35, 0.8),
          color: pickStarColor(),
          flare: Math.random() > 0.72 ? randomBetween(0.1, 0.26) : undefined,
        });
      }

      for (let i = 0; i < 50; i += 1) {
        foregroundStars.push({
          x: randomBetween(0, width),
          y: randomBetween(0, height),
          radius: randomBetween(1.5, 3),
          alpha: randomBetween(0.75, 1),
          phase: randomBetween(0, Math.PI * 2),
          speed: randomBetween(0.75, 1.4),
          color: pickStarColor(),
        });
      }

      const angle = (35 * Math.PI) / 180;
      const cx = width / 2;
      const cy = height / 2;
      const halfBand = 150;

      for (let i = 0; i < 4600; i += 1) {
        const along = randomBetween(-Math.max(width, height), Math.max(width, height));
        const across = randomBetween(-halfBand, halfBand);
        const x = cx + along * Math.cos(angle) - across * Math.sin(angle);
        const y = cy + along * Math.sin(angle) + across * Math.cos(angle);

        milkyWayDust.push({
          x,
          y,
          radius: randomBetween(0.2, 0.5),
          alpha: randomBetween(0.06, 0.33),
          phase: randomBetween(0, Math.PI * 2),
          speed: randomBetween(0.2, 0.6),
          color: pickStarColor(),
        });
      }

      const nebulaPalette: [number, number, number][] = [
        [107, 33, 168],
        [0, 50, 150],
        [150, 0, 50],
        [0, 100, 100],
      ];

      for (let i = 0; i < 6; i += 1) {
        nebulae.push({
          x: randomBetween(-180, width + 180),
          y: randomBetween(-140, height + 140),
          radius: randomBetween(200, 500),
          color: nebulaPalette[i % nebulaPalette.length],
          alpha: randomBetween(0.04, 0.08),
          driftX: randomBetween(-2, 2),
          driftY: randomBetween(-2, 2),
          phase: randomBetween(0, Math.PI * 2),
        });
      }
    };

    const drawCrossFlare = (x: number, y: number, length: number, alpha: number, color: [number, number, number]) => {
      ctx.strokeStyle = rgba(color, alpha);
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(x - length, y);
      ctx.lineTo(x + length, y);
      ctx.moveTo(x, y - length);
      ctx.lineTo(x, y + length);
      ctx.stroke();
    };

    const draw = (time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      const baseGradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        40,
        width / 2,
        height / 2,
        Math.max(width, height),
      );
      baseGradient.addColorStop(0, "rgba(13,6,24,1)");
      baseGradient.addColorStop(0.55, "rgba(7,3,15,1)");
      baseGradient.addColorStop(1, "rgba(0,0,0,1)");
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate((35 * Math.PI) / 180);
      const bandGradient = ctx.createLinearGradient(0, -220, 0, 220);
      bandGradient.addColorStop(0, "rgba(180,160,255,0)");
      bandGradient.addColorStop(0.5, "rgba(180,160,255,0.03)");
      bandGradient.addColorStop(1, "rgba(180,160,255,0)");
      ctx.fillStyle = bandGradient;
      ctx.fillRect(-Math.max(width, height), -170, Math.max(width, height) * 2, 340);
      ctx.restore();

      const bgOffsetX = pointer.x * 0.02;
      const bgOffsetY = pointer.y * 0.02;
      const midOffsetX = pointer.x * 0.05;
      const midOffsetY = pointer.y * 0.05;
      const fgOffsetX = pointer.x * 0.1;
      const fgOffsetY = pointer.y * 0.1;
      const nebulaOffsetX = pointer.x * 0.015;
      const nebulaOffsetY = pointer.y * 0.015;

      for (const dust of milkyWayDust) {
        const tw = 0.7 + 0.3 * Math.sin(time * 0.0004 * dust.speed + dust.phase);
        ctx.beginPath();
        ctx.fillStyle = rgba(dust.color, dust.alpha * tw);
        ctx.arc(dust.x + bgOffsetX, dust.y + bgOffsetY, dust.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const star of backgroundStars) {
        const twinkle = 0.4 + 0.6 * Math.sin(time * 0.00045 * star.speed + star.phase);
        ctx.beginPath();
        ctx.fillStyle = rgba(star.color, star.alpha * twinkle);
        ctx.arc(star.x + bgOffsetX, star.y + bgOffsetY, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const star of midStars) {
        const twinkle = 0.45 + 0.55 * Math.sin(time * 0.00075 * star.speed + star.phase);
        const x = star.x + midOffsetX;
        const y = star.y + midOffsetY;

        ctx.beginPath();
        ctx.fillStyle = rgba(star.color, star.alpha * twinkle);
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        if (star.flare) {
          drawCrossFlare(x, y, 2, star.flare * twinkle, star.color);
        }
      }

      for (const star of foregroundStars) {
        const twinkle = 0.5 + 0.5 * Math.sin(time * 0.0011 * star.speed + star.phase);
        const x = star.x + fgOffsetX;
        const y = star.y + fgOffsetY;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, star.radius * 4);

        glow.addColorStop(0, rgba(star.color, 0.7 * twinkle));
        glow.addColorStop(1, rgba(star.color, 0));
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, star.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = rgba(star.color, star.alpha * twinkle);
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        drawCrossFlare(x, y, randomBetween(8, 15), 0.22 * twinkle, star.color);
      }

      for (const nebula of nebulae) {
        const drift = Math.sin(time * 0.0002 + nebula.phase);
        const x = nebula.x + nebulaOffsetX + drift * nebula.driftX;
        const y = nebula.y + nebulaOffsetY + drift * nebula.driftY;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, nebula.radius);
        grad.addColorStop(0, rgba(nebula.color, nebula.alpha));
        grad.addColorStop(1, rgba(nebula.color, 0));
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      const corePulse = 0.08 + ((Math.sin(time * 0.00078) + 1) / 2) * 0.07;
      ctx.save();
      ctx.translate(width * 0.6, height * 0.4);
      ctx.scale(2, 1);
      const core = ctx.createRadialGradient(0, 0, 0, 0, 0, 200);
      core.addColorStop(0, `rgba(168,85,247,${corePulse})`);
      core.addColorStop(1, "rgba(168,85,247,0)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(0, 0, 200, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      if (!shooting && time > nextMeteor) {
        shooting = {
          x: randomBetween(width * 0.35, width * 0.9),
          y: randomBetween(0, height * 0.45),
          length: randomBetween(80, 150),
          angle: (-Math.PI * randomBetween(30, 45)) / 180,
          start: time,
          duration: 800,
        };
      }

      if (shooting) {
        const progress = (time - shooting.start) / shooting.duration;
        if (progress >= 1) {
          shooting = null;
          nextMeteor = time + randomBetween(4000, 8000);
        } else {
          const travel = progress * 380;
          const sx = shooting.x + Math.cos(shooting.angle) * travel;
          const sy = shooting.y + Math.sin(shooting.angle) * travel;
          const ex = sx - Math.cos(shooting.angle) * shooting.length;
          const ey = sy - Math.sin(shooting.angle) * shooting.length;

          const trail = ctx.createLinearGradient(ex, ey, sx, sy);
          trail.addColorStop(0, "rgba(255,255,255,0)");
          trail.addColorStop(0.5, "rgba(255,255,255,0.95)");
          trail.addColorStop(1, "rgba(255,255,255,0)");

          ctx.strokeStyle = trail;
          ctx.lineWidth = 1.8;
          ctx.shadowColor = "rgba(255,255,255,0.55)";
          ctx.shadowBlur = 14;
          ctx.beginPath();
          ctx.moveTo(ex, ey);
          ctx.lineTo(sx, sy);
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      animation = window.requestAnimationFrame(draw);
    };

    const onPointerMove = (event: MouseEvent) => {
      pointer.x = event.clientX - window.innerWidth / 2;
      pointer.y = event.clientY - window.innerHeight / 2;
    };

    setSize();
    repopulate();
    animation = window.requestAnimationFrame(draw);

    const onResize = () => {
      setSize();
      repopulate();
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onPointerMove);
      window.cancelAnimationFrame(animation);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-20" aria-hidden="true" />;
}
