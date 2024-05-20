<script setup lang="ts">
import { login } from '@/composables/authActions'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import router from '@/router'

const authStore = useAuthStore()
const email = ref('')
const password = ref('')

const loginUser = async () => {
  try {
    const body = {
      email: email.value,
      password: password.value
    }
    const data = await login(body)
    console.log(data)
    if (!data) throw new Error('Failed to login')
    authStore.setLoginData(data.user)
    authStore.setToken(data.token)
    router.push({ path: '/recipes' })
    console.log(data.user)
  } catch (err) {
    console.log(err)
  } finally {
    email.value = ''
    password.value = ''
  }
}
</script>
<template>
  <div class="container mx-auto">
    <div class="px-2 mt-20">
      <form class="border p-10 rounded-md">
        <h2 class="font-bold text-3xl mb-10 text-center">Login</h2>
        <div class="flex flex-col gap-6 content-center items-center">
          <div class="flex flex-col gap-2">
            <label for="email-signup">Email</label>
            <input v-model="email" id="email-signup" type="email" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password-signup">Password</label>
            <input v-model="password" id="password-signup" type="password" />
          </div>
        </div>
        <div class="text-center">
          <button @click.prevent="loginUser">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
button {
  @apply rounded-full bg-lime-500 text-neutral-900 mt-10 px-10 py-3 font-bold text-lg;
}
input {
  @apply rounded-md p-2 text-black w-80 md:w-96;
}
</style>
