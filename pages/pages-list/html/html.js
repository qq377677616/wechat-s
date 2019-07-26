// pages/pages-list/html/html.js
import api from '../../../utils/api/myRequests.js'
import WxParse from '../../../utils/wxParse/wxParse.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.pageInit()
  },
  pageInit() {
    api.getHtml({ id: "117", user_id: 68 }).then(res => {
      console.log("res", res)
      let article = res.data.data.content.replace(/&nbsp;/g, '')
      console.log("原html富文本内容", article)
      WxParse.wxParse('article', 'html', article, this, 5)
    })
  }
})