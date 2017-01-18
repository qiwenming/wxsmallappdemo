// pages/api/device/compass/compass.js
Page({
  data:{},
  onLoad:function(options){
    wx.onCompassChange(function(res){
      console.log(res.direction);
    })
  }
})