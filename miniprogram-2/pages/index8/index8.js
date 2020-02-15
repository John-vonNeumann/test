// pages/index8/index8.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     imagePath:''
  },

  handleChooseAlbum(){
    wx.chooseImage({
       success:(res)=>{
         const path = res.tempFilePaths[0]
         this.setData({
           imagePath:path
         })
        }
    })
  },

   bindFormSubmit: function(e) {
        console.log(e.detail.value.textarea)
  },
  onload:function(options) {
     wx.request({
       url: 'http"123.207.32.32:8000/home/data',
       success:function(res) {
         console.log(res)
       }
     })
  }


})