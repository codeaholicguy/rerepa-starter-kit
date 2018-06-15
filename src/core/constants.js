import {func, object, shape, string, number, bool} from 'prop-types'

export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export const locationShape = shape({
  pathname: string.isRequired,
  search: string.isRequired,
  hash: string.isRequired,
  state: object
})

export const historyShape = shape({
  action: string.isRequired,
  block: func.isRequired,
  createHref: func.isRequired,
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired,
  listen: func.isRequired,
  length: number.isRequired,
  push: func.isRequired,
  replace: func.isRequired,
  location: locationShape.isRequired
})

export const matchShape = shape({
  isexact: bool.isrequired,
  path: string.isrequired,
  url: string.isrequired,
  params: object
})

export const storeShape = shape({
  routing: object,
  counter: number
})
