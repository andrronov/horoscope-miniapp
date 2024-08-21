import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
   {
      path: '/',
      name: 'main',
      component: () => import('../pages/mainPage.vue')
   },
   {
      path: '/horoscope',
      component: () => import('../pages/horoscopePage.vue')
   },
   {
      path: '/error',
      component: () => import('../pages/errorPage.vue')
   }
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})

export default router;