<template>
  <div class="goods-card-container">
    <div class="goods-box" :style="{'border-radius': goodsConfig.cornerStyle === 1 ?'0':goodsConfig.cornerRadius + 'px'}">
      <div class="goods-img-container">
        <div v-show="goodsConfig.goodsTagShow" class="tag">{{ goodsItem.tag }}</div>
      </div>
      <div v-show="goodsConfig.titleShow||goodsConfig.descriptionShow||goodsConfig.priceShow||goodsConfig.linePriceShow" class="img-margin"></div>
      <div class="goods-text-container">
        <div v-show="goodsConfig.titleShow"
             :class="['goods-title',goodsConfig.titleShowRow===1?'one-line-show':'two-line-show']">
          {{ goodsItem.title }}</div>
        <div v-show="goodsConfig.descriptionShow"
             :class="['good-description',goodsConfig.descriptionShowRow === 1?'one-line-show':'two-line-show']">
          {{ goodsItem.description }}
        </div>
      </div>
      <PreviewPrice
        :priceShow="goodsConfig.priceShow"
        :linePriceShow="goodsConfig.linePriceShow"
        :price="props.goodsItem.price"
        :underlinedPrice="props.goodsItem.linePrice"></PreviewPrice>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PreviewPrice from './PreviewPrice.vue'
const props = defineProps<{
  goodsItem: Record<string, never>,
  goodsConfig: Record<string, never>,
}>()
</script>

<style lang="scss" scoped>
.goods-card-container{
}
.goods-box{
  width: 100%;
  background: #FFFFFF;
  border-radius: .16rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: .16rem;
  .goods-img-container{
    width: 100%;
    height: 1.88rem;
    background: #F1F3F7;
    border-radius: 4px;
    position: relative;
    .tag{
      position: absolute;
      bottom: 4px;
      right: 4px;
      height: 19px;
      border-radius: 2px;
      box-sizing: border-box;
      line-height: 19px;
      padding: 0 5px;
      color: #FFFFFF;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(10px);
    }
  }
  .img-margin{
    margin-top: .16rem;
  }
  .goods-text-container{
    display: flex;
    flex-direction: column;
    .goods-title{
      font-family: PingFangSC-Regular;
      font-weight: 400;
      font-size: 14px;
      color: #333333;
      line-height: 20px;
    }
    .good-description{
      font-family: PingFangSC-Regular;
      font-weight: 400;
      font-size: 12px;
      color: #9B9B9B;
      letter-spacing: 0;
      line-height: 20px;
    }
  }
}

.two-line-show{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: .8rem;
}
.one-line-show{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: .4rem;
  line-height: .4rem;
}
</style>