//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  /**
   * 获取文章列表数据
   */
  getData() {
    // 云函数新接口，用于获取数据库中数据
    const db = wx.cloud.database({});
    db.collection('namecard').get().then((res) => {
      let data = res.data;
      this.setData({
        list: data
      });
    }).catch(e => {
      wx.showToast({
        title: 'db读取失败',
        icon: 'none'
      });
    });
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getData();
  },

  /**
   * 跳转至学生卡详情
   */
  getDetail(e) {
    let _id = e.currentTarget.dataset.namecardid;
    app.globalData.namecard.id = _id;

    wx.navigateTo({
      url: '../detail/index'
    });
    
  }

})