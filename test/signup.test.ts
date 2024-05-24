import { mount } from '@vue/test-utils'
import SignUpItem from '../src/components/SignUpItem.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

describe('SignUpItem.vue', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })
  it('renders sign up form', () => {
    const wrapper = mount(SignUpItem)
    expect(wrapper.find('h2').text()).toBe('Register')
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
    expect(wrapper.findAll('label').at(0)?.text()).toBe('Username')
    expect(wrapper.findAll('label').at(1)?.text()).toBe('Email')
    expect(wrapper.findAll('label').at(2)?.text()).toBe('Password')
    expect(wrapper.find('button').text()).toBe('Sign up')
  })
})
