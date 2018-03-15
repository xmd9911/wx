var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dicData: '',
    dicWordData: '',
    searchWord: ''
  },

  onLoad: function (options) {
    
  },
  
  //获取用户输入内容
  getUserInput: function (e) {
    this.setData({
      searchWord: e.detail.value
    })
  },
  findIt: function () {
    var that = this
    var q = that.data.searchWord;
    var dicexPlainUrl = app.globalData.youdaoBase +
      "/jsonapi" + "?jsonversion=2&client=mobile&q=" + q + "&num=3&dicts={count:10,dicts=[ec,ce,newcj]}";
    this.getDicListData(dicexPlainUrl)
  },
  //调用有道api
  getDicListData: function (url,q) {
    var that = this;
    wx.request({
      url: url,
      method: 'post',
      header: {
        "Content-Type": 'x-www-form-urlencoded'
      },
      success: function (res) {
        // console.log(res.data);
        that.processYoudaoData(res.data);
        that.setData({
          dicData: res.data.ec
        })
      },
      fail: function (error) {
        console.log(error)
      }
    })
  },

  //处理搜索结果数据
  processYoudaoData: function (dicData) {
    var that = this;
    for (let x in dicData.ec21) {
      var subject = dicData.ec21[x][0];
      that.setData({
        dicWordData: subject
      })
      console.log(subject)
    }
    // for (let y in subject.trs) {
    //   var subData = subData.trs[y];
    //   console.log(subData)
    // }
    if (!subject.name == false ) {

    }
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