<script setup lang="ts">
import { useTab, useCatalogDetail } from "./hook";
import { ConditionsNames } from "./constant";

const { tabIdx, tabChange } = useTab();
const { catalogClick } = useCatalogDetail();
</script>

<template>
  <div id="catalog" class="mt-20">
    <ul class="filter-conditions" data-aos="zoom-in">
      <li
        v-for="(conditionName, idx) in ConditionsNames"
        :class="['ml-20', 'pointer', 'hover', { checked: tabIdx === idx }]"
        @click="tabChange(idx)"
      >
        {{ conditionName }}
      </li>
    </ul>
    <ul class="filter-result mt-20">
      <li v-for="_ in 9" data-aos="zoom-in" @click="catalogClick(_)">
        <a-card
          class="pointer"
          :style="{
            minWidth: '300px',
            borderColor: 'black',
            borderRadius: '5px',
          }"
        >
          <template #cover>
            <div :style="{ height: '204px', overflow: 'hidden' }">
              <img
                :style="{ width: '100%', transform: 'translateY(-20px)' }"
                alt="dessert"
                src="@/assets/img/tb.jpg"
              />
            </div>
          </template>
          <a-card-meta title="瓷胎画珐琅红地花卉杯">
            <template #description> 清 珐琅彩 瓷胎画珐琅红地花卉杯 </template>
          </a-card-meta>
        </a-card>
      </li>
    </ul>
    <a-pagination
      :total="50"
      class="mt-20"
      :page-item-style="{ color: '#f8f8f8', background: 'transparent' }"
      :active-page-item-style="{
        color: 'var(--museum-primary)',
        background: 'transparent',
        fontWeight: 'bold',
      }"
    />
  </div>
</template>

<style lang="scss" scoped>
#catalog {
  .filter-conditions {
    display: flex;

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
