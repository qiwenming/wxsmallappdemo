Page({
  data:{
    myStr:"tesg",
    userInfo: {},
    clickCount:0,
    list:[1,2,3,4,5,6,7,8,9,10],
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'},
    temlpateData:[
      {name:'xm_1',age:19,time:'2012-01-23'},
      {name:'xm_2',age:19,time:'2012-01-23'},
      {name:'xm_3',age:19,time:'2012-01-23'},
      {name:'xm_4',age:19,time:'2012-01-23'},
      {name:'xm_5',age:19,time:'2012-01-23'},
      {name:'xm_6',age:19,time:'2012-01-23'},
      {name:'xm_7',age:19,time:'2012-01-23'},
      {name:'xm_8',age:19,time:'2012-01-23'},
      {name:'xm_9',age:19,time:'2012-01-23'},
      {name:'xm_10',age:19,time:'2012-01-23'}
    ]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log("onLoad");
    this.setData({
      myStr: 'onLoad'
    });
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    console.log("onReady");
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    console.log("onShow");
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    console.log("onHide");
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    console.log("onUnload");
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    console.log("onPullDownRefresh");
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    console.log("onReachBottom");
  },
   onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'xiaoming', // 分享标题
      desc: 'xiaoming test wx app', // 分享描述
      path: './test' // 分享路径
    }
  },

  //自己的函数
  bindViewTap:function(){
    this.setData({
      text: '我日，你点击我了',
      clickCount:this.data.clickCount+1
    });
  },
})