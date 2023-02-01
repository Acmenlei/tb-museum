<script setup lang='ts'>
defineProps<{ title: string; }>()
</script>

<template>
<div class="card-container">
  <div class="card-top mb-20 flex">
    <span class="title font-13">{{  title  }}</span>
    <span class="more pointer hover">【查看更多】</span>
  </div>
  <slot></slot>
</div>
</template>

<style lang='scss' scoped>
.card-container {
  padding: 0 20px;
  margin: 20px 0;
  .card-top {
    justify-content: space-between;
    align-items: center;
    .more {
      font-size: 18px;
      color: #1b6f4b;
    }
  }
}
</style>