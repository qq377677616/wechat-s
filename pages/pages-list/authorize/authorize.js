// pages/login/login.js
import login from '../../../utils/api/login.js'
import api from '../../../utils/api/my-requests.js'
import auth from '../../../utils/publics/authorization.js'
import tool from '../../../utils/publics/tool.js'
import backgroundAudio from '../../../utils/backgroundAudio.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    loginNum: 0,
    userInfo: {}
  },
  onLoad() {
    this.setData({ userInfo: wx.getStorageSync("userInfo") })
  },
  onShow() {
    this.setData({ isPause: backgroundAudio.audioState(getApp()) })//背景音乐相关
  },
  //授权
  getUserInfo(e) {
    login.authorize(e).then(res => {
      if (res) {
        tool.alert("授权成功")
        this.setData({
          userInfo: wx.getStorageSync("userInfo")
        })
      } else {
        tool.alert("授权失败")
        console.log("【授权失败】", res)
      }
    }).catch(err => { console.log("err", err) })
  },
})