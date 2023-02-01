import Layout from "@/layout/main/Main.vue";

export default {
  name: "information",
  path: "/information",
  component: Layout,
  children: [
    {
      path: "/information",
      name: "informationPage",
      component: () => import("@/views/information/InformationView.vue"),
    },
  ],
};
