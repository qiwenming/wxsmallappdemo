Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    circular:false,
    interval: 5000,
    duration: 1000
  },
  indicatorDotsChange:function(e){
    this.setData({
      indicatorDots:e.detail['value']
    })
  },
  autoplayChange:function(e){
    this.setData({
      autoplay:e.detail['value']
    })
  },
  circularChange:function(e){
    this.setData({
      circular:e.detail['value']
    })
  },
  intervalChange:function(e){
    this.setData({
      interval:e.detail['value']
    })
  },
  durationChange:function(e){
    this.setData({
      duration:e.detail['value']
    })
  }
})