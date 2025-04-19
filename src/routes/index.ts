import HomePage from '@/pages/HomePage.vue'

import AboutPage from '@/pages/AboutPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '@/pages/AuthPage.vue'
import Page404 from '@/pages/404Page.vue'
import EventsIndexPage from '@/pages/EventsIndexPage.vue'
import VerifyPage from '@/pages/VerifyPage.vue'
import UserDashboardPage from '@/pages/UserDashboardPage.vue'
import OrganizationDashboard from '@/pages/OrganizationDashboard.vue'
import NewOrganizationPage from '@/pages/NewOrganizationPage.vue'
import NewEventPage from '@/pages/NewEventPage.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/events', component: EventsIndexPage },
  { path: '/events/new', component: NewEventPage },

  { path: '/auth/login', component: AuthPage },
  { path: '/auth/signup', component: AuthPage },
  { path: '/auth/verify', component: VerifyPage },

  { path: '/dashboard', component: UserDashboardPage },
  { path: '/dashboard/organization/:id', component: OrganizationDashboard },
  { path: '/dashboard/organization/new', component: NewOrganizationPage },

  { path: '/about', component: AboutPage },
  { path: '/:pathMatch(.*)*', component: Page404 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
