// pages/api/file/file/file.js
Page({
  data:{},
  saveFile:function(){
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        wx.saveFile({
          tempFilePath: res.tempFilePaths[0],
          success: function(res){
            wx.showToast({
              title:'保存成功',
              duration:2000
            });
            console.log(res);
          }
        })
      }
    })
  },
  getSavedFileList:function(){
    wx.getSavedFileList({
      success: function(res){
        console.log(res.fileList);
      }
    })
  },
  getSavedFileInfo:function(){
    wx.getSavedFileList({
      success: function(res){
        if(res.fileList.length>0){
          var path = res.fileList[0].filePath;
          wx.getSavedFileInfo({
            filePath: path,
            success: function(res){
              console.log(path+"----"+(res.size/1024)+"kb ----- "+res.createTime);
            }
          })
        }
      }
    })
  },
  removeSavedFile:function(){
    wx.getSavedFileList({
      success: function(res){
         if(res.fileList.length>0){
           var path = res.fileList[0].filePath;
           wx.removeSavedFile({
             filePath: path,
             success: function(res){
               console.log("delete:"+path);
               wx.showToast({
                 title:'删除成功',
                 duration:2000
               })
             }
           })
         }
      }
    })
  },
  openDocument:function(){
    wx.openDocument({
      filePath: 'http://example.com/somefile.pdf',
      success: function(res){
        wx.showToast({
          title:'ok',
          duration:2000
        })
      }
    })
  },
})