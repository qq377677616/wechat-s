import $ from './request.js'

const REQUESTURL = getApp().globalData.REQUESTURL
const myRequest = (data, url, type = 'post', isUrl = false) => {
  !isUrl && (url = `${REQUESTURL}${url}`)
  return new Promise((resolve, reject) => {
    $[`${type}P`](url, data).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

//获取openid
const getOpenid = (data, url = '/api/oauth/getcode') => { return myRequest(data, url) }
//上传头像昵称
const uploadUserInfo = (data, url = '/api/oauth/perfect_info') => { return myRequest(data, url) }
//手机号解密
const getPhoneNumber = (data, url = '/api/Oauth/decryptedPhone') => { return myRequest(data, url) }
//上传base64图片
const uploadBase64 = (data, url = '/api/upload/upload_file_base64') => { return myRequest(data, url) }
//发送订阅消息
const requestSubscribeMessage = (data, url = '/api/message/send_remind_msg') => { return myRequest(data, url) }

module.exports = {
  myRequest,
  getOpenid,
  uploadUserInfo,
  getPhoneNumber,
  uploadBase64,
  requestSubscribeMessage
}