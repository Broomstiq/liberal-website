import { type SchemaTypeDefinition } from 'sanity'
import { project } from './schemas/project'
import { category } from './schemas/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, category],
}
