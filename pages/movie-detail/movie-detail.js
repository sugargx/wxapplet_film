// pages/movie-detail/movie-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     movie: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
     console.log(options)
     console.log(options.id, "传到电影详情页面的电影id")
     //根据id，再一次发起新的对应网络请求，查询电影信息
     wx.request({
       url: 'http://t.yushu.im/v2/movie/subject/' + options.id,
       success: function(res){
         console.log(res.data, "传到详情页的电影信息")
         console.log(res.data.id, "传到详情页的电影id")
         that.setData({
            movie: res.data
         })
       }
     })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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