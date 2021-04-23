import { shallowMount } from '@vue/test-utils'
import Choice from '../../components/TTT/Choice.vue'

describe('Choice.vue', () => {
  const markSelect = jest.fn()

  it('should emit for marks', () => {
    const wrapper = shallowMount(Choice, {
      listeners: {
        mark: markSelect,
      },
    })
    wrapper.find('.x-color').trigger('click')
    wrapper.find('.o-color').trigger('click')
    expect(markSelect).toHaveBeenNthCalledWith(1, 'x')
    expect(markSelect).toHaveBeenNthCalledWith(2, 'o')
  })
})
