//index.js
import api from '../../utils/api/myRequests.js'
import mta from '../../utils/mta_analysis.js'
import tool from '../../utils/publics/tool.js'
import auth from'../../utils/publics/authorization.js'
import backgroundAudio from '../../utils/backgroundAudio.js'
import utils from '../../utils/util.js'
Page({
  data: {
    jumpList: [
      { name: "授权", url: "/pages/pages-list/login/login"},
      { name: "获取手机号", url: "/pages/pages-list/get-phone/get-phone"},
      { name: "嵌入h5", url: "/pages/pages-list/webview/webview"},
      { name: "定位", url: "/pages/pages-list/location/location"},
      { name: "生成海报", url: "/pages/pages-list/poster/poster"},
      { name: "生成二维码", url: "/pages/pages-list/codes/codes"},
      { name: "日历", url: "/pages/pages-list/calendar/index"},
      { name: "html解析", url: "/pages/pages-list/html/html"},
      { name: "摇一摇", url: "/pages/pages-list/shake/shake"},
      { name: "环形进度条", url: "/pages/pages-list/circle/circle"},
      { name: "charts图表", url: "/pages/pages-list/charts/charts"},
      { name: "星星评分", url: "/pages/pages-list/star-score/star-score"},
      { name: "抽奖系列", url: "/pages/pages-list/prize/index"},
      { name: "地图", url: "/pages/pages-list/map/index"},
      { name: "websocket", url: "/pages/pages-list/websocket/websocket"},
      { name: "AR", url: "/pages/pages-list/ar/ar"},
      { name: "图片验证码", url: "/pages/pages-list/img-code/img-code"},
      { name: "计算属性与监听", url: "/pages/pages-list/computed-watch/computed-watch"},
      { name: "中英文语言", url: "/pages/pages-list/ch-en/ch-en"},
      { name: "未完待续...", url: ""}
    ]
  },
  //跳转页面
  jumps(e) {
    if (this.data.jumpList[e.currentTarget.dataset.index].url) tool.jump_nav(this.data.jumpList[e.currentTarget.dataset.index].url)
  },
  onLoad: function () {
    mta.Page.init()//腾讯统计
  },
  onShow() {
    this.setData({ isPause: backgroundAudio.audioState(getApp()) })//背景音乐相关
  },
  onShareAppMessage(res) {
    console.log("res", res)
    return {
      title: '抽奖赢世界杯热门球票！亲测中奖概率很高哦！',
      path: '/pages/prize/prize?isShare=1&user_id=' + wx.getStorageSync('_login').user_id,
      imageUrl: this.data.IMGSERVICE + '/prize/share_prize.png'
    }
  }
})
