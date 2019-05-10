"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../utils/api");
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        isModalPromise: false,
        navList: ['精选', '母婴', '配饰', '美妆', '鞋包', '家装', '日用'],
        iNow: '精选',
        menuList: [
            { icon: "/img/icon_date.png", name: '9.9包邮' },
            { icon: "/img/icon_date.png", name: '一元新人' },
            { icon: "/img/icon_date.png", name: '好货清单' },
            { icon: "/img/icon_date.png", name: '自营优选' },
            { icon: "/img/icon_date.png", name: '平价超市' },
            { icon: "/img/icon_date.png", name: '名品清仓' },
            { icon: "/img/icon_date.png", name: '工厂直供' },
            { icon: "/img/icon_date.png", name: '京东砍价' },
            { icon: "/img/icon_date.png", name: '签到领红包' },
            { icon: "/img/icon_date.png", name: '一元领礼盒' },
        ],
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
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    onLoad: function () {
        var _this = this;
        var self = this;
        wx.getSetting({
            success: function (res) {
                console.log(res.authSetting['scope.userInfo']);
                if (!res.authSetting['scope.userInfo']) {
                    self.modalOpen();
                }
            }
        });
        if (app.globalData.userInfo) {
            this.modalCancel(null);
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res,
                    hasUserInfo: true
                });
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    });
                }
            });
        }
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    },
    modalOpen: function () {
        this.setData({
            isModalPromise: true
        });
    },
    modalCancel: function (e) {
        console.log(e);
        this.setData({
            isModalPromise: false
        });
    },
    modalSure: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        wx.setStorageSync("userInfo", app.globalData.userInfo);
        wx.setStorageSync("hasUserInfo", true);
        this.modalCancel(e);
    },
    openScan: function (e) {
        console.log(e);
        wx.scanCode({
            success: function (res) {
                console.log(res);
                wx.request({
                    url: api_1.default.scan,
                    data: {
                        code: res.result
                    },
                    success: function (r) {
                        console.log(r);
                    }
                });
            }
        });
    },
    navChange: function (e) {
        console.log(typeof e, e);
        this.setData({
            iNow: e.target.dataset.id
        });
    },
    toDetail: function (e) {
        console.log(e);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHVDQUFrQztBQUNsQyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELGNBQWMsRUFBQyxLQUFLO1FBRXBCLE9BQU8sRUFBQyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQztRQUM1QyxJQUFJLEVBQUMsSUFBSTtRQUVULFFBQVEsRUFBQztZQUNQLEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQztZQUN2QyxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLElBQUksRUFBQyxNQUFNLEVBQUM7WUFDdkMsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQztZQUN2QyxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLElBQUksRUFBQyxNQUFNLEVBQUM7WUFDdkMsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQztZQUN2QyxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxJQUFJLEVBQUMsT0FB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Q0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RCxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFLRCxRQUFRLFlBQUMsQ0FBTTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1YsT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxHQUFHLEVBQUMsYUFBRyxDQUFDLElBQUk7b0JBQ1osSUFBSSxFQUFDO3dCQUNILElBQUksRUFBQyxHQUFHLENBQUMsTUFBTTtxQkFDaEI7b0JBQ0QsT0FBTyxZQUFDLENBQU07d0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsQ0FBQztpQkFDRixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELFNBQVMsWUFBQyxDQUFNO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osSUFBSSxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDekIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELFFBQVEsWUFBQyxDQUFNO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL3V0aWxzL2FwaVwiO1xuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG1vdHRvOiAn54K55Ye7IOKAnOe8luivkeKAnSDku6XmnoTlu7onLFxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuICAgIGlzTW9kYWxQcm9taXNlOmZhbHNlLFxuICAgIC8vIOWvvOiIqlxuICAgIG5hdkxpc3Q6Wyfnsr7pgIknLCfmr43lqbQnLCfphY3ppbAnLCfnvo7lpoYnLCfpnovljIUnLCflrrboo4UnLCfml6XnlKgnXSxcbiAgICBpTm93Oifnsr7pgIknLFxuICAgIC8vIOiPnOWNleagj1xuICAgIG1lbnVMaXN0OltcbiAgICAgIHtpY29uOlwiL2ltZy9pY29uX2RhdGUucG5nXCIsbmFtZTonOS455YyF6YKuJ30sXG4gICAgICB7aWNvbjpcIi9pbWcvaWNvbl9kYXRlLnBuZ1wiLG5hbWU6J+S4gOWFg+aWsOS6uid9LFxuICAgICAge2ljb246XCIvaW1nL2ljb25fZGF0ZS5wbmdcIixuYW1lOiflpb3otKfmuIXljZUnfSxcbiAgICAgIHtpY29uOlwiL2ltZy9pY29uX2RhdGUucG5nXCIsbmFtZTon6Ieq6JCl5LyY6YCJJ30sXG4gICAgICB7aWNvbjpcIi9pbWcvaWNvbl9kYXRlLnBuZ1wiLG5hbWU6J+W5s+S7t+i2heW4gid9LFxuICAgICAge2ljb246XCIvaW1nL2ljb25fZGF0ZS5wbmdcIixuYW1lOiflkI3lk4HmuIXku5MnfSxcbiAgICAgIHtpY29uOlwiL2ltZy9pY29uX2RhdGUucG5nXCIsbmFtZTon5bel5Y6C55u05L6bJ30sXG4gICAgICB7aWNvbjpcIi9pbWcvaWNvbl9kYXRlLnBuZ1wiLG5hbWU6J+S6rOS4nOegjeS7tyd9LFxuICAgICAge2ljb246XCIvaW1nL2ljb25fZGF0ZS5wbmdcIixuYW1lOifnrb7liLDpoobnuqLljIUnfSxcbiAgICAgIHtpY29uOlwiL2ltZy9pY29uX2RhdGUucG5nXCIsbmFtZTon5LiA5YWD6aKG56S855uSJ30sXG4gICAgICAvLyAn5LiA5YWD5paw5Lq6Jywn5aW96LSn5riF5Y2VJywn6Ieq6JCl5LyY6YCJJywn5bmz5Lu36LaF5biCJywn5ZCN5ZOB5riF5LuTJywn5bel5Y6C55u05L6bJywn5Lqs5Lic56CN5Lu3Jywn562+5Yiw6aKG57qi5YyFJywn5LiA5YWD6aKG56S855uSJ1xuICAgIF0sXG4gICAgLy8g6L2u5pKtXG4gICAgaW1nVXJsczogW1xuICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUxMzM0Nzg3LTIxZTZiZDNhYjEzNT93PTY0MCcsXG4gICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTEyMTQwMTItODRmOTVlMDYwZGVlP3c9NjQwJyxcbiAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1MTQ0NjU5MS0xNDI4NzVhOTAxYTE/dz02NDAnXG4gICAgXSxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiA1MDAwLFxuICAgIGR1cmF0aW9uOiAxMDAwXG4gIH0sXG4gIC8v5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJ1xuICAgIH0pXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZjogYW55ID0gdGhpcztcbiAgICAvKipcbiAgICAgKiDojrflj5bnlKjmiLfnmoTlvZPliY3orr7nva7jgILov5Tlm57lgLzkuK3lj6rkvJrlh7rnjrDlsI/nqIvluo/lt7Lnu4/lkJHnlKjmiLfor7fmsYLov4fnmoTmnYPpmZDjgIJcbiAgICAgKi9cbiAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSlcbiAgICAgICAgaWYoIXJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSl7XG4gICAgICAgICAgc2VsZi5tb2RhbE9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXMuYXV0aFNldHRpbmcgPSB7XG4gICAgICAgIC8vICAgXCJzY29wZS51c2VySW5mb1wiOiB0cnVlLFxuICAgICAgICAvLyAgIFwic2NvcGUudXNlckxvY2F0aW9uXCI6IHRydWVcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICB0aGlzLm1vZGFsQ2FuY2VsKG51bGwpO1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSl7XG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdXNlckluZm86IHJlcyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgLyoqXG4gICAqIOiOt+WPlueUqOaIt+S/oeaBr+OAguiwg+eUqOWJjemcgOimgSDnlKjmiLfmjojmnYMgc2NvcGUudXNlckluZm/jgIJcbiAgICogQHBhcmFtIGUgXG4gICAqL1xuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgfSxcbiAgLyoqXG4gICAqIOaJk+W8gOaOiOadg+eZu+W9leeql+WPo1xuICAgKi9cbiAgbW9kYWxPcGVuKCl7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBpc01vZGFsUHJvbWlzZTogdHJ1ZVxuICAgIH0pXG4gIH0sXG4gIC8qKlxuICAgKiDlj5bmtojnmbvpmYbmjojmnYNcbiAgICogQHBhcmFtIGUgXG4gICAqL1xuICBtb2RhbENhbmNlbChlOiBhbnkpe1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBpc01vZGFsUHJvbWlzZTogZmFsc2VcbiAgICB9KVxuICB9LFxuICAvKipcbiAgICog5YWB6K6455m75b2V5o6I5p2DLOi/lOWbnueahOaYr+aOiOadg+eUqOaIt+S/oeaBr1xuICAgKiBAcGFyYW0gZSBcbiAgICovXG4gIG1vZGFsU3VyZShlOiBhbnkpe1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm87XG4gICAgLy8gYXBwLmdsb2JhbERhdGEuaGFzVXNlckluZm8gPSB0cnVlO1xuICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwidXNlckluZm9cIiwgYXBwLmdsb2JhbERhdGEudXNlckluZm8pO1xuICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwiaGFzVXNlckluZm9cIiwgdHJ1ZSk7XG4gICAgdGhpcy5tb2RhbENhbmNlbChlKTtcbiAgfSxcbiAgLyoqXG4gICAqIOaJk+W8gOaJq+S4gOaJq1xuICAgKiBAcGFyYW0gZSBcbiAgICovXG4gIG9wZW5TY2FuKGU6IGFueSl7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgd3guc2NhbkNvZGUoe1xuICAgICAgc3VjY2VzcyhyZXMpe1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6YXBpLnNjYW4sXG4gICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICBjb2RlOnJlcy5yZXN1bHRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3MocjogYW55KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICAvKipcbiAgICog5LiK5a+86Iiq5pS55Y+YXG4gICAqIEBwYXJhbSBlIFxuICAgKi9cbiAgbmF2Q2hhbmdlKGU6IGFueSl7XG4gICAgY29uc29sZS5sb2codHlwZW9mIGUsZSk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBpTm93OmUudGFyZ2V0LmRhdGFzZXQuaWRcbiAgICB9KVxuICB9LFxuICAvKipcbiAgICog5Y676K+m5oOF6aG1XG4gICAqIEBwYXJhbSBlIFxuICAgKi9cbiAgdG9EZXRhaWwoZTogYW55KXtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxufSlcbiJdfQ==