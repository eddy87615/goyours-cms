// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('文章'),
      S.documentTypeListItem('category').title('類別'),
      S.documentTypeListItem('author').title('作者'),
      S.documentTypeListItem('school').title('學校'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author', 'school'].includes(item.getId()),
      ),
    ])
