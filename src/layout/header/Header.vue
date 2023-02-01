<script setup lang="ts">
import { RouterLink } from "vue-router";
import { NavData } from "@/utils/nav";
</script>

<template>
  <div id="header" class="flex font-13">
    <div class="logo">
      <img src="@/assets/img/logo.jpg" alt="">
    </div>
    <div class="nav flex" data-aos="zoom-in">
      <RouterLink :to="nav.path" v-for="nav in NavData">
        {{ nav.name }}
      </RouterLink>
    </div>
    <div class="language pointer hover">
      中文简体
    </div>
  </div>
</template>

<style lang="scss" scoped>
#header {
  padding: 0 20px;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  max-width: 1000px;
  background: #e6dbdb;
  justify-content: space-between;

  .logo {
    flex: 1;

    img {
      height: 40px;
    }
  }

  .nav {
    flex: 2;
    justify-content: space-around;

    a {
      color: #000;
      text-decoration: none;
      margin: 0 20px;

      &:hover {
        opacity: .7;
      }
    }
  }

  .language {
    flex: 1;
    color: #000;
    text-align: right;
  }
}
</style>
