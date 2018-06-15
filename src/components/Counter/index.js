import {connect} from 'react-redux'

import Counter from './Counter'
import {increment, decrement} from './actions'

export default connect(
  ({counter}) => ({counter}),
  {increment, decrement}
)(Counter)
