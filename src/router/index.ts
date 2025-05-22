import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import App from '@/App.vue'
import PaginaDeProjetos from '@/components/views/PaginaDeProjetos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projetos/:id',
      name: 'pagina-de-projetos',
      component: () => import('../components/views/PaginaDeProjetos.vue'),
      props: true
    }
  ]
})

export default router
