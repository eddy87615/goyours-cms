import {IoIosCheckmarkCircle, IoIosAlert} from 'react-icons/io'
import {PiIdentificationCardLight} from 'react-icons/pi'

import {defineType} from 'sanity'

export const jobapply = defineType({
  name: 'jobapply',
  title: '打工度假申請',
  type: 'document',
  icon: PiIdentificationCardLight,
  fields: [
    {name: 'jobname', title: '申請工作名稱', type: 'string'},
    {
      name: 'upTime',
      title: '表單送出時間',
      type: 'datetime',
    },
    {
      name: 'name',
      title: '真實姓名',
      type: 'string',
    },
    {
      name: 'age',
      title: '年齡',
      type: 'string',
    },
    {
      name: 'major',
      title: '科系',
      type: 'string',
    },
    {
      name: 'phone',
      title: '行動電話',
      type: 'string',
      readOnly: ({currentUser}) => {
        return !currentUser.roles.find(({name}) => name === 'administrator')
      },
    },
    {
      name: 'lineId',
      title: 'Line ID',
      type: 'string',
      readOnly: ({currentUser}) => {
        return !currentUser.roles.find(({name}) => name === 'administrator')
      },
    },
    {
      name: 'email',
      title: '電子郵件',
      type: 'string',
      readOnly: ({currentUser}) => {
        return !currentUser.roles.find(({name}) => name === 'administrator')
      },
    },
    {
      name: 'callTime',
      title: '方便聯絡時段',
      type: 'string',
    },
    {
      name: 'resume',
      title: '履歷表',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx', // 限制檔案類型
      },
      readOnly: ({currentUser}) => {
        return !currentUser.roles.find(({name}) => name === 'administrator')
      },
    },
    {
      name: 'contacted',
      title: '聯絡與否',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'remarks',
      title: '備註',
      type: 'text',
    },
  ],
  preview: {
    select: {
      name: 'name',
      contacted: 'contacted',
    },
    prepare(selection) {
      const {name, contacted} = selection
      return {
        title: name,
        subtitle: contacted ? '已聯絡' : '未聯絡',
        media: contacted ? IoIosCheckmarkCircle : IoIosAlert, // 使用不同圖標標示聯絡狀態
      }
    },
  },
  orderings: [
    {
      title: '未聯絡優先',
      name: 'contactedAsc',
      by: [{field: 'contacted', direction: 'asc'}], // 未聯絡優先
    },
    {
      title: '已聯絡優先',
      name: 'contactedDesc',
      by: [{field: 'contacted', direction: 'desc'}], // 已聯絡優先
    },
  ],
})
