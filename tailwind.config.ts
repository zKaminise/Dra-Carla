import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0D0F12",
          charcoal: "#111214",
          cream: "#F7F3EC",
          offwhite: "#FAF7F1",
          gold: "#C8A45D",
          "gold-light": "#D7B56D",
          "gold-dark": "#A8883D",
          "blue-clinical": "#DCECF6",
          "blue-mid": "#B8D4EA",
          "blue-deep": "#1E3446",
          "gray-text": "#5F6368",
          "gray-light": "#9CA3AF",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C8A45D 0%, #D7B56D 50%, #C8A45D 100%)",
        "dark-gradient": "linear-gradient(160deg, #0D0F12 0%, #1E3446 100%)",
        "cream-gradient": "linear-gradient(160deg, #FAF7F1 0%, #F0EBE0 100%)",
      },
      boxShadow: {
        "gold": "0 4px 24px rgba(200, 164, 93, 0.15)",
        "card": "0 2px 20px rgba(13, 15, 18, 0.06)",
        "card-hover": "0 8px 40px rgba(13, 15, 18, 0.12)",
        "deep": "0 20px 60px rgba(13, 15, 18, 0.15)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(200, 164, 93, 0)" },
          "50%": { boxShadow: "0 0 0 12px rgba(200, 164, 93, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
