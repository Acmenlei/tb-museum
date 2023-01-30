import Layout from "@/layout/main/Main.vue";

export default {
  name: "profile",
  path: "/profile",
  component: Layout,
  children: [
    {
      path: "/profile",
      name: "profilePage",
      component: () => import("@/views/profile/ProfileView.vue"),
    },
  ],
};
