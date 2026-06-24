# VONAV — site vitrine

Studio de croissance digitale pour le tourisme et le terroir en Drôme.
Site statique **Astro**, hébergé gratuitement sur **Cloudflare Pages**. Contenu en français.

> 👉 Pour mettre le site en ligne et brancher vos comptes Google/formulaire,
> suivez **[`ETAPES-MANUELLES.md`](./ETAPES-MANUELLES.md)** (à faire une fois).

---

## Stack

- **Astro 5** (sortie 100 % statique / SSG)
- **@astrojs/sitemap** — `sitemap.xml` généré automatiquement
- **Polices auto-hébergées** (fontsource) : Fraunces, Hanken Grotesk, JetBrains Mono — aucun appel à Google Fonts
- **Tarteaucitron.js** auto-hébergé pour le consentement (RGPD/CNIL) + **Consent Mode v2**
- **Web3Forms** pour le formulaire de contact (gratuit, sans serveur)
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

Réglages à indiquer dans Cloudflare Pages :

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
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   ├── og/vonav-og.png         # image Open Graph (remplaçable)
│   └── tarteaucitron/          # bandeau de consentement (auto-hébergé)
├── src/
│   ├── data/
│   │   ├── site.ts             # ⭐ NAP, marque, PLACEHOLDERS (à éditer)
│   │   ├── personas.ts         # contenu des 3 sections "pour qui"
│   │   └── faq.ts              # questions/réponses (sert aussi au JSON-LD)
│   ├── lib/schema.ts           # constructeurs JSON-LD (schema.org)
│   ├── layouts/BaseLayout.astro# <head> SEO + consentement + header/footer
│   ├── components/             # Hero, Persona, Offers, Contact, ConsentManager…
│   ├── content/blog/           # articles (Markdown) — la collection "blog"
│   ├── content.config.ts       # schéma de la collection blog
│   ├── styles/global.css       # charte complète (reprise de la maquette)
│   └── pages/
│       ├── index.astro         # accueil
│       ├── blog/index.astro    # liste des articles
│       ├── blog/[...slug].astro# gabarit d'article
│       ├── mentions-legales.astro
│       ├── politique-confidentialite.astro
│       └── 404.astro
├── astro.config.mjs            # site = https://vonav.fr, sitemap
└── package.json
```

## Où modifier quoi

- **Coordonnées, marque, identifiants techniques** : `src/data/site.ts`
  (c'est ici que se trouvent tous les placeholders `GTM_CONTAINER_ID`,
  `GA4_MEASUREMENT_ID`, `FORM_BACKEND_ID`, `SIRET`).
- **Textes de l'accueil** : les composants dans `src/components/` et les données
  dans `src/data/personas.ts` / `src/data/faq.ts`.
- **Articles de blog** : ajoutez un fichier `.md` dans `src/content/blog/`
  (voir l'en-tête d'un article existant pour le format des métadonnées).
- **Couleurs & typographie** : variables CSS en haut de `src/styles/global.css`.

### Ajouter un article

Créez `src/content/blog/mon-article.md` :

```md
---
title: "Titre de l'article"
description: "Résumé pour le SEO (150–160 caractères)."
pubDate: 2026-07-01
tags: ["SEO local", "Drôme"]
---

Le contenu en Markdown…
```

L'URL sera automatiquement `/blog/mon-article/`. Mettez `draft: true` pour le
garder hors ligne.

## Notes techniques

- **Polices** : auto-hébergées via `@fontsource-variable/*`. Aucune requête vers
  Google Fonts (meilleure perf et conformité RGPD).
- **Consentement** : aucun tag (GTM/GA4) ne se déclenche avant acceptation.
  Le refus est aussi simple que l'acceptation (exigence CNIL).
- **`overrides.esbuild` dans `package.json`** : fige esbuild à une version stable.
  C'est sans risque ; vous pouvez retirer ce bloc si vous mettez Astro à jour.
- **Mise à jour d'Astro** : `npm install astro@latest @astrojs/sitemap@latest`.
  Vérifiez ensuite `npm run build`.

## Important

- **Aucun faux avis** : la section témoignages affiche des *exemples* explicitement
  étiquetés. Remplacez-les par de vrais avis, ou masquez la section en commentant
  `<Testimonials />` dans `src/pages/index.astro`.
- Les **textes légaux** (mentions légales, politique de confidentialité) sont un
  point de départ sérieux mais à **faire relire** avant mise en ligne, surtout une
  fois le SIRET obtenu.
