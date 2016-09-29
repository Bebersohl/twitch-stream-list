import { combineReducers } from 'redux';
import streamReducer from './streamReducer';
import visibilityReducer from './visibilityReducer';

export default combineReducers({
  streams: streamReducer,
  visibility: visibilityReducer
});
