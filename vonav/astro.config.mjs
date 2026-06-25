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
      // Exclut la 404 et les anciennes pages (devenues des redirections vers l'accueil)
      filter: (page) =>
        !page.includes("/404") &&
        !page.includes("/vignerons") &&
        !page.includes("/hebergeurs") &&
        !page.includes("/caves-destinations"),
      changefreq: "weekly",
      lastmod: new Date(),
    }),
  ],
});
