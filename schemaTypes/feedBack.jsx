import {MdOutlineFeedback} from 'react-icons/md'
import {defineType} from 'sanity'

export const feedBack = defineType({
  name: 'feedBack',
  title: '學員回饋',
  type: 'document',
  icon: MdOutlineFeedback,
  fields: [
    {name: 'name', title: '學員姓名', type: 'string'},
    {
      name: 'gender',
      title: '性別',
      type: 'string',
      options: {
        list: [
          {title: '男生', value: 'male'},
          {title: '女生', value: 'female'},
        ],
      },
      description: '選擇性別',
    },
    {name: 'feedback', title: '回饋訊息', type: 'text'},
  ],
})
