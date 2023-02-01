import Layout from "@/layout/main/Main.vue";

export default {
  name: "academic",
  path: "/academic",
  component: Layout,
  children: [
    {
      path: "/academic",
      name: "academicPage",
      component: () => import("@/views/academic/AcademicView.vue"),
    },
  ],
};
