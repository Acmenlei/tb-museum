<script setup lang="ts">
import Banner from "./components/Banner.vue"
import Info from "./components/Info.vue"
import News from "./components/News.vue"
</script>

<template>
  <div id="home">
    <Banner/>
    <hr />
    <Info/>
    <News/>
  </div>
</template>

<style lang="scss" scoped>
#home {
  min-height: calc(100vh - 40px);
}
</style>
