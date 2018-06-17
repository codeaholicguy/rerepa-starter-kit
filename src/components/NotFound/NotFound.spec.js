import React from 'react'
import {shallow} from 'enzyme'

import NotFound from './NotFound'

describe('NotFound', () => {
  test('will render text Not Found', () => {
    const notFound = shallow(<NotFound />)

    expect(notFound.text()).toEqual('Not found')
  })
})
