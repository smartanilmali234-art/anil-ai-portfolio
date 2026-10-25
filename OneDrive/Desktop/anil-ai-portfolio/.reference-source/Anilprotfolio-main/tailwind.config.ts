import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDeep: "#050816",
        glass: "rgba(255, 255, 255, 0.03)",
        glassBorder: "rgba(255, 255, 255, 0.08)",
        primaryCyan: "#00E5FF",
        secondaryPurple: "#7B61FF",
        accentPink: "#FF4D9E",
        glowCyan: "#00F5FF",
        textMuted: "#A0AEC0"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      animation: {
        "gradient-shift": "gradientShift 8s ease infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" }
        }
      }
    }
  },
  plugins: [require("tailwind-scrollbar")]
};

export default config;
