'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './env'
import {schema} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  basePath: '/studio',
  projectId: '87td6piu',
  dataset: 'production',
  token:
    'sk324s8ibYOVfXlmZ7GLeI0HJsUr6mw7fDlRtZ2TS7uSkFm5RKLLayqJKxJIjXn6Jx9elWFMmDC1QUTkv5zWtvGm6faUeom9tZKomESwWUFl9aMHIgGjHTPo9Bt9MY7IS0f3XJTylkk0MpEb4fTZFfXwO0ZLvcejNxfrR9yqN75D5vs6BBJy',
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
