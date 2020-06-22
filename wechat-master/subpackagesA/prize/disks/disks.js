//index.js
import tool from '../../../utils/publics/tool.js'
Page({
  data: {
    prize: [
      { id: 1, name: "5元话费券" },
      { id: 2, name: "iphone X" },
      { id: 3, name: "50元现金红包" },
      { id: 4, name: "谢谢参与" },
      { id: 5, name: "100元代金券" },
      { id: 6, name: "50积分" },
      { id: 7, name: "1000理财金" },
      { id: 8, name: "2积分" },
    ],
    prize_cur: [
      { num: 3, name: "谢谢参与" },
      { num: 7, name: "2积分" },
      { num: 5, name: "50积分" },
      { num: 6, name: "1000理财金" },
      { num: 3, name: "谢谢参与" },
      { num: 7, name: "2积分" },
      { num: 5, name: "50积分" },
      { num: 3, name: "谢谢参与" },
      { num: 0, name: "5元话费券" },
      { num: 4, name: "100元代金券" },
      { num: 3, name: "谢谢参与" },
      { num: 7, name: "2积分" },
      { num: 3, name: "谢谢参与" },
      { num: 5, name: "50积分" },
      { num: 6, name: "1000理财金" },
      { num: 7, name: "2积分" }
    ],
    curNumDeg: 0, 
    needleDeg: -90,
    isPrize: true,
    time: 6000
  },
  onLoad(){
    this.init()
  },
   //转盘初始化
  init() {
    let _prize = this.data.prize
    let _curNum = _prize.length
    let _curNumDeg = 360 / _curNum
    let _allDeg = []
    for (let i = 0; i < _curNum; i++) {
      _prize[i].deg = _curNumDeg * i
    }
    this.setData({
      prize: _prize,
      curNumDeg: _curNumDeg
    })
  },
  //点击开始抽奖
  start() {
    if (this.data.isPrize) {
      let _num = Math.floor(Math.random() * this.data.prize_cur.length)
      let surplus = Math.floor(Math.random() * 7 + 2) / 10
      console.log(`【${this.data.prize_cur[_num].name}】`)
      let _needleDeg = (this.data.prize_cur[_num].num - surplus) * this.data.curNumDeg - 90 + this.data.needleDeg + (360 - this.data.needleDeg % 360) + 1800
      this.setData({ isPrize: false, needleDeg: _needleDeg})
      setTimeout(() => {
        tool.showModal("抽奖结果", this.data.prize_cur[_num].name, "好的,#00B26A", false)
        this.setData({ isPrize: true })
      }, this.data.time + 300)
    }
  }
})
