<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <span>Use </span>
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a> +
      <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  top: -10px;
}

h3 {
  font-size: .48rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
