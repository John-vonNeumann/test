// pages/index5/index5.js
import{
  getMultiData
} from '../service/index5.js'

Page({
data: {
    title:[]
},
onLoad:function(options) {
    getMultiData().then(res=> {
      console.log(res)
    })
    this.setData({
      
      
    })
}
})