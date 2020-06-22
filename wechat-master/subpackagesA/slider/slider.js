
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    options: {
      width:"80%",//组件宽度
      blockSize:28,//滑块大小
      colors:['#f7f7f7', '#E0A400', '#027C60'],//滑条颜色
      step: 10,//步长
      min: 50, // 两个slider所能取的最小值
      max: 1000, // 两个slider所能达到的最大值
      initialValue: [200, 800],//初始值
      // width:"80%",//组件宽度
      // blockSize:28,//滑块大小
      // colors:['#f7f7f7', 'red', 'purple'],//滑条颜色
      // change: false, // 当两个slider在最右端重合时，将change设置为true，从而隐藏slider2，才能继续操作slider1
      // min: 50, // 两个slider所能取的最小值
      // max: 1000, // 两个slider所能达到的最大值
      // step: 10,//步长
      // rate: 9.5, // slider的最大最小值之差和100（或1000）之间的比率
      // slider1Max: 1000, // slider1的最大取值
      // slider1Value: 50, // slider1的值
      // slider2Value: 1000, // slider2的值000
      // slider2Min: 50, // slider2的最小取值
      // slider1W: 100, // slider1的宽度
      // slider2W: 0, // slider2的宽度
    }
  },

  // 滑动取值回调
  bindcurValue(e) {
    // console.log("当前值", e.details.value)
    console.log("当前值", e.detail)
    this.setData({ val: e.detail })
  }
})