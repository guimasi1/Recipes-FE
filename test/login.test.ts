import { mount } from '@vue/test-utils'
import LoginItem from '../src/components/LoginItem.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

describe('LoginItem.vue', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })
  it('renders login form', () => {
    const wrapper = mount(LoginItem)
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe('Login')
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.findAll('label').at(0)?.text()).toBe('Email')
    expect(wrapper.findAll('label').at(1)?.text()).toBe('Password')
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Login')
  })
})
