//app.js
import store from './utils/store/index'
import auth from './utils/publics/authorization.js'
import backgroundAudio from './utils/backgroundAudio.js'
import robotInit from './utils/robot-init.js'
import setAllShare from './utils/setAllShare.js'
App({
  onLaunch(opation) {
    //腾讯统计
    auth.statistics(500689212)
    //背景音乐
    // backgroundAudio.backMusic(this, 'https://game.flyh5.cn/resources/game/wechat/szq/ftxiyouji/images/music.mp3')
    //机器人
    robotInit.robotInit()
    setAllShare()
  },
  store,
  // setAllShare,
  globalData: {
    CONFIGURE: "tJ4GXH2P2luArDVm0u9",//核弹系统码
    REQUESTURL: 'https://game.flyh5.cn/game/wx7c3ed56f7f792d84/yyt_quan/public/index.php',//接口请求路径
    ASSETSURL: 'https://game.flyh5.cn/resources/game/wechat/xw/rc_qc/assets_3.0'//线上资源路径
  }
})