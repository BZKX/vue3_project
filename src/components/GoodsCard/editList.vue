<template>
<div class="edit-container">
  <el-collapse v-model="collapseList">
    <el-collapse-item name="1" title="内容展示">
      <div class="edit-item">
        <el-divider content-position="left">
          <span class="divider-text">商品名称</span>
        </el-divider>
        <div class="edit-item-content">
          <div class="edit-item-title">
            {{titleShow?'显示':'隐藏'}}
          </div>
          <el-switch
            v-model="titleShow"
            class="ml-2"
            active-color="#00bd7e"
            inactive-color="#dcdee0"
          />
        </div>
        <div v-if="titleShow" class="edit-item-content sec-content">
          <div class="edit-item-title">
            显示行数
          </div>
          <el-radio-group v-model="titleShowRow">
            <el-radio :label="1">一行</el-radio>
            <el-radio :label="2">两行</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="edit-item">
        <el-divider content-position="left">
          <span class="divider-text">商品描述</span>
        </el-divider>
        <div class="edit-item-content">
          <div class="edit-item-title">
            {{descriptionShow?'显示':'隐藏'}}
          </div>
          <el-switch
            v-model="descriptionShow"
            class="ml-2"
            active-color="#00bd7e"
            inactive-color="#dcdee0"
          />
        </div>
        <div v-if="descriptionShow" class="edit-item-content sec-content">
          <div class="edit-item-title">
            显示行数
          </div>
          <el-radio-group v-model="descriptionShowRow">
            <el-radio :label="1">一行</el-radio>
            <el-radio :label="2">两行</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="edit-item">
        <el-divider content-position="left">
          <span class="divider-text">商品价格</span>
        </el-divider>
        <div class="edit-item-content">
          <div class="edit-item-title">
            {{priceShow?'显示':'隐藏'}}
          </div>
          <el-switch
            v-model="priceShow"
            class="ml-2"
            active-color="#00bd7e"
            inactive-color="#dcdee0"
          />
        </div>
      </div>
      <div class="edit-item">
        <el-divider content-position="left">
          <span class="divider-text">划线价格</span>
        </el-divider>
        <div class="edit-item-content">
          <div class="edit-item-title">
            {{linePriceShow?'显示':'隐藏'}}
          </div>
          <el-switch
            v-model="linePriceShow"
            class="ml-2"
            active-color="#00bd7e"
            inactive-color="#dcdee0"
          />
        </div>
      </div>
      <div class="edit-item">
        <el-divider content-position="left">
          <span class="divider-text">商品角标</span>
        </el-divider>
        <div class="edit-item-content">
          <div class="edit-item-title">
            {{goodsTagShow?'显示':'隐藏'}}
          </div>
          <el-switch
            v-model="goodsTagShow"
            class="ml-2"
            active-color="#00bd7e"
            inactive-color="#dcdee0"
          />
        </div>
      </div>
      <div class="edit-item">
        <el-divider content-position="left">
          <span class="divider-text">活动角标</span>
        </el-divider>
        <div class="edit-item-content">
          <div class="edit-item-title">
            {{marketTagShow?'显示':'隐藏'}}
          </div>
          <el-switch
            v-model="marketTagShow"
            class="ml-2"
            active-color="#00bd7e"
            inactive-color="#dcdee0"
          />
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
  <el-collapse v-model="collapseList">
    <el-collapse-item name="2" title="内容样式">
      <div class="edit-item">
        <el-divider content-position="left">
          <span class="divider-text">商品间距</span>
        </el-divider>
        <el-slider v-model="space" :max="36"/>
      </div>
      <div class="edit-item">
        <el-divider content-position="left">
          <span class="divider-text">边角样式</span>
        </el-divider>
        <div class="edit-item-content right-flex">
          <el-radio-group v-model="cornerStyle">
            <el-radio :label="1">直角</el-radio>
            <el-radio :label="2">圆角</el-radio>
          </el-radio-group>
        </div>
        <div v-show="cornerStyle===2" class="edit-item-content sec-content">
          <el-slider v-model="cornerRadius" :max="30"/>
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</div>
</template>

<script setup lang="ts">
import {goodsStore} from "@/stores/goods";
import {ref, watch} from "vue";
import {storeToRefs} from "pinia";

const goods = goodsStore()
// store数据转refs
let {
  space,
  titleShow,
  titleShowRow,
  descriptionShow,
  descriptionShowRow,
  priceShow,
  linePriceShow,
  goodsTagShow,
  marketTagShow,
  cornerStyle,
  cornerRadius,
} = storeToRefs(goods)

// 标题显示--重制显示行数
watch(titleShow,(val)=>{
  if(val){
    titleShowRow.value = 2
  }
})
// 描述显示--重制显示行数
watch(descriptionShow,(val)=>{
  if(val){
    descriptionShowRow.value = 1
  }
})
// 圆角可配置圆角弧度
watch(cornerStyle,(val)=>{
  if(val === 2){
    cornerRadius.value = 8
  }
})

const collapseList = ref(['1','2'])

</script>

<style lang="scss" scoped>
.edit-container{
  width: 100%;
  display: flex;
  flex-direction: column;

  .edit-item-content{
    box-sizing: border-box;
    font-size: .28rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &.sec-content{
      color: #787878;
    }
    &.right-flex{
      flex-direction: row-reverse;
    }
  }
}
.divider-text{
  color: #787878;
}
.el-slider{
  --el-slider-main-bg-color: hsla(160, 100%, 37%, 1);
}
</style>