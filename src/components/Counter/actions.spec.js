import {ActionTypes} from '../../core/constants'
import {increment, decrement} from './actions'

describe('Counter actions', () => {
  test('should create an action to increment', () => {
    const expectedAction = {
      type: ActionTypes.INCREMENT
    }

    expect(increment()).toEqual(expectedAction)
  })

  test('should create an action to decement', () => {
    const expectedAction = {
      type: ActionTypes.DECREMENT
    }

    expect(decrement()).toEqual(expectedAction)
  })
})
