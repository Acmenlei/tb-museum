<script setup lang="ts"></script>

<template>
  <div id="search" class="flex">
    <div class="search-logo mb-20 flex font-16">
      <span>台北</span>
      <img src="@/assets/logo.jpg" alt="" />
      <span>博物馆</span>
    </div>
    <div class="search-frame flex">
      <input type="text" class="search-input font-16" />
      <div class="search-btn pointer">搜索陶瓷</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$--search-blur: gray;

#search {
  justify-content: center;
  align-items: center;
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

      &:focus {
        border: 1.5px solid var(--museum-primary);
        border-right: none;
      }
    }

    .search-btn {
      font-weight: bold;
      height: 100%;
      padding: 0 20px;
      line-height: 45px;
      background: var(--museum-primary);
      color: white;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      white-space: nowrap;
    }
  }

  .search-logo {
    justify-content: space-around;
    align-items: center;

    img {
      margin: 0 10px;
      width: 100px;
    }

    span {
      font-weight: bold;
      font-size: 40px;
    }
  }
}
</style>
