//index.js
import api from '../../utils/api/my-requests.js'
import login from '../../utils/api/login.js'
import mta from '../../utils/mta_analysis.js'
import tool from '../../utils/publics/tool.js'
import util from '../../utils/util.js'
import backgroundAudio from '../../utils/backgroundAudio.js'

Page({
  data: {
    contentType: 0,//页面内容类型0为小程序模板内容，1为h5游戏嵌入小程序壳子审核专用内容，当需要h5游戏审核时默认置为-1
    jumpList: [//模板列表
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
      { name: "charts图表", url: "/pages/pages-list/wx-charts/index/index"},
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
      { name: "电子手写签名", url: "/pages/pages-list/handwriting/handwriting"},
      { name: "机器人", url: "/pages/pages-list/robot/robot"},
      { name: "全景", url: "/pages/pages-list/panorama/panorama"},
      { name: "图片裁剪", url: "/pages/pages-list/cropper/cropper"},
      { name: "滑动删除", url: "/pages/pages-list/sliding-del/sliding-del"},
      { name: "抛物线动画", url: "/pages/pages-list/parabola/parabola"},
      { name: "索引列表", url: "/pages/pages-list/index-list/index-list"},
      { name: "测试", url: "/pages/pages-list/test/test"},
      { name: "下一版本见...", url: ""}
    ]
  },
  onLoad() {
    mta.Page.init()//腾讯统计
    this.configure()//核弹系统
    //静默登录
    login.login().then(res => {
      console.log("【静默登录成功】", res)
      //在这里做页面初始化请求操作，可保证本地缓存中有用户的openid/userId
    }).catch(err => {
      console.log("err", err)
    })
  },
  onShow() {
    this.setData({ isPause: backgroundAudio.audioState(getApp()) })//背景音乐相关
  },
  //核弹系统
  configure() {
    if (this.data.contentType != -1) return
    api.configure().then(res => {
      let _data = JSON.parse(decodeURIComponent(res.data.data.content.info))
      console.log("configure", _data)
      this.setData({ contentType: _data.custom.h5.val })
      wx.setNavigationBarTitle({ title: '自然资源' })
    })
  },
  //跳转页面
  jumps(e) {
    if (this.data.jumpList[e.currentTarget.dataset.index].url) tool.jump_nav(this.data.jumpList[e.currentTarget.dataset.index].url)
  },
  onShareAppMessage() {}
})
