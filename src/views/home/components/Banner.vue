<script setup lang='ts'>

</script>

<template>
  <div class="carousel-container">
    <a-carousel :style="{
      width: '100%',
      height: '500px',
    }" :auto-play="true" indicator-type="dot" show-arrow="never">
      <a-carousel-item>
        <img src="@/assets/img/图层 1.jpg" :style="{ width: '50%' }" />
        <img src="@/assets/img/图层 2.jpg" :style="{ width: '50%' }" />
      </a-carousel-item>
      <a-carousel-item>
        <img src="@/assets/img/图层 1.jpg" :style="{ width: '50%' }" />
        <img src="@/assets/img/图层 2.jpg" :style="{ width: '50%' }" />
      </a-carousel-item>
    </a-carousel>
  </div>
</template>

<style lang='scss' scoped>
  .carousel-container {
    background: linear-gradient(to bottom, #000 40%, #fff);
  }
</style>