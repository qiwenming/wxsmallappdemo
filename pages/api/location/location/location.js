// pages/api/location/location/location.js
Page({
  data:{},
  getLocation:function(options){
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        console.log("latitude:"+res.latitude);
        console.log("longitude:"+res.longitude);
        console.log('speed:'+res.speed);
        console.log('accuracy:'+res.accuracy)
      }
    })
  },
  chooseLocation:function(){
    wx.chooseLocation({
      success: function(res){
        console.log("name:"+res.name);
        console.log("address:"+res.address);
        console.log("latitude:"+res.latitude);
        console.log("longitude:"+res.longitude);
      }
    })
  },
  openLocation:function(){
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        wx.openLocation({
          latitude: res.latitude, // 纬度，范围为-90~90，负数表示南纬
          longitude: res.longitude, // 经度，范围为-180~180，负数表示西经
          scale: 28, // 缩放比例
          name: '小明---', // 位置名
          address: '小明的位置---' // 地址的详细说明
        })
      }
    })
  }
})