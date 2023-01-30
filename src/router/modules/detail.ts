import Layout from "@/layout/main/Main.vue";

export default {
  name: "detail",
  path: "/detail",
  component: Layout,
  children: [
    {
      path: "/detail",
      name: "detailPage",
      component: () => import("@/views/detail/DetailView.vue"),
    },
  ],
};
