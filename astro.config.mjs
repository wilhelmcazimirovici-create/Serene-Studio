import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.serenestudio.ro",
  output: "static",
  trailingSlash: "always",
  devToolbar: {
    enabled: false
  },
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date()
    })
  ]
});
