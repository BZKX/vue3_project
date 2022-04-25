<template>
  <div class="price-container">
    <div class="price-box">
      <div class="main-price" v-if="priceShow">
        <div :class="['integer-price',priceObj.fontSizeType?'small-font-price-12':'']">¥{{ priceObj.integer }}</div>
        <div v-if="priceObj.showDecimal" :class="['decimal-point',priceObj.fontSizeType?'small-font-price-12':'']">.</div>
        <div v-if="priceObj.showDecimal" :class="['decimal-price',priceObj.fontSizeType?'small-font-price-10':'']">{{ priceObj.decimal }}</div>
      </div>
      <div v-if="linePriceShow" :class="['underlined-price', priceObj.fontSizeType?'small-font-price-10':'margin-price']">¥{{ priceObj.underlinePrice }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  price?: number, // 当前价格 单位：分
  underlinedPrice?:number, // 下划线价格 单位：分
  priceShow?:boolean, // 是否显示价格
  linePriceShow?:boolean, // 是否显示划线价格
}>(),{
  price: 0,
  underlinedPrice:0,
  priceShow:true,
  linePriceShow:true,
})

// 显示价格处理
const priceObj = computed(() =>{
  let obj = {
    integer: 0,
    decimal: 0,
    showDecimal: false,
    underlinePrice: 0,
    fontSizeType: 0,
  }
  if (props.price){
    obj.decimal = props.price % 100
    if (obj.decimal > 0){
      obj.showDecimal = true
      if (obj.decimal < 10){
        obj.decimal = obj.decimal*10
      }
    }
    obj.integer = Math.trunc(props.price/100)
  }
  if (props.underlinedPrice){
    obj.underlinePrice = props.underlinedPrice/100
    if (props.underlinedPrice %100 <=10 && props.underlinedPrice %100 != 0){
      obj.underlinePrice = obj.underlinePrice.toFixed(2)
    }
  }
  if (obj.integer.toString().length + obj.decimal.toString().length + obj.underlinePrice.toString().length >= 16){
    obj.fontSizeType = 1
  }
  console.log('obj==>',obj);
  return obj
})

</script>

<style lang="scss" scoped>
.price-container{
  width: 100%;
  line-height: 20px;
  .price-box{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-items: center;
    align-items: center;
    align-content: center;
    .main-price{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      font-size: 14px;
      line-height: 20px;
      align-items: center;
      color: #FF0000;
      letter-spacing: 0;
      .decimal-price{
        font-size: 12px;
        &.small-font-price-10{
          transform-origin: left 83%;
        }
      }
    }
    .underlined-price{
      font-family: PingFangSC-Regular;
      font-weight: 400;
      font-size: 10px;
      color: #9B9B9B;
      letter-spacing: 0;
      line-height: 20px;
      &.small-font-price-10{
        margin-left:-2px;
      }
    }
  }
}
.small-font-price-12{
  font-size: 12px;
}
.small-font-price-10{
  font-size: 12px !important;
  transform: scale(0.83);
  transform-origin: left bottom;
}

.margin-price{
  margin-left: 8px;
  margin-bottom: -2px;
}

</style>