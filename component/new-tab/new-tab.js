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
    url: ['http://www.enci.com.au/static/image/home-1.png','http://www.enci.com.au/static/image/kind-1.png'],
    tabSelected: ''
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
    },

    index() {
      wx.redirectTo({
        url: '../index/index',
      })
    },

    sort() {
      wx.redirectTo({
        url: '../sorting/sorting',
      })
    },

    add() {
      wx.redirectTo({
        url: '../adding/adding',
      })
    },

    shoppingCar() {
      wx.redirectTo({
        url: '../shoppingCar/shoppingCar',
      })
    },

    mine() {
      wx.redirectTo({
        url: '../profile/profile',
      })
    },

    test(e){
      var temp = 'shoppingCar'
      console.log(e)
      wx.setStorage({
        key: 'tabSelected',
        data: '',
      })
      switch(e.currentTarget.id){
        case 'shopCart':
        temp = 'shoppingCar'
        break;
      }

      wx.navigateTo({
        url: '../../page/'+temp+'/'+temp
      })
    }

  }
})
