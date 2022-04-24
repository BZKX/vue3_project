<template>
  <swiper
    class="left-container"
    slides-per-view="auto"
    initial-slide="1"
    resistance-ratio="0"
    @slideChangeTransitionStart="slideChangeStart"
    @dlideChangeTransitionEnd="slideChangeEnd"
    @swiper="onSwiper"
  >
    <swiper-slide class="menu">
      <EditList class="swiper-no-swiping"></EditList>
    </swiper-slide>
    <swiper-slide class="main-container">
      <!-- 按钮 -->
      <div :class="['menu-button',iconClose?'cross':'']" @click="openMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
        <div
          class="goods-container"
          :style="{
            'grid-column-gap':itemConfig.space/50+'rem',
          }"
        >
          <GoodsCard v-for="(item,index) in goodsList"
                     :key="index"
                     :goodsItem="item"
                     :goodsConfig="itemConfig"
          ></GoodsCard>
        </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import GoodsCard from '@/components/GoodsCard/index.vue';
import EditList from '@/components/GoodsCard/editList.vue';
import {reactive, ref} from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import {goodsStore} from "@/stores/goods";

const goodsList = reactive([
  {
    tag:'标签',
    title:'此处显示知识',
    description:'此处显示知识商品',
    price:9900,
    linePrice:1234,
  },
  {
    tag:'标签2',
    title:'此处显示知识商品名称，最多两行此处显示知识商品名称，最多两行',
    description:'此处显示知识商品述此处显示知识商品述',
    price:9990,
    linePrice:99999999,
  },
  {
    tag:'长标签哦',
    title:'此处显示知识商品名称，最多两行此处显示知识商品名称，最多两行',
    description:'此处显示知识商品述此处显示知识商品述',
    price:99999999,
    linePrice:99999999,
  },
  {
    tag:'服务类商品',
    title:'此处显示知识商品名称，最多两行此处显示知识商品名称，最多两行',
    description:'此处显示知识商品述此处显示知识商品述',
    price:9999,
    linePrice:102410,
  },
  {
    tag:'标签',
    title:'此处显示知识商品名称，最多两行',
    description:'此处显示知识商品',
    price:9900,
    linePrice:1234,
  },
  {
    tag:'标签2',
    title:'此处显示知识商品名称，最多两行此处显示知识商品名称，最多两行',
    description:'此处显示知识商品述此处显示知识商品述',
    price:9990,
    linePrice:99999999,
  },
  {
    tag:'标签',
    title:'此处显示知识商品名称，最多两行',
    description:'此处显示知识商品',
    price:9900,
    linePrice:1234,
  },
  {
    tag:'标签2',
    title:'此处显示知识商品名称，最多两行此处显示知识商品名称，最多两行',
    description:'此处显示知识商品述此处显示知识商品述',
    price:9990,
    linePrice:99999999,
  }
])
const itemConfig = goodsStore()

let useSwiper: { slideTo: (arg0: number) => void; };
let iconClose = ref(false);
const onSwiper = (swiper) => {
  useSwiper = swiper;
}
const openMenu = (e) =>{
  if (iconClose.value){
    useSwiper.slideTo(1)
  }else{
    useSwiper.slideTo(0)
  }
}
const slideChangeStart = (swiper)=>{
  iconClose.value = swiper.activeIndex === 0;
}
const slideChangeEnd = () =>{
  console.log('slideChangeEnd')
}
</script>

<style lang="scss" scoped>
.left-container{
  width: 100%;
  position: relative;
  border-radius: 8px;
  border: 1px solid #DCDEE0;
  overflow-y: auto;
  box-sizing: border-box;
}
.main-container{
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: center;
  position: relative;
}
.goods-container{
  width: 7.5rem;
  height: 100%;
  padding:.28rem;
  box-sizing: border-box;
  background-color: #DCDEE0;
  display: grid;
  grid-row-gap:.28rem;
  grid-column-gap: .28rem;
  justify-content: center;
  justify-items: stretch;
  align-items: stretch;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: max-content;
}


.menu {
  min-width: 100px;
  width: 70%;
  max-width: 320px;
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  border-right: 1px #DCDEE0 solid;
  overflow-y: auto;
}

.content {
  width: 100%;
}

.menu-button {
  position: absolute;
  z-index: 999;
  top: 0px;
  left: 0px;
  padding: 15px;
  cursor: pointer;
  transition: 0.3s;
  background-color: #DCDEE0;
  .bar {
    position: relative;
    display: block;
    width: 50px;
    height: 5px;
    margin: 10px auto;
    background-color: #fff;
    border-radius: 10px;
    transition: 0.3s;

    &:nth-of-type(1){
      margin-top: 0;
    }

    &:nth-of-type(3){
      margin-bottom: 0;
    }

  }

  &:hover .bar{
    &:nth-of-type(1){
      transform: translateY(1.5px) rotate(-4.5deg);
    }
    &:nth-of-type(2){
      opacity: .9;
    }
    &:nth-of-type(3){
      transform: translateY(-1.5px) rotate(4.5deg);
    }
  }

  &.cross{
    .bar{
      &:nth-of-type(1){
        transform: translateY(15px) rotate(-45deg);
      }
      &:nth-of-type(2){
        opacity: 0;
      }
      &:nth-of-type(3){
        transform: translateY(-15px) rotate(45deg);
      }
    }

    &:hover{
      .bar {
        &:nth-of-type(1) {
          transform: translateY(13.5px) rotate(-40.5deg);
        }

        &:nth-of-type(2) {
          opacity: .1;
        }

        &:nth-of-type(3) {
          transform: translateY(-15px) rotate(45deg);
        }
      }
    }
  }
}
</style>