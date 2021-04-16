import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@layouts/layout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "catalog",
        alias: "/catalog",
        component: () => import("@views/catalog.vue"),
      }
    ],
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
