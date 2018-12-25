import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './redux/reducer';

// devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//middlewares
const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware()));

// store with reducers and middlewares
const store = createStore(reducer, middlewares);

export default store;