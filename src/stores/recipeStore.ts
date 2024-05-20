import { defineStore } from 'pinia'
import { type Recipe } from '@/common/types'

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [] as Recipe[]
  }),
  actions: {
    setRecipes(recipes: Recipe[]) {
      this.recipes = recipes
    }
  }
})
