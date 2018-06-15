import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import App from './components/App'
import Counter from './components/Counter'
import NotFound from './components/NotFound'

const createRoutes = () => (
  <Router>
    <App>
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>
)

export default createRoutes
