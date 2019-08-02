//index.js
import tool from '../../../../utils/publics/tool.js'
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
    step: 8 * 5,
    curIndex: 1,
    speed: 260,
    start_num: 6,
    isPrize: true
  },
  start() {
    let _self = this
    if (this.data.isPrize) {
      var _curIndex = this.data.curIndex
      var _speed = this.data.speed
      //var prize_num = Math.floor(Math.random() * 8 + 40)
      var _num = Math.floor(Math.random() * this.data.prize_cur.length)
      console.log("【" + this.data.prize_cur[_num].name + "】")
      var prize_num = this.data.prize_cur[_num].num + this.data.step - _curIndex - 1
      var _prize_num = 0
      var _auto = setTimeout(auto_prize, _speed)
      this.setData({
        isPrize: false
      })
    }
    function auto_prize() {
      clearInterval(_auto)
      if (_prize_num <= prize_num) {
        _prize_num++
        _curIndex++
        _curIndex = (_curIndex) % 8
        if (_prize_num < _self.data.start_num) {
          _speed -= 40
        } else if (_prize_num == _self.data.start_num) {
          _speed = 25
        } else if (_prize_num >= _self.data.start_num && _prize_num < _self.data.start_num * 4) {
          _speed += 6
        } else {
          _speed += 16
        }
        _auto = setInterval(auto_prize, _speed)
        _self.setData({ curIndex: _curIndex })
      } else {
        setTimeout(function () {
          tool.showModal("抽奖结果", _self.data.prize[_self.data.curIndex].name, "好的,#00B26A", false)
          _self.setData({ isPrize: true })
        }, 300)
      }
    }
  }
})
