# UX Blueprint - Portfolio Animation Libé

## Project Context
**Project Name**: Portfolio Animation Libé
**Core Concept**: Portfolio web interactif avec mosaïque de GIFs animés, système de filtrage, et CMS intégré pour gestion autonome
**Primary Platform**: Web responsive (mobile-first approach)
**Target Users**: Clients corpo (visiteurs orientés mission), visiteurs découverte, visiteurs contact direct

## User Research Summary

### Primary User Context
- **When**: Contexte professionnel (recherche collaborateur) ou personnel (découverte artistique)
- **Where**: Desktop au bureau / Mobile en déplacement ou casual browsing
- **Why**: 
  - Évaluer les compétences de Libé pour un projet spécifique
  - Découvrir son univers artistique
  - Trouver rapidement les coordonnées de contact
- **How Often**: Visite unique pour la plupart, revisites pour clients récurrents ou updates de portfolio
- **Emotional State**: 
  - Visiteurs mission : focus, time-constrained, besoin d'efficacité
  - Visiteurs découverte : curieux, ouvert, temps flexible
  - Visiteurs contact : décidés, cherchent action rapide

### User Pain Points (from Validated Idea Brief)
1. **Manque de temps pour explorer** : Les clients potentiels ont besoin d'évaluer rapidement si Libé correspond à leurs besoins
   - Impact : Risque de perdre des visiteurs si navigation pas intuitive
2. **Difficulté à trouver compétences spécifiques** : Portfolios généralistes ne montrent pas clairement les domaines d'expertise
   - Impact : Visiteurs orientés mission ne trouvent pas les projets pertinents
3. **Sites trop statiques pour animateurs** : Portfolios avec images fixes ne reflètent pas le métier d'animation
   - Impact : Première impression ne capture pas l'essence du travail de mouvement

## User Journey Mapping

### Critical User Journeys

#### Journey 1: Visiteur Orienté Mission (Client Potentiel)
**Goal**: Évaluer si Libé a l'expertise nécessaire pour mon projet de motion design corpo

**Steps**:
1. **Arrivée sur homepage** 
   - Action : Landing via Google, réseaux sociaux, ou recommandation
   - System Response : Mosaïque de GIFs animés + header avec navigation + filtres visibles
   - User Emotion : "Wow, c'est vivant, je vois immédiatement son travail"

2. **Application du filtre**
   - Action : Clique sur filtre "Corpo - Motion Design"
   - System Response : Mosaïque se réorganise pour montrer uniquement projets corpo
   - User Emotion : "Parfait, je vois directement les projets qui m'intéressent"

3. **Exploration projet phare**
   - Action : Clique sur "Desintox - ARTE" dans section Travaux Phares
   - System Response : Page projet s'ouvre avec vidéo YouTube, contexte, rôle de Libé
   - User Emotion : "ARTE, impressionnant ! Je veux en savoir plus"

4. **Visionnage vidéo complète**
   - Action : Lance la vidéo (player YouTube sans UI intrusive)
   - System Response : Vidéo joue en haute qualité
   - User Emotion : "C'est exactement le style que je cherche"

5. **Navigation vers autres projets similaires**
   - Action : Retour à la mosaïque (via breadcrumb ou bouton back)
   - System Response : Retour à la vue filtrée (filtre conservé)
   - User Emotion : "Facile de naviguer, je peux explorer plus"

6. **Décision de contact**
   - Action : Clique sur "Contact" dans header
   - System Response : Page contact avec formulaire simple + liens réseaux
   - User Emotion : "Convaincu, je vais le contacter pour mon projet"

**Pain Points**: 
- Si filtres pas visibles → perte de temps à scroller tous les projets
- Si vidéo YouTube trop "branded" → distraction de l'esthétique
- Si pas de breadcrumb → confusion pour revenir à la mosaïque

**Success Criteria**: 
- Temps pour trouver un projet pertinent < 30 secondes
- Clic sur Contact suite à exploration de 2-3 projets
- Filtre fonctionne de manière intuitive (pas besoin d'explication)

#### Journey 2: Visiteur Découverte (Exploration Libre)
**Goal**: Découvrir l'univers artistique de Libé sans objectif précis

**Steps**:
1. **Arrivée sur homepage**
   - Action : Landing via Instagram, bouche-à-oreille, curiosité
   - System Response : Mosaïque de GIFs animés en chronologie inverse (récent → ancien)
   - User Emotion : "Wow, ça bouge partout, c'est captivant"

2. **Scroll et découverte visuelle**
   - Action : Scroll down pour voir plus de projets
   - System Response : Lazy loading charge progressivement les GIFs
   - User Emotion : "Chaque projet est unique, j'aime la diversité"

3. **Clic impulsif sur un GIF intriguant**
   - Action : Clique sur "Querelle de Clochers" (court-métrage)
   - System Response : Page projet avec vidéo + texte détaillé (projet perso)
   - User Emotion : "Intéressant, je veux voir la vidéo complète"

4. **Immersion dans le projet**
   - Action : Regarde la vidéo complète, lit le texte de contexte
   - System Response : Vidéo joue, texte donne contexte narratif
   - User Emotion : "J'aime son style narratif et visuel"

5. **Exploration d'autres courts-métrages**
   - Action : Retour mosaïque, clique sur "Les Mécanorganes"
   - System Response : Nouvelle page projet avec vidéo différente
   - User Emotion : "Versatile, chaque projet a son identité"

6. **Découverte de Libé**
   - Action : Clique sur "À Propos" pour en savoir plus sur l'artiste
   - System Response : Page avec bio, photo, démarche artistique
   - User Emotion : "Je comprends mieux son parcours, je vais le suivre"

7. **Follow sur réseaux sociaux**
   - Action : Clique sur Instagram ou YouTube
   - System Response : Ouverture du profil social dans nouvel onglet
   - User Emotion : "Je veux rester connecté à son travail"

**Pain Points**:
- Si trop de GIFs chargent en même temps → page lente, frustration
- Si pas assez de contexte sur les projets → confusion sur le style/intention
- Si pas de lien évident vers "À Propos" → visite superficielle

**Success Criteria**:
- Temps de visite > 2 minutes (engagement)
- Nombre de projets consultés ≥ 3
- Clic sur réseaux sociaux ou "À Propos"

#### Journey 3: Visiteur Contact Direct (Objectif Précis)
**Goal**: Contacter Libé rapidement (recommandation, collaboration précédente)

**Steps**:
1. **Arrivée sur homepage**
   - Action : Landing direct (lien partagé, carte de visite)
   - System Response : Mosaïque + header avec "Contact" bien visible
   - User Emotion : "Où est le contact ?"

2. **Clic immédiat sur Contact**
   - Action : Clique sur "Contact" dans header (toujours visible)
   - System Response : Page contact charge immédiatement
   - User Emotion : "Parfait, j'y suis"

3. **Remplissage formulaire**
   - Action : Remplit nom, email, message
   - System Response : Validation en temps réel (email format, champs requis)
   - User Emotion : "Simple et efficace"

4. **Envoi message**
   - Action : Clique "Envoyer"
   - System Response : Confirmation visuelle + message "Merci, je vous répondrai sous 48h"
   - User Emotion : "Message envoyé, je peux continuer ma journée"

**Pain Points**:
- Si "Contact" pas visible dans header → frustration, abandon
- Si formulaire trop complexe → friction, abandon
- Si pas de confirmation après envoi → doute ("mon message est-il parti ?")

**Success Criteria**:
- Temps pour atteindre page Contact < 5 secondes
- Formulaire simple (3-4 champs max)
- Confirmation claire après envoi

## Information Architecture

### Site/App Structure
```
Portfolio Libé
│
├── Accueil (Homepage)
│   ├── Section "Travaux Phares" (featured - 3-5 projets)
│   ├── Filtres (Corpo / Court-métrage / 3D / Vidéo-mapping / Art Vidéo / Tout)
│   └── Mosaïque Projets (grid de GIFs animés en chronologie inverse)
│
├── Projet Individuel [dynamique]
│   ├── Vidéo YouTube (player custom)
│   ├── Titre + Client + Année + Rôle
│   ├── Texte de contexte (variable selon projet)
│   ├── Catégorie(s) / Tags
│   └── Navigation (← Retour mosaïque / Projet suivant →)
│
├── À Propos
│   ├── Photo / Bio de Libé
│   ├── Domaines d'expertise
│   ├── Démarche artistique
│   └── CV / Parcours (optionnel)
│
└── Contact
    ├── Formulaire (Nom, Email, Message)
    ├── Liens Réseaux Sociaux (Instagram, YouTube, LinkedIn)
    └── Email direct (optionnel)
```

### Content Hierarchy
**Primary Content** (Most important - toujours accessible) :
- Mosaïque de projets (homepage)
- Navigation header (Logo / Travaux / À Propos / Contact)
- Section "Travaux Phares"
- Filtres de catégories

**Secondary Content** (Supporting - accessible en 1 clic) :
- Pages projets individuelles (vidéos + contexte)
- Page À Propos (bio, démarche)
- Page Contact (formulaire)

**Tertiary Content** (Nice-to-have - accessible si besoin) :
- Réseaux sociaux (footer ou page contact)
- Métadonnées projets (client, année, rôle)
- Projets en cours / Expositions (Phase 2)

### Navigation Strategy
- **Primary Navigation**: Header constant (sticky) avec 4 liens principaux
  - Logo Libé (retour accueil)
  - Travaux (scroll to mosaïque ou stay on homepage)
  - À Propos
  - Contact
  
- **Secondary Navigation**: 
  - Filtres sur homepage (horizontal, sticky sous header)
  - Breadcrumb sur pages projets (Accueil > [Catégorie] > [Nom Projet])
  - Boutons Projet Précédent / Suivant (navigation latérale)

- **Mobile Navigation**: 
  - Burger menu pour navigation principale (< 768px)
  - Filtres deviennent dropdown ou horizontal scroll
  - Header reste sticky

## Screen Definitions & Wireframes

### Core Screens

#### Screen 1: Homepage (Accueil) - Priority: HIGH
**Purpose**: Présenter immédiatement le travail de Libé, permettre exploration libre ou orientée via filtres

**Key Elements**:
1. **Header Constant** (top, sticky)
   - Logo Libé (gauche) → retour accueil
   - Navigation : Travaux | À Propos | Contact (droite)
   - Background : noir / Texte : blanc
   - Height : 80px desktop, 60px mobile

2. **Section "Travaux Phares"** (sous header)
   - Titre : "Travaux Phares" (H1, blanc, centré)
   - 3-5 projets mis en avant (cards horizontales avec GIF + titre + client)
   - Layout : horizontal scroll (desktop) / vertical stack (mobile)
   - CTA : "Voir tous les projets" → scroll to mosaïque

3. **Filtres** (sticky sous section phares)
   - Boutons : Tout | Corpo | Court-métrage | 3D | Vidéo-mapping | Art Vidéo
   - État actif : background blanc / texte noir
   - État inactif : background transparent / texte blanc / border blanc
   - Hover : background gris foncé
   - Layout : horizontal (desktop) / horizontal scroll (mobile)

4. **Mosaïque Projets** (main content)
   - Grid responsive : 3 colonnes (desktop) / 2 colonnes (tablet) / 1 colonne (mobile)
   - Chaque item : GIF animé + overlay avec titre au hover
   - Gap : 16px entre items
   - Lazy loading : charge 12 projets initialement, puis au scroll
   - Ordre : chronologique inverse (récent → ancien)

**User Actions**:
- **Primary Action** : Cliquer sur un GIF pour ouvrir page projet
- **Secondary Actions** : 
  - Cliquer sur un filtre pour afficher catégorie spécifique
  - Scroller pour découvrir plus de projets
  - Cliquer sur projet phare
  - Naviguer via header

**Success Metrics** : 
- Temps de chargement initial < 2 secondes
- Clic sur projet dans les 30 premières secondes
- Taux d'utilisation filtres > 40% (visiteurs orientés mission)

#### Screen 2: Page Projet Individuelle - Priority: HIGH
**Purpose**: Présenter un projet en détail avec vidéo, contexte, et navigation fluide

**Key Elements**:
1. **Header Constant** (identique homepage, sticky)

2. **Breadcrumb Navigation** (sous header)
   - Format : Accueil > [Catégorie] > [Nom Projet]
   - Cliquable pour retour rapide
   - Couleur : gris clair / hover : blanc

3. **Vidéo Player** (hero section)
   - YouTube iframe avec paramètres : controls=1, modestbranding=1, rel=0
   - Ratio : 16:9, fullwidth (max 1200px)
   - Custom wrapper : border blanc 2px
   - Background : noir

4. **Informations Projet** (sous vidéo, deux colonnes desktop / stack mobile)
   - **Colonne Gauche** :
     - Titre projet (H1, blanc, 32px)
     - Client / Studio (si applicable)
     - Année
     - Rôle de Libé (Réalisation / Animation / 3D / Motion Design)
     - Catégorie(s) / Tags
   
   - **Colonne Droite** :
     - Texte de contexte (paragraphes, variable selon projet)
     - Pour projets persos : texte long, narratif
     - Pour projets corpo : texte court, factuel

5. **Navigation Projets** (bottom, avant footer)
   - Boutons : ← Projet Précédent | Retour Mosaïque | Projet Suivant →
   - Layout : horizontal, centrés
   - Style : boutons fantômes (border blanc, background transparent)

**User Actions**:
- **Primary Action** : Regarder la vidéo
- **Secondary Actions** :
  - Lire le contexte du projet
  - Naviguer vers projet précédent/suivant
  - Retour à la mosaïque (via breadcrumb ou bouton)
  - Cliquer sur Contact (header)

**Success Metrics** :
- Taux de lecture vidéo > 60%
- Temps moyen sur page > 1 minute
- Navigation vers autres projets > 30%

#### Screen 3: Page À Propos - Priority: MEDIUM
**Purpose**: Présenter Libé, son parcours, sa démarche artistique

**Key Elements**:
1. **Header Constant** (identique homepage, sticky)

2. **Hero Section** (haut de page)
   - Photo de Libé (optionnel, si dispo)
   - Titre : "À Propos" (H1, blanc, 40px)
   - Sous-titre : "Animateur & Réalisateur" (H2, gris clair, 24px)

3. **Bio / Présentation** (centré, max-width 800px)
   - Texte de présentation de Libé (2-3 paragraphes)
   - Ton : professionnel mais personnel
   - Typographie : 18px, line-height 1.6 pour confort lecture

4. **Domaines d'Expertise** (section avec icônes ou liste)
   - Animation 2D & Stop-Motion
   - Motion Design & Graphisme
   - Infographie 3D
   - Vidéo-Mapping
   - Art Vidéo
   - Layout : grid 3 colonnes (desktop) / 1 colonne (mobile)

5. **Démarche Artistique** (optionnel)
   - Citation ou texte sur sa vision du mouvement
   - "Ce qui connecte tout ce que je fais, c'est que ça bouge"

6. **CTA Contact** (bottom)
   - Bouton "Travaillons Ensemble" → lien vers Contact
   - Style : bouton primaire (background blanc, texte noir)

**User Actions**:
- **Primary Action** : Lire la bio et comprendre le parcours
- **Secondary Actions** :
  - Cliquer sur "Travaillons Ensemble" → Contact
  - Naviguer vers Travaux (header)

**Success Metrics** :
- Temps moyen sur page > 45 secondes
- Taux de clic vers Contact après visite À Propos > 20%

#### Screen 4: Page Contact - Priority: HIGH
**Purpose**: Permettre aux visiteurs de contacter Libé facilement

**Key Elements**:
1. **Header Constant** (identique homepage, sticky)

2. **Titre Section** (centré)
   - "Me Contacter" (H1, blanc, 40px)
   - Sous-titre : "Pour toute collaboration, question ou projet" (gris clair)

3. **Formulaire Contact** (centré, max-width 600px)
   - **Champs** :
     - Nom (input text, required)
     - Email (input email, required)
     - Message (textarea, required, rows=6)
   - **Bouton Submit** : "Envoyer" (primaire, background blanc, texte noir)
   - **Validation** : 
     - Temps réel (border rouge si erreur, vert si valide)
     - Message d'erreur sous champ si invalide
   - **Confirmation après envoi** :
     - Message success : "Merci ! Votre message a été envoyé. Je vous répondrai sous 48h."
     - Couleur : vert

4. **Réseaux Sociaux** (sous formulaire)
   - Titre : "Ou retrouvez-moi sur" (H3, gris clair)
   - Icônes : Instagram | YouTube | LinkedIn
   - Hover : animation custom (Phase 2) / simple scale (MVP)
   - Layout : horizontal, centrés, gap 24px

5. **Email Direct** (optionnel, si Libé veut le montrer)
   - Texte : "contact@libe-animation.com" (exemple)
   - Cliquable (mailto:)

**User Actions**:
- **Primary Action** : Remplir et envoyer le formulaire
- **Secondary Actions** :
  - Cliquer sur réseaux sociaux
  - Copier email direct

**Success Metrics** :
- Taux de complétion formulaire > 70%
- Taux d'abandon < 30%
- Messages envoyés / mois > 5 (après quelques mois de trafic)

### Mobile Wireframe Notes
**Homepage Mobile** :
- Header : burger menu (icon ≡) → side drawer avec navigation
- Travaux Phares : vertical stack (1 projet / card)
- Filtres : horizontal scroll ou dropdown select
- Mosaïque : 1 colonne, GIFs fullwidth

**Page Projet Mobile** :
- Vidéo : fullwidth, ratio 16:9 conservé
- Infos projet : stack vertical (titre → métadonnées → contexte)
- Navigation projets : vertical stack (Précédent / Mosaïque / Suivant)

**Contact Mobile** :
- Formulaire : fullwidth avec padding 16px
- Réseaux sociaux : icônes plus grandes (48x48px touch target)

## Interaction Design

### Key Interaction Patterns

#### Pattern 1: Hover sur GIF Mosaïque
**Context** : Visiteur survole un GIF dans la mosaïque (desktop uniquement)
**Behavior** : 
- Overlay noir semi-transparent (opacity 0.7) apparaît
- Titre du projet en blanc, centré, fade in
- Cursor devient pointer
- Transition : 0.2s ease
**Feedback** : Indication visuelle claire que l'item est cliquable
**Rationale** : Donne contexte sans surcharger visuellement la mosaïque par défaut

#### Pattern 2: Filtre Actif/Inactif
**Context** : Visiteur clique sur un filtre de catégorie
**Behavior** :
- Filtre cliqué : background devient blanc, texte noir (actif)
- Autres filtres : retournent à l'état inactif (transparent, border blanc)
- Mosaïque : animation fade out → réorganisation → fade in (0.3s)
- Scroll : retour en haut de mosaïque (smooth scroll)
**Feedback** : Changement visuel immédiat, filtrage fluide
**Rationale** : Feedback clair de l'état actif, transition douce pour éviter désorientation

#### Pattern 3: Lazy Loading des GIFs
**Context** : Visiteur scroll down dans la mosaïque
**Behavior** :
- GIFs hors viewport : placeholder gris clair avec loader spinner
- GIFs entrant dans viewport (threshold: 200px avant) : chargement progressif
- Une fois chargés : fade in (0.3s)
- Pas de re-chargement si scroll up puis down (cache)
**Feedback** : Placeholder puis apparition douce, pas de "pop" brutal
**Rationale** : Performance optimale, expérience fluide sans attente

#### Pattern 4: Navigation Sticky Header
**Context** : Visiteur scroll sur n'importe quelle page
**Behavior** :
- Header reste fixe en haut (position: sticky)
- Légère shadow apparaît sous header au scroll (depth indication)
- Logo et liens toujours accessibles
- Sur mobile : burger menu reste accessible
**Feedback** : Navigation toujours disponible sans retour en haut
**Rationale** : Inspiré de Domitille Martin, évite reloads, fluidité maximale

#### Pattern 5: Player Vidéo Custom (YouTube Embed)
**Context** : Page projet avec vidéo YouTube
**Behavior** :
- Wrapper custom avec border blanc 2px
- Paramètres YouTube : controls=1, modestbranding=1, rel=0, autoplay=0
- Click sur thumbnail : vidéo lance (comportement YouTube natif)
- Fullscreen disponible via contrôles YouTube
**Feedback** : Player fonctionne normalement, mais style intégré au design
**Rationale** : Compromis entre UX YouTube (familier) et esthétique du site

### Micro-Interactions

- **Bouton Hover** : 
  - Scale légèrement (transform: scale(1.02))
  - Transition : 0.15s ease
  - Cursor : pointer

- **Input Focus** :
  - Border devient blanc (était gris)
  - Box-shadow : 0 0 0 3px rgba(255,255,255,0.1) (glow effect)
  - Transition : 0.2s

- **Scroll to Top** (optionnel Phase 2) :
  - Bouton apparaît après scroll > 500px
  - Icon : ↑ (flèche haut)
  - Position : bottom-right, fixed
  - Click : smooth scroll to top

- **Form Validation** :
  - Error state : border rouge, shake animation (0.3s)
  - Success state : border verte, checkmark icon
  - En temps réel (onBlur pour chaque champ)

### Error States & Edge Cases

- **No Content State** (Aucun projet dans catégorie filtrée) :
  - Message : "Aucun projet dans cette catégorie pour le moment"
  - Bouton : "Voir tous les projets" → reset filtre
  - Design : texte centré, gris clair, icon sad face (optionnel)

- **Loading States** :
  - **Page load** : Skeleton screen (rectangles gris pour GIFs, lignes pour texte)
  - **Filter change** : Spinner centré (0.5s timeout avant affichage)
  - **Video loading** : YouTube loader natif

- **Error Handling** :
  - **Formulaire** : Messages d'erreur sous chaque champ invalide (rouge)
  - **Vidéo fail** : Message "Vidéo temporairement indisponible" + lien YouTube direct
  - **GIF fail** : Placeholder gris avec icon "image broken"

- **Offline Behavior** (Phase 2) :
  - Message banner : "Connexion internet perdue"
  - GIFs déjà chargés restent visibles (cache)
  - Formulaire contact désactivé jusqu'à reconnexion

## Mobile-First Considerations

### Mobile-Specific UX

- **Touch Targets** :
  - Minimum size : 48x48px (iOS/Android standards)
  - Spacing entre boutons : 8px minimum
  - Filtres : height 44px, padding 12px horizontal
  - Icônes réseaux sociaux : 48x48px

- **Gesture Support** :
  - **Swipe left/right** sur page projet → projet précédent/suivant (Phase 2)
  - **Pull to refresh** : non nécessaire (pas de contenu temps réel)
  - **Pinch to zoom** : désactivé sur mosaïque (pas pertinent)

- **Orientation** :
  - Portrait : layout par défaut (optimisé)
  - Landscape : vidéos prennent + de hauteur (ratio 16:9 conservé)

- **Keyboard Behavior** :
  - Inputs : focus scroll input vers top visible
  - Textarea : resize vertical disabled (height fixed)
  - Autocomplete : native browser (email)

### Responsive Breakpoints
- **Mobile** (< 768px) :
  - Mosaïque : 1 colonne
  - Filtres : horizontal scroll ou dropdown
  - Navigation : burger menu
  - Travaux Phares : vertical stack

- **Tablet** (768px - 1023px) :
  - Mosaïque : 2 colonnes
  - Filtres : horizontal (wrap si besoin)
  - Navigation : menu complet visible
  - Travaux Phares : 2 projets / row

- **Desktop** (≥ 1024px) :
  - Mosaïque : 3 colonnes
  - Filtres : horizontal, tous visibles
  - Navigation : menu complet + logo
  - Travaux Phares : 3-5 projets horizontal scroll ou grid

### Performance UX

- **Load Time Expectations** :
  - First Contentful Paint : < 1.5s
  - Largest Contentful Paint : < 2.5s
  - Time to Interactive : < 3s
  - Strategy : Server-side rendering (Next.js), lazy loading GIFs, image optimization

- **Image Optimization** :
  - GIFs : compression + max size 5 MB
  - Format : WebP pour images statiques (fallback GIF pour animations)
  - Responsive : srcset pour différentes tailles (mobile/desktop)

- **Offline Capabilities** :
  - MVP : non nécessaire
  - Phase 2 : Service worker pour cache des assets statiques (header, fonts)

## Design System Foundation

### Visual Hierarchy

**Primary Typography** :
- **H1** (Titres de page) : 40px / 2.5rem, font-weight: 700, line-height: 1.2
- **H2** (Section headers) : 32px / 2rem, font-weight: 700, line-height: 1.3
- **H3** (Sous-sections) : 24px / 1.5rem, font-weight: 600, line-height: 1.4
- **Body** : 16px / 1rem, font-weight: 400, line-height: 1.6

**Secondary Typography** :
- **Small text** (Captions, metadata) : 14px / 0.875rem, font-weight: 400, line-height: 1.5
- **Button text** : 16px / 1rem, font-weight: 500, line-height: 1

**Interactive Typography** :
- **Navigation links** : 16px / 1rem, font-weight: 500, letter-spacing: 0.5px
- **Button labels** : 16px / 1rem, font-weight: 600

### Color Strategy

**Primary Colors** :
- **Black (Background)** : #000000
- **White (Text primary)** : #FFFFFF
- **Usage** : Fond noir pour tout le site, texte blanc pour lisibilité maximale et esthétique minimaliste

**Secondary Colors** :
- **Gray Light (Text secondary)** : #A0A0A0
- **Gray Medium (Borders, dividers)** : #333333
- **Usage** : Métadonnées, sous-titres, séparateurs discrets

**Functional Colors** :
- **Success** : #10B981 (green) - Validation formulaire, confirmations
- **Error** : #EF4444 (red) - Messages d'erreur, états invalides
- **Warning** : #F59E0B (orange) - Alertes non critiques (Phase 2)
- **Hover** : #1A1A1A (gray very dark) - États hover sur boutons/cards

**Neutral Colors** :
- **Background overlay** : rgba(0,0,0,0.7) - Overlay sur GIFs au hover
- **Background subtle** : #0A0A0A - Alternative backgrounds (cards, sections)

### Spacing System

**Base Unit** : 8px (facile mental math, cohérence)

**Spacing Scale** :
- **space-1** : 4px (small gaps, icon padding)
- **space-2** : 8px (component internal padding)
- **space-3** : 16px (standard element spacing)
- **space-4** : 24px (section spacing)
- **space-5** : 32px (large section gaps)
- **space-6** : 48px (page-level spacing)
- **space-7** : 64px (hero sections, major separations)

**Layout Margins** :
- **Mobile** : 16px (left/right padding)
- **Tablet** : 24px
- **Desktop** : 48px (max-width: 1400px container)

**Component Padding** :
- **Buttons** : 12px (vertical) × 24px (horizontal)
- **Inputs** : 12px (vertical) × 16px (horizontal)
- **Cards** : 24px (all sides)

### Component Patterns

#### Button Styles

**Primary Button** :
- **Style** : Background blanc, texte noir, border-radius 4px
- **Padding** : 12px 24px
- **Hover** : Background #F0F0F0 (gris très clair), scale(1.02)
- **Usage** : CTAs principaux (Contact, Submit formulaire)

**Secondary Button (Ghost)** :
- **Style** : Background transparent, border 1px blanc, texte blanc, border-radius 4px
- **Padding** : 12px 24px
- **Hover** : Background rgba(255,255,255,0.1), border 2px
- **Usage** : Actions secondaires (Retour, Navigation projets)

**Text Button** :
- **Style** : Pas de border, texte blanc, underline au hover
- **Padding** : 4px 8px
- **Hover** : Opacity 0.8
- **Usage** : Liens inline, breadcrumb

#### Form Elements

**Input Fields** :
- **Style** : Border 1px #333333, background #0A0A0A, texte blanc, border-radius 4px
- **Padding** : 12px 16px
- **Focus** : Border blanc, box-shadow glow
- **Error** : Border rouge, message sous input
- **Success** : Border verte (optionnel)

**Textarea** :
- **Style** : Identique input, mais height auto (min 120px)
- **Resize** : vertical uniquement

**Labels** :
- **Style** : Font-size 14px, font-weight 500, color gris clair
- **Spacing** : 8px en dessous du label (avant input)

#### Content Cards

**Basic Card (Mosaïque item)** :
- **Style** : GIF + overlay au hover
- **Border** : none
- **Aspect ratio** : 16:9 ou 1:1 (à définir selon GIFs de Libé)
- **Hover** : Overlay noir 0.7 opacity + titre

**Featured Card (Travaux Phares)** :
- **Style** : Card avec GIF + titre + client visible par défaut
- **Border** : 2px blanc
- **Padding** : 16px
- **Hover** : Scale(1.05), shadow augmente

**Project Info Card (Page projet)** :
- **Style** : Background #0A0A0A, border 1px #333333, border-radius 8px
- **Padding** : 24px
- **Content** : Métadonnées projet (client, année, rôle)

## Accessibility & Usability

### Accessibility Requirements

- **Color Contrast** : 
  - WCAG AA compliance (minimum 4.5:1 pour texte normal)
  - Blanc sur noir : ratio 21:1 (excellent)
  - Gris clair (#A0A0A0) sur noir : ratio 5.8:1 (bon)

- **Text Size** :
  - Minimum 16px pour body text
  - Minimum 14px pour small text (metadata)
  - Possibilité de zoom navigateur sans casse de layout

- **Touch Targets** :
  - Minimum 48x48px pour mobile
  - Minimum 44x44px pour desktop
  - Espacement 8px entre éléments interactifs

- **Screen Reader** :
  - Alt text pour tous les GIFs (description du projet)
  - ARIA labels pour navigation (landmark roles)
  - Skip to main content link (invisible mais keyboard accessible)
  - Focus visible sur tous les éléments interactifs

- **Keyboard Navigation** :
  - Tab order logique (header → filtres → mosaïque → footer)
  - Enter/Space pour activer boutons
  - Escape pour fermer modals (Phase 2)
  - Focus trap dans formulaire (optionnel)

### Usability Principles Applied

- **Nielsen's Heuristics** :
  1. **Visibility of system status** : Loading states, filtres actifs visuellement distincts
  2. **Match between system and real world** : Terminologie claire ("Travaux" plutôt que "Portfolio")
  3. **User control and freedom** : Breadcrumb, boutons retour, filtres réinitialisables
  4. **Consistency and standards** : Patterns d'interaction cohérents (boutons, cards)
  5. **Error prevention** : Validation formulaire en temps réel
  6. **Recognition rather than recall** : Navigation visible, filtres toujours accessibles
  7. **Flexibility and efficiency** : Filtres pour utilisateurs orientés, libre exploration pour découverte
  8. **Aesthetic and minimalist design** : Design noir/blanc épuré, focus sur les animations
  9. **Help users recognize, diagnose, and recover from errors** : Messages d'erreur clairs
  10. **Help and documentation** : Pas nécessaire (UX intuitive)

- **Gestalt Principles** :
  - **Proximity** : Espacement cohérent entre éléments liés (metadata projet)
  - **Similarity** : Tous les GIFs ont même style de card
  - **Continuity** : Grid mosaïque crée flow visuel
  - **Closure** : Cards avec overlay au hover complètent visuellement l'item

## UX Validation Plan

### Testing Strategy

**Prototype Testing** :
- **Méthode** : Figma prototype interactif OU HTML/CSS mockup statique
- **Test avec** : Libé (propriétaire) + 2-3 amis/collègues (représentent visiteurs découverte)
- **Focus** : Navigation intuitive, clarté filtres, esthétique générale

**User Testing Method** :
- **Phase MVP** : Guerrilla testing (5 personnes, 10 min chacune)
- **Post-Launch** : Feedback form sur site + analytics (Vercel Analytics gratuit)

**Success Metrics** :
- **Facilité navigation** : Visiteurs trouvent projet pertinent < 30 sec sans aide
- **Clarté interface** : Aucune question "comment ça marche ?" lors des tests
- **Satisfaction esthétique** : Feedback positif sur design minimaliste + animations

### Key Questions to Test

1. **Navigation** : Les visiteurs comprennent-ils immédiatement comment explorer les projets ?
2. **Filtres** : Les catégories sont-elles claires et correspondent-elles aux attentes ?
3. **Projets Phares** : La section "Travaux Phares" attire-t-elle l'attention ?
4. **Performance** : Le chargement des GIFs est-il fluide ou frustrant ?
5. **Contact** : Les visiteurs trouvent-ils facilement comment contacter Libé ?

### Design Iteration Plan

- **Phase 1 (MVP - Semaine 1)** :
  - Validation design avec Libé
  - Test navigation basique
  - Lancement V1

- **Phase 2 (Post-Launch - Mois 1-2)** :
  - Analyse analytics (pages vues, bounce rate, temps visite)
  - Feedback utilisateurs via formulaire ou réseaux sociaux
  - Ajustements mineurs (couleurs, espacements, textes)

- **Phase 3 (Améliorations - Mois 3+)** :
  - Fond animé custom
  - Animations hover boutons réseaux
  - Double système filtres (si demandé)
  - Optimisations performance avancées

## Handoff Notes for Tech Architect

### Technical UX Requirements

- **Performance Requirements** :
  - **First Contentful Paint** : < 1.5s
  - **Largest Contentful Paint** : < 2.5s (critique : mosaïque GIFs)
  - **Time to Interactive** : < 3s
  - **Lazy loading** : Impératif pour GIFs (IntersectionObserver API)

- **Platform-Specific Needs** :
  - **Web responsive** : Mobile-first, breakpoints 768px / 1024px
  - **Browser support** : Chrome, Firefox, Safari (desktop + mobile), Edge
  - **No IE11** : Pas de support nécessaire

- **Data Requirements** :
  - **Projets** : titre, client, année, rôle, catégorie(s), GIF URL, YouTube URL, texte contexte
  - **Travaux Phares** : flag boolean "featured" sur certains projets
  - **Filtres** : catégories dynamiques (basées sur projets existants)
  - **Contact** : formulaire → email notification à Libé

- **Integration Points** :
  - **YouTube API** : Embed videos avec paramètres custom
  - **Sanity CMS** : CRUD projets, images/GIFs upload, rich text editor
  - **Email service** : Sendgrid / Resend / Nodemailer pour formulaire contact

### Implementation Priorities

1. **Must-Have** (Critique pour MVP) :
   - Lazy loading des GIFs (performance)
   - Filtres fonctionnels avec animation fluide
   - YouTube embed avec style custom
   - Formulaire contact avec validation
   - Responsive design mobile/desktop
   - Sanity CMS configuré et fonctionnel

2. **Should-Have** (Important mais négociable) :
   - Breadcrumb navigation
   - Navigation projet précédent/suivant
   - Skeleton loading states
   - Smooth scroll animations

3. **Could-Have** (Nice enhancements Phase 2) :
   - Fond animé custom
   - Animations hover boutons réseaux
   - Service worker / offline support
   - Analytics dashboard custom

### UX-Tech Collaboration Notes

- **Contrainte 1 : Performance avec nombreux GIFs** :
  - **Impact UX** : Risque de page lente, frustration utilisateurs
  - **Solutions techniques** :
    - Lazy loading via IntersectionObserver
    - Compression GIFs côté Sanity (plugin image pipeline)
    - Pagination ou "Load More" si > 30 projets
    - CDN (Vercel automatique)

- **Contrainte 2 : YouTube UI visible** :
  - **Impact UX** : Logo YouTube, suggestions fin de vidéo = distraction esthétique
  - **Solutions techniques** :
    - Paramètres iframe : `modestbranding=1`, `rel=0`, `controls=1`
    - Wrapper custom avec border blanc 2px
    - Accepter que logo YouTube reste (compromis UX/technique)

- **Contrainte 3 : CMS complexité** :
  - **Impact UX** : Si trop complexe, Libé ne l'utilisera pas → échec autonomie
  - **Solutions techniques** :
    - Sanity Studio : UI intuitive, drag & drop GIFs
    - Schemas simples : minimal required fields
    - Custom input components si besoin (ex: preview GIF avant save)
    - Documentation + tutoriel vidéo 5 min

- **Contrainte 4 : Header sticky sans reloads** :
  - **Impact UX** : Navigation fluide, pas de reloads à chaque clic (comme Domitille Martin)
  - **Solutions techniques** :
    - Next.js App Router : client-side navigation
    - Header component global avec state persistant
    - Prefetch des pages au hover (Next.js built-in)

### Success Criteria for Technical Implementation

**Performance** :
- ✅ Lighthouse score > 90 (Performance)
- ✅ First Contentful Paint < 1.5s
- ✅ Lazy loading GIFs fonctionnel (charge 12 initialement)

**Functionality** :
- ✅ Filtres réactifs, changement mosaïque < 0.5s
- ✅ Formulaire contact envoie emails à Libé
- ✅ CMS Sanity : Libé peut ajouter projet en < 2 min

**UX Preservation** :
- ✅ Navigation header reste visible au scroll
- ✅ Transitions fluides (pas de "pop" ou flash)
- ✅ Mobile responsive sur iPhone / Android (test devices)

**Key Metrics to Monitor** :
- Temps de chargement pages (Vercel Analytics)
- Bounce rate < 60%
- Durée session moyenne > 2 min
- Taux d'utilisation filtres > 40%

---

**Next Step** : Passons à la création de la **Component Library visuelle** avec design system et mockups HTML/CSS !
