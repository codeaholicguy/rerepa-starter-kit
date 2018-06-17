import {ActionTypes} from '../core/constants'

import counter from './counter'

describe('counter', () => {
  test('should return initial state', () => {
    const state = counter(undefined, {})

    expect(state).toBe(0)
  })

  test('should increase by 1', () => {
    const state = 0
    const nextState = counter(state, {type: ActionTypes.INCREMENT})

    expect(nextState).toBe(1)
  })

  test('should decrease by 1', () => {
    const state = 1
    const nextState = counter(state, {type: ActionTypes.DECREMENT})

    expect(nextState).toBe(0)
  })

  test('should keep its value', () => {
    const state = 1
    const nextState = counter(state, {type: 'nothing'})

    expect(nextState).toBe(1)
  })
})
