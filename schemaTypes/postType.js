import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: '文章標題',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        '文章代稱或編號，為了網頁生成，請好好填寫（推薦可以有自己的取名邏輯，例如：打工度假相關文章取名為『WorkingHoliday-20240101』）',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: '作者',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
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
    }),
    defineField({
      name: 'categories',
      title: '標籤',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      title: '發布時間',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: '內容',
      type: 'blockContent',
      description:
        '標題會生成文章內的連結，大標題會變成最大的目錄連結，中標題次之，小標題不會生成連結。',
    }),
    defineField({
      name: 'views',
      title: '瀏覽次數',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
  orderings: [
    {
      title: '發文日期從新到舊',
      name: 'publishedDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: '發文日期從舊到新',
      name: 'publishedAsc',
      by: [{field: 'publishedAt', direction: 'asc'}],
    },
  ],
})
