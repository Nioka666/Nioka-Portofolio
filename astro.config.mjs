import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://nioka.vercel.app",
  integrations: [react(), tailwind(), sitemap()],
  output: "static",
  // adapter: vercelServerless({
  //   isr: {
  //     expiration: 60 * 60 * 24,
  //   },
  // }),
});
