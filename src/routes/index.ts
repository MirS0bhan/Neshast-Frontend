import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/Auth/LoginPage.vue'

import SignupPage from '@/pages/Auth/SignupPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: HomePage },
  { path: '/auth/login', component: LoginPage },
  { path: '/auth/signup', component: SignupPage },
  { path: '/about', component: AboutPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
