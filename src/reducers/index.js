import {
  combineReducers
} from 'redux'
import {
  routerReducer
} from 'react-router-redux'

import navMenu from './navMenu'
import products from './products'

const rootReducer = combineReducers({
  navMenu,
  products,
  routing: routerReducer
})

export default rootReducer
