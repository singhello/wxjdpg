import { IMyApp } from "../../app";

// pages/my/my.js
const app = getApp<IMyApp>();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: '',
    userName: '',
    userImg: '',
    token: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options:any){
    console.log(options);
    if (app.globalData.userInfo) {
      this.setData!({
        userName: app.globalData.userInfo.nickName,
        userImg: app.globalData.userInfo.avatarUrl,
        hasUserInfo: true
      })
    } else {
      app.userInfoReadyCallback = (res:any) => {
        this.setData!({
          userName: res.nickName,
          userImg: res.avatarUrl,
          hasUserInfo: true
        })
      }
    }
  }
})