<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { getRecipes } from '../composables/recipesActions'
import { useAuthStore } from '@/stores/authStore'
import { useRecipeStore } from '@/stores/recipeStore'
const recipeStore = useRecipeStore()
const authStore = useAuthStore()
const recipes = computed(() => recipeStore.recipes)

const getImageUrl = () => {
  return new URL(`../assets/default-recipe-img.jpg`, import.meta.url).href
}
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
    <h2 class="text-4xl font-bold text-center mt-16 mb-10">Recipes</h2>
    <div v-if="recipes" class="grid grid-cols-2 md:grid-cols-4 gap-5">
      <div v-for="recipe in recipes" :key="recipe._id" class="flex flex-col border rounded-md p-0">
        <div>
          <img class="w-full rounded-t-md" :src="recipe.imageUrl || getImageUrl()" alt="recipe" />
        </div>
        <p class="px-2 py-3 font-semibold">{{ recipe?.title }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
