import {HiOutlineBuildingOffice2} from 'react-icons/hi2'

export default {
  name: 'company',
  title: '公司',
  type: 'document',
  icon: HiOutlineBuildingOffice2,
  fieldsets: [
    {
      name: 'overview',
      title: '会社概要',
      options: {collapsible: true, collapsed: false},
    },
    {
      name: 'hireCondition',
      title: '求人内容',
      options: {collapsible: true, collapsed: false},
    },
    {
      name: 'treatment',
      title: '待遇など',
      options: {collapsible: true, collapsed: false},
    },
  ],
  fields: [
    {
      name: 'name',
      title: '公司名稱',
      type: 'string',
    },
    {
      name: 'logo',
      title: '公司 Logo',
      type: 'image',
    },
    {
      name: 'address',
      title: '地址',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      source: 'title',
      maxLength: 96,
    },
    {
      name: 'industry',
      title: '業種',
      type: 'string',
    },
    {
      name: 'jobContent',
      title: '職種',
      type: 'string',
    },
    {
      name: 'companyContent',
      title: '事業内容',
      type: 'text',
      fieldset: 'overview',
    },
    {
      name: 'popularity',
      title: '従業員数',
      type: 'string',
      fieldset: 'overview',
    },
    {
      name: 'propertt',
      title: '資本金',
      type: 'string',
      fieldset: 'overview',
    },
    {
      name: 'moneyMade',
      title: '売上高',
      type: 'string',
      fieldset: 'overview',
    },
    {
      name: 'workingLocation',
      title: '勤務地',
      type: 'array',
      description: '有幾個就打幾個',
      fieldset: 'overview',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: '勤務地',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    },
    {
      name: 'builtAt',
      title: '設立年月',
      type: 'datetime',
      fieldset: 'overview',
    },
    {
      name: 'officialSite',
      title: '公式サイト',
      type: 'string',
      fieldset: 'overview',
    },
  ],
}
