// pages/movie/movie.js

//请求数据的start开始值
let index = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 幻灯片
    imgUrls: [
      '../../images/0.jpg',
      '../../images/1.jpg',
      '../../images/2.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000, //滑动动画时长

    //影片数组
    movies:[]
  },

  //电影详情页跳转
  showMovieDetail: function(e){
    console.log(e);
    console.log(e.target.id);
    wx.navigateTo({
      // url: `../movie-detail/movie-detail?id=${e.target.id}`
      url:'../movie-detail/movie-detail?id=' + e.target.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   * 页面加载完成之后执行此函数
   */
  onLoad: function(options) {
     this.loadMovies();
  },
  //加载电影数据
  loadMovies: function() {
     var that = this;
     let _url = "http://t.yushu.im/v2/movie/in_theaters?count=6&start="+index;
     wx.request({
       url: _url,
      //  url:"http://t.yushu.im/v2/movie/in_theaters?count=6",
       success: function(res){
            console.log(res.data.subjects);
            that.setData({
              movies: that.data.movies.concat(res.data.subjects)
            })
            index += 6;
       }
     })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
     console.log('滑到底部了，兄弟！');
     this.loadMovies();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})