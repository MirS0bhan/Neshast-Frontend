import type {TokenObtainPair, UserRegistration} from '@/api'

import {
  Configuration,
  UsersApi, // or AuthApi, depending on your codegen
} from '@/api'
import apiInstance from '@/plugins/axios'

const config = new Configuration()
const usersApi = new UsersApi(config, config.basePath, apiInstance)

export const AuthRepo = {
  signup: async (payload: UserRegistration) => {
    const response = await usersApi.usersRegisterCreate(payload)
    return response.data
  },

  verify: async (code: string) => {
    const response = await usersApi.usersEmailVerifyRead(code)
    if(response.status === 200){
      console.log("user has verified")
      return true;
    }

  },

  login: async (body: TokenObtainPair) => {
    const response = await usersApi.usersAuthTokenCreate(body)
    const tokens = response.data
    // Save tokens to localStorage or pinia store here if you want
    return tokens
  },

  // refresh: async (refreshToken: string) => {
  //   const response = await usersApi.({
  //     tokenRefreshRequest: { refresh: refreshToken }
  //   })
  //   return response.data
  // },

  logout: () => {
    // Just clear storage, no API call needed
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }
}
