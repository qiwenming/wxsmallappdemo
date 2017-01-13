// pages/api/request/request.js
Page({
  data:{
    response:'------'
  },

  request:function(){
    var that = this;
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
  }
})