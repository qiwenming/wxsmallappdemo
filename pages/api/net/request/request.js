// pages/api/request/request.js
Page({
  data:{
    response:'------'
  },

  requestWeatcherInfo:function(){
    var that = this;
    this.showLoadingToast();
    wx.request({
      url: 'http://www.weather.com.cn/data/sk/101010100.html',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        that.setData({
          response:that.getweatherinfoString(res)
        })
        console.log(res.data);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
        wx.hideToast();
      }
    })
  },
  getweatherinfoString(res){
    var info = ' city:'+res.data['weatherinfo']['city'];

    info += '\n cityid:' +res.data['weatherinfo']['cityid'];

    info += ' temp:' +res.data['weatherinfo']['temp'];

    info += '\n WD:' + res.data['weatherinfo']['WD'];

    info += '\n WS:' + res.data['weatherinfo']['WS'];

    info += '\n SD:' + res.data['weatherinfo']['SD'];

    info += '\n SD:' +res.data['weatherinfo']['SD'];

    info += '\n time:' +res.data['weatherinfo']['time'];

    info += '\n isRadar:' +res.data['weatherinfo']['isRadar'];

    info += '\n njd:' +res.data['weatherinfo']['njd'];

    info += '\n qy:' +res.data['weatherinfo']['qy'];

    info += '\n rain:' +res.data['weatherinfo']['rain'];
    return info;
  },

  //显示toast
  showLoadingToast:function(){
    wx.showToast({
      title:'加载中',
      icon:'loading',
      duration:10000
    })
  },
   //显示toast
  showMsgToast:function(msg){
    wx.showToast({
      title:msg,
      duration:3000
    })
  },
  requestLogin:function(){
    var that = this;
    this.showLoadingToast();
    wx.request({
      url: 'http://api.xxxxxxxxx.com:8020/api/account/Login',
      data: {
        UserName:"1000000000",
        Pwd:"E10XXADXXC3949BA59ABBE56E057F20F883E",
        AppType:0
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "WCA-CLIENT-TYPE":"2",
        "WCA-CLIENT-VERSION":"1.0"
      }, // 设置请求的 header
      success: function(res){
        console.log(res.data);
        if(res.data['ResultCode']=='0000'){//登录成功

        }
        that.showMsgToast(res.data['ResultDesc']);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
        // wx.hideToast();
      }
    })
  }

})