// pages/api/media/getImageInfo/getImageInfo.js
Page({
  data:{
    width:'',
    height:'',
    path:''
  },
  chooseImage:function(){
    var that = this;
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        // success
        that.getImageInfo(res.tempFilePaths[0]);
      }
    })
  },

  getImageInfo:function(url){
    var that = this;
    wx.getImageInfo({
      src: url,
      success: function(res){
        that.setData({
           width:res.width,
           height:res.height,
           path:res.path,
        })
      }
    })
  }
})