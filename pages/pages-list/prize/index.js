// pages/pages-list/prize/index.js
import tool from '../../../utils/publics/tool.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShow() {
    console.log(66666666666666)
  },
  jump(e) {
    tool.jump_nav(e.currentTarget.dataset.page)
  },
})