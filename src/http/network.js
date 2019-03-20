import wepy from 'wepy'
import tip from './tip'
const wxRequest = async (params = {}, url) => {
  tip.loading()
  let data = params.query || {}
  try {
    let res = await wepy.request({
      url: url,
      method: params.method || 'GET',
      data: data,
      timeout: 2000,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    tip.loaded()
    return res
  } catch (err) {
    console.log(err.data)
    tip.loaded()
  }
}
module.exports = {
  wxRequest
}
