import Layout from "@/layout/main/Main.vue";

export default {
  name: "home",
  path: "/home",
  component: Layout,
  children: [
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/home/HomeView.vue"),
    },
  ],
};
