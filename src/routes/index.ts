import HomePage from '@/pages/HomePage.vue'

import AboutPage from '@/pages/AboutPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '@/pages/AuthPage.vue'
import Page404 from '@/pages/404Page.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import EventsIndexPage from '@/pages/EventsIndexPage.vue'
import VerifyPage from '@/pages/VerifyPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/events', component: EventsIndexPage },


  { path: '/auth/login', component: AuthPage },
  { path: '/auth/signup', component: AuthPage },
  { path: '/auth/verify', component: VerifyPage },

  { path: '/dashboard', component: DashboardPage },

  { path: '/about', component: AboutPage },
  { path: '/:pathMatch(.*)*', component: Page404 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
