const $ = require('./request.js')
const SERVICE = "https://gameh5.flyh5.cn/game/wx7c3ed56f7f792d84/yyt_dfqcfslb/public"

const myRequest = (data, url, type = 'post') => {
  let _url = `${SERVICE}${url}`
  return new Promise((resolve, reject) => {
    $[`${type}P`](_url, data).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

//获取openid
const getOpenid = (data, url = '/api/Oauth/getCode') => { return myRequest(data, url) }

//手机号解密
const getPhoneNumber = (data, url = '/api/Oauth/decryptedPhone') => { return myRequest(data, url) }

//请求html页面
const getHtml = (data, url = '/api/Article/one') => { return myRequest(data, url) }


module.exports = {
  myRequest,
  getOpenid,
  getPhoneNumber,
  getHtml
}