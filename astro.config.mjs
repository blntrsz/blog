import { defineConfig } from "astro/config";
import aws from "astro-sst/lambda";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  adapter: aws(),
  site: "https://blntrsz.com",
  integrations: [
    sitemap(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
