//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  //事件处理函数
  targetremove: function () {
    wx.navigateTo({
      url: '../next/next'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
