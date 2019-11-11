const plugin = requirePlugin("chatbot")

const robotInit = () => {
  plugin.init({
    appid: "4lG5Ka1K0bYg6l2vxqwEF9IDd7yjQP", //P5Ot9PHJDechCYqDFAW1AiK6OtG3Ja
    openid: "", //小程序用户openid，非必填
    guideList: ["恭喜", "网晨", "天气"],
    background: '#50442E',
    success: () => { console.log("【机器人初始化OK】") },
    fail: error => { }
  })
}

module.exports = { robotInit }