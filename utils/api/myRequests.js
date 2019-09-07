import $ from './request.js'
const SERVICE = "https://game.flyh5.cn/game/wx7c3ed56f7f792d84/yyt_quan/public/index.php"
const myRequest = (data, url, type = 'post') => {
  let _url = `${SERVICE}${url}`
  console.log("_url", _url)
  return new Promise((resolve, reject) => {
    $[`${type}P`](_url, data).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

//获取openid
const getOpenid = (data, url = '/api/oauth/getcode') => { return myRequest(data, url) }
//手机号解密
const getPhoneNumber = (data, url = '/api/Oauth/decryptedPhone') => { return myRequest(data, url) }

module.exports = {
  myRequest,
  getOpenid,
  getPhoneNumber
}