import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/pages/home/home.vue'
import BaseLayout from "../components/layouts/base-layout.vue";


const routes: Array<RouteRecordRaw> = [
  {
    name: "layout",
    path: "/",
    component: BaseLayout,
    children: [
      // {
      //   name:"home",
      //   path: "",
      //   component: Home
      // },
      // {
      //   name:"other",
      //   path: "other/:id?",
      //   component: () => import(/* webpackChunkName: "other" */ '../components/pages/other/other.vue')
      // }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
