"use client";

import { useEffect, useRef } from "react";

import type { Star } from "@/types";
import { randomBetween } from "@/lib/utils";

const STAR_COUNT = 260;

function createStars(width: number, height: number): Star[] {
  return Array.from({ length: STAR_COUNT }, () => ({
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    size: randomBetween(0.5, 2.2),
    speed: randomBetween(0.05, 0.3),
    opacity: randomBetween(0.15, 0.85),
    twinkleSpeed: randomBetween(0.006, 0.02),
    hue: randomBetween(240, 290),
  }));
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let animationFrame = 0;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    let stars = createStars(canvas.width, canvas.height);

    const drawNebula = () => {
      const gradients = [
        { x: canvas.width * 0.2, y: canvas.height * 0.15, r: canvas.width * 0.35, c: "rgba(168, 85, 247, 0.18)" },
        { x: canvas.width * 0.8, y: canvas.height * 0.25, r: canvas.width * 0.3, c: "rgba(99, 102, 241, 0.12)" },
        { x: canvas.width * 0.5, y: canvas.height * 0.9, r: canvas.width * 0.4, c: "rgba(76, 29, 149, 0.2)" },
      ];

      gradients.forEach((g) => {
        const gradient = context.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.r);
        gradient.addColorStop(0, g.c);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);
      });
    };

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawNebula();

      time += 1;

      stars.forEach((star) => {
        const twinkle = (Math.sin(time * star.twinkleSpeed) + 1) / 2;
        const alpha = star.opacity * (0.35 + twinkle * 0.65);

        context.beginPath();
        context.fillStyle = `hsla(${star.hue}, 100%, 86%, ${alpha})`;
        context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        context.fill();

        star.y += star.speed;

        if (star.y > canvas.height + 2) {
          star.y = -2;
          star.x = randomBetween(0, canvas.width);
        }
      });

      animationFrame = window.requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      resize();
      stars = createStars(canvas.width, canvas.height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-20"
      aria-hidden="true"
    />
  );
}
