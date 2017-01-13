Page({
  data:{
    items:[
        {title:"request",url:'./request/request'}
    ]
  },
  bindTap:function(event){
    console.log();
    wx.navigateTo({
      url: event.currentTarget.dataset['url']
    })
  }
})