import {
  combineReducers
} from 'redux'
import {
  routerReducer
} from 'react-router-redux'

import navMenu from './navMenu'
import products from './products'
import cart from './cart'

const rootReducer = combineReducers({
  navMenu,
  products,
  cart,
  routing: routerReducer
})

export default rootReducer
