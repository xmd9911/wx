var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function (options) {
    var that = this
    var q = "good";
    var dicexPlainUrl = app.globalData.youdaoBase +
      "/jsonapi" + "?jsonversion=2&client=mobile&q="+ q +"&dicts={count:99,dicts=[ec,ce,newcj]}";
    this.getDicListData(dicexPlainUrl)
  },
  
  //调用有道api
  getDicListData: function (url,q) {
    // wx.showNavigationBarLoading()
    var that = this;
    wx.request({
      url: url,
      method: 'post',
      header: {
        "Content-Type": 'x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
      },
      fail: function (error) {
        console.log(error)
      }
    })
  },

  // 用户点击右上角分享
  onShareAppMessage: function () {
    return {
      title: '二喵话题',
      desc: '分享个小程序，希望你喜欢☺️~',
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: "分享成功",
          duration: 1000,
          icon: "success"
        })
      }
    }
  }
})