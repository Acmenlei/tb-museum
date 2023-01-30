<script setup lang="ts">
import { RouterView } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";

onMounted(() => AOS.init());
</script>

<template>
  <RouterView />
</template>
