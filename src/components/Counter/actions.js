import {ActionTypes} from '../../core/constants'

export function increment() {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.INCREMENT
    })
  }
}

export function decrement() {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.DECREMENT
    })
  }
}
