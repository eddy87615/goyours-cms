import {MdOutlineHomeWork} from 'react-icons/md'
import {defineType} from 'sanity'

export const jobList = defineType({
  name: 'jobList',
  title: '打工度假職缺',
  type: 'document',
  icon: MdOutlineHomeWork,
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
      name: 'publishedAt',
      title: '發布時間',
      type: 'datetime',
    },
    {
      name: 'tags',
      title: '職缺選項',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: '我們的推薦', value: '我們的推薦'},
          {title: '高人氣職缺', value: '高人氣職缺'},
          // 可以在這裡新增更多標籤選項
        ],
      },
    },
    {
      name: 'name',
      title: '職缺名稱',
      type: 'string',
    },
    {
      name: 'company',
      title: '公司名稱',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: '職缺的代稱或編號，為了網頁生成，請好好填寫',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'location',
      title: '地點',
      type: 'string',
      description: '縣市名稱',
    },
    {
      name: 'area',
      title: '地區分類',
      type: 'string',
      options: {
        list: [
          {title: '關東地區', value: '關東地區'},
          {title: '關西地區', value: '關西地區'},
          {title: '中部地區', value: '中部地區'},
          {title: '九州地區', value: '九州地區'},
          {title: '北海道', value: '北海道'},
          {title: '東北地區', value: '東北地區'},
          {title: '沖繩', value: '沖繩'},
        ],
      },
    },
    {
      name: 'jobtype',
      title: '職種分類',
      type: 'string',
      options: {
        list: [
          {title: '服務業', value: '服務業'},
          {title: '製造業', value: '製造業'},
          {title: '觀光業', value: '觀光業'},
          {title: '農業', value: '農業'},
          {title: '其他', value: '其他'},
        ],
      },
    },
    {
      name: 'transportation',
      title: '交通',
      type: 'text',
      description: '簡短說明交通方式。',
    },
    {
      name: 'jobcontent',
      title: '工作內容',
      type: 'text',
      description: '簡短說明工作內容',
    },
    {
      name: 'jobtime',
      title: '勤務時間',
      type: 'text',
      description: '簡短說明勤務時間，用09:00~17:00的格式表示',
    },
    {
      name: 'workhour',
      title: '每週工時',
      type: 'text',
      description: '簡短說明每週工時',
    },
    {
      name: 'resttime',
      title: '休息時間',
      type: 'text',
      description: '簡短說明休息時間',
    },
    {
      name: 'jobperiod',
      title: '工作期間',
      type: 'text',
      description: '簡短說明工作期間',
    },
    {
      name: 'salary',
      title: '薪資',
      type: 'string',
      description: '輸入基本薪資數字，數字就好',
    },
    {
      name: 'privilege',
      title: '福利厚生',
      type: 'text',
      description: '簡短說明福利厚生，例如交通費補助，住宿補助等等',
    },
    {
      name: 'japanese',
      title: '日文程度要求',
      type: 'string',
      options: {
        list: [
          {title: 'N1以上', value: 'N1以上'},
          {title: 'N2以上', value: 'N2以上'},
          {title: 'N3以上', value: 'N3以上'},
          {title: 'N4以上', value: 'N4以上'},
          {title: 'N5以上', value: 'N5以上'},
          {title: '日語會話程度', value: '基本日語會話程度'},
          {title: '無要求', value: '無要求'},
        ],
      },
    },
    {
      name: 'detailedFile',
      title: '求人票',
      type: 'file', // 新增的文件上傳字段
      description: '上傳這份工作的求人票（PDF）',
      options: {
        accept: '.pdf,.doc,.docx', // 可以指定允許的文件類型
      },
      fields: [
        {
          name: 'description',
          type: 'string',
          title: '文件描述',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'company',
      media: 'mainImage',
    },
  },
})
