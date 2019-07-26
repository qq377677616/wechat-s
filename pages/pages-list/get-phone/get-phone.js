// pages/pages-list/get-phone/get-phone.js
import tool from '../../../utils/publics/tool.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onLoad() {
    this.setData({ myPhone: wx.getStorageSync("userInfo").phone || '1**********' })
    if (!wx.getStorageSync("userInfo")) {
      tool.showModal("请先去授权", "你还未授权登录，请先去授权登录吧", "好的,#333", false).then(() => {
        tool.jump_back()
      })
    } else {
      this.setData({ isGetPhoneNumber: true })
    }
  },
  getPhoneNumber(e) {
    tool.alert("获取手机号成功")
    this.setData({ myPhone: e.detail.phone })
  }
})