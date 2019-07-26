// pages/login/login.js
const app = getApp()
import api from '../../../utils/api/myRequests.js'
import auth from '../../../utils/publics/authorization.js'
import tool from '../../../utils/publics/tool.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  //点击授权后
  getUserInfo(e) {
    if (wx.getStorageSync("userId").id) {
      tool.alert("您已授权登录过")
      return
    }
    console.log("拿到授权返回数据-->", e)
    let myLogin = (userInfo) => {
      //微信小程序登录
      auth.login().then(res => {
        console.log("微信登录后获取拿到code-->", res)
        return res
      }).then(res => {
        //获取code后请求后端登录接口
        return api.getOpenid({ code: res.code })
      }).then(res => {
        console.log("请求后端登录接口返回-->", res)
        if (res.data.status === 1) {
          let { data } = res.data
          wx.setStorageSync("userInfo", userInfo)
          wx.setStorageSync("userId", data)
          tool.loading_h()
          tool.alert("登录成功")
        } else {
          myLogin(userInfo)
          console.log("登录失败，请稍后再试")
        }
      })
    }
    if (e.detail.userInfo) {
      tool.loading('授权中')
      let { userInfo } = e.detail
      myLogin(userInfo)
    } else {
      tool.showModal("授权提示", "为了更好的体验,请先进行授权", "好的,#A3271F", false)
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})