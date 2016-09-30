import 'whatwg-fetch';
import * as types from './actionTypes'

export function loadStreamsSuccess(streams){
  return {type: types.LOAD_STREAMS_SUCCESS, streams}
}

export function loadStreams(){
  return function(dispatch){
    return fetch('https://api.twitch.tv/kraken/streams?channel=ESL_SC2,OgamingSC2,cretetion,freecodecamp,storbeck,habathcx,RobotCaleb,noobs2ninjas&client_id=iegsidf0e4i392vi78yohorvog4zdia')
      .then(streams => {
        return streams.json();
      }).then((json) => {
        dispatch( loadStreamsSuccess(json.streams));
      }).catch(ex => {
        console.log('parsing failed', ex)
      });
  }
}

export function setVisibilityFilter(filter) {
  return { type: types.SET_VISIBILITY_FILTER, filter }
}

export function setSearchFilter(filter) {
  return { type: types.SET_SEARCH_FILTER, filter }
}
