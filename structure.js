// https://www.sanity.io/docs/structure-builder-cheat-sheet
import {IoTrashOutline} from 'react-icons/io5'
import {MdOutlineHomeWork} from 'react-icons/md'
import {MdOutlineLocalOffer} from 'react-icons/md'
import {IoInformationCircleOutline} from 'react-icons/io5'

export const structure = (S) =>
  S.list()
    .title('Go Yours後台')
    .items([
      S.documentTypeListItem('post').title('文章'),
      S.documentTypeListItem('school').title('語言學校'),
      S.documentTypeListItem('jobList').title('打工度假職缺'),
      S.listItem()
        .title('日本公司列表')
        .id('companyList')
        .icon(MdOutlineHomeWork)
        .child(
          S.documentTypeList('company')
            .title('公司列表')
            .child((companyId) =>
              S.list()
                .title('公司內容')
                .id(`company-${companyId}`)
                .items([
                  S.listItem()
                    .title('公司資料')
                    .id(`company-info-${companyId}`)
                    .icon(IoInformationCircleOutline)
                    .child(S.document().documentId(companyId).schemaType('company')),
                  S.listItem()
                    .title('該公司職缺列表')
                    .id(`company-jobs-${companyId}`)
                    .icon(MdOutlineLocalOffer)
                    .child(
                      S.documentTypeList('job')
                        .id(`company-jobs-list-${companyId}`)
                        .title('該公司職缺列表')
                        .filter('_type == "job" && company._ref == $companyId')
                        .params({companyId}),
                    ),
                ]),
            ),
        ),

      S.divider(),
      // 🔥 加入清理功能
      S.listItem()
        .title('公司資訊已刪除職缺')
        .id('cleanup-jobs')
        .icon(IoTrashOutline)
        .child(
          S.documentTypeList('job')
            .title('公司資訊已刪除職缺(後悔專區)')
            .filter('_type == "job" && !defined(company->_id)'),
        ),
      S.divider(),
      S.documentTypeListItem('homeSchool').title('首頁推薦語言學校'),
      S.divider(),
      S.documentTypeListItem('contact').title('聯絡資料'),
      S.documentTypeListItem('jobapply').title('打工職缺申請'),
      S.documentTypeListItem('JPjobapply').title('正職職缺申請'),
      // S.documentTypeListItem('user').title('會員資料'),
      S.divider(),
      S.documentTypeListItem('inform').title('最新通知'),
      S.documentTypeListItem('caseOptions').title('表單諮詢方案'),
      S.documentTypeListItem('download').title('下載資料'),
      S.documentTypeListItem('author').title('文章作者'),
      S.documentTypeListItem('category').title('文章類別'),
      S.divider(),
      S.documentTypeListItem('feedBack').title('學員回饋'),
      S.documentTypeListItem('faqs').title('常見QA'),
      // S.documentTypeListItem('keywordSetting').title('關鍵字設定'),

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
            'JPjobList',
            'jobapply',
            'JPjobapply',
            'feedBack',
            'faqs',
            'inform',
            'download',
            'keywordSetting',
            'homeSchool',
            'job', // 🔥 重要：排除 job，這樣就不會有獨立的正職職缺選項
          ].includes(item.getId()),
      ),
    ])
