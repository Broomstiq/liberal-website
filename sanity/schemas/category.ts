import { defineType, defineField } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Catégorie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icône de Catégorie',
      type: 'image',
      description: '🎨 Image/dessin personnalisé pour le bouton de filtre. Format: PNG transparent (fond noir). L\'image sera affichée avec une hauteur fixe (40px) et largeur automatique. Pas besoin de ratio spécifique - dessine naturellement.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Ordre dans la barre de filtres (plus petit = plus à gauche)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
      order: 'order',
    },
    prepare({ title, media, order }) {
      return {
        title,
        media,
        subtitle: order !== undefined ? `Ordre: ${order}` : 'Pas d\'ordre défini',
      }
    },
  },
})
