import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const App = ({children}) => (
  <div>
    <h1>Rerepa</h1>
    <div>
      <Link to="/counter" href="/counter">
        Counter
      </Link>
    </div>
    <div>
      <Link to="/nothing" href="/nothing">
        Nothing here?
      </Link>
    </div>
    <div>{children}</div>
  </div>
)

App.propTypes = {
  children: PropTypes.node
}

App.defaultProps = {
  children: null
}

export default App
