// subpackages/shop/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    label: ["全部", "待付款", "待发货", "待收货"],
    labelIndex: 0
  },
  onLoad() {
    // setTimeout(() => {
    //   this.setData({ labelIndex: 2 })
    // }, 3000)
  },
  //点击选择label
  selectLabel(e) {
    console.log("selectLabel", e)
    this.setData({ labelIndex: e.currentTarget.dataset.index })
  },
  //swiper切换
  bindchangeSwiper(e) {
    this.setData({ labelIndex: e.detail.current })
  },
  //scroll-view上拉触底
  bindscrolltolower(e) {
    console.log(e.currentTarget.dataset.index)
  }
})