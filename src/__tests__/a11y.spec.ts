// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import * as axeCore from 'axe-core'
import App from '../App.vue'

/**
 * Corre o axe-core sobre um elemento HTML e devolve as violações.
 * Usa a API Promise do axe-core (axe.run).
 */
async function runAxe(element: Element, options: any = {}): Promise<any[]> {
  const results = await (axeCore as any).run(element, options)
  return results.violations
}

describe('Accessibility (WCAG 2.1 AA)', () => {
  it('App.vue has no accessibility violations', async () => {
    const wrapper = mount(App, { attachTo: document.body })
    const violations = await runAxe(wrapper.element)
    expect(violations).toEqual([])
  })

  it('App.vue meets the color contrast requirements', async () => {
    const wrapper = mount(App, { attachTo: document.body })
    const violations = await runAxe(wrapper.element, {
      runOnly: { type: 'rule', values: ['color-contrast'] },
    })
    expect(violations).toEqual([])
  })

  it('App.vue has a valid heading structure', () => {
    const wrapper = mount(App, { attachTo: document.body })
    const headings = wrapper.findAll('h1, h2, h3, h4, h5, h6')
    expect(headings.length).toBeGreaterThan(0)
    expect(wrapper.find('h1').exists()).toBe(true)
  })

  it('App.vue interactive elements have accessible names', async () => {
    const wrapper = mount(App, { attachTo: document.body })
    const violations = await runAxe(wrapper.element, {
      runOnly: { type: 'rule', values: ['button-name', 'link-name'] },
    })
    expect(violations).toEqual([])
  })
})