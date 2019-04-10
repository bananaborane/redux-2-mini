import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import hackerNewsReducer from './ducks/hackerNewsReducer';
import mediumReducer from './ducks/mediumReducer';

const rootReducer = combineReducers({ hackerNews: hackerNewsReducer, medium: mediumReducer })

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))