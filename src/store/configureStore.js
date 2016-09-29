import {createStore, applyMiddleware} from 'redux';
import streamListApp from '../reducers/index.js';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
  return createStore(
    streamListApp,
    initialState,
    applyMiddleware(thunk)
  );
}
