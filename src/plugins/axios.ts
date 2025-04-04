// src/plugins/axios.ts
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.neshast.net',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 🔐 Add auth token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || ''
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// ⚠️ Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status

    if (status === 401) {
      // Handle unauthorized (e.g., redirect to login)
      console.warn('Unauthorized, redirecting to login...')
    } else if (status >= 500) {
      console.error('Server error:', error.message)
    }

    return Promise.reject(error)
  }
)

export default api
