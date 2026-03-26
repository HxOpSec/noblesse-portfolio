import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        noble: {
          black: "#05030a",
          violet: "#0d0618",
          purple: "#a855f7",
        },
      },
      maxWidth: {
        noble: "1280px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        auraBreathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.4" },
          "50%": { transform: "scale(1.1)", opacity: "0.85" },
        },
        mistDrift: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(8px, -10px) rotate(2deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        pulseGlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.08)", opacity: "0.9" },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        starTwinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        auraBreathe: "auraBreathe 4s ease-in-out infinite",
        mistDrift: "mistDrift 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        rotateSlow: "rotateSlow 20s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        starTwinkle: "starTwinkle 3s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.7s ease forwards",
      },
    },
  },
};

export default config;
