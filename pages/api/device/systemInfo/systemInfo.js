// pages/api/device/systemInfo/systemInfo.js
Page({
  data:{
    infos:[]
  },
  onLoad:function(options){
    var info = wx.getSystemInfoSync();
    this.setData({
      infos:[
        {title:'手机型号',value:info.model},
        {title:'设备像素比',value:info.pixelRatio},
        {title:'窗口宽度',value:info.windowWidth},
        {title:'窗口高度',value:info.windowHeight},
        {title:'微信设置的语言',value:info.language},
        {title:'微信版本号',value:info.version},
        {title:'操作系统版本',value:info.system},
        {title:'客户端平台',value:info.platfom}
      ]
    })
  }
})