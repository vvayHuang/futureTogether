import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('../views/AboutUsView.vue'),
    },
    {
      path: '/aboutbook',
      name: 'aboutbook',
      component: () => import('../views/AboutBookView.vue'),
    },
  ],
})

export default router
