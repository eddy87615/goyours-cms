import {defineType} from 'sanity'

export const caseOptions = defineType({
  name: 'caseOptions',
  title: '方案選項',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '方案名稱',
      type: 'string',
    },
  ],
})
