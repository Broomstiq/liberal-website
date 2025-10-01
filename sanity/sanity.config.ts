import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './schema'

export default defineConfig({
  name: 'default',
  title: 'Libé Portfolio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem()
              .title('Projets')
              .schemaType('project')
              .child(S.documentTypeList('project').title('Projets')),
            S.listItem()
              .title('Catégories')
              .schemaType('category')
              .child(S.documentTypeList('category').title('Catégories')),
          ]),
    }),
    visionTool(),
  ],
  schema,
})
