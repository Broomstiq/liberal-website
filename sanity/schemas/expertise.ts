import { defineType, defineField } from 'sanity'

export const expertise = defineType({
  name: 'expertise',
  title: 'Expertise',
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
      name: 'color',
      title: 'Couleur',
      type: 'string',
      description: 'Couleur pour la pastille de différenciation visuelle (format: #hex)',
      validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).error('Format hexadécimal requis (ex: #FF5733)'),
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
      color: 'color',
      order: 'order',
    },
    prepare({ title, color, order }) {
      return {
        title,
        subtitle: `${color ? `Couleur: ${color}` : 'Pas de couleur'} | Ordre: ${order ?? 0}`,
      }
    },
  },
})
