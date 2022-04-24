import { defineStore } from 'pinia'

export const goodsStore = defineStore({
  id: 'goods',
  state: () => {
    return{
      space: 12,
      titleShow:true,
      titleShowRow:2,
      descriptionShow:true,
      descriptionShowRow:1,
      priceShow:true, // 商品价格显示
      linePriceShow:true, // 划线价格显示
      goodsTagShow:true, // 商品角标显示
      marketTagShow:true, // 活动角标显示
    }
  },
  getters: {
  },
  actions: {
  }
})
