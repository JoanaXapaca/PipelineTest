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
    expect(wrapper.find('h1').text()).toBe('You did it!')
  })

  it('renders the paragraph', () => {
    const wrapper = mount(App)
    expect(wrapper.find('p').exists()).toBe(true)
  })

  it('has a link to vuejs.org', () => {
    const wrapper = mount(App)
    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('https://vuejs.org/')
  })

  it('starts with count 0', () => {
    const wrapper = mount(App)
    expect(wrapper.find('[data-testid="count"]').text()).toBe('Count: 0')
  })

  it('increments count when button is clicked', async () => {
    const wrapper = mount(App)
    await wrapper.find('[data-testid="increment"]').trigger('click')
    expect(wrapper.find('[data-testid="count"]').text()).toBe('Count: 1')
  })

  it('resets count to 0', async () => {
    const wrapper = mount(App)
    await wrapper.find('[data-testid="increment"]').trigger('click')
    await wrapper.find('[data-testid="increment"]').trigger('click')
    await wrapper.find('[data-testid="reset"]').trigger('click')
    expect(wrapper.find('[data-testid="count"]').text()).toBe('Count: 0')
  })

  it('shows correct message for count 0', () => {
    const wrapper = mount(App)
    expect(wrapper.find('[data-testid="message"]').text()).toBe('Comeca a contar')
  })

  it('shows correct message for count 1', async () => {
    const wrapper = mount(App)
    await wrapper.find('[data-testid="increment"]').trigger('click')
    expect(wrapper.find('[data-testid="message"]').text()).toBe('Continua')
  })

  it('shows correct message for count 5', async () => {
    const wrapper = mount(App)
    const button = wrapper.find('[data-testid="increment"]')
    for (let i = 0; i < 5; i++) {
      await button.trigger('click')
    }
    expect(wrapper.find('[data-testid="message"]').text()).toBe('Bom trabalho')
  })
})