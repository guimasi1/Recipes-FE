import { mount } from '@vue/test-utils'
import RecipesContainerItem from '../src/components/RecipesContainerItem.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

describe('LoginItem.vue', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })
  it('renders header', () => {
    const wrapper = mount(RecipesContainerItem)
    expect(wrapper.find('h2').text()).toBe('Recipes')
  })
})
