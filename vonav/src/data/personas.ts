/** Données des trois sections "persona" de la home. */
export interface Persona {
  id: string;
  modifier: string; // classe CSS persona--*
  accentVar: string; // variable CSS de l'accent
  eyebrow: string;
  title: string;
  lead: string;
  roiHtml: string; // HTML (contient <strong>)
  ctaLabel: string;
  items: string[]; // HTML (contient <strong>)
  quote: string;
  quoteCite: string;
}

export const PERSONAS: Persona[] = [
  {
    id: "croissance",
    modifier: "persona--vigneron",
    accentVar: "var(--vine-deep)",
    eyebrow: "Vous vendez déjà en ligne",
    title: "Faites décoller vos ventes.",
    lead: "Vous avez du trafic et des commandes, mais la croissance plafonne et le coût d'acquisition grimpe. Je remets votre boutique sous tension — pour vendre plus avec ce que vous avez déjà.",
    roiHtml:
      "<strong>Le levier :</strong> +1 point de taux de conversion sur un trafic existant peut suffire à financer l'accompagnement.",
    ctaLabel: "Faire décoller mes ventes",
    items: [
      "De l'<strong>optimisation de la conversion (CRO)</strong> : tunnel d'achat, fiches produits, panier, mobile.",
      "Une <strong>acquisition rentable</strong> : SEO, publicité et emailing pilotés à la marge, pas aux impressions.",
      "De la <strong>rétention</strong> : email, CRM, fidélité — vendre plus à vos clients existants.",
      "Un <strong>pilotage par la donnée</strong> : on sait ce qui rapporte, on coupe ce qui gaspille.",
      "Des <strong>décisions orientées chiffre d'affaires</strong>, présentées clairement chaque mois.",
    ],
    quote: "On a du monde sur le site, mais ça ne convertit pas assez.",
    quoteCite: "— Ce que disent les e-commerçants",
  },
  {
    id: "lancement",
    modifier: "persona--hebergeur",
    accentVar: "var(--river-deep)",
    eyebrow: "Vous lancez ou refondez",
    title: "Une boutique qui vend dès le départ.",
    lead: "Création ou refonte : je cadre, je construis (Shopify) et je lance — pensé pour la conversion et l'expédition, pas seulement pour être beau.",
    roiHtml:
      "<strong>L'idée :</strong> un site n'a pas vocation à être une vitrine, mais un canal de vente rentable dès les premières semaines.",
    ctaLabel: "Lancer ma boutique",
    items: [
      "Un <strong>cadrage</strong> de votre offre, vos prix, votre positionnement.",
      "Une <strong>boutique Shopify</strong> orientée conversion, propre et rapide.",
      "Des <strong>fiches et visuels</strong> qui donnent envie d'acheter.",
      "Un <strong>tracking propre</strong> (analytics, conversions) pour piloter dès le premier jour.",
      "Un <strong>plan d'acquisition de lancement</strong> pour amener les premières ventes.",
    ],
    quote: "On veut un site qui vend, pas une vitrine qui dort.",
    quoteCite: "— Ce que disent les marques qui se lancent",
  },
  {
    id: "direction",
    modifier: "persona--premium",
    accentVar: "var(--gold-deep)",
    eyebrow: "Vous pilotez plusieurs prestataires",
    title: "Un seul chef d'orchestre.",
    lead: "Une agence pub, un dev, un consultant SEO… mais personne pour tenir le cap. J'interviens comme votre directeur e-commerce externalisé : une stratégie, des objectifs, des prestataires pilotés.",
    roiHtml:
      "<strong>L'idée :</strong> un interlocuteur unique qui aligne tous vos leviers sur un seul objectif — la marge.",
    ctaLabel: "Cadrer ma stratégie",
    items: [
      "Une <strong>feuille de route claire</strong> : acquisition, conversion, fidélisation.",
      "Le <strong>pilotage de vos prestataires</strong> (pub, dev, SEO) — vous ne courez plus après tout le monde.",
      "Des <strong>décisions guidées par la marge et la valeur client (LTV)</strong>, pas par les impressions.",
      "Un <strong>reporting lisible</strong>, présentable en comité.",
      "La <strong>montée en compétence</strong> de votre équipe au passage.",
    ],
    quote: "On dépense, mais personne ne tient le volant.",
    quoteCite: "— Ce que disent les marques établies",
  },
];
