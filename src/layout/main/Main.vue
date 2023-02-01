<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "../header/Header.vue";
import Footer from "../footer/Footer.vue";
</script>

<template>
  <Header />
  <div id="main">
    <RouterView />
  </div>
  <Footer />
</template>

<style lang="scss">
#main {
  margin: 0 auto;
  max-width: 1000px;
  min-height: calc(100vh - 40px);
}
</style>
