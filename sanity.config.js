'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {colorInput} from '@sanity/color-input' // 引入 color-input 插件
import {structureTool} from 'sanity/structure'
import {table} from '@sanity/table' // 引入 table 插件

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, token} from './env'
import {schema} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  basePath: '/studio',
  projectId: '87td6piu',
  dataset: 'production',
  token: process.env.NEXT_PUBLIC_API_TOKEN,
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    colorInput(), // 將 color-input 插件加入 plugins
    table(),
  ],
})
