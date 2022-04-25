<template>
  <div class="header-container">
    <div class="header-title">{{props.title}}</div>
    <div class="more-container-default" v-if="moreStyle && moreIconShow">
      <span class="more-title">{{ moreTitle }}</span>
      <div class="more-icon" v-if="moreIconShow">
        <el-icon><arrow-right-bold /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ArrowRightBold} from '@element-plus/icons-vue'

const props = withDefaults(defineProps<{
  title?:string,  // 标题
  moreTitleShow?:boolean, // 查看更多是否显示
  moreTitle?:string, // 查看更多文案
  moreIconShow?:boolean, // 查看更多图标是否显示
  moreStyle?:number, // 查看更多样式 1:默认样式 2:自定义图片样式
}>(),{
  title:'默认标题',
  moreTitleShow:true,
  moreStyle:1,
  moreIconShow:true,
  moreTitle:'查看更多',
})

</script>

<style lang="scss" scoped>
.header-container{
  width: 100%;
  box-sizing: border-box;
  padding: .24rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;


  .header-title{
    color: #333333;
    font-weight: 500;
    font-size: .36rem;
    display: flex;
    font-family: PingFangSC-Medium;
  }
  .more-container-default{
    font-family: PingFangSC-Regular;
    font-weight: 400;
    font-size: .24rem;
    color: #9B9B9B;
    display: flex;
    flex-direction: row;
    align-items: center;
    .more-icon{
      font-size: .24rem !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>