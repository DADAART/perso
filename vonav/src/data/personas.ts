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
    id: "vignerons",
    modifier: "persona--vigneron",
    accentVar: "var(--vine-deep)",
    eyebrow: "Vignerons & domaines",
    title: "Reprenez votre marge.",
    lead: "Vous faites un vin dont vous êtes fier, mais en ligne, on ne vous trouve pas — et le négoce fixe vos prix. Je vous aide à vendre vos bouteilles en direct et à remplir votre caveau.",
    roiHtml:
      "<strong>Le calcul :</strong> une caisse de plus vendue en direct chaque semaine peut suffire à rembourser l'accompagnement.",
    ctaLabel: "Parlons de votre domaine",
    items: [
      "Une <strong>boutique en ligne qui vend vraiment</strong> (Shopify), pensée pour l'expédition.",
      "Une <strong>marque et un récit</strong> qui vous distinguent des grandes maisons.",
      "Des <strong>photos et vidéos</strong> qui donnent envie d'ouvrir la bouteille.",
      "Des <strong>visites et dégustations remplies</strong>, grâce au référencement local.",
      "Une <strong>clientèle qui revient</strong> : emails, lancements de millésime, fidélité.",
    ],
    quote: "Je veux juste que mon travail soit reconnu — et arrêter de tout brader au négoce.",
    quoteCite: "— Ce que disent les vignerons",
  },
  {
    id: "hebergeurs",
    modifier: "persona--hebergeur",
    accentVar: "var(--river-deep)",
    eyebrow: "Gîtes & chambres d'hôtes",
    title: "Arrêtez de travailler pour Booking.",
    lead: "Vous avez créé un lieu qui a une âme. Mais entre les commissions des plateformes et les creux d'automne, vous ne soufflez jamais. Je remplis vos hébergements en direct — sans vous ajouter de travail.",
    roiHtml:
      "<strong>Le calcul :</strong> sur 60 nuitées par an, les commissions évitées remboursent souvent le site en une seule saison.",
    ctaLabel: "Remplir mes hébergements",
    items: [
      "Un <strong>site de réservation directe</strong> qui vous fait économiser les commissions.",
      "Des <strong>photos professionnelles</strong> : le vrai déclencheur de réservation.",
      "De l'<strong>occupation hors saison</strong> : cyclotouristes de la ViaRhôna, œnotourisme, télétravail.",
      "Des <strong>annonces optimisées</strong> et une tarification qui suit la demande.",
      "Des <strong>voyageurs qui reviennent</strong> et vous recommandent.",
    ],
    quote: "On voudrait remplir par nous-mêmes — sans y passer nos soirées.",
    quoteCite: "— Ce que disent les hébergeurs",
  },
  {
    id: "premium",
    modifier: "persona--premium",
    accentVar: "var(--gold-deep)",
    eyebrow: "Caves, groupes & destinations",
    title: "Un pilote, pas dix prestataires.",
    lead: "Vous avez le volume, les équipes et les ambitions — mais pas de chef d'orchestre digital. J'interviens comme votre directeur marketing externalisé : une stratégie, un cap, des résultats mesurés.",
    roiHtml:
      "<strong>L'idée :</strong> un interlocuteur unique, sur le terrain en Drôme, qui aligne vos leviers sur un seul objectif — le chiffre d'affaires.",
    ctaLabel: "Cadrer votre stratégie",
    items: [
      "Une <strong>feuille de route claire</strong> : acquisition, conversion, fidélisation.",
      "Le <strong>pilotage de vos leviers</strong> (SEO, publicité, CRM, e-commerce) au même endroit.",
      "Des <strong>décisions guidées par la marge</strong>, pas par les impressions.",
      "Une <strong>montée en compétence</strong> de vos équipes au passage.",
      "Un <strong>reporting lisible</strong>, présentable en comité.",
    ],
    quote: "On a les moyens d'agir, il nous manquait quelqu'un pour tenir le cap.",
    quoteCite: "— Ce que disent les structures établies",
  },
];
