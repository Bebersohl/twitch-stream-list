import { combineReducers } from 'redux';
import streamReducer from './streamReducer';
import visibilityReducer from './visibilityReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  streams: streamReducer,
  visibility: visibilityReducer,
  search: searchReducer
});
