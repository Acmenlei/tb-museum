<script setup lang='ts'>

</script>

<template>
  <div class="carousel-container">
    <a-carousel :style="{
      width: '1000px',
      paddingTop: '20px',
      height: '500px',
    }" :auto-play="true" indicator-type="dot" show-arrow="never">
      <a-carousel-item>
        <img src="@/assets/img/图层 1.jpg" :style="{ width: '40%', marginLeft: '20px' }" />
        <img src="@/assets/img/图层 2.jpg" :style="{ width: '40%', marginLeft: '150px' }" />
      </a-carousel-item>
      <a-carousel-item>
        <img src="@/assets/img/图层 1.jpg" :style="{ width: '40%', marginLeft: '20px' }" />
        <img src="@/assets/img/图层 2.jpg" :style="{ width: '40%', marginLeft: '150px' }" />
      </a-carousel-item>
    </a-carousel>
  </div>
</template>

<style lang='scss' scoped>
  .carousel-container {
    background: linear-gradient(to bottom, #000 40%, #fff);
  }
</style>