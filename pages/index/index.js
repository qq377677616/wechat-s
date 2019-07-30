//index.js
//获取应用实例
import api from '../../utils/api/myRequests.js'
import mta from '../../utils/mta_analysis.js'
import tool from '../../utils/publics/tool.js'
import auth from'../../utils/publics/authorization.js'
Page({
  data: {
    jumpList: [
      { name: "登录授权", url: "/pages/pages-list/login/login"},
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
      { name: "未完待续...", url: ""}
    ]
  },
  operation(e) {
    console.log(e.detail)
  },
  //跳转页面
  jumps(e) {
    if (this.data.jumpList[e.currentTarget.dataset.index].url) tool.jump_nav(this.data.jumpList[e.currentTarget.dataset.index].url)
  },
  onLoad: function () {
    mta.Page.init()//腾讯统计
  }
})
