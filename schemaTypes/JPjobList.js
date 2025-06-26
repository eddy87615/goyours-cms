import {defineType} from 'sanity'

export const JPjobList = defineType({
  name: 'job',
  title: '該公司職缺',
  type: 'document',
  fieldsets: [
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
    {
      name: 'test',
      title: '選考内容',
      options: {collapsible: true, collapsed: false},
    },
    {
      name: 'memo',
      title: 'その他備考',
      options: {collapsible: true, collapsed: false},
    },
  ],
  fields: [
    {
      name: 'title',
      title: '職缺名稱',
      type: 'string',
    },
    {
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
    },
    {
      name: 'company',
      title: '公司',
      type: 'reference',
      to: [{type: 'company'}],
      weak: true, // 🔥 設為弱引用，允許刪除被引用的公司
      validation: (Rule) => Rule.required().error('請選擇所屬公司'),
      description: '請選擇這個職缺所屬的公司',
      // 🔥 加入初始值函數，從 URL 參數中取得公司 ID
      initialValue: (props, context) => {
        // 從當前的結構路徑中提取公司 ID
        const urlPath = window.location.pathname
        const companyIdMatch = urlPath.match(/company-jobs-([a-f0-9-]+)/)
        if (companyIdMatch) {
          const companyId = companyIdMatch[1]
          return {
            _type: 'reference',
            _ref: companyId,
          }
        }
        return undefined
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      source: 'title',
      maxLength: 96,
    },
    {
      name: 'hiringPotsition',
      title: '募集職種',
      type: 'string',
      fieldset: 'hireCondition',
    },
    {
      name: 'hiringType',
      title: '雇用形態',
      type: 'string',
      fieldset: 'hireCondition',
      options: {
        list: [
          {title: '契約社員（正社員登用あり）', value: '契約社員（正社員登用あり）'},
          {title: '正社員', value: '正社員'},
          {title: 'アルバイト', value: 'アルバイト'},
        ],
      },
    },
    {
      name: 'workContent',
      title: '職務内容',
      type: 'array',
      fieldset: 'hireCondition',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [
            {title: '項目符號', value: 'bullet'},
            {title: '編號列表', value: 'number'},
          ],
          marks: {
            decorators: [],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: '網址',
                    name: 'href',
                    type: 'url',
                  },
                  {
                    title: '在新分頁開啟',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: 'skill',
      title: '求めるスキル',
      type: 'array',
      fieldset: 'hireCondition',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [
            {title: '項目符號', value: 'bullet'},
            {title: '編號列表', value: 'number'},
          ],
          marks: {
            decorators: [],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: '網址',
                    name: 'href',
                    type: 'url',
                  },
                  {
                    title: '在新分頁開啟',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: 'workingTime',
      title: '就業時間',
      type: 'array',
      fieldset: 'hireCondition',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [
            {title: '項目符號', value: 'bullet'},
            {title: '編號列表', value: 'number'},
          ],
          marks: {
            decorators: [],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: '網址',
                    name: 'href',
                    type: 'url',
                  },
                  {
                    title: '在新分頁開啟',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: 'workingTimeAdd',
      title: '就業時間補足',
      type: 'array',
      fieldset: 'hireCondition',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [
            {title: '項目符號', value: 'bullet'},
            {title: '編號列表', value: 'number'},
          ],
          marks: {
            decorators: [],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: '網址',
                    name: 'href',
                    type: 'url',
                  },
                  {
                    title: '在新分頁開啟',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: 'breakTime',
      title: '休憩時間',
      type: 'string',
      fieldset: 'hireCondition',
    },
    {
      name: 'workingFrom',
      title: '入社時間',
      type: 'string',
      fieldset: 'hireCondition',
    },
    {
      name: 'hiringPopularity',
      title: '採用人数',
      type: 'string',
      fieldset: 'hireCondition',
    },
    {
      name: 'hiringPeriod',
      title: '雇用期間',
      type: 'string',
      fieldset: 'hireCondition',
    },
    {
      name: 'salaryType',
      title: '給与形態',
      type: 'string',
      fieldset: 'hireCondition',
    },
    {
      name: 'salary',
      title: '月給',
      type: 'string',
      fieldset: 'hireCondition',
    },
    {
      name: 'workingLateSalary',
      title: '固定残業代',
      type: 'string',
      fieldset: 'hireCondition',
    },
    {
      name: 'promotion',
      title: '昇給の有無',
      type: 'string',
      fieldset: 'hireCondition',
    },
    {
      name: 'price',
      title: '賞与',
      type: 'array',
      fieldset: 'hireCondition',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [
            {title: '項目符號', value: 'bullet'},
            {title: '編號列表', value: 'number'},
          ],
          marks: {
            decorators: [],
            annotations: [],
          },
        },
      ],
    },
    {
      name: 'yearIncome',
      title: '年収',
      type: 'string',
      fieldset: 'hireCondition',
    },
    {
      name: 'modelYearIncome',
      title: 'モデル年収',
      type: 'array',
      fieldset: 'hireCondition',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [
            {title: '項目符號', value: 'bullet'},
            {title: '編號列表', value: 'number'},
          ],
          marks: {
            decorators: [],
            annotations: [],
          },
        },
      ],
    },
    {
      name: 'modelYearIncomeAdd',
      title: '年収補足',
      type: 'array',
      fieldset: 'hireCondition',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [
            {title: '項目符號', value: 'bullet'},
            {title: '編號列表', value: 'number'},
          ],
          marks: {
            decorators: [],
            annotations: [],
          },
        },
      ],
    },
    {
      name: 'flexWorkingTime',
      title: '裁量労働制',
      type: 'string',
      fieldset: 'hireCondition',
    },
    {
      name: 'flexWorkingTimeAdd',
      title: '裁量労働制補足',
      type: 'string',
      fieldset: 'hireCondition',
    },
    {
      name: 'tryPeriod',
      title: '試用期間',
      type: 'string',
      fieldset: 'hireCondition',
    },
    {
      name: 'tryPeriodAdd',
      title: '試用期間補足',
      type: 'string',
      fieldset: 'hireCondition',
    },
    {
      name: 'trafficPay',
      title: '通勤手当',
      type: 'string',
      fieldset: 'treatment',
    },
    {
      name: 'workingLatePay',
      title: '残業手当',
      type: 'string',
      fieldset: 'treatment',
    },
    {
      name: 'otherPay',
      title: 'その他手当',
      type: 'string',
      fieldset: 'treatment',
    },
    {
      name: 'insurance',
      title: '各種保険・福利厚生',
      type: 'string',
      fieldset: 'treatment',
    },
    {
      name: 'otherSupport',
      title: '諸手当',
      type: 'array',
      fieldset: 'treatment',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [
            {title: '項目符號', value: 'bullet'},
            {title: '編號列表', value: 'number'},
          ],
          marks: {
            decorators: [],
            annotations: [],
          },
        },
      ],
    },
    {
      name: 'vacation',
      title: '休日休暇',
      type: 'string',
      fieldset: 'treatment',
    },
    {
      name: 'yearHoliday',
      title: '年間休日',
      type: 'string',
      fieldset: 'treatment',
    },
    {
      name: 'workingOtherPlace',
      title: '転勤の有無',
      type: 'string',
      fieldset: 'treatment',
    },
    {
      name: 'workingPlaceDetail',
      title: '勤務地詳細',
      type: 'array',
      fieldset: 'treatment',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [
            {title: '項目符號', value: 'bullet'},
            {title: '編號列表', value: 'number'},
          ],
          marks: {
            decorators: [],
            annotations: [],
          },
        },
      ],
    },
    {
      name: 'smokingRule',
      title: '受動喫煙対策について',
      type: 'string',
      fieldset: 'treatment',
    },

    {
      name: 'old',
      title: '年齢',
      type: 'string',
      fieldset: 'test',
    },
    {
      name: 'interviewTimes',
      title: '面接回数',
      type: 'string',
      fieldset: 'test',
    },
    {
      name: 'education',
      title: '学歴',
      type: 'string',
      fieldset: 'test',
    },
    {
      name: 'oldRuleReason',
      title: '年齢制限理由',
      type: 'string',
      fieldset: 'test',
    },
    {
      name: 'requiredSkill',
      title: '必要資格',
      type: 'string',
      fieldset: 'test',
    },
    {
      name: 'testContent',
      title: '選考内容',
      type: 'array',
      fieldset: 'test',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [
            {title: '項目符號', value: 'bullet'},
            {title: '編號列表', value: 'number'},
          ],
          marks: {
            decorators: [],
            annotations: [],
          },
        },
      ],
    },
    {
      name: 'otherMemo',
      title: 'その他備考',
      type: 'string',
      fieldset: 'memo',
    },

    {
      name: 'tags',
      title: '職缺選項',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: '我們的推薦', value: '我們的推薦'},
          {title: '高人氣職缺', value: '高人氣職缺'},
          // 可以在這裡新增更多標籤選項
        ],
      },
    },

    {
      name: 'publishedAt',
      title: '發布日期',
      type: 'datetime',
    },
  ],
})
