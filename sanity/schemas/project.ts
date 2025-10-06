import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projet',
  type: 'document',
  validation: (Rule) =>
    Rule.custom((doc: any) => {
      const hasVisual = doc?.mosaicThumbnail || doc?.mainGif || doc?.mainImage || doc?.youtubeUrl || doc?.vimeoUrl
      if (!hasVisual) {
        return 'Au moins un média visuel est requis (mosaicThumbnail, mainGif, mainImage, youtubeUrl, ou vimeoUrl)'
      }
      return true
    }),
  fields: [
    // MANDATORY FIELDS
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de Publication',
      type: 'datetime',
      description: 'Date du projet (utilisée pour le tri chronologique)',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),

    // MEDIA FIELDS (at least one visual required)
    defineField({
      name: 'mosaicThumbnail',
      title: 'Vignette Mosaïque (optionnel)',
      type: 'image',
      description: '🎯 GIF/image pour la mosaïque homepage. Si vide, utilise mainGif, mainImage, ou thumbnail YouTube/Vimeo automatique. Ratio 16:9 recommandé. <5MB.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainGif',
      title: 'GIF Principal',
      type: 'image',
      description: '🎬 GIF animé qui EST le projet (résultat final). Utilisé comme vignette mosaïque si pas de mosaicThumbnail.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Image Principale',
      type: 'image',
      description: '🖼️ Image statique principale. Fallback vignette mosaïque si pas de GIF.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
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
              title: 'Légende (optionnel)',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'URL Vidéo YouTube',
      type: 'url',
      description: '🎥 Lien YouTube de la vidéo du projet (optionnel)',
    }),
    defineField({
      name: 'vimeoUrl',
      title: 'URL Vidéo Vimeo',
      type: 'url',
      description: '🎥 Lien Vimeo de la vidéo du projet (optionnel)',
    }),
    defineField({
      name: 'websiteUrl',
      title: 'URL Site Web',
      type: 'url',
      description: '🔗 Lien vers le site web du client/projet (optionnel)',
    }),

    // METADATA FIELDS (all optional)
    defineField({
      name: 'client',
      title: 'Client / Studio',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Année',
      type: 'number',
      validation: (Rule) => Rule.min(2000).max(new Date().getFullYear()),
    }),
    defineField({
      name: 'role',
      title: 'Rôle de Libé',
      type: 'string',
      description: 'Ex: Réalisation, Animation, Motion Design',
    }),
    defineField({
      name: 'categories',
      title: 'Catégories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
      name: 'expertises',
      title: 'Expertises',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'expertise' }] }],
    }),
    defineField({
      name: 'contextText',
      title: 'Texte de Contexte',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Description du projet (court pour corpo, long pour projets perso)',
    }),

    // DISPLAY OPTIONS
    defineField({
      name: 'featured',
      title: 'Travail Phare',
      type: 'boolean',
      description: 'Afficher dans la section Travaux Phares',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Ordre (pour tri manuel)',
      type: 'number',
      description: 'Laisser vide pour tri chronologique automatique',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      mosaicThumbnail: 'mosaicThumbnail',
      mainGif: 'mainGif',
      mainImage: 'mainImage',
      client: 'client',
    },
    prepare({ title, mosaicThumbnail, mainGif, mainImage, client }) {
      return {
        title,
        media: mosaicThumbnail || mainGif || mainImage,
        subtitle: client || 'Sans client',
      }
    },
  },
})
