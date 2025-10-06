import { type SchemaTypeDefinition } from 'sanity'
import { project } from './schemas/project'
import { category } from './schemas/category'
import { expertise } from './schemas/expertise'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, category, expertise],
}
