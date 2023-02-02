<script setup lang="ts">

</script>

<template>
  <div id="search" class="flex">
    <div class="search-frame flex">
      <input autofocus type="text" placeholder="搜索内容" class="search-input font-16" />
      <div class="search-btn pointer" @click="$router.push('/catalog')">
        <icon-search :style="{ padding: '10px 10px 15px 12px',fontSize: '50px' }"/>
      </div>       
    </div>
    <!-- 背景图 -->
    <div class="bg"></div>
    <div class="bg-img flex">
      <img src="@/assets/img/图层 1.jpg" alt="">
      <img src="@/assets/img/图层 2.jpg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
$--search-blur: #f8f8f8;

#search {
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  min-height: calc(100vh - 40px);

  .search-frame {
    height: 45px;

    .search-input {
      border: 1.5px solid $--search-blur;
      border-right: none;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      text-indent: 0.5em;
      height: 100%;
      min-width: 400px;
      background: transparent;
      color: $--search-blur;
      &::placeholder {
        text-align: center;
      }
    }
    .search-btn {
      width: 50px;
      text-align: center;
      height: 45px;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border: 1.5px solid $--search-blur;
      border-left: none;
      color: $--search-blur;
      line-height: 45px;
    }
  }

  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .bg {
    opacity: .8;
    z-index: -1;
    background: linear-gradient(to bottom, #000 60%, #f8f8f8);
  }
  .bg-img {
    position: absolute;
    z-index: -2;
    img {
      width: 50%;
    }
  }
}
</style>
