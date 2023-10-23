Component({
  //  组件的属性列表
  properties: { },
  //  组件的初始数据
  data: {
    value: '/pages/home/home',
    tabBar: [{
      value: '/pages/home/home',
      icon: 'home',
      label: '首页',
    }, {
      value: '/pages/index/index',
      icon: 'file',
      label: '我的',
    }]
  },
  //  组件的方法列表
  methods: {
    onChange(e: any) {
      console.log(e)
      this.setData({
        value: e.detail.value,
      });
      wx.switchTab({
        url: e.detail.value,
        success: () => {
          console.log(12313)
       },
      });
    }
  }
})
