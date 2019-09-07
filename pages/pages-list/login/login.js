// pages/login/login.js
import api from '../../../utils/api/myRequests.js'
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
    tool.loading("登录中")
    const userInfo = e.detail.userInfo;
    console.log('【btn授权按钮获取用户信息】', userInfo)
    if (userInfo) {
      Object.assign(userInfo, wx.getStorageSync("userInfo"))
      wx.setStorageSync("userInfo", userInfo)
      this.setData({ userInfo: wx.getStorageSync("userInfo") })
      tool.loading_h()
      return
      //这里做上传头像昵称给后台操作
      api.uploadUserInfo({
        user_id: wx.getStorageSync("_login").user_id,
        nickname: userInfo.nickName,
        headimg: userInfo.avatarUrl
      }).then(res => {
        console.log('【上传头像昵称成功】')
        tool.loading_h()
        if (wx.getStorageSync("nextUrl")) {
          tool.jump_nav(wx.getStorageSync("nextUrl"))
          wx.removeStorageSync('nextUrl')
        }
      })
    } else {
      tool.loading_h()
      tool.showModal('授权', '为了更好的体验，请先授权')
    }
  }
})