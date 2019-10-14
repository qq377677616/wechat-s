//index.js
import login from '../../utils/api/login.js'
import mta from '../../utils/mta_analysis.js'
import tool from '../../utils/publics/tool.js'
import backgroundAudio from '../../utils/backgroundAudio.js'

Page({
  data: {
    jumpList: [
      { name: "授权", url: "/pages/pages-list/authorize/authorize"},
      { name: "获取手机号", url: "/pages/pages-list/get-phone/get-phone"},
      { name: "嵌入h5", url: "/pages/pages-list/webview/webview"},
      { name: "地理位置定位", url: "/pages/pages-list/location/location"},
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
      { name: "序列帧", url: "/pages/pages-list/sequence/sequence"},
      { name: "导航栏和tabBar", url: "/pages/pages-list/custom/custom"},
      { name: "3d轮播", url: "/pages/pages-list/swiper3d/swiper3d"},
      { name: "滚动淡出", url: "/pages/pages-list/scroll-show/scroll-show"},
      // { name: "测试", url: "/pages/pages-list/test/test"},
      { name: "未完待续...", url: ""}
    ]
  },
  onLoad: function () {
    login.login().then(res => {
      console.log("【静默登录】", res)
      //在这里做页面初始化请求操作，可保证本地缓存中有用户的openid/userId
    })
    mta.Page.init()//腾讯统计
  },
  onShow() {
    this.setData({ isPause: backgroundAudio.audioState(getApp()) })//背景音乐相关
  },
  //跳转页面
  jumps(e) {
    if (this.data.jumpList[e.currentTarget.dataset.index].url) tool.jump_nav(this.data.jumpList[e.currentTarget.dataset.index].url)
  }
})
