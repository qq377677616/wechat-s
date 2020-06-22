import Store from 'wxministore'
import tool from '..//publics/tool.js'
export default new Store({
  debug: false, // 关闭内部日志的输出
  nonWritable: false,//是否重写page、Componenet(防改写):App.Page({...}) 和 App.Component({...})
  openPart: true,//是否开启局部模式:Page({ useStore: true })
  //全局状态
  state: {
    name: "张三",
    address: '湖南长沙',
    age: 18,
    family: {
      name: "张四",
      address: '湖南',
      age: 20,
    }
  },
  //全局方法
  methods: {
    //防止多次点击方法
    buttonClicked(page, times = 700) {
      page.setData({ buttonClicked: true })
      setTimeout(() => { page.setData({ buttonClicked: false })}, times)
    },
    //空方法
    emptyMethods() {
      return
    },
    publicMethods(e) {
      tool.showModal("调用公共方法成功", `携带参数为【${e.currentTarget.dataset.type}】`, false)
    }
  }, 
  /**
   * 监听页面生命周期(先执行pageLisener监听，后执行原本页面中周期)
   * 支持监听的所有周期事件 ['onLoad', 'onShow', 'onReady', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap']
   */
  pageLisener: {
    onLoad(options) {
      console.log("【store监听onLoad生命周期】", this, options)
      if (this.route.includes("wxministore")) tool.showModal("生命周期监听", `页面onLoad生命周期监听成功，当前页面路径为【${this.route}】,options中带参：【${Object.keys(options)[0]}:${options.code}】`, false)
    },
    onShareAppMessage(res) {
      console.log("【store监听转发事件】", res)
    }
  }
})