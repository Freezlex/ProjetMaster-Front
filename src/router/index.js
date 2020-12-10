import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Results')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
