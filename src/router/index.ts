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
        name: "agents",
        alias: "/agents",
        component: () => import("@views/pages/agents.vue"),
      },
      {
        path: "/",
        name: "objects",
        alias: "/objects",
        component: () => import("@views/pages/objects.vue"),
      },
      {
        path: "/",
        name: "meters_data",
        alias: "/meters_data",
        component: () => import("@views/pages/meters_data.vue"),
      },
      {
        path: "/",
        name: "bills",
        alias: "/bills",
        component: () => import("@views/pages/bills.vue"),
      },
      {
        path: "/",
        name: "suppliers",
        alias: "/suppliers",
        component: () => import("@views/pages/suppliers.vue"),
      },
      {
        path: "/",
        name: "payments",
        alias: "/payments",
        component: () => import("@views/pages/payments.vue"),
      },
      {
        path: "/",
        name: "documentation",
        alias: "/documentation",
        component: () => import("@views/pages/documentation.vue"),
      },
      {
        path: "/",
        name: "reports",
        alias: "/reports",
        component: () => import("@views/pages/reports.vue"),
      },
      {
        path: "/",
        name: "reference_books",
        alias: "/reference_books",
        component: () => import("@views/pages/reference_books.vue"),
      },
      {
        path: "/",
        name: "customization",
        alias: "/customization",
        component: () => import("@views/pages/customization.vue"),
      },
    ],
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
