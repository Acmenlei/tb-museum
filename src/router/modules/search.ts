import Layout from "@/layout/main/Main.vue";

export default {
  name: "search",
  path: "/search",
  component: Layout,
  children: [
    {
      path: "/search",
      name: "searchPage",
      component: () => import("@/views/search/SearchView.vue"),
    },
  ],
};
