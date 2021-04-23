import { shallowMount } from '@vue/test-utils'
import Winner from '../../components/TTT/Winner.vue'

describe('Winner.vue', () => {
  it('Should render winner properly', () => {
    const wrapper = shallowMount(Winner, {
      propsData: {
        winner: 'x',
      },
    })
    expect(wrapper.find('.winner').text()).toBe('X wins!')
  })

  it('Should render tie message', () => {
    const wrapper = shallowMount(Winner)
    expect(wrapper.find('.winner').text()).toBe("It's a tie!")
  })

  const markSelect = jest.fn()
  it('should emit for marks', () => {
    const wrapper = shallowMount(Winner, {
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
