// pages/api/media/record/record.js
Page({
  data:{},
  startRecord:function(){
    wx.startRecord({
      success: function(res){
        // success
        console.log("startRecord" + res);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  stopRecord:function(){
    wx.stopRecord({
      success: function(res){
        // success
        console.log("stopRecord" + res);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})