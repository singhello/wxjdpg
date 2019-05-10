"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        userId: '',
        userName: '',
        userImg: '',
        token: ''
    },
    onLoad: function (options) {
        var _this = this;
        console.log(options);
        if (app.globalData.userInfo) {
            this.setData({
                userName: app.globalData.userInfo.nickName,
                userImg: app.globalData.userInfo.avatarUrl,
                hasUserInfo: true
            });
        }
        else {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userName: res.nickName,
                    userImg: res.avatarUrl,
                    hasUserInfo: true
                });
            };
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFDO0FBQzdCLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSxFQUFFO0tBQ1Y7SUFJRCxNQUFNLFlBQUMsT0FBVztRQUFsQixpQkFpQkM7UUFoQkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVE7Z0JBQzFDLE9BQU8sRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTO2dCQUMxQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNO1lBQ0wsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBTztnQkFDbEMsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxHQUFHLENBQUMsU0FBUztvQkFDdEIsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQTtTQUNGO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNeUFwcCB9IGZyb20gXCIuLi8uLi9hcHBcIjtcclxuXHJcbi8vIHBhZ2VzL215L215LmpzXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KCk7XHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICB1c2VySWQ6ICcnLFxyXG4gICAgdXNlck5hbWU6ICcnLFxyXG4gICAgdXNlckltZzogJycsXHJcbiAgICB0b2tlbjogJydcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkKG9wdGlvbnM6YW55KXtcclxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgIHVzZXJOYW1lOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mby5uaWNrTmFtZSxcclxuICAgICAgICB1c2VySW1nOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgaGFzVXNlckluZm86IHRydWVcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzOmFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgdXNlck5hbWU6IHJlcy5uaWNrTmFtZSxcclxuICAgICAgICAgIHVzZXJJbWc6IHJlcy5hdmF0YXJVcmwsXHJcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pIl19