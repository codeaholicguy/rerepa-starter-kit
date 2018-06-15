import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

export function configureStore({initialState, history}) {
  const router = routerMiddleware(history)
  const middlewares = [thunk, router]
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}

export default {
  configureStore
}
