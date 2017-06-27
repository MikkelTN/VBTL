import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'
import {
  routerMiddleware
} from 'react-router-redux'

import productdata from './data/productdata'

import rootReducer from './reducers/index';

const actionLogger = ({dispatch, getState}) =>
  (next) => (action) => {
    console.log(action);
    return next(action);
  }

const middleware = applyMiddleware(actionLogger);

const defaultState = {
  navMenu: false,
  products: productdata
}

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )
)

export default store;
