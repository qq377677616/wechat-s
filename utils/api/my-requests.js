import $ from './request.js'
import { promiseFinally } from '../promise-finally.js'
// promiseFinally();//promise的finally配置
const _globalData = getApp().globalData
console.log("getApp().globalData", _globalData)
const myRequest = (data, url, type = 'post', isUrl = false) => {
  !isUrl && (url = `${_globalData.REQUESTURL}${url}`)
  return new Promise((resolve, reject) => {
    $[`${type}P`](url, data).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

//核弹系统配置
const configure = (data, url = `https://game.flyh5.cn/game/wx7c3ed56f7f792d84/data_system/api.php?a=web&code=${_globalData.CONFIGURE}`) => { return myRequest(data, url, 'get', true) }
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
  configure,
  getOpenid,
  uploadUserInfo,
  getPhoneNumber,
  uploadBase64,
  requestSubscribeMessage
}