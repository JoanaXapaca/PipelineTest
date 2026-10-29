// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import * as axeCore from 'axe-core'
import type { AxeResults, RunOptions } from 'axe-core'
import App from '../App.vue'

/**
 * Runs axe-core on an HTML element and returns the violations.
 */
async function runAxe(element: Element, options: RunOptions = {}): Promise<AxeResults['violations']> {
  const results = await axeCore.run(element, options)
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