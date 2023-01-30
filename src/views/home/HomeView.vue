<script setup lang="ts"></script>

<template>
  <div id="home" data-aos="zoom-out">
    <button
      class="go pt-10 pb-10 pr-20 pl-20 hover"
      @click="$router.push('/catalog')"
    >
      进入台北博物馆~
    </button>
  </div>
</template>

<style lang="scss" scoped>
#home {
  min-height: calc(100vh - 40px);

  .go {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--museum-primary);
    border-radius: 8px;
    width: 150px;
    height: 50px;
    color: white;
  }
}
</style>
