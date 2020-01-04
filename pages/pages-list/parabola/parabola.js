// pages/test/test.js
import tool from '../../../utils/publics/tool.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [{ title: '首页', icon: "icon-zhuye", url: "/pages/index/index" }, { title: "积分活动", icon: "icon-wenti", url: "" }, { title: "购物车", icon: "icon-gouwuche", url: "/pages/pages-list/custom/custom" }, { title: "我的", icon: "icon-wode", url: "/pages/pages-list/custom/custom" }],//自定义tabBar导航
    addCartConfig: {
      ballSize: ['22', '22'],//抛物体大小，单位rpx
      ballColor: '#ffcd43',//抛物体颜色
      parabolaDuration: 400,//抛物线动画速度
      targetLocation: "#car-box"//目标位置
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.addCartInit()
  },
  //添加购物车动效初始化
  addCartInit() {
    Promise.all([tool.getDom(this.data.addCartConfig.targetLocation), tool.getSystemInfo()]).then(res => {
      this.data.cartX = res[0][0].left
      this.data.cartY = res[0][0].top
      this.data.windowWidth = res[1].windowWidth
      this.data.windowHeight = res[1].windowHeight
    })
  },
  //点击购物车
  addCart(e) {
    if (this.data.addCartEnd) return
    this.addCartEnd(true)
    tool.getDom(e.currentTarget.dataset.id).then(res => {
      this.cartAnimation(res[0].left, res[0].top)
    })
  },
  //抛物线动效完成回调
  addCartEndCallback() {
    this.addCartEnd(false)
  },
  //创建动画
  cartAnimation(x, y) {
    let self = this,
      animationXs = flyX(this.data.cartX, x),
      animationYs = flyY(this.data.cartY, y),
      ballX = this.data.ballX || [],
      ballY = this.data.ballY || [],
      animationX = this.data.animationX || [],
      animationY = this.data.animationY || []
    ballX.push(x)
    ballY.push(y)
    animationX.push(animationXs.export())
    animationY.push(animationYs.export())
    this.setData({
      ballX,
      ballY,
      showBall: true
    })
    setTimeoutES6(100).then(() => {
      self.setData({ animationX, animationY })
      return setTimeoutES6(this.data.addCartConfig.parabolaDuration)
    }).then(() => {
      this.addIconAnimated()
      let _ballIndex = this.data.ballIndex || 1
      this.setData({ ballIndex: ++_ballIndex, showBall: false })
      this.addCartEndCallback()
    })
    function setTimeoutES6(sec) {
      return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, sec)
      })
    }
    function flyX(cartX, oriX) {
      let animation = wx.createAnimation({
        duration: self.data.addCartConfig.parabolaDuration,
        timingFunction: 'linear',
      })
      animation.left(cartX).step()
      return animation
    }
    function flyY(cartY, oriY) {
      let animation = wx.createAnimation({
        duration: self.data.addCartConfig.parabolaDuration,
        timingFunction: 'ease-in',
      })
      animation.top(cartY).step()
      return animation
    }
  },
  //添加开关
  addCartEnd(boolean) {
    this.data.addCartEnd = boolean
  },
  //添加动画
  addIconAnimated() {
    let _tabList = this.data.tabList
    _tabList[2].otherclass = "swing animated"
    this.setData({ tabList: _tabList })
    setTimeout(() => {
      _tabList[2].otherclass = ""
      this.setData({ tabList: _tabList })
    }, 500)
  },
  //下面为测试方法，不要用
  cartAnimation2(x, y) {
    let self = this,
      cartY = 603 - 50,
      cartX = 50,
      animationX = flyX(cartX, x),
      animationY = flyY(cartY, y)
    this.setData({
      ballX: x,
      ballY: y,
      leftNum: x,
      topNum: y,
      showBall: true
    })
    setTimeoutES6(100).then(() => {
      self.setData({
        animationDataX: animationX.export(),
        animationDataY: animationY.export(),
      })
      return setTimeoutES6(this.data.parabolaDuration)
    }).then(() => {
      this.setData({
        showBall: false,
        animationX: flyX(0, 0, 0).export(), // 还原小球位置，即 translate 恢复默认值
        animationY: flyY(0, 0, 0).export(),
      })
    })
    function setTimeoutES6(sec) { // Promise 化 setTimeout
      return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, sec)
      })
    }
    function flyX(cartX, oriX, duration) {
      let animation = wx.createAnimation({
        duration: duration || self.data.parabolaDuration,
        timingFunction: 'linear',
      })
      animation.translateX(cartX - oriX).step()
      return animation
    }
    function flyY(cartY, oriY, duration) {
      let animation = wx.createAnimation({
        duration: duration || self.data.parabolaDuration,
        timingFunction: 'ease-in',
      })
      animation.translateY(cartY - oriY).step()
      return animation
    }
  }
})