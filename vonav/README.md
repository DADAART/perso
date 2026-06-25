# VONAV — site vitrine

**Directeur e-commerce externalisé / à temps partagé** pour les marques et e-commerçants.
Accompagnement à distance, partout en France. Site statique **Astro**, hébergé gratuitement
sur **Cloudflare Pages**. Contenu en français.

> 👉 Pour mettre le site en ligne et brancher vos comptes Google/formulaire,
> suivez **[`ETAPES-MANUELLES.md`](./ETAPES-MANUELLES.md)** (à faire une fois).

---

## Positionnement

VONAV propose une **direction e-commerce externalisée** (modèle « à temps partagé ») :
acquisition, optimisation de la conversion (CRO), fidélisation et pilotage des prestataires,
sans le coût d'un recrutement. Cible large : toute marque ou PME qui vend — ou veut vendre — en ligne.

## Stack

- **Astro 5** (sortie 100 % statique / SSG)
- **@astrojs/sitemap** — `sitemap-index.xml` généré automatiquement
- **Polices auto-hébergées** (fontsource) : **Jost** (titres) + **Hanken Grotesk** (texte & mono) — aucun appel à Google Fonts
- **Tarteaucitron.js** auto-hébergé pour le consentement (RGPD/CNIL) + **Consent Mode v2**
- **Web3Forms** — formulaire de contact **et** capture e-mail des outils interactifs (gratuit, sans serveur)
- Coût cible : **~0 €** hors nom de domaine

## Prérequis

- [Node.js](https://nodejs.org) **20 ou plus** (testé avec Node 22)
- npm (fourni avec Node)

## Démarrer

```bash
npm install      # installe les dépendances
npm run dev      # serveur de développement -> http://localhost:4321
```

## Construire & prévisualiser

```bash
npm run build    # génère le site statique dans dist/
npm run preview  # sert le contenu de dist/ en local pour vérifier
```

Le build doit se terminer sans erreur et produire `dist/` (HTML, CSS, polices,
`sitemap-index.xml`, `robots.txt`, dossier `tarteaucitron/`).

## Déploiement (Cloudflare Pages)

| Réglage | Valeur |
| --- | --- |
| Framework preset | **Astro** |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Variable d'environnement | `NODE_VERSION` = `22` |

Procédure pas-à-pas détaillée dans **[`ETAPES-MANUELLES.md`](./ETAPES-MANUELLES.md)**.

## Structure du projet

```
vonav/
├── public/                     # fichiers servis tels quels
│   ├── favicon.svg / favicon.png / apple-touch-icon.png
│   ├── robots.txt
│   ├── og/                     # images Open Graph (accueil, articles, …)
│   ├── vonav-logo.png / charlelie-borel.jpg
│   └── tarteaucitron/          # bandeau de consentement (auto-hébergé)
├── src/
│   ├── data/
│   │   ├── site.ts             # ⭐ NAP, marque, NAV, PLACEHOLDERS (à éditer)
│   │   ├── personas.ts         # contenu des 3 situations "pour qui"
│   │   └── faq.ts              # questions/réponses (sert aussi au JSON-LD)
│   ├── lib/schema.ts           # constructeurs JSON-LD (schema.org)
│   ├── layouts/BaseLayout.astro# <head> SEO + consentement + header/footer
│   ├── components/             # Hero, Segments, Persona, Why, Method, Offers,
│   │                           #   About, Testimonials, Faq, Contact,
│   │                           #   ConsentManager, StickyCta, ToolLeadForm
│   ├── content/blog/           # articles e-commerce (Markdown) — collection "blog"
│   ├── content.config.ts       # schéma de la collection blog
│   ├── styles/
│   │   ├── global.css          # charte du site
│   │   └── tools.css           # design system des outils interactifs (.vn-*)
│   └── pages/
│       ├── index.astro                       # accueil
│       ├── blog/index.astro                  # liste des articles
│       ├── blog/[...slug].astro              # gabarit d'article
│       ├── outils/index.astro                # accueil section Outils
│       ├── outils/calculateur-croissance.astro
│       ├── outils/calculateur-cac-ltv.astro
│       ├── outils/seuil-rentabilite-roas.astro
│       ├── outils/cout-paniers-abandonnes.astro
│       ├── vignerons.astro                   # ancienne page → redirection / (noindex)
│       ├── hebergeurs.astro                  # idem
│       ├── caves-destinations.astro          # idem
│       ├── mentions-legales.astro
│       ├── politique-confidentialite.astro
│       └── 404.astro
├── astro.config.mjs            # site = https://vonav.fr, sitemap (exclut 404 + redirections)
└── package.json
```

## Où modifier quoi

- **Coordonnées, marque, identifiants techniques** : `src/data/site.ts`
  (placeholders `GTM_CONTAINER_ID`, `GA4_MEASUREMENT_ID`, `FORM_BACKEND_ID`, `SIRET` ;
  c'est aussi ici qu'on édite le menu `NAV_LINKS`).
- **Textes de l'accueil** : composants dans `src/components/` + données
  `src/data/personas.ts` / `src/data/faq.ts`.
- **Articles de blog** : `src/content/blog/*.md`.
- **Outils interactifs** : `src/pages/outils/*.astro` (+ `src/styles/tools.css` et
  `src/components/ToolLeadForm.astro` pour la capture e-mail).
- **Couleurs & typographie** : variables CSS en haut de `src/styles/global.css`.

### Ajouter un article

Créez `src/content/blog/mon-article.md` :

```md
---
title: "Titre de l'article"
description: "Résumé pour le SEO (150–160 caractères)."
pubDate: 2026-07-01
tags: ["CRO", "Acquisition"]
heroImage: ../../assets/blog/mon-article.jpg   # facultatif
ogImage: /og/mon-article.jpg                   # facultatif
---

Le contenu en Markdown…
```

L'URL sera `/blog/mon-article/`. Mettez `draft: true` pour le garder hors ligne.

### Ajouter un outil interactif

Créez `src/pages/outils/mon-outil.astro` sur le modèle des calculateurs existants :

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import ToolLeadForm from "../../components/ToolLeadForm.astro";
import "../../styles/tools.css";
---
<BaseLayout title="…" description="…">
  <section class="vn-host"><div class="vn-wrap">
    <!-- en-tête + .vn-card (entrées) + .vn-readout (résultats) -->
    <ToolLeadForm tool="Nom de l'outil" />
  </div></section>
</BaseLayout>
<script>/* calcul + mise à jour de #tool-context pour la capture */</script>
```

Pensez à l'ajouter à la liste dans `src/pages/outils/index.astro`.
La capture e-mail (Web3Forms) déclenche l'événement `generate_lead` (suivi GA4),
avec un consentement obligatoire ; les chiffres saisis ne partent que si l'utilisateur soumet.

## Notes techniques

- **Polices** : auto-hébergées via `@fontsource-variable/*` (Jost + Hanken Grotesk).
  Aucune requête vers Google Fonts — y compris sur les pages outils (meilleure perf + RGPD).
- **Consentement** : aucun tag (GTM/GA4) ne se déclenche avant acceptation.
  Le refus est aussi simple que l'acceptation (exigence CNIL).
- **Anciennes pages terroir** (`vignerons`, `hebergeurs`, `caves-destinations`) : conservées
  uniquement comme **redirections `noindex` vers l'accueil** et exclues du sitemap. Elles
  peuvent être supprimées définitivement (et leurs redirections retirées du sitemap dans
  `astro.config.mjs`).
- **`overrides.esbuild` dans `package.json`** : fige esbuild à une version stable. Sans risque.
- **Mise à jour d'Astro** : `npm install astro@latest @astrojs/sitemap@latest`, puis `npm run build`.

## Important

- **Aucun faux avis** : la section témoignages affiche des *exemples* explicitement étiquetés.
  Remplacez-les par de vrais avis, ou masquez la section (`<Testimonials />` dans `src/pages/index.astro`).
- Les **textes légaux** (mentions légales, politique de confidentialité) sont un point de départ
  sérieux mais à **faire relire**, surtout une fois le SIRET obtenu.
