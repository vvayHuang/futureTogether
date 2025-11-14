import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('../views/AboutUsView.vue'),
      meta: { title: '背景說明' },
    },
    {
      path: '/aboutbook',
      name: 'aboutbook',
      component: () => import('../views/AboutBookView.vue'),
      meta: { title: '有關書' },
    },
    {
      path: '/research',
      name: 'research',
      component: () => import('../views/ResearchView.vue'),
      meta: { title: '延伸閱讀' },
      children: [
        {
          path: 'the-evidence',
          name: 'the-evidence',
          component: () => import('../views/TheEvidenceView.vue'),
          meta: { title: '三十年科技與社會因素的交互影響' },
        },
        {
          path: 'collaborative-review-docs',
          name: 'collaborative-review-docs',
          component: () => import('../views/CollaborativeReviewDocsView.vue'),
          meta: { title: '全書十三章補充' },
        },
      ],
    },
    {
      path: '/resource',
      name: 'resource',
      component: () => import('../views/ResourceView.vue'),
      meta: { title: '資源連結' },
    },
    {
      path: '/takeaction',
      name: 'takeaction',
      component: () => import('../views/TakeActionView.vue'),
      meta: { title: '採取行動' },
    },
    {
      path: '/phonefreeschool',
      name: 'phonefreeschool',
      component: () => import('../views/PhoneFreeSchoolView.vue'),
      meta: { title: '加入無手機校園方案' },
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
// 網頁頁籤上面會顯示官方名及當下的頁面名稱
router.beforeEach((to) => {
  document.title =
    to.meta.title !== undefined
      ? `${to.meta.title} - Future Together 我們一起行動`
      : `Future Together 我們一起行動`
})

export default router
