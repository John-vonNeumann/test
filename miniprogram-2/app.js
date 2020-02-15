//app.js
const TOKEN = 'token'
App({
  globalData:{
     token:''
  },
  onLaunch: function () {
    //1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    if(token && token.length != 0) {//有token，验证token是否过期
      this.check_token(token)
    }else{
       this.login()//没有token，进行登录操作
    }
  },
  check_token(){
    wx.request({
      url: 'url',
      method:'post',
      header:{
        token
      },
      success:(res)=>{
         if(!res.data.errCode) {
           this.globalData.token = token;
         }
         else{
           this.login()
         }
      },
      fail:(err)=>{
          console.log(err)
      }
    })

  },
  login(){
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        const code = res.code;
          wx.request({
          url: 'url',
          method:'post',
          data:{
            code:code
          },
          success:(res)=> {

            const token = res.data.token;
            //2.将token保存在globalData中
            this.globalData.token = token;
            //在其他页面：const app = get APP  app.globalData.token
            wx.setStorageSync(TOKEN, token)
          }
          })
      }
    })
  }
 
})