import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';
import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://nioka.vercel.app",
  integrations: [react(), tailwind(), sitemap()],
  output: "server",
  // adapter: vercel({
  //   isr: {
  //     expiration: 60 * 60 * 24,
  //   },
  // }),
  adapter: vercelServerless({
    imageService: true,
    imagesConfig: {
      sizes: [320, 640, 1280],
    },
  }),
});
