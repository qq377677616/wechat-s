//app.js
import auth from './utils/publics/authorization.js'
import api from './utils/api/myRequests.js'
import backgroundAudio from './utils/backgroundAudio.js'
import tool from './utils/publics/tool.js'
App({
  onLaunch(opation) {
    //腾讯统计
    auth.statistics(500689212)
    //背景音乐
    backgroundAudio.backMusic(this, 'https://game.flyh5.cn/resources/game/wechat/szq/ftxiyouji/images/music.mp3')
    //静默登录
    this.silentLogin()
  },
  silentLogin() {
    if (wx.getStorageSync("userId")) return
    tool.loading("")
    //静默登录
    auth.login().then(res => {
      return res
    }).then(res => {
      return api.getOpenid({ code: res.code })
    }).then(res => {
      console.log("请求后端登录接口返回-->", res)
      if (res.data.code === 1) {
        let { data } = res.data
        if (!wx.getStorageSync("userInfo")) wx.setStorageSync("userInfo", {})
        wx.setStorageSync("userId", data.data)
        tool.loading_h()
        tool.alert("静默登录成功")
      } else {
        if (this.globalData.loginNum < 5) {
          myLogin()
          this.globalData.loginNum++
        } else {
          tool.alert("登录失败，请稍后再试")
          this.globalData.loginNum = 0
        }
      }
    })
  },
  globalData: {
    loginNum: 0,//登录失败重新登录次数
  }
})