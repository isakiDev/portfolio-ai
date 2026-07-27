/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#0b141c",
        foreground: "#dae3ee",
        card: "#182028",
        primary: "#7bdb80",
        "primary-foreground": "#00390e",
        secondary: "#43474e",
        accent: "#ffb1c4",
        muted: "#141c24",
        "muted-foreground": "#c3c6cf",
        border: "#3f4a3d",
        ring: "#7bdb80",
      },
      fontFamily: {
        sans: ["Geist Sans", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
