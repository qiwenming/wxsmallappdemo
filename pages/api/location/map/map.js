// pages/api/location/map/map.js
Page({
  data:{},
  onReady:function(){
    this.mapContext = wx.createMapContext('myMap');
  },
  getCenterLocation:function(){
    this.mapContext.getCenterLocation({
      success:function(res){
        console.log(res);
      }
    });
  },
  moveToLocation:function(){
    this.mapContext.moveToLocation();
  }
})