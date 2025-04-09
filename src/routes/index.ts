import HomePage from '@/pages/HomePage.vue'

import AboutPage from '@/pages/AboutPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '@/pages/AuthPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/auth/login', component: AuthPage },
  { path: '/auth/signup', component: AuthPage },
  { path: '/about', component: AboutPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
