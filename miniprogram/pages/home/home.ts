Component({
  data: {
    value: 'label_2',
    list: [
      { value: 'label_1', label: '首页', icon: 'home' },
      { value: 'label_2', label: '应用', icon: 'app' },
      { value: 'label_4', label: '我的', icon: 'user' },
    ],
  },

  methods: {
    onChange(e) {
      wx.switchTab({
        url: '/pages/index/index',
        fail: (e) => {
           console.log(e)
        },
    });
      console.log(e.detail)
      this.setData({
        value: e.detail.value,
      });
    },
  },
});