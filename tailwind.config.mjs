import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        miniphone: "350px",
        nionotebook: "1140px",
      },
      borderWidth: {
        1: "1.8px",
      },
      colors: {
        nioprimary: "#fafafa",
        niosecondary: "#f4f4f4",
        niothird: "#f8f8f8",
        niodark: "#0e0e10",
        niodark2: "#282828",
        // niodark2: "#2d2d2d",
        niodark3: "#222225",
        niodark4: "#161617",
        textdark: "#d6d6d6",
        textdark2: "#8f8f8f",
        textdark3: "#bfc0c3",
        textdark4: "#a9aaac",
        textdark5: "#58595a",
        borderbtm: "#434346",
      },
    },
  },
  plugins: [daisyui],
};
