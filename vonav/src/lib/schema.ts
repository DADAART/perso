/**
 * Constructeurs de données structurées JSON-LD (schema.org).
 * Toutes les fonctions reçoivent l'URL de base du site (Astro.site).
 */
import { NAP, SITE } from "../data/site";

const abs = (base: URL, path: string) => new URL(path, base).href;

/** Identifiants stables pour le graphe schema.org */
export const ID = {
  business: (base: URL) => `${base.origin}/#business`,
  organization: (base: URL) => `${base.origin}/#organization`,
  website: (base: URL) => `${base.origin}/#website`,
};

/** ProfessionalService + LocalBusiness (page d'accueil) */
export function localBusinessSchema(base: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ID.business(base),
    name: NAP.brand,
    legalName: NAP.legalName,
    description: SITE.defaultDescription,
    url: base.origin + "/",
    email: NAP.email,
    telephone: NAP.phoneE164,
    image: abs(base, SITE.defaultOgImage),
    logo: abs(base, "/favicon.svg"),
    priceRange: "€€",
    currenciesAccepted: "EUR",
    founder: { "@type": "Person", name: NAP.founder },
    address: {
      "@type": "PostalAddress",
      addressLocality: NAP.address.locality,
      addressRegion: NAP.address.region,
      postalCode: NAP.address.postalCode,
      addressCountry: NAP.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    areaServed: NAP.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
    knowsAbout: [
      "E-commerce",
      "Shopify",
      "Optimisation du taux de conversion (CRO)",
      "Référencement naturel (SEO)",
      "Publicité en ligne (SEA)",
      "Email marketing",
      "Direction e-commerce externalisée",
      "Stratégie e-commerce",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [SITE.social.linkedin],
    slogan: SITE.tagline,
  };
}

/** Organization (graphe global) */
export function organizationSchema(base: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ID.organization(base),
    name: NAP.brand,
    legalName: NAP.legalName,
    url: base.origin + "/",
    email: NAP.email,
    logo: abs(base, "/favicon.svg"),
    image: abs(base, SITE.defaultOgImage),
    founder: { "@type": "Person", name: NAP.founder },
    description: SITE.defaultDescription,
    sameAs: [SITE.social.linkedin],
  };
}

/** WebSite */
export function websiteSchema(base: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": ID.website(base),
    url: base.origin + "/",
    name: NAP.brand,
    inLanguage: "fr-FR",
    publisher: { "@id": ID.organization(base) },
  };
}

/** FAQPage (page d'accueil) */
export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

/** Article (article de blog) */
export function articleSchema(
  base: URL,
  opts: {
    url: string;
    headline: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    keywords?: string[];
  },
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    inLanguage: "fr-FR",
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: { "@type": "Person", name: NAP.founder, url: base.origin + "/" },
    publisher: {
      "@type": "Organization",
      name: NAP.brand,
      logo: { "@type": "ImageObject", url: abs(base, "/favicon.svg") },
    },
    image: opts.image ? abs(base, opts.image) : abs(base, SITE.defaultOgImage),
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    ...(opts.keywords && opts.keywords.length ? { keywords: opts.keywords.join(", ") } : {}),
  };
}

/** Fil d'Ariane */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** Service (pages cibles) */
export function serviceSchema(
  base: URL,
  opts: { name: string; serviceType: string; description: string; url: string; areaServed?: string[] },
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: opts.url,
    inLanguage: "fr-FR",
    provider: {
      "@type": "Organization",
      name: NAP.brand,
      url: base.origin + "/",
    },
    areaServed: (opts.areaServed ?? NAP.areaServed).map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
  };
}
