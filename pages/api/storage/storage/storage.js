// pages/api/storage/storage/storage.js
Page({
  data:{ },
  
 setStorage:function(){
   var nowStr = Date.now();
   wx.setStorage({
     key: 'qwm_setStorage_'+nowStr,
     data: 'data_setStorage_'+nowStr,
     success: function(res){
       wx.showToast({
         title:'保存成功',
         duration:2000
       })
     }
   })
 },
 setStorageSync:function(){
   var nowStr = Date.now();
   wx.setStorageSync('qwm_setStorageSync_'+nowStr,'data_setStorageSync_'+nowStr)
   wx.showToast({
    title:'保存成功',
    duration:2000
  })
 },
 getStorage:function(){
   var that = this;
   wx.getStorage({
     key:  "string",
     success: function(res){
       console.log("getStorage:"+res.data)
     }
   })
 },
 getStorageSync:function(){
   console.log("getStorageSync:"+wx.getStorageSync( "string"));
 },
 getStorageInfo:function(){
   wx.getStorageInfo({
     success: function(res){
       console.log("-------getStorageInfo-------")
       console.log("keys:"+res.keys);
       console.log("currentSize:"+res.currentSize);
       console.log("limitSize:"+res.limitSize);
       console.log("----------------------------")
     }
   })
 },
 getStorageInfoSync:function(){
     var res = wx.getStorageInfoSync();
     console.log("-------getStorageInfoSync-------")
     console.log("keys:"+res.keys);
     console.log("currentSize:"+res.currentSize);
     console.log("limitSize:"+res.limitSize);
     console.log("-------------------------------")
 },
 removeStorage:function(){
    var that = this;
   wx.removeStorage({
     key: "string",
     success: function(res){
       wx.showToast({
         title:'删除成功',
         duration:2000
       })
     }
   })
 },
 removeStorageSync:function(){
   wx.removeStorageSync( "string");
   wx.showToast({
      title:'删除成功',
      duration:2000
    })
 },
 clearStorage:function(){
   wx.clearStorage({
     success: function(res){
       wx.showToast({
         title:'清除成功',
         duration:2000
       })
     }
   })
 },
 clearStorageSync:function(){
   wx.clearStorageSync();
   wx.showToast({
     title:'清除成功',
     duration:2000
   })
 },

 setStorageString:function(){
   wx.setStorageSync('string', "qwm---"+Date.now());
 }
})