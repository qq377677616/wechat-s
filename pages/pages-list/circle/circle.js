// pages/pages-list/circle/circle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0, // 设置 计数器 初始为0
    countTimer: null // 设置 定时器 初始为null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onReady: function () {
    this.drawProgressbg()
    // this.drawCircle(.5)
    this.countInterval()
    
  },
  drawProgressbg: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wx.createCanvasContext('canvasProgressbg')
    ctx.setLineWidth(10)// 设置圆环的宽度
    ctx.setStrokeStyle('#FFF0D3') // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath()//开始一个新的路径
    ctx.arc(110, 110, 100, 0, 2 * Math.PI, false)
    //设置一个原点(100,100)，半径为90的圆的路径到当前路径
    ctx.stroke()//对当前路径进行描边
    ctx.draw()
  },
  countInterval: function () {
    // 设置倒计时 定时器 每100毫秒执行一次，计数器count+1 ,耗时6秒绘一圈
    this.countTimer = setInterval(() => {
      if (this.data.count <= 60) {
        /* 绘制彩色圆环进度条  
        注意此处 传参 step 取值范围是0到2，
        所以 计数器 最大值 60 对应 2 做处理，计数器count=60的时候step=2
        */
        this.drawCircle(this.data.count / (60 / 2))
        let _count = this.data.count + 1
        this.setData({ count: _count})
      } else {
        clearInterval(this.countTimer)
      }
    }, 100)
  },
  drawCircle: function (step) {
    var context = wx.createCanvasContext('canvasProgress')
    // 设置渐变
    var gradient = context.createLinearGradient(200, 100, 100, 200)
    gradient.addColorStop("0", "#FF973A")
    // gradient.addColorStop("0.5", "#FF6000")
    gradient.addColorStop("1.0", "#FF6000")
    context.setLineWidth(10)
    context.setStrokeStyle(gradient)
    context.setLineCap('round')
    context.beginPath()
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(110, 110, 100, -Math.PI / 2, step * Math.PI - Math.PI / 2, false)
    context.stroke()
    context.draw()
  }
})