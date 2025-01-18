import {FaRegCircleQuestion} from 'react-icons/fa6'

import {defineType} from 'sanity'

export const faqs = defineType({
  name: 'faqs',
  title: '常見QA',
  type: 'document',
  icon: FaRegCircleQuestion,
  fields: [
    {
      name: 'type',
      title: '問題類型',
      type: 'string',
      options: {
        list: [
          {title: '留學', value: 'studying'},
          {title: '打工度假', value: 'working'},
        ],
      },
      description: '選擇問題類型',
    },
    {name: 'question', title: '問題', type: 'text'},
    {
      name: 'answer',
      title: '回答',
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
  preview: {
    select: {
      title: 'question', // 使用 question 作為預覽標題
    },
  },
})
