/**
 * Configuration centrale du site VONAV.
 * ----------------------------------------------------------------------------
 * Tous les identifiants techniques à remplir sont des PLACEHOLDERS clairement
 * balisés (voir aussi ETAPES-MANUELLES.md). Ne jamais inventer de valeur.
 */

/* ============================================================
 * IDENTIFIANTS À REMPLIR (placeholders)
 * ============================================================ */
export const PLACEHOLDERS = {
  /** Conteneur Google Tag Manager, ex. "GTM-XXXXXXX" */
  GTM_CONTAINER_ID: "GTM-K74FVZC9",
  /** Mesure GA4, ex. "G-XXXXXXXXXX" (branché DANS GTM, pas en dur ici) */
  GA4_MEASUREMENT_ID: "G-G37STK6L99",
  /** Clé d'accès Web3Forms (backend du formulaire de contact) */
  FORM_BACKEND_ID: "8289a198-64a0-4eb4-ae8f-423ce4dfa5ff",
  /** SIRET de la micro-entreprise (pas encore attribué) */
  SIRET: "SIRET_A_COMPLETER",
} as const;

/* ============================================================
 * NAP — Nom / Adresse / Téléphone (doit être STRICTEMENT identique
 * partout, y compris sur Google Business Profile)
 * ============================================================ */
export const NAP = {
  /** Nom commercial affiché */
  brand: "VONAV",
  /** Raison sociale légale (micro-entreprise) */
  legalName: "VONAV — Charlélie Borel",
  founder: "Charlélie Borel",
  email: "bonjour@vonav.fr",
  /** Téléphone format affichage */
  phoneDisplay: "06 80 58 67 13",
  /** Téléphone format international (liens tel: et JSON-LD) */
  phoneE164: "+33680586713",
  /** Établissement de type "service-area business" : pas d'adresse de rue publiée */
  address: {
    locality: "Valence",
    region: "Drôme",
    regionCode: "26",
    postalCode: "26000",
    country: "FR",
  },
  /** Zones desservies (JSON-LD areaServed) */
  areaServed: [
    "France",
  ],
  /** Coordonnées approximatives de Valence (centre-ville) pour le geo JSON-LD */
  geo: { latitude: 44.9334, longitude: 4.892 },
} as const;

/* ============================================================
 * MARQUE & MÉTA GLOBALES
 * ============================================================ */
export const SITE = {
  name: "VONAV",
  /** Slogan court */
  tagline: "Votre directeur e-commerce externalisé.",
  /** Description par défaut (fallback meta) */
  defaultDescription:
    "Directeur e-commerce externalisé à temps partagé : j'orchestre la croissance en ligne (acquisition, conversion/CRO, fidélisation) des marques et e-commerçants, sans recrutement. À distance, partout en France.",
  /** Domaine de production (sans protocole) */
  domain: "vonav.fr",
  /** Années d'expérience à afficher (harmonisé partout) */
  experienceYears: 7,
  locale: "fr_FR",
  lang: "fr",
  /** Image Open Graph par défaut (dans /public/og/) */
  defaultOgImage: "/og/vonav-og.png",
  social: {
    linkedin: "https://www.linkedin.com/in/charlelie-borel/",
  },
} as const;

/* ============================================================
 * NAVIGATION
 * ============================================================ */
export const NAV_LINKS = [
  { href: "/#pour-qui", label: "Pour qui" },
  { href: "/#methode", label: "Méthode" },
  { href: "/#offres", label: "Offres" },
  { href: "/#apropos", label: "À propos" },
  { href: "/outils", label: "Outils" },
  { href: "/blog", label: "Blog" },
] as const;
