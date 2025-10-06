# Guide de Gestion du Site

## C'est quoi Sanity ?

**Sanity** est ton **système de gestion de contenu** (CMS). C'est une interface web simple où tu peux ajouter, modifier et supprimer tes projets, catégories et expertises **sans toucher au code**.

### Comment ça marche ?
1. Tu te connectes à **Sanity Studio** (lien ci-dessous)
2. Tu gères ton contenu via des formulaires (comme WordPress, mais en mieux)
3. Les changements apparaissent **automatiquement** sur ton site en quelques secondes

C'est comme la bibliothèque de ton site : tu y ranges tes projets, et le site va les chercher pour les afficher.

---

## Accès
- **Site :** https://liberal-website.vercel.app/
- **Sanity Studio :** https://www.sanity.io/@oKEd9xokn/studio/ttwm9ior7bp8t1yjcsdozopc/default
- **Compte Google (connexion) :** liberalmartin.portfolio@gmail.com :: liberal.portfolio2025!

---

## 1. Créer un Projet (Configuration Minimale)

### Champs Obligatoires
Pour publier un projet, il faut **AU MINIMUM** :
1. **Titre** (Sanity génère automatiquement le Slug)
2. **Date de Publication** (pour le tri chronologique)
3. **UN média visuel parmi** :
   - `mosaicThumbnail` (vignette mosaïque)
   - `mainGif` (GIF principal)
   - `mainImage` (image principale)
   - `youtubeUrl` ou `vimeoUrl`

⚠️ **Si ces 3 éléments ne sont pas remplis, Sanity bloquera la publication.**

---

## 2. Comprendre l'Affichage des Médias

### Sur la Page d'Accueil (Mosaïque)
Priorité d'affichage de la vignette :
1. `mosaicThumbnail` (si rempli)
2. `mainGif` (sinon)
3. `mainImage` (sinon)
4. Thumbnail YouTube/Vimeo (auto-généré)

### Sur la Page Projet (ordre d'apparition)
1. **Vidéo YouTube** (si `youtubeUrl` rempli)
2. **Vidéo Vimeo** (si `vimeoUrl` rempli)
3. **Image Principale** (`mainImage`)
4. **GIF Principal** (`mainGif`)
5. **Galerie** (images/GIFs additionnels)

💡 **Astuce :** La vignette de la mosaïque apparaît aussi en premier sur la page projet (sauf si tu as une vidéo YouTube/Vimeo).

---

## 3. Gérer les Catégories

**Chemin :** Sanity Studio → Catégories

### Champs
- **Titre** + **Slug** (auto-généré)
- **Ordre d'affichage** (plus petit = plus à gauche)

### Design des Filtres
Les catégories apparaissent comme **boutons rectangulaires** avec texte en **majuscules espacées**.
Pas d'icônes custom pour l'instant, juste le titre.

💡 **Pour customiser :** Si tu veux changer la police, modifie la variable CSS `--font-base` dans `app/globals.css`.

---

## 4. Gérer les Expertises

**Chemin :** Sanity Studio → Expertises

### Champs
- **Titre** + **Slug**
- **Couleur** (format hex, ex: #FF5733) - pour les pastilles colorées
- **Ordre d'affichage** (plus petit = plus à gauche)

Les expertises apparaissent comme **petites pastilles rondes** colorées sous les catégories.

---

## 5. Page Désintox (Spéciale)

Cette page n'est **PAS dans Sanity**. Pour ajouter/modifier des épisodes, contacte-moi directement avec :
- Les numéros d'épisodes
- Les liens Dailymotion/Instagram

---

## 6. Formulaire de Contact - Configuration Importante

### ⚠️ CRITIQUE : Éviter le Spam
Pour recevoir les emails sans qu'ils tombent en spam :

1. **Ajoute `customdigital360@gmail.com` à tes contacts Gmail**
2. **Si le premier email arrive en spam, marque-le "Non spam"**
3. **Réponds à au moins un email** reçu depuis ce formulaire → ça apprend à Gmail que c'est légitime

Le formulaire utilise `replyTo` donc tu peux **répondre directement** à l'expéditeur.

---

## Retours Souhaités

N'hésite pas à me faire des retours sur :
- **Fonctionnalités :** Si le workflow Sanity est clair, si tu reçois bien les emails (vérifie spam!), tout ce qui te semble confus
- **Design/UI :** Couleurs, typographie, mise en page, animations - tout ce que tu veux changer ou améliorer
- **Nouvelles idées :** Fonctionnalités manquantes, sections à ajouter, améliorations UX

Je prends tous les feedbacks et désirs de changement ! 🎨
