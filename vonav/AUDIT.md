# Audit VONAV — SEO · positionnement · UX · stratégie

Site : https://vonav.fr — studio de croissance digitale (tourisme & terroir, Drôme).

## 1. Synthèse

Base **techniquement excellente** (site statique ultra-rapide, données structurées,
sitemap, robots, consentement CNIL, GA4 via GTM, sémantique propre). Le principal
frein à la performance était **structurel** : tout le contenu vivait sur une seule
page, ce qui empêchait de se positionner sur les requêtes commerciales locales.
Ce point est **corrigé** dans cette mise à jour (pages cibles + maillage + suivi de
conversion). Le reste de la performance se jouera désormais **hors-site** (Google
Business Profile, avis, backlinks) et dans la **régularité du contenu**.

## 2. Points forts existants

- **Technique** : statique (Astro/Cloudflare), < 40 Ko HTML, 0 JS bloquant — vitesse idéale pour le SEO et la conversion.
- **Données structurées** : LocalBusiness/ProfessionalService, Organization, WebSite, FAQPage, Article + fil d'Ariane.
- **Fondamentaux** : titres/méta uniques, 1 seul h1 par page, hiérarchie Hn correcte, Open Graph, canonical, accessibilité AA.
- **Positionnement** : niche claire (Drôme, terroir), offre + prix affichés, diagnostic gratuit en porte d'entrée.

## 3. Changements poussés dans cette mise à jour

**SEO local (le levier n°1)**
- 3 **pages cibles** dédiées, indexables et optimisées :
  - `/vignerons/` — vente en direct, e-commerce du vin, référencement local.
  - `/hebergeurs/` — réservation directe, commissions Booking/Airbnb.
  - `/caves-destinations/` — directeur marketing externalisé.
- Chaque page : h1 + meta keywordés, contenu de fond, ROI chiffré, CTA, **JSON-LD Service + BreadcrumbList**, liens vers les guides du blog.
- **Maillage interne** : cartes « Pour qui » et footer pointent vers ces pages ; blog ↔ pages cibles.
- Section **« Zone d'intervention »** (Valence, Tain-l'Hermitage, Tournon, Crozes-Hermitage, Die/Diois, Montélimar, Nyons…) sur l'accueil et les pages — signaux géographiques.
- Mot-clé **« marketing digital »** ajouté (absent auparavant).
- **Meta descriptions** raccourcies (< 160 caractères, plus de troncature Google).

**Conversion (CRO) & mesure**
- **Suivi de conversion** : le formulaire pousse un event `generate_lead` dans le dataLayer à chaque envoi → à transformer en **conversion GA4** dans GTM.
- **CTA sticky mobile** : un bouton « Diagnostic gratuit » apparaît au scroll sur mobile.

## 4. Feuille de route — ce qui fera décoller la performance

### Priorité 1 — hors-site (toi, gros impact)
1. **Google Business Profile** : revendiquer la fiche, vérification vidéo, photos, puis **récolter des avis** régulièrement. C'est LE levier du référencement local.
2. **Marquer `generate_lead` comme conversion** dans GA4 (et créer la balise GA4 Event correspondante dans GTM) pour piloter au taux de conversion.
3. **Vrais avis clients** : remplacer les exemples « Exemple » par de vrais témoignages dès tes premiers clients (crédibilité + SEO + conversion).

### Priorité 2 — contenu & autorité
4. **Rythme blog** : 1 à 2 articles/mois sur des requêtes locales à intention claire, ex. :
   « créer une boutique en ligne pour vendre son vin », « augmenter ses réservations en direct »,
   « œnotourisme en Drôme », « agence SEO pour vigneron », « checklist Google Business Profile ».
5. **Backlinks locaux** : offices de tourisme, syndicats de vignerons, annuaires gîtes, partenaires, presse locale (Le Dauphiné…), interpro des vins.
6. **Page(s) service** complémentaires si pertinent (« création de site internet en Drôme », « agence SEO Drôme »).

### Priorité 3 — optimisation continue
7. **Lead magnet** : une checklist gratuite (PDF) en échange de l'email, pour capter les indécis et nourrir une séquence email.
8. **Mesure & itération** : suivre le taux de conversion du formulaire, puis A/B tester titres et CTA une fois quelques semaines de données accumulées.
9. **SIRET** : à renseigner dès attribution (footer + mentions légales).

## 5. Indicateurs à suivre (mensuel)

- Impressions & clics (Search Console) par page et par requête.
- Position moyenne sur les requêtes cibles (« réservation directe gîte Drôme », « vendre son vin en direct », « marketing digital tourisme Drôme »…).
- Nombre de demandes de diagnostic (`generate_lead`) et taux de conversion.
- Avis Google (nombre + note) et appels/visites depuis la fiche.

---
*Audit généré à l'appui du build du site. Les changements de cette mise à jour sont prêts ;
il reste à les pousser (Commit + Push), puis à dérouler la feuille de route ci-dessus.*
