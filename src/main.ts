import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

const app = createApp(App);

app.use(createPinia()).use(router).use(ArcoVueIcon).mount("#app");
