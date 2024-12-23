import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: '文章類別',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: '標籤名',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
  ],
})
