import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { Logo } from './components/Logo'

export default defineConfig({
  name: 'default',
  title: 'Askar',

  projectId: 'sqw3f26y',
  dataset: 'production',
  studio: {
    components: {
      logo: Logo,
    },
  },
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
