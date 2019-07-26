//app.js
const mta = require('./utils/mta_analysis.js')
const auth = require('./utils/publics/authorization.js')
const tool = require('./utils/publics/tool.js')
App({
  onLaunch: function () {
    //腾讯统计
    auth.statistics(mta, {
      "appID": "500689212",
      "eventID": "500689213",
      "autoReport": true,
      "statParam": true,
      "ignoreParams": [],
      "statPullDownFresh": true,
      "statShareApp": true,
      "statReachBottom": true
    })
    // 判断是否授权
    // auth.isSetting(res => {
    //   if (res) {
    //     console.log("【已授权】")
    //     auth.getUser(res => {
    //       console.log("更新头像昵称-->", res)
    //       Object.assign(res, wx.getStorageSync("userInfo"))
    //       wx.setStorageSync("userInfo", res)
    //     })
    //   } else {
    //     console.log("【未授权】")
    //     tool.jump_red("/pages/login/login")
    //   }
    // })
  },
  globalData: {
    userInfo: null
  }
})