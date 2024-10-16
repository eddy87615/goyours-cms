import {IoSchoolOutline} from 'react-icons/io5'
import {defineType} from 'sanity'

export const school = defineType({
  name: 'school',
  title: '語言學校',
  type: 'document',
  icon: IoSchoolOutline,
  fields: [
    {
      name: 'mainImage',
      title: '封面圖片',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '圖片描述',
        },
      ],
    },
    {
      name: 'name',
      title: '名稱',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'address',
      title: '地址',
      type: 'string',
    },
    {
      name: 'location',
      title: '地點',
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
      title: '學校簡介',
      type: 'text',
      description: '學校的簡短介紹。',
    },
    {
      name: 'character',
      title: '學校',
      type: 'blockContent',
      description: '學校特色描述',
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
