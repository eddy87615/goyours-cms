import {VscSymbolKeyword} from 'react-icons/vsc'

import {defineType} from 'sanity'

export const keywordSetting = defineType({
  name: 'keywordSetting',
  title: '主要畫面關鍵字設定',
  type: 'document',
  icon: VscSymbolKeyword,
  fields: [
    {name: 'keyword', title: '關鍵字', type: 'text'},
    {
      name: 'page',
      title: '畫面選擇',
      type: 'string',
      options: {
        list: [
          {title: '首頁', value: '首頁'},
          {title: '關於我們', value: '關於我們'},
          {title: '文章專區', value: '文章專區'},
          {title: '打工度假', value: '打工度假'},
          {title: '日本留學', value: '日本留學'},
          {title: '常見Q&A', value: '常見Q&A'},
          {title: '下載專區', value: '下載專區'},
          {title: '聯絡我們', value: '聯絡我們'},
        ],
      },
      description: '選擇要設定關鍵字的畫面選項',
    },
  ],
  preview: {
    select: {
      title: 'page', // 直接選擇 page 欄位
      keyword: 'keyword', // 也可以選擇 keyword 欄位
    },
    prepare(selection) {
      const {title, keyword} = selection
      return {
        title: title || '未選擇頁面', // 如果 page 為空，顯示預設文字
        subtitle: keyword || '未設定關鍵字', // 可以加入副標題顯示關鍵字內容
      }
    },
  },
})
