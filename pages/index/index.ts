//index.js
//获取应用实例
import { IMyApp } from '../../app'
import api from "../../utils/api";
const app = getApp<IMyApp>()

Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isModalPromise:false,
    // 导航
    navList:['精选','母婴','配饰','美妆','鞋包','家装','日用'],
    iNow:'精选',
    // 菜单栏
    menuList:[
      {icon:"/img/icon_date.png",name:'9.9包邮'},
      {icon:"/img/icon_date.png",name:'一元新人'},
      {icon:"/img/icon_date.png",name:'好货清单'},
      {icon:"/img/icon_date.png",name:'自营优选'},
      {icon:"/img/icon_date.png",name:'平价超市'},
      {icon:"/img/icon_date.png",name:'名品清仓'},
      {icon:"/img/icon_date.png",name:'工厂直供'},
      {icon:"/img/icon_date.png",name:'京东砍价'},
      {icon:"/img/icon_date.png",name:'签到领红包'},
      {icon:"/img/icon_date.png",name:'一元领礼盒'},
      // '一元新人','好货清单','自营优选','平价超市','名品清仓','工厂直供','京东砍价','签到领红包','一元领礼盒'
    ],
    // 轮播
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    let self: any = this;
    /**
     * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
     */
    wx.getSetting({
      success(res) {
        console.log(res.authSetting['scope.userInfo'])
        if(!res.authSetting['scope.userInfo']){
          self.modalOpen();
        }
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
    })
    if (app.globalData.userInfo) {
      this.modalCancel(null);
      this.setData!({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData!({
          userInfo: res,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData!({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  /**
   * 获取用户信息。调用前需要 用户授权 scope.userInfo。
   * @param e 
   */
  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData!({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 打开授权登录窗口
   */
  modalOpen(){
    this.setData!({
      isModalPromise: true
    })
  },
  /**
   * 取消登陆授权
   * @param e 
   */
  modalCancel(e: any){
    console.log(e)
    this.setData!({
      isModalPromise: false
    })
  },
  /**
   * 允许登录授权,返回的是授权用户信息
   * @param e 
   */
  modalSure(e: any){
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    // app.globalData.hasUserInfo = true;
    wx.setStorageSync("userInfo", app.globalData.userInfo);
    wx.setStorageSync("hasUserInfo", true);
    this.modalCancel(e);
  },
  /**
   * 打开扫一扫
   * @param e 
   */
  openScan(e: any){
    console.log(e);
    wx.scanCode({
      success(res){
        console.log(res);
        wx.request({
          url:api.scan,
          data:{
            code:res.result
          },
          success(r: any){
            console.log(r);
          }
        })
      }
    })
  },
  /**
   * 上导航改变
   * @param e 
   */
  navChange(e: any){
    console.log(typeof e,e);
    this.setData!({
      iNow:e.target.dataset.id
    })
  },
  /**
   * 去详情页
   * @param e 
   */
  toDetail(e: any){
    console.log(e);
  }
})
