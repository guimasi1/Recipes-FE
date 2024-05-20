<script setup lang="ts">
import { signUp } from '@/composables/authActions'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const username = ref('')

const register = async () => {
  try {
    const body = {
      email: email.value,
      password: password.value,
      username: username.value
    }
    const registration = await signUp(body)
    if (!registration) throw new Error('Registration failed')
    console.log(registration)
  } catch (err) {
    console.log(err)
  } finally {
    email.value = ''
    password.value = ''
    username.value = ''
  }
}
</script>
<template>
  <div class="container mx-auto">
    <div class="px-2 mt-20">
      <form class="border p-10">
        <h2 class="font-bold text-3xl mb-10 text-center">Register</h2>

        <div class="flex flex-col gap-6 content-center items-center">
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-2">
              <label for="username-signup">Username</label>
              <input v-model="username" id="username-signup" type="text" />
            </div>
            <label for="email-signup">Email</label>
            <input v-model="email" id="email-signup" type="email" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password-signup">Password</label>
            <input v-model="password" id="password-signup" type="password" />
          </div>
        </div>
        <div class="text-center">
          <button @click.prevent="register">Sign up</button>
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
