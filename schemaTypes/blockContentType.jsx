import React from 'react'
import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon, ColorWheelIcon} from '@sanity/icons'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: '內文', value: 'normal'},
        {title: '大標題', value: 'h2'},
        {title: '中標題', value: 'h3'},
        {title: '小標題', value: 'h4'},
      ],
      lists: [
        {title: '數字列表', value: 'number'},
        {title: '點點列表', value: 'bullet'},
      ],
      marks: {
        decorators: [
          {title: '粗體', value: 'strong'},
          {title: '斜體', value: 'em'},
          {title: '底線', value: 'underline'},
          {title: '刪除線', value: 'strike-through'},
        ],
        annotations: [
          {
            title: '超連結',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          {
            title: '文字顏色',
            icon: ColorWheelIcon,
            name: 'color',
            type: 'object',
            fields: [
              {
                title: 'Color',
                name: 'hex',
                type: 'color',
                options: {
                  disableAlpha: true,
                },
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      title: '圖片',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '替代文字',
        },
      ],
    }),
    defineArrayMember({
      name: 'gallery',
      title: '圖片集',
      type: 'object',
      fields: [
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{type: 'image'}],
        },
      ],
    }),
    defineArrayMember({
      name: 'table',
      title: '表格',
      type: 'table', // 來自插件的表格類型
    }),
  ],
})
