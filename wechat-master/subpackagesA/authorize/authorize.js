// pages/login/login.js
import login from '../../utils/api/login.js'
import api from '../../utils/api/api.js'
import auth from '../../utils/publics/authorization.js'
import tool from '../../utils/publics/tool'
import backgroundAudio from '../../utils/backgroundAudio.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    loginNum: 0,
    userInfo: wx.getStorageSync("userInfo")
  },
  onLoad() {

  },
  onShow() {
    this.setData({ isPause: backgroundAudio.audioState(getApp()) })//背景音乐相关
  },
  //点击开始授权
  getUserInfo() {
    if (this.data.userInfo.nickName) return
    this.isShowGetUserInfo()
  },
  //获取用户信息_回调
  bindgetUserInfoCallback(e){
    console.log("【获取用户信息_回调】", e.detail.status)
    if (e.detail.status) {
      console.log("【获取用户信息、上传成功】")
      this.setData({ userInfo: wx.getStorageSync("userInfo")})
    } else {
      console.log("【获取用户信息、上传失败】")
    }
    this.isShowGetUserInfo()
  },
  //用户授权弹窗
  isShowGetUserInfo() {
    this.selectComponent('#authUserInfo').isShow()
  }
})