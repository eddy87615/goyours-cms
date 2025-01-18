import {IoIosInformationCircleOutline} from 'react-icons/io'

import {defineType} from 'sanity'

export const inform = defineType({
  name: 'inform',
  title: '最新通知',
  type: 'document',
  icon: IoIosInformationCircleOutline,
  fields: [
    {name: 'title', title: '通知標題', type: 'string'},
    {
      name: 'content',
      title: '通知內文',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: '網址',
                    name: 'href',
                    type: 'url',
                  },
                  {
                    title: '在新分頁開啟',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
})
