/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#7bdb80",
        "on-primary": "#00390e",
        "primary-container": "#238636",
        "on-primary-container": "#f9fff3",
        secondary: "#c3c6cf",
        "secondary-container": "#43474e",
        tertiary: "#ffb1c4",
        "on-surface": "#dae3ee",
        surface: "#0b141c",
        "surface-container": "#182028",
        "surface-container-low": "#141c24",
        "surface-container-high": "#222b33",
        "outline-variant": "#3f4a3d",
      },
      fontFamily: {
        sans: ["Geist Sans", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      fontSize: {
        display: [
          "48px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.04em",
            fontWeight: "600",
          },
        ],
        "headline-lg": [
          "32px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
        "label-mono": [
          "12px",
          {
            lineHeight: "1",
            letterSpacing: "0.05em",
            fontWeight: "500",
          },
        ],
      },
      spacing: {
        "section-gap": "8rem",
      },
      maxWidth: {
        "container-max": "1000px",
      },
    },
  },
  plugins: [],
};
