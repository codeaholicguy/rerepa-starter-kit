import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'

import {historyShape, storeShape} from '../../constants'
import createRoutes from '../../../routes'

export default class Container extends Component {
  static propTypes = {
    history: historyShape.isRequired,
    store: storeShape.isRequired
  }

  getRoutes = () => {
    if (!this.routes) {
      this.routes = createRoutes()
    }

    return this.routes
  }

  render() {
    const {store, history} = this.props

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>{this.getRoutes()}</ConnectedRouter>
      </Provider>
    )
  }
}
