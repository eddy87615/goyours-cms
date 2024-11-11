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
      name: 'logo',
      title: '學校logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: '學校名稱',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: '學校網頁的代稱或編號，為了網頁生成，請好好填寫',
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
      name: 'sort',
      title: '類別',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: '關東地區：東京', value: '關東地區：東京'},
          {title: '關東地區：其他', value: '關東地區：其他'},
          {title: '關西地區', value: '關西地區'},
          {title: '北海道・東北地區', value: '北海道・東北地區'},
          {title: '九州・沖繩地區', value: '九州・沖繩地區'},
          {title: '中部地區', value: '中部地區'},
          {title: '私塾教育', value: '私塾教育'},
        ],
      },
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
      name: 'officialSite',
      title: '官方網站',
      type: 'string',
    },
    {
      name: 'video',
      title: '學校介紹影片',
      type: 'string',
    },
    {
      name: 'description',
      title: '學校簡介',
      type: 'array',
      of: [
        {
          type: 'block',
          // 限制blockContent只能輸入列表
          lists: [{title: 'Bullet', value: 'bullet'}], // 僅允許 bullet 列表
          marks: {
            // 禁用其他標記，如加粗、斜體等
            decorators: [],
          },
          styles: [], // 禁用其他樣式（如標題等），只允許純文本
        },
      ],
      description: '學校的簡短介紹：以列表格式輸入，不然格式會跑掉',
    },
    {
      name: 'character',
      title: '學校特色',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: '特色標題',
              type: 'string',
            },
            {
              name: 'description',
              title: '特色敘述',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    },
    {
      name: 'gallery',
      title: '圖片集',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
  ],
})
