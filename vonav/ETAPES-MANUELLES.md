# VONAV — étapes manuelles (à faire une fois)

Ce guide couvre tout ce qui dépend **de vos comptes Google / Cloudflare** et ne peut
pas être automatisé. Faites-le dans l'ordre. À chaque étape, on indique **où coller**
chaque identifiant dans le code.

> 🗂️ **Tous les identifiants techniques se collent dans un seul fichier :**
> `src/data/site.ts`, dans l'objet `PLACEHOLDERS`. Après chaque modification,
> relancez `npm run build` (ou laissez Cloudflare reconstruire automatiquement).

---

## Ordre recommandé

1. Acheter le nom de domaine **vonav.fr**
2. Créer un compte **Cloudflare** et déployer le site (**Cloudflare Pages**)
3. Relier le domaine à Cloudflare
4. Brancher le **formulaire** (Web3Forms) — *indispensable pour recevoir les demandes*
5. Créer la propriété **GA4**
6. Créer le conteneur **GTM** et y brancher GA4 (Consent Mode)
7. Vérifier **Google Search Console** et soumettre le sitemap
8. Créer / revendiquer **Google Business Profile**
9. Renseigner le **SIRET** quand vous l'aurez

---

## 1. Acheter le domaine vonav.fr (chez GoDaddy)

1. Sur [godaddy.com](https://www.godaddy.com), recherchez **vonav.fr** et ajoutez-le au panier.
2. Au paiement, **décochez les options payantes proposées** (protection de la
   confidentialité du Whois — souvent incluse/automatique pour le `.fr`, hébergement,
   adresse e-mail pro, etc.) : vous n'en avez pas besoin pour ce projet.
3. Notez le **prix de renouvellement** (la 1re année est en promo ; le tarif remonte
   ensuite). Vous pourrez activer le renouvellement automatique ou le faire à la main.

➡️ Rien à coller pour l'instant. Le domaine est déjà câblé dans le code
(`astro.config.mjs` → `SITE_URL = "https://www.vonav.fr"`). Si vous choisissez une
autre extension, modifiez cette ligne **et** le `Sitemap:` dans `public/robots.txt`.

## 2. Créer un compte Cloudflare et déployer (Cloudflare Pages)

1. Créez un compte sur [dash.cloudflare.com](https://dash.cloudflare.com).
2. Menu **Workers & Pages → Create → Pages**.
3. Deux options :
   - **Via Git (recommandé)** : poussez ce dossier sur un dépôt GitHub/GitLab, puis
     « Connect to Git » et choisissez le dépôt.
   - **Upload direct** : lancez `npm run build` en local, puis glissez le dossier
     `dist/` dans « Upload assets ».
4. Réglages de build (si via Git) :
   - **Framework preset** : `Astro`
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
   - **Variable d'environnement** : `NODE_VERSION` = `22`
5. Lancez le déploiement. Vous obtenez une URL `…pages.dev` pour tester.

## 3. Relier le domaine GoDaddy à Cloudflare

Le domaine est chez **GoDaddy**, le site chez **Cloudflare Pages**. La méthode la
plus propre est de confier le DNS à Cloudflare :

1. Dans Cloudflare : **Add a site** → `vonav.fr` (plan **Free**). Cloudflare scanne
   vos DNS et vous donne **deux serveurs de noms** (ex. `xxx.ns.cloudflare.com`).
2. Dans **GoDaddy** : *My Products → Domains → vonav.fr → DNS → Nameservers →
   Change → I'll use my own nameservers* et collez les deux serveurs de Cloudflare.
   La propagation prend de quelques minutes à quelques heures.
3. De retour dans Cloudflare, projet **Workers & Pages → votre projet → Custom
   domains** : ajoutez `www.vonav.fr` (et `vonav.fr` redirigé vers `www`).
   Cloudflare crée les enregistrements et le **certificat HTTPS** automatiquement.

> Alternative sans changer les nameservers : garder le DNS chez GoDaddy et y créer
> un enregistrement **CNAME** `www` → la cible `…pages.dev` indiquée par Cloudflare.
> C'est possible, mais la bascule des nameservers vers Cloudflare reste plus simple
> et débloque les réglages DNS pour Search Console (étape 7).

> Le site utilise `https://www.vonav.fr` comme URL canonique. Si vous préférez la
> version **sans `www`**, modifiez `SITE_URL` dans `astro.config.mjs` et le
> `Sitemap:` dans `public/robots.txt`, puis redéployez.

## 4. Brancher le formulaire de contact (Web3Forms)

Le formulaire envoie déjà les données ; il lui manque seulement votre **clé d'accès**.

1. Allez sur [web3forms.com](https://web3forms.com), section « Create your Access Key ».
2. Saisissez l'e-mail qui recevra les demandes : **bonjour@vonav.fr**.
3. Vous recevez une **clé d'accès** (Access Key) par e-mail. Copiez-la.
4. Collez-la dans `src/data/site.ts` :

   ```ts
   FORM_BACKEND_ID: "votre-cle-web3forms-ici",
   ```

5. Redéployez, puis **testez** : remplissez le formulaire sur le site et vérifiez
   la réception de l'e-mail (pensez aux spams la première fois).

C'est gratuit, sans limite mensuelle bloquante, et le honeypot anti-spam est déjà en
place. Vous pouvez aussi créer un compte Web3Forms pour activer l'auto-réponse.

## 5. Créer la propriété GA4 (Google Analytics 4)

1. Sur [analytics.google.com](https://analytics.google.com), créez un **compte** puis
   une **propriété** GA4 pour vonav.fr.
2. Créez un flux de données « Web » → vous obtenez un **ID de mesure** `G-XXXXXXXXXX`.
3. Collez-le dans `src/data/site.ts` :

   ```ts
   GA4_MEASUREMENT_ID: "G-XXXXXXXXXX",
   ```

   > GA4 n'est **pas** posé en dur dans le code : il se branche **dans GTM**
   > (étape suivante). On garde l'ID ici uniquement pour mémoire/documentation.

## 6. Créer le conteneur GTM et y brancher GA4

1. Sur [tagmanager.google.com](https://tagmanager.google.com), créez un **conteneur**
   « Web » → vous obtenez un ID `GTM-XXXXXXX`.
2. Collez-le dans `src/data/site.ts` :

   ```ts
   GTM_CONTAINER_ID: "GTM-XXXXXXX",
   ```

   Dès que cet ID commence par `GTM-`, le bandeau de consentement chargera GTM
   **après acceptation** (et seulement à ce moment-là).
3. Dans GTM, créez une **balise GA4 Configuration** avec votre `G-XXXXXXXXXX`,
   déclenchée sur « All Pages » (Consent Initialization / All Pages).
4. **Consent Mode** : le site pose déjà les valeurs par défaut sur `denied`
   (dans `BaseLayout.astro`) et les passe à `granted` quand l'utilisateur accepte.
   Dans GTM, vérifiez dans **Admin → Container Settings** que « Consent Overview »
   est activé ; les balises Google (GA4) respectent `analytics_storage`
   automatiquement. Ne posez aucune balise sur « All Pages » sans condition de
   consentement autre que GA4 (qui est consent-aware par défaut).
5. **Publiez** le conteneur GTM, puis redéployez le site.
6. Test : en navigation privée, refusez les cookies → aucune requête vers Google.
   Acceptez → GA4 doit recevoir la visite (vérifiez dans GA4 → Temps réel).

## 7. Google Search Console + sitemap

1. Sur [search.google.com/search-console](https://search.google.com/search-console),
   ajoutez une propriété de type **Domaine** : `vonav.fr`.
2. Vérification par **enregistrement DNS** : Google fournit un enregistrement **TXT**
   à ajouter dans Cloudflare (DNS → Records → Add record → type TXT).
3. Une fois vérifié, allez dans **Sitemaps** et soumettez :

   ```
   https://www.vonav.fr/sitemap-index.xml
   ```

## 8. Google Business Profile (fiche d'établissement)

1. Sur [business.google.com](https://business.google.com), créez ou **revendiquez**
   votre fiche **VONAV — Charlélie Borel**.
2. **NAP strictement identique** à celui du site (voir `src/data/site.ts`) :
   - Nom : **VONAV** (ou « VONAV — Charlélie Borel »)
   - Zone : **Valence (26), Drôme** — établissement « zone desservie »
     (pas d'adresse de rue affichée), zones : Drôme, vallée du Rhône,
     Crozes-Hermitage, Hermitage, vallée de la Drôme, Diois
   - Téléphone : **06 80 58 67 13**
   - Site : **https://www.vonav.fr**
3. **Vérification vidéo** : Google demande une vidéo continue (≈ 30 s à quelques min)
   montrant le lieu, une preuve d'activité et que vous gérez l'établissement.
   Examen sous ~5 jours ouvrés. (Voir notre article de blog dédié.)

> ⚠️ Le NAP doit être **rigoureusement identique** entre le site et la fiche Google
> (même nom, même téléphone) : c'est un facteur clé du référencement local.

## 9. Renseigner le SIRET (quand vous l'aurez)

Une fois la micro-entreprise immatriculée, collez le SIRET dans `src/data/site.ts` :

```ts
SIRET: "12345678900012",
```

Il apparaîtra automatiquement dans le pied de page et les mentions légales.

---

## Récapitulatif des placeholders à remplir

Tous dans **`src/data/site.ts`** (objet `PLACEHOLDERS`), sauf mention contraire.

| Placeholder | Où le trouver | Exemple de valeur | Fichier |
| --- | --- | --- | --- |
| `FORM_BACKEND_ID` | Web3Forms (étape 4) | `a1b2c3d4-...` | `src/data/site.ts` |
| `GA4_MEASUREMENT_ID` | GA4 (étape 5) | `G-XXXXXXXXXX` | `src/data/site.ts` |
| `GTM_CONTAINER_ID` | GTM (étape 6) | `GTM-XXXXXXX` | `src/data/site.ts` |
| `SIRET` | Immatriculation (étape 9) | `12345678900012` | `src/data/site.ts` |
| URL du site | — (déjà réglée) | `https://www.vonav.fr` | `astro.config.mjs` + `public/robots.txt` |
| LinkedIn | votre profil | `https://www.linkedin.com/...` | `src/data/site.ts` (`SITE.social.linkedin`) |
| Image Open Graph | déjà fournie, remplaçable | `public/og/vonav-og.png` | `public/og/` |
| Photo « À propos » | à ajouter | portrait | `src/components/About.astro` |

## Checklist de mise en ligne

- [ ] Domaine vonav.fr acheté et relié à Cloudflare
- [ ] Site déployé sur Cloudflare Pages (HTTPS actif)
- [ ] `FORM_BACKEND_ID` renseigné → **formulaire testé, e-mail reçu**
- [ ] `GTM_CONTAINER_ID` renseigné, GA4 branché dans GTM, conteneur publié
- [ ] Bandeau de consentement : refus = aucune requête Google ; acceptation = GA4 OK
- [ ] Search Console vérifié + sitemap soumis
- [ ] Fiche Google Business Profile créée et en cours de vérification vidéo
- [ ] SIRET renseigné dès réception
- [ ] Témoignages : remplacés par de vrais avis **ou** section masquée
- [ ] Textes légaux relus
