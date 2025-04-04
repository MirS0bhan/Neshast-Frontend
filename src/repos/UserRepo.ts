// src/repositories/UserRepo.ts
import api from '@/plugins/axios'

export default {
  async getAll() {
    const { data } = await api.get('/users')
    return data
  },

  async getById(id: string | number) {
    const { data } = await api.get(`/users/${id}`)
    return data
  },

  async create(payload: any) {
    const { data } = await api.post('/users', payload)
    return data
  },

  async update(id: string | number, payload: any) {
    const { data } = await api.put(`/users/${id}`, payload)
    return data
  },

  async delete(id: string | number) {
    const { data } = await api.delete(`/users/${id}`)
    return data
  },
}
