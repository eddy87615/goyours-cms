export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    },
    {
      name: 'body',
      type: 'blockContent',
    },
    // 其他字段
  ],
});
