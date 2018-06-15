import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'

import {configureStore} from './store'

import Container from './core/components/Container'

const root = document.getElementById('root')
const history = createHistory()
const store = configureStore({history})
const render = (Component, props = {}) => {
  ReactDOM.render(<Component {...props} />, root)
}

render(Container, {history, store})
