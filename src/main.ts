import './assets/main.css'

import { createApp } from 'vue'

import router from '@/routes/index.ts'
import { createPinia } from 'pinia'


const pinia = createPinia()

import App from './App.vue'
createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')
