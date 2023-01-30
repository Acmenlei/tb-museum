<script setup lang="ts">
import { RouterLink } from "vue-router";
import { NavData } from "@/utils/nav";
</script>

<template>
  <div id="header" class="font-13 flex" data-aos="zoom-in">
    <RouterLink :to="nav.path" v-for="nav in NavData">
      {{ nav.name }}
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
#header {
  padding: 0 20px;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  max-width: 1000px;
  justify-content: space-between;

  a {
    color: var(--vt-c-white-mute);
    text-decoration: none;

    &:hover {
      color: rgb(255, 255, 255);
    }
  }
}
</style>
