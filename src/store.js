import {createStore, applyMiddleware} from 'redux';

import rootReducer from './reducers/index';

const actionLogger = ({dispatch, getState}) =>
  (next) => (action) => {
    console.log(action);
    return next(action);
  }

const middleware = applyMiddleware(actionLogger);

const store = createStore(rootReducer, middleware);

export default store;
