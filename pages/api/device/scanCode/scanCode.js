// pages/api/device/scanCode/scanCode.js
Page({
  data:{},
  scanCode:function(options){
    wx.scanCode({
      success: function(res){
        console.log('-------scanCode--------');
        console.log('result:'+res.result);
        console.log('scanType:'+res.scanType);
        console.log('charSet:'+res.charSet);
        console.log('path:'+res.path);
        console.log('-----------------------');
      }
    })
  }
})