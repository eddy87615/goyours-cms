import {IoIosInformationCircleOutline} from 'react-icons/io'

import {defineType} from 'sanity'

export const inform = defineType({
  name: 'inform',
  title: '最新通知',
  type: 'document',
  icon: IoIosInformationCircleOutline,
  fields: [
    {name: 'title', title: '通知標題', type: 'string'},
    {name: 'content', title: '通知內文', type: 'text'},
  ],
})
