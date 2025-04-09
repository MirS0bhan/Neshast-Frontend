// src/repositories/AuthRepo.ts
import api from '@/plugins/axios'

const TOKEN_KEY = 'token' 

export default {
  async login(payload: { email: string; password: string }) {
    const { data } = await api.post('/auth/login', payload)
    if (data.token) {
      localStorage.setItem(TOKEN_KEY, data.token)
    }
    return data
  },

  async register(payload: { name: string; email: string; password: string }) {
    const { data } = await api.post('/auth/register', payload)
    return data
  },

  async logout() {
    try {
      await api.post('/auth/logout')
    } catch (e) {
      console.warn('Server-side logout failed:', e)
    } finally {
      localStorage.removeItem(TOKEN_KEY)
    }
  },

  getToken() {
    return localStorage.getItem(TOKEN_KEY)
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_KEY)
  },
}
