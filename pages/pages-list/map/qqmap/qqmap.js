const app = getApp();
import amap from '../../../../utils/amap-wx.js'
const key = "20d54a86030eec1b3d812e2f18ec9916";
// const key = "c290b7e016c85e8f279b2f80018c6fbf";

Page({
  data: {

  },
  onLoad() {
    wx.getLocation({//获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
      success: function (res) {
        wx.openLocation({//​使用微信内置地图查看位置。
          latitude: 22.5542080000,//要去的纬度-地址
          longitude: 113.8878770000,//要去的经度-地址
          name: "宝安中心A地铁口",
          address: '宝安中心A地铁口'
        })
      }
    })
  }
})