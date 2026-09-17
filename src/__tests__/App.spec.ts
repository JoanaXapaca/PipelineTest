import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('contains a heading', () => {
    const wrapper = mount(App)
    expect(wrapper.find('h1').exists()).toBe(true)
  })

  it('renders the heading text', () => {
    const wrapper = mount(App)
    const heading = wrapper.find('h1')
    expect(heading.text()).toBeTruthy()
    expect(heading.text().length).toBeGreaterThan(0)
  })

  it('has at least one link', () => {
    const wrapper = mount(App)
    const links = wrapper.findAll('a')
    expect(links.length).toBeGreaterThan(0)
  })

  it('renders the wrapper element', () => {
    const wrapper = mount(App)
    expect(wrapper.find('main').exists()).toBe(true)
  })
})
