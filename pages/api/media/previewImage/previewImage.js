// pages/api/media/previewImage/previewImage.js
Page({
  data:{},
  previewImage:function(){
    wx.previewImage({
      // current: 'String', // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: [
          "http://img3.redocn.com/tupian/20150430/mantenghuawenmodianshiliangbeijing_3924704.jpg",
          "http://i.zeze.com/attachment/forum/201605/06/214815xnd5dz5t58fndt85.jpg",
          "http://pic2.cxtuku.com/00/02/31/b945758fd74d.jpg",
          "http://pic35.nipic.com/20131121/2531170_145358633000_2.jpg",
          "http://pic35.nipic.com/20131122/2457331_123535098364_2.jpg",
          "http://pic48.nipic.com/file/20140825/11624852_152638235000_2.jpg",
          "http://pic47.nipic.com/20140826/9532020_221213937000_2.jpg"
        ],
      success: function(res){
        // success
      }
    })
  }
})