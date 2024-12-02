import {defineType} from 'sanity'
import {SlOptions} from 'react-icons/sl'

export const caseOptions = defineType({
  name: 'caseOptions',
  title: '方案選項',
  type: 'document',
  icon: SlOptions,
  fields: [
    {
      name: 'title',
      title: '方案名稱',
      type: 'string',
    },
  ],
})
