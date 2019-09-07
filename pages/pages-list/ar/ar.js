
//index.js
//获取应用实例
import $ from '../../../utils/api/request.js'
import api from '../../../utils/api/myRequests.js'
import tool from '../../../utils/publics/tool.js'
import upng from '../../../utils/upng/UPNG.js'

Page({
  data: {
    src: '',
    imgw: '520rpx',
    imgh: '520rpx',
    isSend: true,
    device: 'back'
  },
  //切换前后摄像头
  deviceSwitch() {
    let _device = (this.data.device == 'back' ? 'front' : 'back')
    this.setData({ device: _device })
  },
  onLoad: function () {
    const context = wx.createCameraContext()
    let index = 0
    //监听摄像头
    const listener = context.onCameraFrame((frame) => {
      index++
      if (index % 20 == 0 && this.data.isSend) {
          this.data.isSend = false
          let pngData = upng.encode([frame.data], frame.width, frame.height, 10);
          let base64 = wx.arrayBufferToBase64(pngData);
          this.setData({
            src: 'data:image/png;base64,' + base64,
            imgw: frame.width + 'px',
            imgh: (frame.height) + 'px'
          })
        //调取AI图片识别接口  
        $.postP('http://game.flyh5.cn/game/wx7c3ed56f7f792d84/rdl_logo/public/index/index/pic_search', { img: this.data.src }).then(res => {
          console.log("识别返回", res)
          let _r, _x
          let _data = JSON.parse(res.data.data.result[0].brief);
          _x = parseFloat(res.data.data.result[0].score * 100).toFixed(2)
          console.log("相似度", _x)
          if (_x < 70) {
            this.data.isSend = true
            return
          }
          if (_data.name == 'logo1') {
            _r = '蓝'
          } else if (_data.name == 'logo2') {
            _r = '绿'
          } else if (_data.name == 'logo3') {
            _r = '粉'
          } else if (_data.name == 'logo4') {
            _r = '青'
          } else if (_data.name == 'logo5') {
            _r = '黄'
          } else if (_data.name == 'logo6') {
            _r = '红'
          }
          tool.showModal("AR扫描结果", `您扫的是${_r}精灵,相似度高达${_x}%`, '好的,#333', '结束,#DD5044').then(res => {
            if (res) {
              setTimeout(() => {
                this.data.isSend = true
              }, 1000)
            }
          })
        }).catch(err => {
          reject(err)
        })
      }
    })
    listener.start()
  },
  error(e) {
    console.log(e.detail)
  }
})
