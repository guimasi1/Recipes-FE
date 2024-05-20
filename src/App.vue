<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/authStore'
import { computed } from 'vue'
import router from './router'

const authStore = useAuthStore()
const loggedIn = computed(() => authStore.isLoggedIn)
const currentRouteName = computed(() => router.currentRoute.value.name)
const logout = () => {
  authStore.logout()
  router.push({ path: '/' })
}
</script>

<template>
  <div class="dark:text-green-50">
    <header>
      <nav class="flex justify-between gap-1 md:gap-12 pt-1 mt-2 px-12">
        <div>
          <RouterLink
            to="/"
            class="font-bold text-lg hover:bg-lime-200 hover:text-black px-4 py-1 rounded-2xl"
            :class="{ 'bg-lime-400 text-black': currentRouteName === 'home' }"
          >
            Home</RouterLink
          >
        </div>
        <div v-if="!loggedIn" class="flex gap-3">
          <RouterLink
            to="/login"
            class="font-bold text-lg hover:bg-lime-200 hover:text-black px-4 py-1 rounded-2xl"
            :class="{ 'bg-lime-400 text-black': currentRouteName === 'login' }"
            >Login</RouterLink
          >
          <RouterLink
            to="/signup"
            class="font-bold text-lg hover:bg-lime-200 hover:text-black px-4 py-1 rounded-2xl"
            :class="{ 'bg-lime-400 text-black': currentRouteName === 'register' }"
            >Sign up</RouterLink
          >
        </div>
        <div v-if="loggedIn" class="flex gap-3">
          <div
            class="bold-important text-lg hover:bg-lime-200 hover:text-black px-4 py-1 rounded-2xl"
          >
            <RouterLink to="/recipes">Recipes</RouterLink>
          </div>
          <p class="px-4 py-1 font-bold text-lg">Hi, {{ authStore.user?.username }}</p>
          <div class="font-bold text-lg hover:bg-lime-200 hover:text-black px-4 py-1 rounded-2xl">
            <RouterLink to="/" @click.prevent="logout">Logout</RouterLink>
          </div>
        </div>
      </nav>
    </header>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
.bold-important {
  font-weight: bold !important;
}
</style>
