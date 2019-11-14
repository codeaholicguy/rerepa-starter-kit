import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({ counter, increment, decrement }) => (
  <div>
    <span>
      Counter:
      {counter}
    </span>
    <div>
      <button type='button' onClick={increment}>
        Increment
      </button>
      <button type='button' onClick={decrement}>
        Decrement
      </button>
    </div>
  </div>
)

Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

Counter.defaultProps = {
  counter: 0,
}

export default Counter
