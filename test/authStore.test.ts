import { useAuthStore } from '../src/stores/authStore'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

describe('authStore', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })
  it('log out the user', () => {
    const authStore = useAuthStore()
    authStore.logout()
    expect(authStore.isLoggedIn && authStore.token).toBe(false)
  })
})
