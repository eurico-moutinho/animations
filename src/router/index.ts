import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/direction-button',
      name: 'direction-button',
      component: () => import('../views/DirectionButton/DirectionButton.vue')
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: () => import('../views/Navigation/Navigation.vue')
    }
  ]
})

router.onError((error, to) => {

  if (error.message.includes('Failed to fetch dynamically imported module')) {

    window.location.href = to.fullPath;
  }
})

export default router
