// pages/api/device/accelerometer/accelerometer.js
Page({
  data:{},
  onLoad:function(options){
    wx.onAccelerometerChange(function(res){
      console.log("x:"+res.x);
      console.log("y:"+res.y);
      console.log("z:"+res.z);
    })
  }
})