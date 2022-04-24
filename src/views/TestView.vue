<template>
  <div class="about">
    <div class="copy-writing">
      <h1>Test</h1>
      <p>This is the test page</p>
    </div>
    <div class="test-box">
      <span class="market-tag">测试文案内容超出的效果测试文案内容超出的效果</span>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.about {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .copy-writing{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    justify-content: center;
    text-align: center;
  }
}
.test-box {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #333;
  display: inline-block;
  font-size: 14px;
  margin: 0 auto;
  text-align: center;
  width: 300px;
  height: 120px;
  border-radius: 120px;
  position: relative;
  .market-tag{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
