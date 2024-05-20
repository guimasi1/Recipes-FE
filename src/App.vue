<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <nav class="flex justify-center gap-1 md:gap-12 pt-1 mt-2">
        <RouterLink
          to="/"
          class="font-bold text-lg hover:bg-cyan-400 hover:text-white px-4 py-1 rounded-2xl"
          >Home</RouterLink
        >
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
</style>
