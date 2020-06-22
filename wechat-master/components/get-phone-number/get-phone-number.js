// components/getPhoneNumber/getPhoneNumber.js
const gets = require('../../utils/publics/authorization.js')
const api = require('../../utils/api/api.js')
const tool = require('../../utils/publics/tool')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    curPage: {
      type: Object,
      value: {}
    }
  },
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },
  ready() {
    if (!wx.getStorageSync('userInfo').phone) {
      // this.showHideModal()
      this.myLogin()
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //显示、隐藏
    isShow() {
      this.setData({ isShow: !this.data.isShow })
    },
    //登录
    myLogin() {
      // gets.isCheckSession(res => {
      //   console.log("是否过期", res)
      // })
      tool.loading("", true)
      gets.login().then(value => {
        return api.getOpenid({
          js_code: value.code
        })
      }).then(value => {
        console.log("value", value)
        const data = value.data.data;
        if (value.data.code == 1) {
          this.data.session_key = data.session_key
          console.log("【拿到session_key】", this.data.session_key)
          tool.loading_h()
        } else {
          tool.loading_h()
          console.log("【服务器异常，请稍后再试】")
          // this.myLogin()
        }
      })
    },
    //点击获取手机号按钮
    getPhoneNumberUserInfo(e) {
      tool.loading("")
      if (e.detail.encryptedData) {
        this.data.encryptedData = e.detail.encryptedData
        console.log("【拿到encryptedData】", e.detail.encryptedData)
        this.data.iv = e.detail.iv
        this.decryptPhone()
      } else { 
        this.triggerEvent("getPhoneCallback", { status: false })
      }
    },
    //解密手机号
    decryptPhone() {
      let _data = {
        e_data: encodeURIComponent(this.data.encryptedData),
        session_key: encodeURIComponent(this.data.session_key),
        iv: encodeURIComponent(this.data.iv)
      }
      api.getWeRunData(_data).then(res => {
        if (res.data.code == 1) {
          let userInfo = wx.getStorageSync("userInfo") || {}
          userInfo.phone = res.data.data.phoneNumber
          wx.setStorageSync("userInfo", userInfo)
          this.triggerEvent("getPhoneCallback", { status: true, phone: res.data.data })
        } else {
          console.log("【手机号解密失败】")
        }
        tool.loading_h("")
      })
    }
  }
})

