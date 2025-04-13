import type { TokenObtainPair, UserRegistration } from '@/api'

import { Configuration, UsersApi, TokenRefresh } from '@/api'
import { config, apiInstance } from '@/plugins/axios'
import { useUserStore } from '@/stores/user'

const usersApi = new UsersApi(config, config.basePath, apiInstance)

export const AuthRepo = {
  signup: async (payload: UserRegistration) => {
    const response = await usersApi.usersRegisterCreate(payload)
    return response.data
  },

  verify: async (code: string) => {
    const response = await usersApi.usersEmailVerifyRead(code)
    if (response.status === 200) {
      console.log('user has verified')
      return true
    }
  },

  login: async (body: TokenObtainPair) => {
    const response = await usersApi.usersAuthTokenCreate(body)
    const tokens = response.data
    const userStore = useUserStore()
    userStore.setToken(tokens.access)
    return tokens
  },

  refresh: async (refreshToken: string) => {
    const tr : TokenRefresh = {
      refresh: refreshToken
    }
    const response = await usersApi.usersAuthTokenRefreshCreate(tr)
    const userStore = useUserStore()
    const tokens = response.data
    userStore.setToken(tokens.access)
    return
  },

  logout: () => {
    // Just clear storage, no API call needed
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  },
}
