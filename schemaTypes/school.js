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
      description:
        '學校網頁的代稱或編號，為了網頁生成，請好好填寫（可以用跟官方網站一樣的學校縮寫）',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: '更新時間',
      type: 'datetime',
    },
    {
      name: 'address',
      title: '地址',
      type: 'string',
    },
    {
      name: 'city',
      title: '地點（縣市）',
      type: 'string',
      options: {
        list: [
          {title: '-----北海道・東北地區-----', value: 'null'},
          {title: '北海道', value: '北海道'},
          {title: '青森縣', value: '青森縣'},
          {title: '岩手縣', value: '岩手縣'},
          {title: '宮城縣', value: '宮城縣'},
          {title: '秋田縣', value: '秋田縣'},
          {title: '山形縣', value: '山形縣'},
          {title: '福島縣', value: '福島縣'},
          {title: '-----關東地區-----', value: ' null'},
          {title: '茨城縣', value: '茨城縣'},
          {title: '栃木縣', value: '栃木縣'},
          {title: '群馬縣', value: '群馬縣'},
          {title: '埼玉縣', value: '埼玉縣'},
          {title: '千葉縣', value: '千葉縣'},
          {title: '東京都', value: '東京都'},
          {title: '神奈川縣', value: '神奈川縣'},
          {title: '-----中部地區-----', value: 'null'},
          {title: '新潟縣', value: '新潟縣'},
          {title: '富山縣', value: '富山縣'},
          {title: '石川縣', value: '石川縣'},
          {title: '福井縣', value: '福井縣'},
          {title: '山梨縣', value: '山梨縣'},
          {title: '長野縣', value: '長野縣'},
          {title: '岐阜縣', value: '岐阜縣'},
          {title: '靜岡縣', value: '靜岡縣'},
          {title: '愛知縣', value: '愛知縣'},
          {title: '-----近畿地區-----', value: 'null'},
          {title: '三重縣', value: '三重縣'},
          {title: '滋賀縣', value: '滋賀縣'},
          {title: '京都府', value: '京都府'},
          {title: '大阪府', value: '大阪府'},
          {title: '兵庫縣', value: '兵庫縣'},
          {title: '奈良縣', value: '奈良縣'},
          {title: '和歌山縣', value: '和歌山縣'},
          {title: '-----中國・四國地區-----', value: 'null'},
          {title: '鳥取縣', value: '鳥取縣'},
          {title: '島根縣', value: '島根縣'},
          {title: '岡山縣', value: '岡山縣'},
          {title: '廣島縣', value: '廣島縣'},
          {title: '山口縣', value: '山口縣'},
          {title: '德島縣', value: '德島縣'},
          {title: '香川縣', value: '香川縣'},
          {title: '愛媛縣', value: '愛媛縣'},
          {title: '高知縣', value: '高知縣'},
          {title: '-----九州・沖繩地區-----', value: 'null'},
          {title: '福岡縣', value: '福岡縣'},
          {title: '佐賀縣', value: '佐賀縣'},
          {title: '長崎縣', value: '長崎縣'},
          {title: '熊本縣', value: '熊本縣'},
          {title: '大分縣', value: '大分縣'},
          {title: '宮崎縣', value: '宮崎縣'},
          {title: '鹿兒島縣', value: '鹿兒島縣'},
          {title: '沖繩縣', value: '沖繩縣'},
        ],
      },
    },
    {
      name: 'transportation',
      title: '交通',
      type: 'text',
      description: '統一寫「某某站徒步00分鐘」的格式，什麼線不用寫',
    },
    {
      name: 'phone',
      title: '電話',
      type: 'string',
    },
    {
      name: 'enrollTime',
      title: '入學時間',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: '一月', value: '一月'},
          {title: '四月', value: '四月'},
          {title: '七月', value: '七月'},
          {title: '九月', value: '九月'},
          {title: '十月', value: '十月'},
          {title: '隨時入學', value: '隨時入學'},
          {title: '其他', value: '其他'},
        ],
      },
    },
    {
      name: 'purpose',
      title: '學習目的',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: '就職', value: '就職'},
          {title: '大學・研究所升學', value: '大學・研究所升學'},
          {title: '專門學校升學', value: '專門學校升學'},
          {title: '語言學習', value: '語言學習'},
        ],
      },
    },
    {
      name: 'others',
      title: '其他條件',
      type: 'object',
      fields: [
        {
          name: 'schoolTime',
          title: '上課時段',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: '半日制', value: '半日制'},
              {title: '全日制', value: '全日制'},
              {title: '夜間制', value: '夜間制'},
              {title: '週末班', value: '週末班'},
            ],
          },
        },
        {
          name: 'period',
          title: '修業期間',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: '短期（三個月以下）', value: '短期（三個月以下）'},
              {title: '長期（半年以上）', value: '長期（半年以上）'},
            ],
          },
        },
        {
          name: 'support',
          title: '支援服務',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: '就職輔導', value: '就職輔導'},
              {title: '升學輔導', value: '升學輔導'},
              {title: '打工介紹', value: '打工介紹'},
              {title: '正職介紹', value: '正職介紹'},
              {title: '學校宿舍', value: '學校宿舍'},
              {title: '生活支援', value: '生活支援'},
            ],
          },
        },
      ],
    },
    {
      name: 'money',
      title: '學費',
      type: 'string',
      description:
        '填寫範圍，用半形~間隔，例如：50000~100000。填寫數字即可，不用加上「日幣」或「元」等單位',
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
      description:
        '學校的簡短介紹：以列表格式輸入，不然格式會跑掉：（填寫完成全選（Ctr+A））之後點選Bullet做成列表',
    },
    {
      name: 'character',
      title: '學校特色',
      type: 'array',
      description: '有點麻煩，不過特色的標題跟描述要分開填寫，排版才不會跑掉',
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
      name: 'tags',
      title: '學校選項',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: '我們的推薦', value: '我們的推薦'},
          {title: '高人氣學校', value: '高人氣學校'},
        ],
      },
      initialValue: [],
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
  preview: {
    select: {
      title: 'name',
      subtitle: 'city',
      media: 'logo',
      tags: 'tags',
    },
    prepare(selection) {
      const {title, subtitle, tags = []} = selection
      const tagInfo = tags.length ? ` • ${tags.join(', ')}` : ''
      return {...selection, subtitle: `${subtitle}${tagInfo}`}
    },
  },
  orderings: [
    {
      title: '學校名稱（A-Z）',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}], // 學校名稱從 A → Z
    },
    {
      title: '學校名稱（Z-A）',
      name: 'nameDesc',
      by: [{field: 'name', direction: 'desc'}], // 學校名稱從 Z → A
    },
    {
      title: '地區（A-Z）',
      name: 'cityAsc',
      by: [{field: 'city', direction: 'asc'}], // 地區名稱從 A → Z
    },
    {
      title: '地區（Z-A）',
      name: 'cityDesc',
      by: [{field: 'city', direction: 'desc'}], // 地區名稱從 Z → A
    },
    {
      title: '更新時間（新到舊）',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}], // 依更新時間排序
    },
    {
      title: '更新時間（舊到新）',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'asc'}], // 依更新時間排序
    },
  ],
})
