<script setup lang="ts">
import { useDynasty, useCatalogDetail, useStyles } from "./hook";
import { DynastyNames, StylesNames } from "./constant";

const { dynastyIdx, dynastyChange } = useDynasty();
const { styleIdx, styleChange } = useStyles();
const { catalogClick } = useCatalogDetail();
</script>

<template>
  <div id="catalog">
    <span data-aos="zoom-in">目录检索</span>
    <ul class="filter-conditions dynasty" data-aos="zoom-in">
      <li v-for="(dynasty, idx) in DynastyNames" :class="['ml-20', 'pointer', 'hover', { checked: dynastyIdx === idx }]"
        @click="dynastyChange(idx)">
        {{ dynasty }}
      </li>
    </ul>
    <ul class="filter-conditions styles" data-aos="zoom-in">
      <li v-for="(style, idx) in StylesNames" :class="['ml-20', 'pointer', 'hover', { checked: styleIdx === idx }]"
        @click="styleChange(idx)">
        {{ style }}
      </li>
    </ul>
    <ul class="filter-result mt-20">
      <li v-for="_ in 9" data-aos="zoom-in" @click="catalogClick(_)">
        <a-card class="pointer" :style="{
          minWidth: '300px',
          border: 'none',
          borderRadius: '5px',
        }">
          <template #cover>
            <div :style="{ height: '204px', overflow: 'hidden' }">
              <img :style="{ width: '100%', transform: 'translateY(-20px)' }" alt="dessert" src="@/assets/img/tb.jpg" />
            </div>
          </template>
          <a-card-meta title="瓷胎画珐琅红地花卉杯">
            <template #description> 清 珐琅彩 瓷胎画珐琅红地花卉杯 </template>
          </a-card-meta>
        </a-card>
      </li>
    </ul>
    <a-pagination :total="50" class="mt-20" :page-item-style="{ color: '#000', background: 'transparent' }"
      :active-page-item-style="{
        color: 'var(--museum-primary)',
        background: 'transparent',
        fontWeight: 'bold',
      }" />
  </div>
</template>

<style lang="scss" scoped>
#catalog {
  background: #999;
  padding: 20px;

  .filter-conditions {
    display: flex;
    margin-top: 10px;

    li {
      &:first-child {
        margin-left: 0;
      }
    }
  }

  .filter-result {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px;
  }

  .checked {
    font-weight: bold;
    color: var(--museum-primary);
    border-bottom: 1.5px solid var(--museum-primary);
  }
}
</style>
