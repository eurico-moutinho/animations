import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/rating5star',
      name: 'rating5star',
      component: () => import('../views/Rating5star/Rating5star.vue')
    },
    {
      path: '/light-shadow',
      name: 'light-shadow',
      component: () => import('../views/LightShadow/LightShadow.vue')
    },
    {
      path: '/switch',
      name: 'switch',
      component: () => import('../views/Switch/Switch.vue')
    },
    {
      path: '/glassmorphism',
      name: 'glassmorphism',
      component: () => import('../views/Glassmorphism/Glassmorphism.vue')
    }
  ]
})

export default router
