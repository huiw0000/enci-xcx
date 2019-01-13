// component/profile/profile.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    pay() {
      wx.navigateTo({
        url: '../pay/pay'
      })
    },
    gettingItem() {
      wx.navigateTo({
        url: '../gettingItem/gettingItem'
      })
    },
    review(){
      wx.navigateTo({
        url: '../return/return',
      })
    },
    bookingList() {
      wx.navigateTo({
        url: '../bookingList/bookingList',
      })
    }
  }
})
