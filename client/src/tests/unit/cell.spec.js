import { shallowMount } from '@vue/test-utils'
import Cell from '../../components/TTT/Cell.vue'

describe('Cell.vue', () => {
  const clickFn = jest.fn()
  it('should have click listener', () => {
    const wrapper = shallowMount(Cell, {
      propsData: {
        mark: 'x',
      },
      listeners: {
        click: clickFn,
      },
    })
    wrapper.find('.cell').trigger('click')
    expect(clickFn).toHaveBeenCalled()
  })
})
