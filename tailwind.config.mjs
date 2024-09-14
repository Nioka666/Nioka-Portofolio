import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector", '[data-mode="dark"]'],
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
        nioprimary: "#f8f8f8",
        niosecondary: "#f4f4f4",
      },
    },
  },
  plugins: [daisyui],
};
