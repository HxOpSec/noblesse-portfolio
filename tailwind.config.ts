import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        noble: {
          black: "#020106",
          violet: "#0d0618",
          purple: "#a855f7",
          light: "#ddd6fe",
        },
      },
      transitionTimingFunction: {
        noble: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        auraBreathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.45" },
          "50%": { transform: "scale(1.08)", opacity: "0.78" },
        },
        mistDrift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(10px,-8px) scale(1.05)" },
        },
        pulseGlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.4" },
          "50%": { transform: "scale(1.12)", opacity: "0.9" },
        },
        hairSway: {
          "0%, 100%": { transform: "rotate(0deg) translateX(0)" },
          "50%": { transform: "rotate(1.2deg) translateX(1.5px)" },
        },
        particleFloat: {
          "0%, 100%": { transform: "translateY(0) scale(1)", opacity: "0.35" },
          "50%": { transform: "translateY(-10px) scale(1.08)", opacity: "0.85" },
        },
      },
      animation: {
        auraBreathe: "auraBreathe 5s ease-in-out infinite",
        mistDrift: "mistDrift 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        hairSway: "hairSway 6s ease-in-out infinite",
        particleFloat: "particleFloat 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
