# Technical Specification - Portfolio Animation Libé

> **📌 DOCUMENT CENTRAL** : Ce document sert de point d'entrée principal pour Claude Code. Utilisez la section "Document References & Context Map" ci-dessous pour naviguer vers les documents pertinents selon la feature en cours de développement.

## Document References & Context Map

### 🗺️ Quick Navigation par Phase de Développement

**IMPORTANT pour Claude Code** : Avant de commencer une feature, consultez les documents référencés pour comprendre le contexte complet.

#### Phase Setup & Architecture
```
📄 Documents à consulter :
├── libe-portfolio-tech-spec.md (CE DOCUMENT)
│   └── Sections : System Architecture, Database Design, Development Environment
├── libe-portfolio-validated-brief.md
│   └── Sections : Core Concept, Technical Requirements
└── libe-portfolio-ux-blueprint.md
    └── Sections : Information Architecture, Mobile-First Considerations
```

#### Feature: Homepage avec Mosaïque GIFs
```
📄 Documents à consulter :
├── libe-portfolio-tech-spec.md
│   └── Sections : Component Architecture, Performance Optimization (Frontend)
├── libe-portfolio-ux-blueprint.md
│   └── Sections : Screen 1 (Homepage), User Journey 1 & 2, Interaction Pattern 3 (Lazy Loading)
├── libe-portfolio-component-library.html
│   └── Sections : Card Components (Mosaïque), Spacing System
└── libe-portfolio-validated-brief.md
    └── Sections : Validated Features (MVP), User Journey Insights
```

**Key Points** :
- Lazy loading CRITIQUE (voir Tech Spec > Performance Optimization)
- 12 GIFs initialement, +12 au scroll (voir UX Blueprint > Screen 1)
- Grid responsive 3/2/1 colonnes desktop/tablet/mobile

#### Feature: Filtres par Catégorie
```
📄 Documents à consulter :
├── libe-portfolio-tech-spec.md
│   └── Sections : Database Design (Category schema), Component Architecture
├── libe-portfolio-ux-blueprint.md
│   └── Sections : Interaction Pattern 2 (Filter Active/Inactive), Screen 1 (FilterBar)
└── libe-portfolio-component-library.html
    └── Sections : Filter Component, Button Styles
```

**Key Points** :
- Animation fade out → réorganisation → fade in (voir UX Blueprint)
- Categories : Corpo, Court-métrage, 3D, Vidéo-mapping, Art Vidéo
- State management : React Context ou local state

#### Feature: Pages Projets Individuelles
```
📄 Documents à consulter :
├── libe-portfolio-tech-spec.md
│   └── Sections : API Specification (Get Single Project), Database Design (Project schema)
├── libe-portfolio-ux-blueprint.md
│   └── Sections : Screen 2 (Page Projet), User Journey 1 (step 3-4), Interaction Pattern 5 (Video Player)
├── libe-portfolio-component-library.html
│   └── Sections : Video Player Mock, Typography, Cards
└── libe-portfolio-validated-brief.md
    └── Sections : Content Types, User Actions
```

**Key Points** :
- YouTube embed avec params custom (modestbranding=1, rel=0)
- Breadcrumb navigation (voir UX Blueprint)
- Texte contexte variable (court corpo, long perso)

#### Feature: Formulaire Contact
```
📄 Documents à consulter :
├── libe-portfolio-tech-spec.md
│   └── Sections : API Specification (Contact Endpoint), Authentication & Security
├── libe-portfolio-ux-blueprint.md
│   └── Sections : Screen 4 (Contact Page), User Journey 3, Error States
└── libe-portfolio-component-library.html
    └── Sections : Form Components, Button Styles
```

**Key Points** :
- React Hook Form + Zod validation (voir Tech Spec)
- Resend API pour envoi emails (voir API Specification)
- Rate limiting Vercel (voir Security)

#### Feature: Section "Travaux Phares"
```
📄 Documents à consulter :
├── libe-portfolio-tech-spec.md
│   └── Sections : Database Design (featured boolean), API Specification (Get Featured Projects)
├── libe-portfolio-ux-blueprint.md
│   └── Sections : Screen 1 (Featured Section), User Journey 1 (step 3)
└── libe-portfolio-component-library.html
    └── Sections : Featured Cards, Hover Effects
```

**Key Points** :
- 3-5 projets max (order field pour tri manuel)
- Cards avec border blanche + hover scale(1.05)
- Visible homepage avant mosaïque complète

#### Feature: Sanity CMS Setup & Schemas
```
📄 Documents à consulter :
├── libe-portfolio-tech-spec.md
│   └── Sections : Database Design (COMPLET - schemas détaillés), Backend Architecture
├── libe-portfolio-validated-brief.md
│   └── Sections : Validated Features, Content Types, Admin Actions
└── libe-portfolio-ux-blueprint.md
    └── Sections : Key User Actions (Admin)
```

**Key Points** :
- Project schema : 13 fields (voir Database Design)
- Category schema : 3 fields
- Validation rules importantes (required, min/max)

#### Feature: Performance Optimization (Lazy Loading)
```
📄 Documents à consulter :
├── libe-portfolio-tech-spec.md
│   └── Sections : Performance Optimization (COMPLET), Risk Assessment (risque #1)
├── libe-portfolio-ux-blueprint.md
│   └── Sections : Interaction Pattern 3 (Lazy Loading), Performance UX, Error States
└── libe-portfolio-validated-brief.md
    └── Sections : Performance Requirements, Risk Assessment
```

**Key Points** :
- IntersectionObserver custom hook
- Threshold 200px avant viewport
- Cache GIFs déjà chargés

#### Feature: Header Navigation Sticky
```
📄 Documents à consulter :
├── libe-portfolio-tech-spec.md
│   └── Sections : Component Architecture (Header), UX-Tech Alignment (point #4)
├── libe-portfolio-ux-blueprint.md
│   └── Sections : Screen 1-4 (Header constant), Interaction Pattern 4 (Sticky Header)
└── libe-portfolio-component-library.html
    └── Sections : Header Component
```

**Key Points** :
- Next.js App Router client-side navigation
- Position sticky, shadow au scroll
- Logo + 3 links (Travaux, À Propos, Contact)

#### Feature: Responsive Design Mobile
```
📄 Documents à consulter :
├── libe-portfolio-tech-spec.md
│   └── Sections : Mobile Performance, Responsive Breakpoints
├── libe-portfolio-ux-blueprint.md
│   └── Sections : Mobile-First Considerations (COMPLET), Mobile Wireframe Notes
└── libe-portfolio-component-library.html
    └── Sections : Mobile Layout, Touch Targets
```

**Key Points** :
- Breakpoints : 768px / 1024px
- Burger menu < 768px
- Touch targets 48x48px minimum

#### Feature: Deployment & CI/CD
```
📄 Documents à consulter :
├── libe-portfolio-tech-spec.md
│   └── Sections : Deployment & Hosting (COMPLET), CI/CD Pipeline, Monitoring
└── libe-portfolio-validated-brief.md
    └── Sections : Budget Constraints, Success Metrics
```

**Key Points** :
- Vercel auto-deploy depuis GitHub
- Environment variables (voir Tech Spec)
- Sanity Studio deploy séparé

---

### 📚 Index Complet des Documents

| Document | Purpose | Quand Consulter |
|----------|---------|-----------------|
| **libe-portfolio-tech-spec.md** | Spécifications techniques, architecture, stack | Toujours (document central) |
| **libe-portfolio-validated-brief.md** | Vision produit, features validées, user research | Comprendre WHY et WHAT |
| **libe-portfolio-ux-blueprint.md** | Wireframes, user journeys, interaction patterns | Comprendre HOW (UX) |
| **libe-portfolio-component-library.html** | Design system, composants visuels, styles | Comprendre LOOK & FEEL |

### 🔍 Comment Utiliser cette Section avec Claude Code

**Workflow Recommandé** :
```bash
# 1. Identifier la feature à développer
# Example : "Je vais développer la mosaïque homepage"

# 2. Consulter la section correspondante ci-dessus
# → "Feature: Homepage avec Mosaïque GIFs"

# 3. Ouvrir les documents référencés
# → Tech Spec (sections listées)
# → UX Blueprint (sections listées)  
# → Component Library (sections listées)

# 4. Lancer Claude Code avec contexte
claude-code "Implement homepage mosaïque with lazy loading GIFs. 
Reference: Tech Spec > Performance Optimization, UX Blueprint > Screen 1"

# 5. Tester
pnpm dev

# 6. Valider contre Success Criteria (voir chaque section feature)
```

---

## Project Context
**Project Name**: Portfolio Animation Libé
**Learning Appetite**: Aggressive (prête à apprendre le meilleur stack)
**Development Timeline**: RUSH - V1 dans 1 semaine avec Claude Code (CLI tool)
**Budget Constraints**: Minimal/Gratuit maximum (~10-15€/an pour domaine uniquement)

## UX Requirements Summary

### Key Technical Implications from UX Blueprint

**Platform Priority**: Web responsive, mobile-first
**Core User Interactions**:
- Mosaïque de GIFs cliquables avec lazy loading (performance critique)
- Filtrage dynamique par catégories (transition fluide)
- Navigation sticky header (pas de reloads)
- Vidéos YouTube intégrées avec style custom
- Formulaire contact avec validation

**Performance Requirements**:
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s (critique avec 20+ GIFs)
- Time to Interactive < 3s
- Lazy loading obligatoire pour GIFs

**Content Types**: 
- GIFs animés (previews projets, 5-10 MB chacun)
- Vidéos YouTube (liens uniquement, pas de stockage)
- Texte riche (contexte projets)
- Métadonnées (client, année, rôle, catégories)

**Real-time Needs**: 
- Aucun besoin temps réel
- Updates par Libé via CMS (asynchrone)
- Pas de notifications push nécessaires

### Critical UX-Tech Alignment Points

1. **UX : Mosaïque avec 20+ GIFs animés sur homepage**
   - **Tech Implication** : Risque de page lente (chaque GIF = 5-10 MB)
   - **Approche** : Lazy loading via IntersectionObserver + compression GIFs + CDN + pagination si > 30 projets

2. **UX : Filtres avec animation fluide (fade out → réorganisation → fade in)**
   - **Tech Implication** : Changement d'état React + animation CSS
   - **Approche** : Client-side filtering avec Framer Motion ou CSS transitions + state management React

3. **UX : Libé doit gérer contenu autonome (ajouter/modifier projets, layouts custom)**
   - **Tech Implication** : CMS headless avec interface visuelle intuitive
   - **Approche** : Sanity.io avec Portable Text, drag & drop, preview live

4. **UX : Header sticky sans reloads entre pages**
   - **Tech Implication** : Navigation client-side fluide
   - **Approche** : Next.js App Router avec client-side navigation + prefetching

5. **UX : YouTube videos sans UI intrusive**
   - **Tech Implication** : Embed API YouTube avec paramètres custom
   - **Approche** : Component React wrapper avec params `modestbranding=1`, `rel=0`, `controls=1`

## Technology Stack Decision

### Frontend Technology

**Chosen Framework**: Next.js 14+ (App Router)

**Rationale**:
- **Déjà connu** : Base solide en Next.js, pas de courbe d'apprentissage
- **Server-Side Rendering** : SEO optimal pour portfolio professionnel (Google indexation)
- **Image Optimization** : Built-in next/image avec lazy loading automatique
- **API Routes** : Backend intégré pour formulaire contact
- **Vercel Deployment** : Déploiement zero-config, CDN gratuit
- **App Router** : Client-side navigation fluide (pas de reloads)
- **Performance** : Code splitting automatique, prefetching

**Key Frontend Libraries**:
- **UI Components**: Tailwind CSS (design system noir/blanc rapide à implémenter)
- **State Management**: React Context ou Zustand (simple, pas besoin Redux)
- **Form Handling**: React Hook Form (validation performante, peu de re-renders)
- **HTTP Client**: fetch natif + SWR (caching, revalidation Sanity data)
- **Routing**: Next.js App Router (built-in)
- **Animations**: Framer Motion (filtres, transitions) OU CSS transitions (MVP)
- **Icons**: Lucide React (icônes réseaux sociaux, UI)

**Learning Investment**: 
- **Connu** : Next.js, React, Tailwind (si déjà utilisé)
- **Nouveau** : Sanity.io (CMS, 2-3h d'apprentissage), SWR (1h), Framer Motion si utilisé (2h)
- **Total** : ~5-6h de nouvelles technos (acceptable pour Aggressive)

### Backend Architecture

**Approach**: Hybrid - Next.js API Routes + Sanity CMS Backend

**Rationale**: 
- **Sanity = Backend as a Service** : Gère data, storage, API, pas besoin de serveur custom
- **API Routes pour formulaire** : Simple endpoint Next.js pour envoyer emails
- **Pas de backend séparé** : Réduit complexité, déploiement unifié sur Vercel

**Backend Technology**: 
- **Next.js API Routes** (Node.js) : Route POST `/api/contact` pour formulaire
- **Sanity Studio** : Interface CMS hébergée sur `/studio` (route Next.js)
- **Sanity Content Lake** : Backend SaaS qui gère la database

**API Style**: REST (Sanity GROQ queries + Next.js REST endpoints)

### Database Design

**Database Type**: Sanity Content Lake (NoSQL, document-based)

**Rationale**:
- **Headless CMS intégré** : Data + interface visuelle en un
- **Gratuit jusqu'à 3 users** : Parfait pour Libé seul (ou + 1-2 admins)
- **Real-time API** : GROQ queries puissantes
- **CDN automatique** : Images/GIFs servis via Sanity CDN
- **Portable Text** : Rich text editor pour contexte projets
- **Preview mode** : Libé voit changes avant publish

**Schema Overview**:

```javascript
// Sanity Schema - Project Document Type
{
  name: 'project',
  title: 'Projet',
  type: 'document',
  // Document-level validation: au moins un média visuel requis
  // Note: youtubeUrl compte comme média visuel (thumbnail YouTube auto-extraite)
  validation: Rule => Rule.custom((doc) => {
    const hasVisual = doc?.mosaicThumbnail || doc?.mainGif || doc?.mainImage || doc?.youtubeUrl
    if (!hasVisual) {
      return 'Au moins un média visuel est requis (mosaicThumbnail, mainGif, mainImage, ou youtubeUrl)'
    }
    return true
  }),
  fields: [
    // === MANDATORY FIELDS ===
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Date de Publication',
      type: 'datetime',
      description: 'Date du projet (utilisée pour le tri chronologique)',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required()
    },

    // === MEDIA FIELDS (flexible) ===
    {
      name: 'mosaicThumbnail',
      title: 'Vignette Mosaïque (optionnel)',
      type: 'image',
      description: '🎯 GIF/image pour la mosaïque homepage. Si vide, utilise mainGif, mainImage, ou thumbnail YouTube automatique. Ratio 16:9 recommandé. <5MB.',
      options: {
        hotspot: true
      }
    },
    {
      name: 'mainGif',
      title: 'GIF Principal',
      type: 'image',
      description: '🎬 GIF animé qui EST le projet (résultat final). Utilisé comme vignette mosaïque si pas de mosaicThumbnail.',
      options: {
        hotspot: true
      }
    },
    {
      name: 'mainImage',
      title: 'Image Principale',
      type: 'image',
      description: '🖼️ Image statique principale. Fallback vignette mosaïque si pas de GIF.',
      options: {
        hotspot: true
      }
    },
    {
      name: 'gallery',
      title: 'Galerie Images/GIFs',
      type: 'array',
      description: '🎨 Galerie d\'images ou GIFs additionnels (affichés sur page projet)',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Légende (optionnel)'
            }
          ]
        }
      ]
    },
    {
      name: 'youtubeUrl',
      title: 'URL Vidéo YouTube',
      type: 'url',
      description: '🎥 Lien YouTube de la vidéo du projet (optionnel)'
    },
    {
      name: 'websiteUrl',
      title: 'URL Site Web',
      type: 'url',
      description: '🔗 Lien vers le site web du client/projet (optionnel)'
    },

    // === METADATA FIELDS (all optional) ===
    {
      name: 'client',
      title: 'Client / Studio',
      type: 'string'
    },
    {
      name: 'year',
      title: 'Année',
      type: 'number',
      validation: Rule => Rule.min(2000).max(new Date().getFullYear())
    },
    {
      name: 'role',
      title: 'Rôle de Libé',
      type: 'string',
      description: 'Ex: Réalisation, Animation, Motion Design'
    },
    {
      name: 'categories',
      title: 'Catégories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }]
    },
    {
      name: 'contextText',
      title: 'Texte de Contexte',
      type: 'array',
      of: [{ type: 'block' }], // Portable Text (rich text)
      description: 'Description du projet (court pour corpo, long pour projets perso)'
    },

    // === DISPLAY OPTIONS ===
    {
      name: 'featured',
      title: 'Travail Phare',
      type: 'boolean',
      description: 'Afficher dans la section Travaux Phares',
      initialValue: false
    },
    {
      name: 'order',
      title: 'Ordre (pour tri manuel)',
      type: 'number',
      description: 'Laisser vide pour tri chronologique automatique'
    }
  ],
  preview: {
    select: {
      title: 'title',
      mosaicThumbnail: 'mosaicThumbnail',
      mainGif: 'mainGif',
      mainImage: 'mainImage',
      client: 'client'
    },
    prepare({ title, mosaicThumbnail, mainGif, mainImage, client }) {
      return {
        title,
        media: mosaicThumbnail || mainGif || mainImage,
        subtitle: client || 'Sans client'
      }
    }
  }
}

// Sanity Schema - Category Document Type
{
  name: 'category',
  title: 'Catégorie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icône de Catégorie',
      type: 'image',
      description: '🎨 Image/dessin personnalisé pour le bouton de filtre. Format recommandé: SVG ou PNG transparent. Ratio: carré (1:1) recommandé.',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Ordre dans la barre de filtres (plus petit = plus à gauche)',
      initialValue: 0
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
      order: 'order'
    },
    prepare({ title, media, order }) {
      return {
        title,
        media,
        subtitle: order !== undefined ? `Ordre: ${order}` : 'Pas d\'ordre défini'
      }
    }
  }
}

// Categories prédéfinies à créer :
// - Corpo (Motion Design & Graphisme) + icône custom Libé
// - Court-métrage + icône custom Libé
// - 3D (Infographie) + icône custom Libé
// - Vidéo-mapping + icône custom Libé
// - Art Vidéo + icône custom Libé
// Note: Libé peut dessiner ses propres icônes pour personnaliser l'UI des filtres
```

**YouTube Thumbnail Auto-Extraction**:

Pour simplifier la création de projets, si un projet contient uniquement un lien YouTube (sans upload d'image custom), la validation accepte ce projet et le frontend extrait automatiquement la thumbnail YouTube pour la vignette mosaïque.

```typescript
// Utility functions pour extraction YouTube thumbnail (lib/sanity.ts)

// Extraction du video ID depuis URL YouTube
extractYouTubeId('https://youtube.com/watch?v=dQw4w9WgXcQ') // → 'dQw4w9WgXcQ'
extractYouTubeId('https://youtu.be/dQw4w9WgXcQ') // → 'dQw4w9WgXcQ'

// Génération URL thumbnail
getYouTubeThumbnail('https://youtube.com/watch?v=dQw4w9WgXcQ', 'max')
// → 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg' (1280x720)

// Cascade logique pour vignette mosaïque :
thumbnail = mosaicThumbnail || mainGif || mainImage || getYouTubeThumbnail(youtubeUrl)
```

**Avantages** :
- ✅ Libé peut créer un projet avec juste un lien YouTube (validation passe)
- ✅ Thumbnail automatique ratio 16:9 (cohérent avec GIFs)
- ✅ Performance : thumbnails YouTube servies depuis CDN YouTube
- ✅ Fallback : si maxresdefault n'existe pas, utilise hqdefault (480x360)

**Data Storage Strategy**:
- **User Data** : Pas d'authentification utilisateurs visiteurs (pas de login)
- **Admin Auth** : Sanity Studio auth (Google OAuth ou email/password)
- **Content Storage** : 
  - GIFs : Sanity Assets (CDN automatique, lazy loading)
  - Vidéos : YouTube (pas de storage, liens uniquement)
  - Texte : Sanity Content Lake
- **Session Management** : N/A (pas de sessions utilisateurs)
- **Caching Strategy** :
  - Sanity CDN : Cache automatique des images/GIFs
  - SWR : Cache client-side des queries Sanity (revalidation smart)
  - Next.js : Static generation pour pages projets (ISR - Incremental Static Regeneration)

## System Architecture

### High-Level Architecture Diagram
```
[Browser/Client]
       ↓
[Next.js Frontend (Vercel)]
   ↓           ↓
[Sanity API] [Next.js API Routes]
   ↓                ↓
[Sanity CMS]    [Resend Email API]
   ↓
[Sanity CDN (GIFs/Images)]

[Sanity Studio (Admin)] → [Sanity CMS]

[YouTube Videos] → [Embedded in Pages]
```

### Component Architecture

**Frontend Components** (Next.js App Router):

```
app/
├── layout.tsx                    # Root layout avec Header
├── page.tsx                      # Homepage (mosaïque + featured)
├── projets/
│   └── [slug]/
│       └── page.tsx              # Page projet dynamique
├── a-propos/
│   └── page.tsx                  # Page À Propos
├── contact/
│   └── page.tsx                  # Page Contact
├── studio/
│   └── [[...index]]/
│       └── page.tsx              # Sanity Studio route
└── api/
    └── contact/
        └── route.ts              # API endpoint formulaire

components/
├── Header.tsx                    # Navigation sticky
├── FilterBar.tsx                 # Filtres catégories
├── ProjectCard.tsx               # Card mosaïque avec GIF
├── FeaturedCard.tsx              # Card Travaux Phares
├── VideoPlayer.tsx               # YouTube embed wrapper
├── ContactForm.tsx               # Formulaire contact
└── ui/                           # Composants UI réutilisables
    ├── Button.tsx
    ├── Input.tsx
    └── ...

lib/
├── sanity.ts                     # Sanity client config
├── queries.ts                    # GROQ queries Sanity
└── utils.ts                      # Helpers

sanity/
├── schema.ts                     # Sanity schemas (project, category)
└── sanity.config.ts              # Sanity Studio config
```

**State Management**:
- **Global State** : React Context pour filtre actif (simple, pas besoin Zustand)
- **Server State** : SWR pour data Sanity (cache, revalidation)
- **Local State** : useState pour formulaires, UI toggles

**Hooks/Utils**:
- `useProjects()` : Hook SWR pour fetch projets depuis Sanity
- `useCategories()` : Hook pour fetch catégories
- `useLazyLoad()` : Hook custom IntersectionObserver pour GIFs

### Data Flow

**User Action Flow**:

1. **Homepage Load** (Visiteur arrive):
   ```
   Browser → Next.js SSR → Sanity GROQ query (featured + 12 premiers projets)
   → HTML + data → Browser render → Lazy load reste au scroll
   ```

2. **Filtre Catégorie** (Visiteur clique "Corpo"):
   ```
   Browser (client-side) → Filter state update (Context)
   → Filter projets array → Fade out animation
   → Re-render mosaïque avec projets filtrés → Fade in
   ```

3. **Clic sur Projet** (Ouvre page projet):
   ```
   Browser → Next.js client-side navigation (prefetch)
   → Page projet SSG (pré-générée) → Render instant
   → YouTube iframe load
   ```

4. **Submit Formulaire Contact**:
   ```
   Browser → Form validation (React Hook Form)
   → POST /api/contact → Next.js API Route
   → Resend API (send email to Libé) → Response
   → Success message to user
   ```

**Content Creation Flow** (Libé ajoute projet):
```
Sanity Studio (/studio) → Libé upload GIF + metadata
→ Sanity Content Lake (save) → Sanity CDN (GIF)
→ Webhook (optionnel) → Vercel redeploy (ISR revalidation)
→ Nouveau projet visible sur site (1-2 min max)
```

## Authentication & Security

### Authentication Strategy

**Method**: Sanity Studio Authentication (Google OAuth ou Email/Password)

**Provider**: Sanity (built-in auth pour Studio)

**Rationale**: 
- **Pas d'auth publique** : Visiteurs n'ont pas de comptes, pas de login
- **Admin only** : Libé seul (ou +1-2 admins) accède à Sanity Studio
- **Zero config** : Sanity gère auth automatiquement
- **Gratuit** : Inclus dans free tier Sanity

**User Management**:
- **Registration Flow** : N/A (pas d'enregistrement utilisateurs publics)
- **Login Options** : Sanity Studio → Google OAuth OU Email/Password
- **Password Security** : Géré par Sanity (bcrypt, industry standards)
- **Session Management** : JWT tokens Sanity (auto-handled)

### Security Considerations

**Data Protection**:
- **Input Validation** : 
  - Formulaire contact : React Hook Form validation + Zod schema
  - API endpoint : Validation server-side avant envoi email
  - Sanity inputs : Validation rules dans schema
- **API Security** : 
  - Rate limiting : Vercel Edge Config (limit form submissions)
  - CORS : Next.js config (allow only own domain)
  - Authentication : Sanity API token en variable d'env (read-only token public)
- **Data Encryption** : 
  - HTTPS obligatoire (Vercel automatique)
  - Env variables : Vercel secure storage
  - Pas de data sensibles côté client
- **Privacy Compliance** :
  - RGPD : Formulaire contact = consentement implicite (pas de tracking invasif)
  - Data retention : Emails stockés dans inbox Libé (géré manuellement)
  - User deletion : N/A (pas de comptes utilisateurs)
  - Cookies : Aucun cookie tier-party (YouTube peut avoir cookies, mais embed = acceptable)

**Infrastructure Security**:
- **Environment Variables** : 
  - Sanity Project ID, Dataset, API token (read-only public)
  - Resend API key (secret, server-only)
  - Stockage : Vercel Environment Variables (encrypted)
- **HTTPS** : Automatique via Vercel (Let's Encrypt)
- **Database Security** : 
  - Sanity : Built-in security, pas de SQL injection (NoSQL)
  - Access controls : GROQ filters (prevent leaking drafts)
  - Backup strategy : Sanity automatic backups (inclus free tier)

## Development Environment

### Local Development Setup

**Prerequisites**:
- Node.js 18+ (LTS)
- npm ou pnpm (recommandé : pnpm pour performance)
- Git
- Compte Sanity (gratuit)
- Compte Vercel (gratuit, optionnel pour local mais nécessaire deploy)
- Compte Resend (gratuit, 100 emails/jour)

**Environment Configuration**:

`.env.local` file:
```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-01-01"
SANITY_API_TOKEN="your_read_token" # Token lecture public

# Resend (Email API)
RESEND_API_KEY="re_your_api_key"

# Contact Email
CONTACT_EMAIL="libe@example.com" # Email de destination

# Site URL
NEXT_PUBLIC_SITE_URL="http://localhost:3000" # Prod: https://libe-animation.com
```

**Development Scripts** (`package.json`):
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "sanity:dev": "sanity dev", // Sanity Studio en local
    "sanity:deploy": "sanity deploy" // Deploy Studio sur Sanity Cloud
  }
}
```

**Initial Setup Commands**:
```bash
# 1. Create Next.js project
npx create-next-app@latest libe-portfolio --typescript --tailwind --app

# 2. Install dependencies
cd libe-portfolio
pnpm install @sanity/client @sanity/image-url next-sanity
pnpm install react-hook-form @hookform/resolvers zod
pnpm install swr
pnpm install resend
pnpm install lucide-react

# 3. Install Sanity CLI
pnpm install -g @sanity/cli

# 4. Init Sanity in project
sanity init --project libe-portfolio --dataset production

# 5. Run dev servers
pnpm dev # Next.js on :3000
pnpm sanity:dev # Sanity Studio on :3333
```

**Recommended Tools**:
- **Code Editor** : VS Code avec extensions :
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier
  - Error Lens
  - Console Ninja (debugging)
- **Database Management** : Sanity Studio web interface (built-in)
- **API Testing** : Thunder Client (VS Code extension) OU Postman
- **Version Control** : Git + GitHub
- **Browser DevTools** : Chrome/Firefox DevTools (Network tab pour lazy loading)

### Claude Code Integration

**Project Structure for Claude Code**:
```
libe-portfolio/
├── README.md                     # Documentation projet, setup instructions
├── ARCHITECTURE.md               # Ce document (reference pour Claude Code)
├── DEVELOPMENT.md                # Guide développement avec Claude Code
├── app/                          # Clear file naming, grouped by feature
├── components/                   # Composants avec props TypeScript bien définis
├── lib/                          # Utilities avec JSDoc comments
├── sanity/                       # Schemas avec descriptions claires
└── types/                        # TypeScript types centralisés
```

**Claude Code-Friendly Documentation**:

Documentation claire dans chaque fichier pour contexte Claude Code :

```typescript
/**
 * ProjectCard - Card mosaïque pour afficher preview GIF d'un projet
 * 
 * @description
 * Card interactive avec GIF preview, overlay hover affichant titre.
 * Utilisé dans homepage mosaïque. Click → navigation vers page projet.
 * 
 * @features
 * - Lazy loading du GIF (IntersectionObserver)
 * - Overlay noir 0.7 opacity au hover
 * - Transition fade 0.2s
 * 
 * @performance
 * - GIF ne charge que si visible dans viewport
 * - next/image avec lazy loading
 * 
 * @usage
 * import { ProjectCard } from '@/components/ProjectCard'
 * 
 * <ProjectCard 
 *   project={project} 
 *   onLazyLoad={handleLazyLoad}
 * />
 * 
 * @see components/FeaturedCard.tsx for similar pattern
 */
export function ProjectCard({ project, onLazyLoad }: ProjectCardProps) {
  // Implementation...
}
```

Sanity schemas avec contexte clair :
```javascript
{
  name: 'gifPreview',
  title: 'GIF Preview',
  type: 'image',
  description: 'GIF animé affiché dans mosaïque homepage. Taille recommandée: <5MB pour performance. Ratio: 16:9 préféré.',
  validation: Rule => Rule.required()
}
```

**Code Patterns for Claude Code**:
- **Consistent naming** : `use[Feature]` pour hooks, `[Feature]Card` pour cards
- **TypeScript types** : Toutes props/functions typées explicitement
- **File organization** : 1 composant = 1 fichier, co-located styles si CSS modules
- **Error boundaries** : Wrapper components pour catch errors gracefully
- **DEVELOPMENT.md** : Guide de développement avec instructions claires pour chaque feature

**Claude Code Workflow Optimization**:
- **Clear task descriptions** : Chaque feature décrite dans DEVELOPMENT.md
- **Test commands documented** : Scripts npm clairs pour tester chaque partie
- **Error patterns documented** : Common issues + solutions dans README
- **Git workflow** : Branch strategy et commit messages conventions

## Performance Optimization

### Frontend Performance

**Loading Strategy**:
- **Code Splitting** : Automatique avec Next.js App Router (route-based)
- **Lazy Loading** : 
  - GIFs : IntersectionObserver custom hook (charge 12 initialement, reste au scroll)
  - Components : React.lazy() pour modals/dialogs (Phase 2)
- **Bundle Optimization** :
  - Tree shaking automatique (Next.js + Tailwind purge)
  - Dynamic imports pour libraries lourdes (Framer Motion si utilisé)

**Image Optimization**:
- **Next.js Image Component** : `next/image` avec lazy loading natif
- **Sanity Image Pipeline** : 
  - Automatic compression via Sanity CDN
  - Responsive images : srcset automatique (multiple sizes)
  - Format moderne : WebP automatique (fallback GIF)
  - Hotspot/crop : Sanity hotspot pour crop intelligent
- **GIF Specific** :
  - Compression avant upload (Libé devra utiliser tools type Gifski, ezgif.com)
  - Max size recommendation : 5 MB par GIF (hard limit : 10 MB)
  - Alternative : First frame static → GIF on hover (Phase 2 optimization)

**Caching**:
- **Browser Caching** : 
  - Static assets : Cache-Control headers automatiques (Vercel)
  - Images Sanity CDN : Cache 1 year
- **SWR Caching** : 
  - Data Sanity : Cache 60s (revalidate on focus)
  - dedupingInterval : 2000ms (évite duplicates requests)
- **CDN** : Vercel Edge Network (150+ locations mondial)

**Mobile Performance**:
- **Touch Responsiveness** : 
  - No hover states on mobile (use :active pseudo-class)
  - Touch target 48px minimum (UX Blueprint respect)
- **Network Considerations** :
  - Preconnect YouTube domains (`<link rel="preconnect" href="https://www.youtube.com">`)
  - Resource hints : prefetch pages au hover (Next.js auto)

### Backend Performance

**Database Optimization**:
- **Indexing Strategy** : 
  - Sanity auto-indexes primary fields (title, slug)
  - Custom indexes : categories, publishedAt (pour sorting)
- **Query Optimization** : 
  - GROQ projections : fetch only needed fields
  - Example : `*[_type == "project"]{ title, slug, gifPreview, categories[]->title }`
  - Limit results : `[0...12]` for pagination
- **Caching** : Sanity CDN caches queries (automatic)

**API Performance**:
- **Response Caching** : 
  - ISR (Incremental Static Regeneration) : revalidate pages every 60s
  - API routes : Cache headers si data pas sensibles
- **Pagination** : 
  - Homepage : Load 12 GIFs initialement, +12 au scroll (infinite scroll)
  - Sanity query : `[0...12]`, puis `[12...24]`, etc.

**CDN Strategy**:
- **Static Assets** : Vercel CDN (Next.js static exports)
- **Images/GIFs** : Sanity CDN (120+ edge locations)
- **Geographic Distribution** : Vercel auto-select nearest edge

**Monitoring**:
- **Vercel Analytics** : Built-in, gratuit (Web Vitals, pages load times)
- **Metrics to Track** :
  - First Contentful Paint (target < 1.5s)
  - Largest Contentful Paint (target < 2.5s, challenge avec GIFs)
  - Cumulative Layout Shift (target < 0.1)
  - Time to Interactive (target < 3s)

### Scalability Planning

**Horizontal Scaling**:
- **Serverless Functions** : Vercel auto-scale (pas de config)
- **Sanity API** : Auto-scale inclus (free tier = 100k requests/mois)
- **CDN** : Edge caching distribué mondial

**Database Scaling**:
- **Read Replicas** : Sanity handle automatiquement (inclus)
- **Sharding** : N/A pour ce projet (Sanity managed)
- **Migration Strategies** : 
  - Sanity export/import tools (si changement CMS futur)
  - Backup automatique daily (Sanity inclus)

**Caching Layers**:
- **Level 1** : Browser cache (images, static assets)
- **Level 2** : SWR cache (React client-side data)
- **Level 3** : CDN cache (Vercel + Sanity)
- **Level 4** : ISR cache (Next.js pages statiques)

**Cost Optimization**:
- **Free Tiers Limits** :
  - Vercel : 100 GB bandwidth/mois (largement suffisant)
  - Sanity : 10 GB assets storage, 100k API requests/mois
  - Resend : 100 emails/jour
- **Scaling Costs** (si dépasse free tier) :
  - Vercel : $20/mois (Pro) = 1 TB bandwidth
  - Sanity : $15/mois (Growth) = 100 GB storage, 1M requests
  - Resend : $10/mois = 10k emails/mois
- **Optimization Tips** :
  - GIF compression aggressive (réduit storage + bandwidth)
  - ISR revalidation intelligente (évite rebuilds constants)
  - Lazy loading strict (charge uniquement visible)

## Deployment & Hosting

### Hosting Platform

**Primary Platform**: Vercel

**Rationale**:
- **Zero-config Next.js** : Deploy en 1 clic depuis GitHub
- **Gratuit jusqu'à 100 GB/mois** : Largement suffisant pour portfolio
- **CDN mondial** : Edge Network 150+ locations
- **HTTPS automatique** : Let's Encrypt SSL
- **Preview Deployments** : Chaque PR = URL preview unique
- **Analytics gratuit** : Web Vitals monitoring
- **Serverless Functions** : API routes auto-deploy

**Deployment Strategy**:

**Frontend Deployment** (Next.js):
```bash
# 1. Connecter repo GitHub à Vercel
# 2. Vercel auto-detect Next.js
# 3. Configure environment variables (Vercel dashboard)
# 4. Deploy automatique sur git push main

# Alternative CLI :
vercel --prod
```

**Backend Deployment** : 
- **Sanity Studio** : Deploy sur Sanity Cloud
  ```bash
  sanity deploy
  # Studio accessible : https://libe-portfolio.sanity.studio/
  ```
- **API Routes** : Inclus dans Next.js deploy (Vercel)

**Database Hosting** : Sanity Cloud (managed, inclus free tier)

**File Storage** : Sanity Assets CDN (GIFs, images)

### CI/CD Pipeline

**Automated Deployment** : GitHub Actions + Vercel

**Pipeline Flow**:
```yaml
# .github/workflows/deploy.yml

name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      # Install dependencies
      - run: pnpm install
      
      # Lint + Type check
      - run: pnpm lint
      - run: pnpm tsc --noEmit
      
      # Build (Vercel auto-triggers deploy after)
      - run: pnpm build
      
      # Vercel auto-deploys via GitHub integration
```

**Testing Strategy**:
- **MVP** : Manual testing (Libé + dev)
- **Post-MVP** : 
  - Playwright E2E tests (homepage, navigation, formulaire)
  - Jest unit tests (utilities, helpers)
  - Lighthouse CI (performance regression)

**Environment Management**:
- **Development** : Local (`localhost:3000`)
- **Preview** : Vercel preview deployments (chaque PR)
- **Production** : Vercel production (`libe-animation.com`)

**Rollback Strategy**:
- **Vercel Instant Rollback** : 1 clic dans dashboard pour revenir version précédente
- **Git Revert** : `git revert` commit problématique → push → auto-redeploy
- **Sanity Content** : Sanity History (undo changes dans Studio)

### Monitoring & Maintenance

**Error Tracking**: 
- **MVP** : Vercel Logs (basique, gratuit)
- **Phase 2** : Sentry (error tracking, gratuit pour petits projets)

**Analytics**:
- **Vercel Analytics** : Web Vitals, page views, device types (gratuit)
- **Google Analytics** : Optionnel (tracking visiteurs, sources trafic)

**Backup Strategy**:
- **Sanity Content** : Automatic daily backups (inclus free tier)
- **Code** : Git + GitHub (versioning complet)
- **Assets** : Sanity CDN (redundant storage, pas de perte)
- **Disaster Recovery** : 
  - Sanity export CLI : `sanity dataset export production backup.tar.gz`
  - Code : Clone GitHub repo
  - Redeploy : Vercel depuis backup

**Update Strategy**:
- **Dependencies** : Renovate bot (auto-PRs pour updates npm packages)
- **Security Patches** : GitHub Dependabot alerts → patch immédiat
- **Next.js Updates** : Quarterly review (major versions), monthly patches
- **Sanity Updates** : Automatiques (SaaS), check breaking changes release notes

## API Specification

### Core Endpoints

#### Sanity GraphQL/GROQ API

**Base URL** : `https://[PROJECT_ID].api.sanity.io/v[API_VERSION]/data/query/[DATASET]`

**Get All Projects** :
```groq
*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  "gifPreview": gifPreview.asset->url,
  youtubeUrl,
  client,
  year,
  role,
  categories[]-> { title, slug },
  featured,
  publishedAt
}
```

**Get Filtered Projects by Category** :
```groq
*[_type == "project" && references(*[_type=="category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  "gifPreview": gifPreview.asset->url,
  categories[]-> { title },
  publishedAt
}
```

**Get Featured Projects** :
```groq
*[_type == "project" && featured == true] | order(order asc) [0...5] {
  _id,
  title,
  slug,
  "gifPreview": gifPreview.asset->url,
  client,
  year
}
```

**Get Single Project by Slug** :
```groq
*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  "gifPreview": gifPreview.asset->url,
  youtubeUrl,
  client,
  year,
  role,
  categories[]-> { title, slug },
  contextText,
  publishedAt
}
```

**Get All Categories** :
```groq
*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug
}
```

#### Next.js API Routes

**Contact Form Endpoint** :
```typescript
// POST /api/contact

// Request
{
  name: string,
  email: string,
  message: string
}

// Response (Success)
{
  success: true,
  message: "Message envoyé avec succès"
}

// Response (Error)
{
  success: false,
  error: "Message d'erreur"
}
```

**Implementation** :
```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = contactSchema.parse(body);
    
    // Send email via Resend
    await resend.emails.send({
      from: 'contact@libe-animation.com',
      to: process.env.CONTACT_EMAIL,
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message depuis le portfolio</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    
    return Response.json({ 
      success: true, 
      message: "Message envoyé avec succès" 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ 
      success: false, 
      error: "Erreur lors de l'envoi du message" 
    }, { status: 500 });
  }
}
```

### Request/Response Examples

**Get Projects with Pagination** :
```typescript
// lib/queries.ts
export async function getProjects(start = 0, limit = 12, category?: string) {
  const query = category
    ? `*[_type == "project" && references(*[_type=="category" && slug.current == "${category}"]._id)] | order(publishedAt desc) [${start}...${start + limit}]`
    : `*[_type == "project"] | order(publishedAt desc) [${start}...${start + limit}]`;
  
  return client.fetch(query);
}

// Usage in component
const projects = await getProjects(0, 12); // First 12
const moreProjects = await getProjects(12, 12); // Next 12
```

### Error Handling

**Error Response Format** :
```typescript
{
  success: false,
  error: "Message d'erreur utilisateur-friendly",
  code: "ERROR_CODE", // Pour logging/debugging
  details?: {} // Détails additionnels si needed
}
```

**HTTP Status Codes Used** :
- `200` : Success
- `400` : Bad Request (validation error)
- `404` : Not Found (projet inexistant)
- `429` : Too Many Requests (rate limit)
- `500` : Internal Server Error

**Client-Side Error Handling** :
```typescript
try {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
  
  if (!response.ok) {
    throw new Error('Erreur lors de l\'envoi');
  }
  
  const data = await response.json();
  // Show success message
  
} catch (error) {
  // Show error message to user
  console.error('Form submission failed:', error);
}
```

## Risk Assessment & Mitigation

### Technical Risks

1. **Performance - Mosaïque avec 20+ GIFs lourds (5-10 MB chacun)**
   - **Likelihood** : Haute
   - **Impact** : Élevé (temps de chargement > 5s = abandon visiteurs)
   - **Mitigation** : 
     - **Lazy loading strict** : IntersectionObserver, charge uniquement GIFs visibles
     - **Compression GIFs** : Libé devra compresser (max 5 MB, recommandé 2-3 MB)
     - **Pagination/Infinite scroll** : Charge 12 GIFs initialement, +12 au scroll
     - **Fallback image** : Static first frame → GIF on hover (Phase 2 si vraiment nécessaire)
     - **CDN** : Sanity CDN + Vercel Edge Network = latency minimale
     - **Monitoring** : Lighthouse CI alerts si LCP > 3s

2. **Sanity Free Tier Limits Dépassées**
   - **Likelihood** : Faible à Moyenne (dépend trafic + taille GIFs)
   - **Impact** : Moyen (surcharges si dépasse, mais raisonnable)
   - **Mitigation** :
     - **Compression assets** : Réduire taille GIFs = moins storage
     - **Monitoring usage** : Sanity dashboard alerte si proche limites
     - **Upgrade plan** : Sanity Growth = $15/mois si vraiment nécessaire (mais pas prévu)
     - **Alternative** : Si storage problème, héberger GIFs sur Cloudflare R2 (gratuit 10 GB)

3. **Timeline Serrée - 1 Semaine pour MVP**
   - **Likelihood** : Haute
   - **Impact** : Élevé (risque features incomplètes, bugs, stress)
   - **Mitigation** :
     - **MVP strict** : Pas de feature creep, focus core features uniquement
     - **Claude Code** : Accélère développement avec AI CLI pair programming
     - **Starter template** : Use Next.js + Sanity starter (https://github.com/sanity-io/next-sanity)
     - **Priorisation** : Must-have first (mosaïque, filtres, contact), should-have later
     - **Testing réduit** : Manual testing uniquement MVP, E2E tests Phase 2
     - **Accepter itérations** : V1 peut avoir rough edges, améliorer en V1.1/V1.2

4. **Complexité Sanity CMS pour Libé**
   - **Likelihood** : Moyenne
   - **Impact** : Moyen (si trop complexe, Libé ne l'utilisera pas → échec autonomie)
   - **Mitigation** :
     - **Sanity Studio UX** : Interface drag & drop, preview live, intuitive
     - **Schemas simples** : Minimal required fields, descriptions claires
     - **Documentation** : Tutoriel vidéo 5 min pour Libé (screen record)
     - **Custom input components** : Si besoin, simplifier upload GIF avec preview
     - **Formation** : 30 min session avec Libé après déploiement MVP
     - **Support** : Discord/Slack pour questions rapides pendant 1-2 semaines

5. **YouTube UI Visible (Compromis Esthétique)**
   - **Likelihood** : Haute (limitation technique YouTube)
   - **Impact** : Faible à Moyen (esthétique moins pure, mais acceptable)
   - **Mitigation** :
     - **Paramètres optimaux** : `modestbranding=1`, `rel=0` cache maximum UI
     - **Custom wrapper** : Border blanc 2px, integration design noir/blanc
     - **Accepter limitation** : Compromise UX/coût (Vimeo = payant)
     - **Phase 2** : Si budget permet, migration vers Vimeo ($9/mois)

### Scalability Risks

- **Database Performance si > 100 projets** :
  - **Mitigation** : Pagination stricte, indexation Sanity, GROQ queries optimisées

- **Server Costs si trafic explose** :
  - **Mitigation** : Free tiers généreux (100 GB Vercel), CDN cache aggressive

- **Maintenance Burden (mises à jour dépendances, bugs)**:
  - **Mitigation** : Dependabot auto-PRs, stack simple (moins de maintenance), documentation claire

### Learning Curve Risks

- **Sanity.io Nouveau** :
  - **Time Investment** : 2-3h pour apprendre basics (tutorials officiels)
  - **Community Support** : Excellent (Discord actif, docs complètes)
  - **Mitigation** : Starter template, suivre tutorial officiel avant dev

- **Tailwind CSS si Nouveau** :
  - **Time Investment** : 1-2h pour apprendre utility classes
  - **Mitigation** : IntelliSense extension aide énormément, docs excellentes

- **SWR si Nouveau** :
  - **Time Investment** : 1h (API simple)
  - **Mitigation** : Peut skip et utiliser fetch direct (moins optimal mais fonctionne)

**Total Learning Time Estimate** : 5-8h (acceptable pour Aggressive appetite)

## Development Roadmap

### Phase 1: MVP Foundation (Jours 1-4)

**Jour 1 : Setup Infrastructure**
- [x] Create Next.js 14 project avec TypeScript + Tailwind
- [x] Setup Sanity project + Studio
- [x] Configure Sanity schemas (Project, Category)
- [x] Deploy Sanity Studio
- [x] Seed initial categories (Corpo, Court-métrage, 3D, Vidéo-mapping, Art Vidéo)
- [x] Setup Vercel project + environment variables
- [x] Configure GitHub repo + .gitignore

**Jour 2 : Core Frontend (Homepage + Navigation)**
- [x] Implement Header component (sticky, navigation)
- [x] Implement FilterBar component
- [x] Create ProjectCard component avec GIF preview
- [x] Build Homepage :
  - Fetch projects depuis Sanity
  - Mosaïque grid responsive
  - Featured projects section
- [x] Implement lazy loading (IntersectionObserver)
- [x] Client-side filtering logic

**Jour 3 : Pages Projets + Contact**
- [x] Create dynamic route `/projets/[slug]`
- [x] Implement VideoPlayer component (YouTube embed)
- [x] Build page projet layout (video + metadata + context)
- [x] Create ContactForm component (React Hook Form + Zod)
- [x] Implement `/api/contact` endpoint (Resend email)
- [x] Build Contact page

**Jour 4 : À Propos + Polish**
- [x] Create À Propos page
- [x] Add breadcrumb navigation
- [x] Implement mobile responsive (burger menu)
- [x] Add loading states (skeleton screens)
- [x] Error handling (404 page, form errors)
- [x] Basic SEO (metadata, Open Graph)

### Phase 2: Testing & Optimization (Jours 5-6)

**Jour 5 : Performance Optimization**
- [x] Test lazy loading avec 20+ projets
- [x] Optimize GIF compression (tools documentation pour Libé)
- [x] Implement ISR (Incremental Static Regeneration)
- [x] Add prefetching (Next.js Link)
- [x] Test mobile performance (Chrome DevTools)
- [x] Lighthouse audit + fixes (target score > 90)

**Jour 6 : Testing & Bug Fixes**
- [x] Manual testing tous user journeys
- [x] Test Sanity Studio avec Libé (training session)
- [x] Browser testing (Chrome, Firefox, Safari)
- [x] Mobile testing (iOS Safari, Android Chrome)
- [x] Fix bugs découverts
- [x] Validate formulaire contact (test email reception)

### Phase 3: Deployment & Launch (Jour 7)

**Jour 7 : Production Deployment**
- [x] Final QA review
- [x] Populate Sanity avec 15-20 projets initiaux (Libé)
- [x] Configure production environment (Vercel)
- [x] Setup custom domain (DNS configuration)
- [x] Deploy to production
- [x] Post-launch monitoring (Vercel Analytics)
- [x] Create documentation pour Libé :
  - Guide Sanity Studio (comment ajouter projet)
  - Guide maintenance (comment update contenu)
- [x] Handoff complet à Libé

### Phase 4: Post-Launch Iterations (Semaines 2-4)

**Semaine 2 : Feedback & Adjustments**
- [ ] Gather feedback Libé + premiers visiteurs
- [ ] Fix bugs critiques si découverts
- [ ] Ajustements mineurs (textes, espacements, couleurs)
- [ ] Monitor performance metrics (LCP, FID, CLS)

**Semaine 3-4 : Phase 2 Features (Optionnel)**
- [ ] Fond animé custom (si Libé fournit)
- [ ] Animations hover boutons réseaux
- [ ] Double système filtres (si demandé)
- [ ] Optimisations performance avancées (service worker, offline)
- [ ] Analytics dashboard custom

## Handoff Notes for Dev Orchestrator

### Implementation Priorities

1. **Must-Have Technical Features** (Critique pour MVP) :
   - ✅ Lazy loading GIFs (IntersectionObserver)
   - ✅ Filtres fonctionnels avec animation fluide
   - ✅ Sanity CMS configuré + Studio déployé
   - ✅ YouTube embed avec wrapper custom
   - ✅ Formulaire contact avec validation + email sending
   - ✅ Responsive design mobile/desktop
   - ✅ Header sticky sans reloads
   - ✅ ISR pour performance (revalidation pages)

2. **Should-Have Optimizations** (Important mais négociable si timeline tight) :
   - ✅ Breadcrumb navigation
   - ✅ Navigation projet précédent/suivant
   - ✅ Skeleton loading states
   - ✅ Error boundaries React
   - ⚠️ Lighthouse score > 90

3. **Could-Have Enhancements** (Phase 2) :
   - ❌ Fond animé custom
   - ❌ Animations hover boutons réseaux
   - ❌ Service worker / offline support
   - ❌ Analytics dashboard custom
   - ❌ E2E tests (Playwright)

### Critical Technical Decisions Made

1. **Next.js 14 App Router + Sanity CMS** :
   - **Pourquoi important** : 
     - Performance (SSR + ISR)
     - CMS visuel pour autonomie Libé
     - Gratuit (budget minimal)
   - **Alternatives écartées** : 
     - WordPress (trop lourd, pas moderne)
     - Strapi (self-hosted, maintenance)
     - Contentful (payant)

2. **Tailwind CSS pour Styling** :
   - **Pourquoi important** : Rapid development, design system noir/blanc simple, petite bundle size
   - **Alternatives écartées** : CSS Modules (plus verbeux), styled-components (runtime cost)

3. **Vercel Hosting** :
   - **Pourquoi important** : Zero-config Next.js, CDN gratuit, preview deployments, HTTPS auto
   - **Alternatives écartées** : Netlify (similaire mais moins optimized pour Next.js), self-hosted (trop complexe)

4. **Lazy Loading Impératif** :
   - **Pourquoi important** : 20+ GIFs (5-10 MB chacun) = 100-200 MB total → page impossible à charger sans lazy loading
   - **Implementation** : IntersectionObserver custom hook, charge 12 initiaux puis au scroll

5. **YouTube pour Videos (pas self-hosted)** :
   - **Pourquoi important** : Gratuit, bandwidth YouTube, pas de stockage/encoding video à gérer
   - **Compromis** : UI YouTube visible (acceptable avec params modestbranding)

### Claude Code Collaboration Strategy

**File Organization pour Claude Code** :
```
app/
  layout.tsx          # Root layout, minimal logic
  page.tsx            # Homepage, clear comments
  projets/[slug]/
    page.tsx          # Dynamic project page

components/
  Header.tsx          # Sticky navigation, TypeScript props
  FilterBar.tsx       # Filter logic, clear state management
  ProjectCard.tsx     # Card with lazy loading, well documented
  
lib/
  sanity.ts           # Sanity client config
  queries.ts          # GROQ queries avec comments expliquant chaque query
  
sanity/
  schema.ts           # Schemas avec descriptions riches
```

**Documentation Standards pour Claude Code** :
- Chaque component : JSDoc header avec description, props, usage example, references
- Chaque function : Inline comments expliquant logic complexe
- Types TypeScript : Centralisés dans `types/` folder avec exports clairs
- GROQ queries : Comments expliquant ce que fetch chaque query
- DEVELOPMENT.md : Task list avec instructions step-by-step pour chaque feature

**Code Patterns Claude Code-Friendly** :
- Naming conventions strictes : `use[Feature]Hook`, `[Feature]Component`
- Single responsibility : 1 component = 1 feature
- Props drilling évité : Context pour state global (FilterContext)
- Error handling systématique : try/catch + fallback UI
- Clear separation of concerns : data fetching (lib/) vs UI (components/)

**Claude Code Workflow** :
```bash
# Example workflow avec Claude Code
# 1. Describe feature clearly
claude-code "Implement ProjectCard component with lazy loading for GIF preview"

# 2. Test feature
pnpm dev # Check localhost:3000

# 3. Fix issues if needed
claude-code "Fix lazy loading not triggering for last row of GIFs"

# 4. Document changes
git commit -m "feat: add lazy loading to ProjectCard"
```

**Integration Points pour Claude Code** :
```typescript
// Example: AI peut facilement comprendre et modifier
/**
 * useLazyLoadGifs - Custom hook pour lazy loading des GIFs
 * 
 * Utilise IntersectionObserver pour détecter quand GIF entre dans viewport.
 * Charge GIF uniquement si visible.
 * 
 * @param ref - React ref vers élément à observer
 * @param threshold - % de visibilité pour trigger (0.1 = 10%)
 * @returns isVisible - Boolean indiquant si élément visible
 */
export function useLazyLoadGifs(ref: RefObject<HTMLElement>, threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing après first load
        }
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [ref, threshold]);
  
  return isVisible;
}
```

### Success Criteria for Implementation

**Performance Benchmarks** :
- ✅ First Contentful Paint < 1.5s
- ✅ Largest Contentful Paint < 2.5s (avec lazy loading)
- ✅ Time to Interactive < 3s
- ✅ Lighthouse Performance score > 85 (mobile), > 90 (desktop)

**Code Quality Metrics** :
- ✅ TypeScript strict mode (pas d'`any`)
- ✅ ESLint 0 errors, 0 warnings
- ✅ Tous components ont PropTypes/TypeScript interfaces
- ⚠️ Testing coverage > 70% (Phase 2, pas MVP)

**User Experience Validation** :
- ✅ Tous user journeys fonctionnels (visiteur mission, découverte, contact)
- ✅ Filtres réactifs (< 0.5s pour re-render)
- ✅ Formulaire contact envoie emails correctement
- ✅ Mobile responsive testée sur iOS + Android
- ✅ Sanity Studio : Libé peut ajouter projet en < 3 min

**Scalability Validation** :
- ✅ Lazy loading fonctionne avec 50+ projets
- ✅ Filtres performent même avec 100+ projets
- ✅ CDN cache efficace (assets servis depuis edge)

### Next Phase Preparation

**Pour Dev Orchestrator** :
1. **Créer File Structure** : Setup Next.js project avec structure optimale pour Claude Code
2. **Setup Sanity** : Init Sanity, créer schemas, deploy Studio
3. **Implement Core Components** : Header, FilterBar, ProjectCard en priorité
4. **Test Lazy Loading** : Critical feature, tester tôt avec plusieurs GIFs
5. **Deployment Early** : Deploy preview sur Vercel dès Jour 2 pour tests continus
6. **Document for Claude Code** : DEVELOPMENT.md avec task breakdown clair

**Validation Checkpoints** :
- **Jour 2** : Homepage fonctionne avec mock data
- **Jour 3** : Sanity intégré, data réelles, filtres fonctionnels
- **Jour 4** : Toutes pages créées, navigation fluide
- **Jour 5** : Performance optimisée, Lighthouse > 85
- **Jour 6** : Testing complet, bugs fixés
- **Jour 7** : Production ready, déployé

**Key Milestones à Tracker** :
- [ ] Sanity schemas validés avec Libé
- [ ] Lazy loading implémenté et testé
- [ ] Formulaire contact fonctionnel (test email reçu)
- [ ] Mobile responsive testé sur devices réels
- [ ] Libé formé sur Sanity Studio
- [ ] Domain configuré et site live

---

## Stack Résumé Final

| Layer | Technology | Cost | Rationale |
|-------|-----------|------|-----------|
| **Frontend** | Next.js 14 (App Router) | Gratuit | SSR, performance, connu |
| **Styling** | Tailwind CSS | Gratuit | Rapid dev, petite bundle |
| **CMS** | Sanity.io | Gratuit (< 3 users) | Interface visuelle, CDN inclus |
| **Hosting** | Vercel | Gratuit (< 100 GB/mois) | Zero-config, CDN mondial |
| **Email** | Resend | Gratuit (< 100/jour) | API simple, deliverability |
| **Videos** | YouTube Embed | Gratuit | Déjà hébergées, bandwidth YouTube |
| **Domain** | Namecheap/OVH | ~12€/an | Seul coût réel |
| **Analytics** | Vercel Analytics | Gratuit | Web Vitals built-in |
| **Monitoring** | Vercel Logs | Gratuit | Basic error tracking |

**Total Coût Annuel** : ~12€ (domaine uniquement) ✅

**Learning Curve** : 5-8h (Sanity + Tailwind si nouveaux)

**Development Time** : 7 jours (MVP complet avec Claude Code CLI)

---

## 🎯 Utilisation de ce Document avec Claude Code

### Document Central : Workflow Recommandé

Ce Technical Specification est conçu comme **point d'entrée unique** pour Claude Code. Voici comment l'utiliser efficacement :

#### 1️⃣ Au Démarrage du Projet
```bash
# Donner le contexte complet à Claude Code
claude-code --context libe-portfolio-tech-spec.md \
  "Setup Next.js 14 project with TypeScript and Tailwind. 
   Follow the Development Environment section for initial setup."
```

**Documents à avoir ouverts** :
- ✅ libe-portfolio-tech-spec.md (ce document)
- ✅ libe-portfolio-validated-brief.md (vision produit)

#### 2️⃣ Pour Chaque Feature
```bash
# Example: Développer la mosaïque homepage
claude-code --context libe-portfolio-tech-spec.md \
  --context libe-portfolio-ux-blueprint.md \
  "Implement homepage mosaïque with lazy loading.
   
   Reference sections:
   - Tech Spec > Component Architecture > Frontend Components
   - Tech Spec > Performance Optimization > Frontend Performance
   - UX Blueprint > Screen 1: Homepage
   - UX Blueprint > Interaction Pattern 3: Lazy Loading
   
   Key requirements:
   - IntersectionObserver for lazy loading
   - Load 12 GIFs initially, +12 on scroll
   - Grid responsive: 3 cols desktop, 2 tablet, 1 mobile"
```

**Pro Tip** : Copier-coller les "Key Points" de la section "Document References & Context Map" directement dans votre prompt Claude Code.

#### 3️⃣ Pour Debug / Fix Issues
```bash
# Example: Fix lazy loading not working
claude-code --context libe-portfolio-tech-spec.md \
  "Lazy loading not triggering for GIFs. 
   
   Current behavior: All GIFs load at once
   Expected: Only visible GIFs should load
   
   Reference: Tech Spec > Performance Optimization > Lazy Loading Strategy
   Check: IntersectionObserver threshold and viewport detection"
```

#### 4️⃣ Pour Sanity CMS / Database Changes
```bash
# Example: Add new field to Project schema
claude-code --context libe-portfolio-tech-spec.md \
  "Add 'duration' field to Project schema in Sanity.
   
   Reference: Tech Spec > Database Design > Schema Overview
   Type: number (in minutes)
   Validation: optional, min 1, max 180"
```

### Commandes Rapides par Phase

#### Setup Phase
```bash
claude-code --context libe-portfolio-tech-spec.md \
  "Initialize project following Development Environment section"
```

#### Homepage Development
```bash
claude-code \
  --context libe-portfolio-tech-spec.md \
  --context libe-portfolio-ux-blueprint.md \
  --context libe-portfolio-component-library.html \
  "Build homepage: Header + FilterBar + Mosaïque + Featured section"
```

#### Project Pages
```bash
claude-code \
  --context libe-portfolio-tech-spec.md \
  --context libe-portfolio-ux-blueprint.md \
  "Implement dynamic project pages at /projets/[slug]"
```

#### Performance Optimization
```bash
claude-code --context libe-portfolio-tech-spec.md \
  "Optimize lazy loading and run Lighthouse audit. 
   Target: LCP < 2.5s, Performance score > 85"
```

### Template de Prompt Claude Code

Utilisez ce template pour chaque nouvelle feature :

```
Feature: [NOM DE LA FEATURE]

Context Documents:
- Tech Spec: [sections pertinentes]
- UX Blueprint: [sections pertinentes]  
- Component Library: [sections pertinentes]

Requirements:
- [Requirement 1 from documents]
- [Requirement 2 from documents]
- [Requirement 3 from documents]

Success Criteria:
- [How to validate this feature works]

Current Status:
- [What's already done, if applicable]
```

### Exemple Complet : Implémenter Filtres

```bash
claude-code \
  --context libe-portfolio-tech-spec.md \
  --context libe-portfolio-ux-blueprint.md \
  --context libe-portfolio-component-library.html \
  "Feature: FilterBar Component avec filtres catégories

Context Documents:
- Tech Spec > Component Architecture (FilterBar.tsx)
- Tech Spec > Database Design (Category schema)
- UX Blueprint > Screen 1 (FilterBar placement)
- UX Blueprint > Interaction Pattern 2 (Filter Active/Inactive)
- Component Library > Filter Component (styles)

Requirements:
- Boutons: Tout, Corpo, Court-métrage, 3D, Vidéo-mapping, Art Vidéo
- Active state: background blanc, texte noir
- Inactive state: background transparent, border blanc
- Smooth transition fade (0.3s) when filtering
- Client-side filtering (no API call)
- Conserve active filter on back navigation

Success Criteria:
- Click filter → mosaïque updates in < 0.5s
- Active filter visually distinct
- Works on mobile (horizontal scroll)
- Smooth animation (no flash/jump)"
```

### Checklist de Validation par Feature

Avant de considérer une feature "done", valider contre :

**Homepage Mosaïque** :
- [ ] 12 GIFs chargent initialement
- [ ] Lazy loading fonctionne au scroll
- [ ] Grid responsive (3/2/1 colonnes)
- [ ] Hover overlay affiche titre
- [ ] Click → navigation vers page projet
- [ ] Performance : LCP < 2.5s

**Filtres** :
- [ ] Tous les filtres affichés et cliquables
- [ ] Active state visuellement distinct
- [ ] Transition smooth (fade 0.3s)
- [ ] Filtrage fonctionne (mosaïque updates)
- [ ] Mobile : horizontal scroll ou wrap

**Page Projet** :
- [ ] YouTube video charge et joue
- [ ] Métadonnées affichées (client, année, rôle)
- [ ] Texte contexte formaté correctement
- [ ] Breadcrumb navigation fonctionnelle
- [ ] Responsive mobile

**Formulaire Contact** :
- [ ] Validation temps réel (champs requis, email format)
- [ ] Submit envoie email (tester réception)
- [ ] Message success après envoi
- [ ] Error states affichés clairement
- [ ] Rate limiting fonctionne (pas de spam)

**Sanity CMS** :
- [ ] Studio accessible à /studio
- [ ] Libé peut login (Google OAuth)
- [ ] Ajouter projet fonctionne (< 3 min)
- [ ] Upload GIF fonctionne (preview visible)
- [ ] Changements apparaissent sur site (< 2 min)

### Troubleshooting Guide

**Problème : Lazy loading ne fonctionne pas**
→ Consulter : Tech Spec > Performance Optimization > Frontend Performance
→ Vérifier : IntersectionObserver threshold, viewport detection
→ Debug : `console.log` dans observer callback

**Problème : Filtres ne filtrent pas**
→ Consulter : Tech Spec > Component Architecture, UX Blueprint > Interaction Pattern 2
→ Vérifier : State management, filter logic, category matching
→ Debug : `console.log` filtered array

**Problème : Sanity data ne s'affiche pas**
→ Consulter : Tech Spec > Database Design, API Specification
→ Vérifier : GROQ query syntax, Sanity client config, API token
→ Debug : Test query dans Sanity Vision

**Problème : Performance lente (LCP > 3s)**
→ Consulter : Tech Spec > Performance Optimization, Risk Assessment
→ Vérifier : Lazy loading implémenté, GIFs compressés, CDN enabled
→ Debug : Lighthouse audit, Network tab DevTools

---

**Prêt pour le DEV ORCHESTRATOR ?** 🚀
