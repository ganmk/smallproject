//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    pageData:[]
  },
  toListPage: function (e) {
    var bid = e.currentTarget.dataset.bid; //图书id [data-bid]
    wx.navigateTo({
      url: '../detail/detail?id=' + bid
    });
  },
  onLoad: function () {

    var category = [{ "name": "top", "text": "头条" },
    { "name": "shehui", "text": "社会" },
    { "name": "guonei", "text": "国内" },
    { "name": "guoji", "text": "国际" },
    { "name": "yulei", "text": "娱乐" },
    { "name": "tiyu", "text": "体育" },
    { "name": "junshi", "text": "军事" },
    { "name": "keji", "text": "科技" },
    { "name": "shehui", "text": "时尚" },
    { "name": "caijing", "text": "财经" }]
    
    var _this = this;
   
    _this.setData({
      pageData: category
    })


  },
  toListPage:function(e){
 
   var name = e.currentTarget.dataset.bid;; //
    
    wx.navigateTo({

      url: '../detail/detail?id=' + name
    });

  }
})
