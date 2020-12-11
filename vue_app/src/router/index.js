import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/second',
    name: 'second',
    component: () => import(/* webpackChunkName: "about" */ '../components/second.vue')
  },
  {
    path: '/third',
    name: 'third',
    component: () => import(/* webpackChunkName: "about" */ '../components/third.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
