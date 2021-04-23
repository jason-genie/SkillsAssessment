import { shallowMount } from '@vue/test-utils'
import Board from '../../components/TTT/Board.vue'

let wrapper

describe('Board.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(Board)
  })

  it('to match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should have 9 cell', () => {
    expect(wrapper.findAll('cell-stub')).toHaveLength(9)
  })

  it('render modals correctly', () => {
    expect(wrapper.find('choice-stub').exists()).toBe(true)
    expect(wrapper.find('winner-stub').exists()).toBe(false)

    wrapper.setData({ user: 'x' })
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('choice-stub').exists()).toBe(false)
    })

    wrapper.setData({ winner: 'x' })
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('winner-stub').exists()).toBe(true)
    })
  })
})
