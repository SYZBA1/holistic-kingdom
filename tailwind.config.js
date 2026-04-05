/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "kingdom-green": "#2D5A27",
        "kingdom-dark": "#0A1A0A",
        "kingdom-deep": "#122612",
        "kingdom-yellow": "#FDCB01",
        "kingdom-cream": "#FAF9F6",
        "kingdom-lime": "#4ADE80",
        "kingdom-teal": "#076653",
        "kingdom-ink": "#142218"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "ui-serif", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(253, 203, 1, 0.5), 0 14px 45px rgba(18, 38, 18, 0.35)"
      }
    }
  },
  plugins: []
};
