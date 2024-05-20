<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { getRecipes } from '../composables/recipesActions'
import { useAuthStore } from '@/stores/authStore'
import { useRecipeStore } from '@/stores/recipeStore'

const recipeStore = useRecipeStore()
const authStore = useAuthStore()
const recipes = computed(() => recipeStore.recipes)

onMounted(async () => {
  try {
    const data = await getRecipes(authStore.token, authStore.user?.id)
    if (!data) throw new Error('Recipes not found')
    console.log(data.data.recipes)
    recipeStore.setRecipes(data.data.recipes)
  } catch (err) {
    console.log(err)
  }
})
</script>
<template>
  <section class="container mx-auto">
    <h2 class="text-4xl font-bold text-center mt-16">Recipes</h2>
    <div v-if="recipes">
      <div v-for="recipe in recipes" :key="recipe._id">
        <img :src="recipe?.imageUrl" alt="" />
        <p>{{ recipe?.title }}</p>
      </div>
    </div>
  </section>
</template>
