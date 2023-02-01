import Layout from "@/layout/main/Main.vue";

export default {
  name: "collection",
  path: "/collection",
  component: Layout,
  children: [
    {
      path: "/collection",
      name: "collectionPage",
      component: () => import("@/views/collection/CollectionView.vue"),
    },
  ],
};
