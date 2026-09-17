import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the heading', () => {
    const wrapper = mount(App)
    const heading = wrapper.find('h1')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('You did it!')
  })

  it('renders the paragraph', () => {
    const wrapper = mount(App)
    const paragraph = wrapper.find('p')
    expect(paragraph.exists()).toBe(true)
    expect(paragraph.text().length).toBeGreaterThan(0)
  })

  it('has a link to vuejs.org', () => {
    const wrapper = mount(App)
    const link = wrapper.find('a')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('https://vuejs.org/')
  })
})