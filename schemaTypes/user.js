import {IoPersonOutline} from 'react-icons/io5'
import {defineType} from 'sanity'

export const user = defineType({
  name: 'user',
  title: '會員資料',
  type: 'document',
  icon: IoPersonOutline,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          {title: 'Admin', value: 'admin'},
          {title: 'Member', value: 'member'},
        ],
      },
    },
  ],
})
