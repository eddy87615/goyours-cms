import {IoDownloadOutline} from 'react-icons/io5'
import {defineType} from 'sanity'

export const download = defineType({
  name: 'download',
  title: '下載資料',
  type: 'document',
  icon: IoDownloadOutline,
  fields: [
    {
      name: 'downloadDocument',
      title: '下載資料',
      type: 'file', // 新增的文件上傳字段
      description: '提供給會員的下載資料',
      options: {
        accept: '.pdf,.doc,.docx,.xls', // 可以指定允許的文件類型
      },
      fields: [
        {
          name: 'description',
          type: 'string',
          title: '文件描述',
        },
      ],
    },
    {
      name: 'type',
      title: '檔案類型',
      type: 'string',
      options: {
        list: [
          {title: '打工度假簽證申請', value: '打工度假簽證申請'},
          {title: '打工度假履歷', value: '打工度假履歷'},
          {title: '就職相關資料', value: '就職相關資料'},
          {title: '其他', value: '其他'},
        ],
      },
      description: '選擇檔案類型',
    },
  ],
  preview: {
    select: {
      title: 'downloadDocument.description', // 使用文件描述作為標題
      media: 'downloadDocument', // 如果需要展示文件圖標或圖片，可以選擇 media
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title || '未提供描述', // 如果 description 為空，顯示默認文本
        media,
      }
    },
  },
})
