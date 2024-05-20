import type { User } from '@/common/types'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    isLoggedIn: false as Boolean,
    token: '' as string,
    user: null as User | null
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setLoginData(user: User) {
      this.isLoggedIn = true
      this.user = user
    },
    logout() {
      this.isLoggedIn = false
      this.token = ''
    }
  }
})
