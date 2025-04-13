import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserME } from '@/api'

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)
  const accessToken = ref<string | null>(null)
  const user = ref<UserME | null>(null)

  function setToken(token: string) {
    accessToken.value = token
    localStorage.setItem('accessToken', token)
    isLoggedIn.value = true
  }

  function loadFromStorage() {
    const token = localStorage.getItem('accessToken')
    if (token) {
      accessToken.value = token
      isLoggedIn.value = true
    }
  }

  function logout() {
    accessToken.value = null
    user.value = null
    isLoggedIn.value = false
    localStorage.removeItem('accessToken')
  }

  return {
    isLoggedIn,
    accessToken,
    user,
    setToken,
    loadFromStorage,
    logout,
  }
})
