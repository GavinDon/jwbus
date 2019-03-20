import {
  wxRequest
} from './network'

const BASE_URL = 'http://www.jingweibus.com/'

/* 绑定app用户登陆手机号 */
const reqBindAppPhone = (params) => wxRequest(params, BASE_URL + 'a/login')
/* 公告信息 */
const reqNotice = (params) => wxRequest(params, BASE_URL + 'app/news/news')
/* 公交线路 */
const busLine = (params, jsessionid) => wxRequest(params, BASE_URL + 'app/lines/line' + ';JSESSIONID=' + jsessionid)

export default {
  reqBindAppPhone,
  reqNotice,
  busLine
}
