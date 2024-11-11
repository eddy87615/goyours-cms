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
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: '內文', value: 'normal'},
        // {title: 'H1', value: 'h1'},
        {title: '大標題', value: 'h2'},
        {title: '中標題', value: 'h3'},
        {title: '小標題', value: 'h4'},
        // {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: '數字列表', value: 'number'},
        {title: '點點列表', value: 'bullet'},
      ],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          {title: '粗體', value: 'strong'},
          {title: '斜體', value: 'em'},
          {title: '底線', value: 'underline'},
          {title: '刪除線', value: 'strike-through'},
        ],

        // Annotations can be any object structure – e.g. a link or a footnote.
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
            name: 'favoriteColor',
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
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
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
  ],
})
