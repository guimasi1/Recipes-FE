<script setup lang="ts">
import { onMounted } from 'vue'
import { getRecipes } from '../composables/recipesActions'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
onMounted(async () => {
  try {
    const recipes = await getRecipes(authStore.token, authStore.user?.id)
    if (!recipes) throw new Error('Recipes not found')
    console.log(recipes)
  } catch (err) {
    console.log(err)
  }
})
</script>
<template>
  <section class="container mx-auto">ciao</section>
</template>
