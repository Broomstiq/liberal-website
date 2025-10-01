# Validated Idea Brief - Portfolio Animation Libé

## Project Overview
**Project Name**: Portfolio Animation Libé
**Project Type**: Personal (Amical mais avec ambition professionnelle)
**Timeline**: RUSH - V1 dans 1 semaine avec Claude Code
**Learning Appetite**: Aggressive (choisir le meilleur stack pour le projet)

## Core Concept
**One-Sentence Description**: Portfolio web interactif pour animateur multidisciplinaire présentant ses travaux d'animation, motion design, et 3D à travers une mosaïque visuelle dynamique, avec système de filtrage et CMS intégré pour gestion autonome du contenu.

**Problem Statement**: 
Libé (animateur/réalisateur) a besoin d'un portfolio professionnel en ligne pour :
- Présenter son travail diversifié (corpo, court-métrage, 3D, vidéo-mapping, art vidéo)
- Être trouvé par des clients potentiels et collaborateurs
- Montrer sa polyvalence tout en mettant en avant ses projets avec liberté créative
- Pouvoir mettre à jour lui-même son contenu sans dépendre d'un développeur

**Solution Approach**: 
Site web portfolio avec :
- Page d'accueil en mosaïque de GIFs animés (aperçus des projets)
- Système de filtrage par catégorie d'application
- Pages projets détaillées avec vidéos et contexte
- Section "Travaux Phares" pour mettre en avant les meilleurs projets
- CMS visuel (Sanity.io) permettant à Libé d'ajouter/modifier projets en autonomie
- Design minimaliste noir/blanc pour ne pas distraire des animations

## Target Users

### Primary User Group
**Visiteur Orienté Mission**
- **Demographics**: Clients potentiels corpo (producteurs TV, agences, marques), directeurs artistiques, 30-50 ans
- **Behavior Patterns**: Arrivent avec un projet en tête, cherchent des compétences spécifiques (motion design 2D, animation 3D, réalisation)
- **Pain Points**: 
  - Besoin d'évaluer rapidement si Libé a l'expérience requise pour leur projet
  - Veulent voir des exemples concrets dans le domaine qui les intéresse
  - Manque de temps pour explorer tout un portfolio
- **Motivations**: Trouver le bon collaborateur pour leur projet, évaluer le style et les compétences techniques
- **Use Case Examples**: 
  - Producteur d'ARTE cherche un animateur pour un nouveau format d'émission → filtre "Animation/Réalisation" + "Corpo"
  - Directeur artistique cherche quelqu'un pour du vidéo-mapping → filtre "Vidéo-mapping"

### Secondary User Groups
**Group 1: Visiteur Random/Découverte**
- **Description**: Personnes découvrant Libé via réseaux sociaux, bouche-à-oreille, curiosité
- **Why they'd use it**: Explorer le travail par intérêt artistique, s'inspirer, découvrir l'univers de Libé sans objectif précis
- **Behavior**: Navigation libre, attirés par les visuels, temps de visite variable

**Group 2: Visiteur Contact Direct**
- **Description**: Personnes ayant déjà décidé de contacter Libé (recommandation, travail ensemble précédent)
- **Why they'd use it**: Trouver rapidement les coordonnées de contact, potentiellement voir 1-2 projets récents pour confirmation
- **Behavior**: Recherche immédiate de la page contact, navigation minimale

## Market Context

### Competitive Landscape
**Direct Competitors**:
- **Domitille Martin (https://domitillemartin.com/)**: 
  - **Forces**: Mosaïque chronologique élégante, header constant, navigation fluide, design épuré
  - **Faiblesses**: Peu de catégorisation, pas de hiérarchie claire dans les projets
- **Felix Colgrave (https://felixcolgrave.myportfolio.com/)**: 
  - **Forces**: Animations fun et engageantes sur les pages projets
  - **Faiblesses**: "Too much", manque de finesse, pas assez subtil
- **Mattias Adolfsson (https://mattiasadolfsson.com/)**: 
  - **Forces**: Clarté, simplicité
  - **Faiblesses**: Trop statique, manque de mouvement pour un animateur

**Indirect Competitors**:
- **Daniel Firman (https://danielfirman.com/)**: 
  - **Style**: Trop corpo, générique, sans personnalité
  - **Problème**: Menu sans âme, ne reflète pas la créativité de l'artiste

### Unique Positioning
**What makes this different**:
- **Le mouvement au cœur** : "Ce qui connecte tout ce que je fais c'est que ça bouge" - tout le portfolio doit respirer cette philosophie
- **Mosaïque vivante** : GIFs animés pour chaque projet (pas de thumbnails statiques)
- **Équilibre corpo/artistique** : Valorise les projets avec liberté créative tout en montrant l'expertise corpo
- **Autonomie totale** : CMS permettant à Libé de gérer son contenu sans dépendance technique
- **Design discret** : Interface minimaliste noir/blanc qui laisse les animations parler

**Why existing solutions don't work**:
- Sites trop statiques ne reflètent pas le métier d'animateur
- Portfolios corpo manquent de personnalité artistique
- Solutions trop animées distraient du contenu
- Absence de système de filtrage efficace pour visiteurs orientés mission
- Dépendance à un développeur pour chaque mise à jour

## Validated Features

### Core MVP Features (Phase 1 - Semaine 1)
1. **Mosaïque Dynamique d'Accueil**: 
   - GIFs animés en preview de chaque projet
   - Ordre chronologique (récent → ancien)
   - Lazy loading pour performance
   - **Pourquoi essentiel**: C'est le cœur du portfolio, première impression cruciale

2. **Système de Filtrage Simple**:
   - Filtres par catégorie d'application : Corpo, Court-métrage, 3D, Vidéo-mapping, Art Vidéo
   - Un seul niveau de filtrage (éviter complexité double filtrage)
   - **Pourquoi essentiel**: Permet aux visiteurs orientés mission de trouver rapidement ce qu'ils cherchent

3. **Section "Travaux Phares"**:
   - 3-5 projets mis en avant (Desintox ARTE en premier)
   - Visible dès la page d'accueil ou section dédiée
   - **Pourquoi essentiel**: Met en avant les meilleurs projets, crédibilité immédiate

4. **Pages Projets Détaillées**:
   - Vidéo YouTube intégrée (sans UI YouTube visible)
   - Texte de contexte (variable selon type de projet)
   - Métadonnées : client, année, rôle de Libé, catégorie
   - **Pourquoi essentiel**: Permet d'approfondir et convaincre les clients potentiels

5. **Page À Propos**:
   - Présentation de Libé
   - Domaines d'expertise
   - **Pourquoi essentiel**: Humanise le portfolio, contexte pour comprendre le parcours

6. **Page Contact**:
   - Formulaire de contact simple
   - Liens réseaux sociaux (Instagram, YouTube, LinkedIn)
   - **Pourquoi essentiel**: CTA principal, conversion visiteur → contact

7. **CMS Visuel (Sanity.io)**:
   - Interface pour Libé : ajouter/modifier projets
   - Gestion images, GIFs, liens vidéos YouTube
   - Layouts modulaires (plusieurs templates de mise en page)
   - **Pourquoi essentiel**: Autonomie totale pour Libé, pas de dépendance développeur

### Future Features (Phase 2+)
1. **Fond Animé Custom**: 
   - Animation de fond noir texturé créée par Libé
   - **Pourquoi plus tard**: Nice to have, mais pas critique pour fonctionnalité

2. **Animations Hover Custom**:
   - Boutons réseaux sociaux avec animations personnalisées (ex: X qui fait une pirouette)
   - **Pourquoi plus tard**: Détail de polish, améliore l'expérience mais pas essentiel au MVP

3. **Double Système de Filtres**:
   - Filtres croisés : type de travail + application
   - **Pourquoi plus tard**: Complexité UI/UX, risque de confusion, itération après feedback utilisateurs

4. **Projets en cours / Projets d'école / Projets perso**:
   - Sections additionnelles mentionnées dans le brief initial
   - **Pourquoi plus tard**: Priorité aux projets professionnels pour V1

## User Journey Insights

### Critical User Moments

1. **Discovery Moment**: 
   - Visiteur arrive sur homepage → voir immédiatement mosaïque de GIFs animés
   - Ressenti : "Wow, ça bouge, je vois directement son travail"
   - Header avec navigation constante (inspiré Domitille Martin)

2. **First Value Moment**: 
   - Clic sur un GIF → page projet avec vidéo complète
   - Ou : utilisation filtre → voir projets pertinents pour leur besoin
   - Ressenti : "Je comprends vite ce qu'il fait et si ça correspond à mon besoin"

3. **Engagement Loop**: 
   - Navigation fluide entre projets
   - Retour facile à la mosaïque
   - Découverte d'autres projets similaires ou différents
   - Ressenti : "Je peux explorer librement sans me perdre"

4. **Success Moment**: 
   - Visiteur trouve le bouton contact et envoie un message
   - Ou : visiteur suit Libé sur les réseaux sociaux
   - Ressenti : "J'ai trouvé ce que je cherchais, je passe à l'action"

### Key User Actions

- **Primary Action**: Cliquer sur un projet pour voir la vidéo complète
- **Secondary Actions**: 
  - Filtrer par catégorie
  - Naviguer vers page À propos
  - Cliquer sur "Travaux Phares"
- **Admin Actions** (Libé via CMS):
  - Ajouter un nouveau projet (upload GIF, lien YouTube, texte, métadonnées)
  - Modifier un projet existant
  - Réorganiser l'ordre des projets
  - Choisir les projets "phares"

## Technical Requirements

### Platform Priorities
- **Primary Platform**: Web responsive (desktop + mobile)
- **Reasoning**: Portfolio accessible universellement, pas besoin d'app native

### Core Technical Needs
- **Content Types**: GIFs (previews), vidéos YouTube (projets), images, texte
- **Upload Requirements**: 
  - GIFs : format .gif, max 5-10 MB par GIF (optimisation cruciale)
  - Vidéos : liens YouTube (pas d'upload direct, économise bandwidth)
- **Storage Needs**: 
  - Images/GIFs : CDN (Vercel ou Sanity)
  - Métadonnées projets : Sanity CMS
  - Pas de stockage vidéo (YouTube)
- **Performance Requirements**: 
  - Lazy loading des GIFs (crucial pour page d'accueil)
  - Temps de chargement < 3 secondes
  - Mobile-friendly (responsive)
  - Optimisation pour connexions lentes

## Business Model & Constraints

### Monetization Approach
- **Primary**: Aucune monétisation directe (portfolio gratuit pour attirer clients)
- **Future Options**: Possibilité de vendre prints, NFTs, ou formations animation (hors scope)

### Resource Constraints
- **Budget**: MINIMAL - gratuit maximum
  - Seul coût : nom de domaine (~10-15€/an)
  - Hébergement : Vercel (gratuit)
  - CMS : Sanity.io (gratuit jusqu'à 3 users)
- **Timeline**: 1 semaine pour V1 avec Claude Code
- **Skills**: Développeuse avec base Next.js/React, apprentissage Sanity.io nécessaire

## Success Metrics

### Validation Metrics
- **Problem Validation**: 
  - Libé reçoit-il des contacts suite au portfolio ?
  - Les visiteurs trouvent-ils facilement les projets qui les intéressent ?
- **Solution Validation**: 
  - Libé peut-il ajouter/modifier projets seul sans difficulté ?
  - Temps de chargement de la page < 3s ?
  - Taux de rebond < 60% ?
- **User Satisfaction**: 
  - Feedback direct de Libé et de ses contacts
  - Nombre de projets consultés par visiteur (engagement)

### Growth Expectations
- **Launch Target**: Site fonctionnel avec 15-20 projets initiaux
- **6-Month Vision**: 
  - 30+ projets dans le portfolio
  - Contacts réguliers via le formulaire
  - Présence affirmée sur Google pour "animateur motion design" + nom de Libé

## Risk Assessment

### Identified Risks
1. **Performance - Page d'accueil avec 20+ GIFs animés**:
   - **Likelihood**: Haute
   - **Impact**: Élevé (temps de chargement lent = visiteurs partent)
   - **Mitigation**: 
     - Lazy loading obligatoire (charger GIFs au scroll)
     - Optimisation taille GIFs (max 5 MB, compression)
     - Possibilité de pagination ou "load more" si nécessaire

2. **Complexité CMS pour Libé**:
   - **Likelihood**: Moyenne
   - **Impact**: Moyen (si trop complexe, Libé ne l'utilisera pas)
   - **Mitigation**: 
     - Choisir Sanity.io (interface intuitive)
     - Créer documentation simple + tutoriel vidéo
     - Tester avec Libé dès la V1

3. **Vidéos YouTube - Expérience utilisateur**:
   - **Likelihood**: Moyenne
   - **Impact**: Faible à Moyen (UI YouTube = moins esthétique)
   - **Mitigation**: 
     - Utiliser paramètres API YouTube pour cacher contrôles
     - Design custom autour du player
     - Phase 2 : envisager Vimeo si budget permet

4. **Timeline serrée (1 semaine)**:
   - **Likelihood**: Haute
   - **Impact**: Élevé (risque de rush, bugs, fonctionnalités manquantes)
   - **Mitigation**: 
     - MVP très clair, pas de feature creep
     - Utilisation intensive de Claude Code pour accélérer développement
     - Accepter que Phase 2 arrive plus tard (fond animé, animations hover)

5. **Maintenance et évolution**:
   - **Likelihood**: Moyenne
   - **Impact**: Moyen (si code mal structuré, difficile d'ajouter features Phase 2)
   - **Mitigation**: 
     - Code propre et documenté dès le début
     - Architecture modulaire (composants réutilisables)
     - Tests basiques avant déploiement

### Mitigation Strategies
- **Performance**: Lazy loading + compression + pagination si nécessaire
- **CMS Complexity**: Sanity.io + documentation + formation Libé
- **YouTube UX**: Paramètres API + design custom
- **Timeline**: MVP strict + Claude Code + accepter itérations
- **Maintenance**: Code propre + architecture modulaire + documentation

## Handoff Notes for UX Strategist

### Critical UX Considerations
- **User Context**: 
  - Visiteurs découvrent le site sur desktop ET mobile
  - Contexte professionnel (cherchent collaborateur) ou personnel (curiosité artistique)
  - Attention span courte : doivent comprendre en < 10 secondes
- **Interaction Style**: 
  - Minimaliste mais vivant (animations GIF)
  - Navigation intuitive, pas besoin d'instructions
  - Ton professionnel mais artistique
- **Accessibility Needs**: 
  - Contraste noir/blanc (bon pour accessibilité)
  - Alternative text pour images
  - Navigation au clavier possible
- **Platform Constraints**: 
  - Responsive design obligatoire (mobile-first)
  - Performance critique (lazy loading GIFs)

### Key Questions for UX
1. Comment organiser la mosaïque pour que "Travaux Phares" soit visible sans surcharger la page ?
2. Quel design de filtres est le plus intuitif sans être trop visible/distrayant ?
3. Comment gérer la navigation entre page projet et retour à la mosaïque (breadcrumb, bouton back) ?
4. Quelle mise en page pour les pages projets (vidéo fullwidth, sidebar texte, ...) ?
5. Comment rendre le header constant (comme Domitille Martin) sans recharges de page ?

### Success Criteria for UX Phase
- **Wireframes clairs** pour chaque type de page (home, projet, à propos, contact)
- **Design system minimaliste** : palette noir/blanc/gris, typographie, espacements
- **Navigation fluide** : maquette montrant transitions entre pages
- **Mosaïque responsive** : comment les GIFs s'adaptent mobile/desktop
- **Filtres intuitifs** : positionnement et comportement des filtres
- **Composants visuels** : boutons, cards, player vidéo custom

