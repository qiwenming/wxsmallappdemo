Page({
  data:{
  },
  bindTap:function(event){
      console.log(event);
  },

  bindTap1:function(event){
      console.log('bindTap1------->');
  },

  bindTap2:function(event){
    console.log('bindTap2------->');
  },
  
  bindTap3:function(event){
      console.log('bindTap3------->');
  },

  catchTap2:function(){
      console.log('catchTap2------->');
  },

  touchstart:function(event){
      console.log('touchstart------->'+event.type+"--"+event.currentTarget.tagName);
  },
   touchmove:function(){
      console.log('catchTap2------->'+event.changedTouches);
  },
   touchend:function(){
      console.log('catchTap2------->');
  },
   touchcancel:function(){
      console.log('catchTap2------->');
  },
})