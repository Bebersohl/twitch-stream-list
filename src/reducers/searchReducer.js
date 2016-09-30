import * as types from '../actions/actionTypes';

export default function searchFilter(state = '', action) {
  switch (action.type) {
    case types.SET_SEARCH_FILTER:
      return action.filter
    default:
      return state
  }
}
