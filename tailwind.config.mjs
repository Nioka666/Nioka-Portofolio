import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {
      screens: {
        miniphone: "350px",
      },
      borderWidth: {
        1: "1.8px",
      },
      colors: {
        nioprimary: "#f9f9f9",
      },
    },
  },
  plugins: [daisyui],
};
