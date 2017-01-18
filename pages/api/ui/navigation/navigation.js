// pages/api/ui/navigation/navigation.js
Page({
  data:{},
 navigateTo:function(options){
      wx.navigateTo({
        // url: '../feedback/feedback',
        url:'./switchTab/switchTab'
      })
  },
  redirectTo:function(){
    wx.redirectTo({
      url: '../feedback/feedback'
    })
  },
  switchTab:function(){
    wx.switchTab({
      url: './switchTab/switchTab'
    })
  },
  navigateBack:function(){
    wx.navigateBack({
      delta: 10, // 回退前 delta(默认为1) 页面
    })
  }
})