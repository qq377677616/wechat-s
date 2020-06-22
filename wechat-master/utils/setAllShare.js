export default () => {
  wx.onAppRoute(e => {
    console.log('e', e)
    // 当前页面
    let page = getCurrentPages()[getCurrentPages().length - 1]
    console.log("【当前页面】", page)
    if (page) {
      // 如果页面含有isUseShare配置，则不对该页面进行分享配置
      if (page.data.isUseShare) {
        return
      } else {
        page.onShareAppMessage = e => {
          console.log("e", e)
          //分享配置
          let shareinfo = {
            title: "我是全局分享标题",
            path: "pages/index/index",
            imageUrl: "https://game.flyh5.cn/resources/game/wechat/szq/webview/share.jpg"
          }
          return shareinfo
        }
      }
    }
  })
}