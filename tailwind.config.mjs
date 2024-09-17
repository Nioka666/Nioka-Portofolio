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
        niodark: "#1b1b1c",
        niodark2: "#2d2d2d",
        textdark: "#d6d6d6",
        textdark2: "#838383",
      },
    },
  },
  plugins: [daisyui],
};
