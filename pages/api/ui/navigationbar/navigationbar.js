// pages/api/ui/navigationbar/navigationbar.js
Page({
  data:{},
  setNavigationBarTitle:function(options){
    wx.setNavigationBarTitle({
      title: 'qwm_'+Date.now()
    })
  },
  showNavigationBarLoading:function(){
    wx.showNavigationBarLoading();
  },
  hideNavigationBarLoading:function(){
    wx.hideNavigationBarLoading();
  }
})