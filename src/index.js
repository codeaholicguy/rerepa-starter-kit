import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from './store'
import Container from './core/components/Container'

const createHistory = require('history').createBrowserHistory

const root = document.getElementById('root')
const history = createHistory()
const store = configureStore({ history })
const render = (Component, props = {}) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  ReactDOM.render(<Component {...props} />, root)
}

render(Container, { history, store })
