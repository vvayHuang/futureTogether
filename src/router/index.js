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
    {
      path: '/research',
      name: 'research',
      component: () => import('../views/ResearchView.vue'),
    },
    {
      path: '/resource',
      name: 'resource',
      component: () => import('../views/ResourceView.vue'),
    },
    {
      path: '/takeaction',
      name: 'takeaction',
      component: () => import('../views/TakeActionView.vue'),
    },
    {
      path: '/phonefreeschool',
      name: 'phonefreeschool',
      component: () => import('../views/PhoneFreeSchoolView.vue'),
    },
  ],
  //點選連結時，可以保持原本的位置在畫面上的頂部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
