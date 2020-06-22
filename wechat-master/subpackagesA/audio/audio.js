// subpackages/audio/audio.js
import Audio from '../../utils/audio'
import { minutesAndSeconds } from '../../utils/util'
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.data.audio = new Audio(this, {
      musicUrl: "https://game.flyh5.cn/resources/game/wechat/szq/gaoxiao/music.mp3",
      autoplay: false,//自动播放
      loop: false,//是否循环播放
      volume: 0.1,//音量0-1
      obeyMuteSwitch: false,//是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
      onTimeUpdate: true//监听播放进度事件
    })
    this.data.audio.init()
  },
  //播放进度事件
  onTimeUpdate(e) {
    // console.log("e", e)
    this.setData({
      currentTime: `${minutesAndSeconds(e.currentTime).tiems.m}:${minutesAndSeconds(e.currentTime).tiems.s}`,
      totalTime: `${minutesAndSeconds(e.duration).tiems.m}:${minutesAndSeconds(e.duration).tiems.s}`
    })
  },
  //控制事件
  controls(e) {
    let { type } = e.currentTarget.dataset
    if (this.data.disabledClick) return
    this.data.disabledClick = true
    setTimeout(() => { this.data.disabledClick = false }, 1000)
    if (type == 1) {//播放
      this.data.audio.play()
    } else if (type == 2) {//暂停
      this.data.audio.pause()
    } else if (type == 3) {//停止
      this.setData({ currentTime: '00:00' })

      this.data.audio.stop()
    } else if (type == 4) {//跳转到指定位置,单位s
      let _tims = 20
      this.setData({ currentTime: `${minutesAndSeconds(_tims).tiems.m}:${minutesAndSeconds(_tims).tiems.s}` })
      this.data.audio.seek(_tims)
    }
  },
  onShareAppMessage () {}
})