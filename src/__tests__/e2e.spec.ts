// @vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('E2E - Aplicação Vue', () => {
  let wrapper: ReturnType<typeof mount>

  beforeAll(() => {
    wrapper = mount(App)
  })

  it('E2E-001: a aplicação monta sem erros', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('E2E-002: o heading principal é renderizado com texto', () => {
    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
    expect(h1.text().length).toBeGreaterThan(0)
  })

  it('E2E-003: o contador começa em 0 e o botão incrementa', async () => {
    const count = wrapper.find('[data-testid="count"]')
    expect(count.text()).toContain('0')

    const button = wrapper.find('[data-testid="increment"]')
    await button.trigger('click')
    expect(count.text()).toContain('1')
  })
})