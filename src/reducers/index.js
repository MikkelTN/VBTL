import {
  combineReducers
} from 'redux'

import navMenu from './navMenu'
import products from './products'
import cart from './cart'

const rootReducer = combineReducers({
  navMenu,
  products,
  cart
})

export default rootReducer
