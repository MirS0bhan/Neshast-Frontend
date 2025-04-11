// src/plugins/axios.ts
import axios from 'axios'

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.neshast.net',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 🔐 Add auth token if available
apiInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || ''
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// ⚠️ Handle errors globally
apiInstance.interceptors.response.use(
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

export default apiInstance
