// pages/api/media/voice/voice.js
Page({
  data:{},
  play:function(){
    wx.startRecord({
      success: function(res){
        // success
        var tempFilePath = res.tempFilePath;
        wx.playVoice({
          filePath: tempFilePath
        })
      }
    })
  },
  pause:function(){
    wx.startRecord({
      success: function(res){
        var tempFilePath = res.tempFilePath;
        wx.playVoice({
          filePath: tempFilePath
        }),
        setTimeout(function(){
          wx.pauseVoice();
        },2000)
      }
    })
  },
  stop:function(){
    wx.startRecord({
      success: function(res){
        var tempFilePath = res.tempFilePath;
        wx.playVoice({
          filePath:tempFilePath
        }),
        setTimeout(function(){
          wx.stopVoice();
        },5000)
      }
    })
  }
})