//index.js
const util = require('../../utils/util.js');
const api = require('../../utils/api.js');

const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    testDate: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    test: []
  },
  onLoad: function (options) {
    var that = this
    util.requestTest()
      .then(res => {
        // console.log(res.data)
        that.setData({
          testDate : res.data
        }),
        util.requestTestJson()
        .then(res => {
          console.log(res)
          that.setData({
            test: res.data
          })
        })
      })

  },
  goods(){
    wx.navigateTo({
      url: '../goodDetails/goodDetails',
    })
  },
  more(){
    wx.navigateTo({
      url: '../moreGoods/moreGoods',
    })
  },
  test() {
    wx.navigateTo({
      url: '../review/review',
    })
  }
})
