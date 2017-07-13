import {
  combineReducers,
  compose,
  createStore,
  applyMiddleware
} from 'redux'

import productdata from './data/productdata'

import navMenu from './reducers/navMenu'
import products from './reducers/products'
import cart from './reducers/cart'
import searchBar from './reducers/searchBar'
import searchResults from './components/Header/components/SearchBar/reducers/searchResults'

const rootReducer = combineReducers({
  navMenu,
  products,
  cart,
  searchBar,
  searchResults
})

const defaultState = {
  products: productdata,
  cart: {
    total: 0
  }
}

const store = createStore(
  rootReducer,
  defaultState
)

export default store
