import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
   {
      path: '/main',
      name: 'main',
      component: () => import('../pages/mainPage.vue')
   },
   {
      path: '/horoscope',
      component: () => import('../pages/horoscopePage.vue')
   },
   {
      path: '/:pathMatch(.*)*',
      component: () => import('../pages/errorPage.vue')
   }
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})

export default router;