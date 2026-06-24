// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// URL de production du site (sert aux URL canoniques, sitemap, Open Graph).
// ⚠️ À adapter si le domaine change.
export const SITE_URL = "https://vonav.fr";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  integrations: [
    sitemap({
      // Pages exclues du sitemap (légales : indexables mais on les sort des priorités hautes)
      filter: (page) =>
        !page.includes("/404") ,
      changefreq: "weekly",
      lastmod: new Date(),
    }),
  ],
});
