import * as types from '../actions/actionTypes'
import _ from 'underscore'
export default function streamReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_STREAMS_SUCCESS:
      const mergedList = _.map(state, function(item){
        return _.extend(item, _.findWhere(action.streams, { _id: item.id }));
      });
      return mergedList;
    default:
      return state;
  }
}
