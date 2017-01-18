// pages/api/device/networkType/networkType.js
Page({
  data:{
    networkType:""
  },
  onLoad:function(options){
    var that = this;
    wx.getNetworkType({
      success: function(res) {
        that.setData({
          networkType:res.networkType
        })
      }
    })
  }
})