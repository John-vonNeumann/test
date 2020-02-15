// pages/components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     title:{
       type:String,
       value:'我是默认的标题'
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
     counter:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
     tabIncerment(){
          this.triggerEvent('increment',{})
     }
  }
})
