// pages/detail/detail.js

var requests = require('../../requests/request.js');
var utils = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag:null,
    pageData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
      
      this.setData({ tag: option.id});
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
        
       var tag=this.data.tag;

       var _this=this;

       requests.requestNews(tag,
            (data)=>{
                
                _this.setData({pageData:data.result.data})
                
            },
            () => {
              
              wx.navigateBack();
               
            }, 
            ()=>{

            }
       )
     
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})