import {ActionTypes} from '../core/constants'

const initialState = 0

export default function(state = initialState, {type}) {
  switch (type) {
    case ActionTypes.INCREMENT:
      return state + 1
    case ActionTypes.DECREMENT:
      return state - 1
    default:
      return state
  }
}
