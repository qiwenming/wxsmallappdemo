// pages/api/device/makePhoneCall/makePhoneCall.js
Page({
  data:{
    phone:''
  },
  makePhoneCall:function(){
    if(this.data.phone.length<=0){
      return;
    }
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.phone,
      success: function(res) {
        console.log(res);
      }
    })
  },
  bindInput:function(e){
    var myPhone = e.detail['value'];
    this.setData({
      phone:myPhone
    })
  }
})