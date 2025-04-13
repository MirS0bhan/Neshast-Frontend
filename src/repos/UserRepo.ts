// src/repositories/UserRepo.ts
import { Configuration, UserME, UsersApi } from '@/api'

import { useUserStore } from '@/stores/user'

import {config, apiInstance} from '@/plugins/axios'

const userApi = new UsersApi(config, config.basePath, apiInstance)



export default {

  async getMe() {
    const userStore = useUserStore()

    const userData = userStore.user
    console.log(userData)
    console.log("get me")

    if( userData !== null) {
      return userData
    } else {
      const response = await userApi.usersMeList()
      userStore.user = response.data
      return response.data
    }
  },

  async getUserTickets() {
    return await userApi.usersTicketsList()
  }
}
