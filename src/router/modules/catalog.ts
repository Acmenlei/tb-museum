import Layout from "@/layout/main/Main.vue";

export default {
  name: "catalog",
  path: "/catalog",
  component: Layout,
  children: [
    {
      path: "/catalog",
      name: "catalogPage",
      component: () => import("@/views/catalog/CatalogView.vue"),
    },
  ],
};
