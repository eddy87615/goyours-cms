// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Go Yours後台')
    .items([
      S.documentTypeListItem('post').title('文章'),
      S.documentTypeListItem('contact').title('聯絡資料'),
      S.documentTypeListItem('jobapply').title('打工度假申請'),
      S.documentTypeListItem('jobList').title('打工度假職缺'),
      S.documentTypeListItem('school').title('語言學校'),
      // S.documentTypeListItem('user').title('會員資料'),
      S.divider(),
      S.documentTypeListItem('caseOptions').title('表單諮詢方案'),
      S.documentTypeListItem('author').title('文章作者'),
      S.documentTypeListItem('category').title('文章類別'),
      S.divider(),
      S.documentTypeListItem('feedBack').title('學員回饋'),
      S.documentTypeListItem('faqs').title('常見QA'),

      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            'post',
            'category',
            'author',
            'school',
            'user',
            'contact',
            'caseOptions',
            'jobList',
            'jobapply',
            'feedBack',
            'faqs',
          ].includes(item.getId()),
      ),
    ])
