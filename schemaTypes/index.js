import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {user} from './user'
import {contact} from './contact'
import {caseOptions} from './caseOptions'
import {jobList} from './jobList'
import {JPjobList} from './JPjobList'
import {jobapply} from './jobapply'
import {JPjobapply} from './JPjobapply'
import {feedBack} from './feedBack'
import {faqs} from './faqs'
import {school} from './school'
import {inform} from './inform'
import {download} from './download'
import {keywordSetting} from './keywordSetting'
import {homeSchool} from './homeSchool'
import company from './company'

export const schema = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    user,
    contact,
    caseOptions,
    jobList,
    JPjobList,
    company,
    jobapply,
    JPjobapply,
    feedBack,
    faqs,
    school,
    inform,
    download,
    keywordSetting,
    homeSchool,
  ],
}
