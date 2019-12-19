// pages/pages-list/scrape/scrape.js
import tool from '../../../../utils/publics/tool.js'
import Scrape from '../../../../utils/scrape.js'
Page({
  /**
   * 页面的初始数据 
   */
  data: {
    canvasWidth: 300,//刮刮乐宽
    canvasHeight: 160,//刮刮乐高
    prize_img: ''//奖品图片
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //刮刮乐初始化
    this.scrape = new Scrape(this, { width: this.data.canvasWidth, height: this.data.canvasHeight, range: "50%", ininOk: "scrapeIninOk", callback: "scrapeOk" })
  },
  //刮刮乐初始化OK
  scrapeIninOk() {
    tool.loading("刮刮乐初始化")
    setTimeout(() => {
      this.setData({ prize_img: 'https://game.flyh5.cn/resources/game/wechat/szq/images/img_12.jpg'})
      tool.loading_h()
    }, 800)
  },
  //刮完奖回调
  scrapeOk() {
    let _this = this
    tool.showModal("刮刮乐", "恭喜您刮中100元现金", "放进口袋,#CF5673", false).then(() => {
      tool.loading("刮刮乐重置中")
      setTimeout(() => { 
        _this.scrape.init()
        tool.alert("刮刮乐重置成功") 
      }, 800)
    }) 
  }
})