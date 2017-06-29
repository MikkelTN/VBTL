import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'

import productdata from './data/productdata'

import rootReducer from './reducers/index'

const actionLogger = ({dispatch, getState}) =>
  (next) => (action) => {
    console.log(action)
    return next(action)
  }

const middleware = applyMiddleware(actionLogger)

const defaultState = {
  navMenu: false,
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
