//app.js
import auth from './utils/publics/authorization.js'
import backgroundAudio from './utils/backgroundAudio.js'
App({
  onLaunch(opation) {
    //腾讯统计
    auth.statistics(500689212)
    //背景音乐
    //backgroundAudio.backMusic(this, 'https://game.flyh5.cn/resources/game/wechat/szq/ftxiyouji/images/music.mp3')
  },
  globalData: {
    REQUESTURL: 'https://game.flyh5.cn/game/wx7c3ed56f7f792d84/yyt_quan/public/index.php',//接口请求路径
    ASSETSURL: 'http://game.flyh5.cn/resources/game/wechat/xw/rc_qc/assets_3.0'//线上资源路径
  }
})