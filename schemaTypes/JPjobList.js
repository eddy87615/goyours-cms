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
      description: '可以把一些廢話拿掉',
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
      name: 'gyousyu',
      title: '業種',
      type: 'string',
      description: '選擇該職缺所屬的業種',
      options: {
        list: [
          {title: '流通・零售・餐飲', value: '流通・零售・餐飲'},
          {title: '不動產・建設・設備', value: '不動產・建設・設備'},
          {title: 'IT・通信・網路', value: 'IT・通信・網路'},
          {title: '服務・休閒', value: '服務・休閒'},
          {title: '環境・能源', value: '環境・能源'},
          {title: '製造業・機械', value: '製造業・機械'},
          {title: '金融・保險', value: '金融・保險'},
          {title: '醫療・護理・福祉', value: '醫療・護理・福祉'},
          {title: '教育・人才服務', value: '教育・人才服務'},
          {title: '運輸・物流', value: '運輸・物流'},
          {title: '媒體・廣告・設計', value: '媒體・廣告・設計'},
          {title: '商社・貿易', value: '商社・貿易'},
          {title: '化學・製藥', value: '化學・製藥'},
          {title: '農業・水產・食品', value: '農業・水產・食品'},
          {title: '娛樂・遊戲', value: '娛樂・遊戲'},
          {title: '公共機關・非營利組織', value: '公共機關・非營利組織'},
          {title: '其他', value: '其他'},
        ],
      },
    },
    {
      name: 'syokusyu',
      title: '職種',
      type: 'string',
      description: '選擇該職缺的職種類別',
      options: {
        list: [
          {title: '銷售・服務職', value: '銷售・服務職'},
          {title: '營業', value: '營業'},
          {title: '技術職（IT系工程師）', value: '技術職（IT系工程師）'},
          {title: '事務・管理職', value: '事務・管理職'},
          {title: '製造・技術職', value: '製造・技術職'},
          {title: '專門職（醫療・護理・福祉）', value: '專門職（醫療・護理・福祉）'},
          {title: '專門職（金融・保險）', value: '專門職（金融・保險）'},
          {title: '專門職（法律・會計）', value: '專門職（法律・會計）'},
          {title: '創意職（設計・企劃）', value: '創意職（設計・企劃）'},
          {title: '教育・研究職', value: '教育・研究職'},
          {title: '建築・土木・設備', value: '建築・土木・設備'},
          {title: '運輸・物流', value: '運輸・物流'},
          {title: '飲食・住宿', value: '飲食・住宿'},
          {title: '保安・清潔・設施管理', value: '保安・清潔・設施管理'},
          {title: '農林水產', value: '農林水產'},
          {title: '公務員', value: '公務員'},
          {title: '其他', value: '其他'},
        ],
      },
    },
    {
      name: 'workLocation',
      title: '勤務地',
      type: 'array',
      fieldset: 'hireCondition',
      description: '可以選擇多個勤務地點',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: '-----北海道・東北地區-----', value: 'null'},
          {title: '北海道', value: '北海道'},
          {title: '青森縣', value: '青森縣'},
          {title: '岩手縣', value: '岩手縣'},
          {title: '宮城縣', value: '宮城縣'},
          {title: '秋田縣', value: '秋田縣'},
          {title: '山形縣', value: '山形縣'},
          {title: '福島縣', value: '福島縣'},
          {title: '-----關東地區-----', value: 'null'},
          {title: '茨城縣', value: '茨城縣'},
          {title: '栃木縣', value: '栃木縣'},
          {title: '群馬縣', value: '群馬縣'},
          {title: '埼玉縣', value: '埼玉縣'},
          {title: '千葉縣', value: '千葉縣'},
          {title: '東京都', value: '東京都'},
          {title: '神奈川縣', value: '神奈川縣'},
          {title: '-----中部地區-----', value: 'null'},
          {title: '新潟縣', value: '新潟縣'},
          {title: '富山縣', value: '富山縣'},
          {title: '石川縣', value: '石川縣'},
          {title: '福井縣', value: '福井縣'},
          {title: '山梨縣', value: '山梨縣'},
          {title: '長野縣', value: '長野縣'},
          {title: '岐阜縣', value: '岐阜縣'},
          {title: '靜岡縣', value: '靜岡縣'},
          {title: '愛知縣', value: '愛知縣'},
          {title: '-----近畿地區-----', value: 'null'},
          {title: '三重縣', value: '三重縣'},
          {title: '滋賀縣', value: '滋賀縣'},
          {title: '京都府', value: '京都府'},
          {title: '大阪府', value: '大阪府'},
          {title: '兵庫縣', value: '兵庫縣'},
          {title: '奈良縣', value: '奈良縣'},
          {title: '和歌山縣', value: '和歌山縣'},
          {title: '-----中國・四國地區-----', value: 'null'},
          {title: '鳥取縣', value: '鳥取縣'},
          {title: '島根縣', value: '島根縣'},
          {title: '岡山縣', value: '岡山縣'},
          {title: '廣島縣', value: '廣島縣'},
          {title: '山口縣', value: '山口縣'},
          {title: '德島縣', value: '德島縣'},
          {title: '香川縣', value: '香川縣'},
          {title: '愛媛縣', value: '愛媛縣'},
          {title: '高知縣', value: '高知縣'},
          {title: '-----九州・沖繩地區-----', value: 'null'},
          {title: '福岡縣', value: '福岡縣'},
          {title: '佐賀縣', value: '佐賀縣'},
          {title: '長崎縣', value: '長崎縣'},
          {title: '熊本縣', value: '熊本縣'},
          {title: '大分縣', value: '大分縣'},
          {title: '宮崎縣', value: '宮崎縣'},
          {title: '鹿兒島縣', value: '鹿兒島縣'},
          {title: '沖繩縣', value: '沖繩縣'},
        ],
      },
    },
    {
      name: 'hiringPotsition',
      title: '募集職種',
      type: 'string',
      fieldset: 'hireCondition',
      description: '這邊我才會打得跟資料一樣',
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
      description: '用項目符號做成列表比較清楚',
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
      description: '用項目符號做成列表比較清楚',
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
      description: '可以簡單打幾點到幾點，也可以詳細說明',
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
      description: '可以簡單打幾點到幾點，也可以詳細說明',
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
      name: 'hiringPeriod',
      title: '雇用期間',
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
      description: '用半形的數字跟~隔開，例如：400~500',
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
      description: '發布前記得選取右下角的「設定成當前的時間點」以便搜尋時可以確實找到最新的職缺',
    },
  ],
})
