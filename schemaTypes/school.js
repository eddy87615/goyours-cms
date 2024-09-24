import {LuSchool} from 'react-icons/lu' // 導入學校圖標
import {defineType} from 'sanity'

export const school = defineType({
  name: 'school',
  title: '學校',
  type: 'document',
  icon: LuSchool,
  fields: [
    {
      name: 'name',
      title: '名稱',
      type: 'string',
    },
    {
      name: 'address',
      title: '地址',
      type: 'string',
    },
    {
      name: 'transportation',
      title: '交通',
      type: 'text',
      description: '學校附近的交通狀況，例如公車、地鐵、停車場等。',
    },
    {
      name: 'phone',
      title: '電話',
      type: 'string',
    },
    {
      name: 'description',
      title: '簡介',
      type: 'text',
      description: '學校的簡短介紹。',
    },
    {
      name: 'slideshow',
      title: '圖片幻燈片',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true, // 允許圖片裁切
          },
        },
      ],
    },
  ],
})
