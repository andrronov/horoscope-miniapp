import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/main",
    name: "main",
    component: () => import("../pages/mainPage.vue"),
  },
  {
    path: "/horoscope",
    name: "horoscope",
    component: () => import("../pages/horoscopePage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/errorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
