import { createStore, applyMiddleware, compose } from 'redux';
import AjaxMiddleware from './AjaxMiddleware';
import OneRepoMiddleware from './OneRepoMiddleware';
import GetUserMiddleware from './GetUserMiddleware';
import reducer from './reducer';

const middlewares = applyMiddleware(GetUserMiddleware, AjaxMiddleware, OneRepoMiddleware);

// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhancers = compose(middlewares, devTools);

const store = createStore(reducer, enhancers);

export default store;
