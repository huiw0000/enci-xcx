// component/new-tab/new-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    url: ['http://www.enci.com.au/static/image/home-1.png','http://www.enci.com.au/static/image/kind-1.png']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onActiveTab(e){
      // console.log(e.target.id)
      switch (e.target.id){
        case "home":
        break;
      }
    }
  }
})
