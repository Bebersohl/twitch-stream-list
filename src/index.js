import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux'
import './index.css';
import configureStore from './store/configureStore';
import {loadStreams, setVisibilityFilter} from './actions/streamActions'

const initialState = {
  visibility: 'SHOW_ALL',
  streams: [
    { display_name: 'ESL_SC2', id: 23290749408 },
    { display_name: 'OgamingSC2', id: 23289225600 },
    { display_name: 'cretetion', id: 23290124320 },
    { display_name: 'freecodecamp', id: 4 },
    { display_name: 'storbeck', id: 5 },
    { display_name: 'habathcx', id: 6 },
    { display_name: 'RobotCaleb', id: 7 },
    { display_name: 'noobs2ninjas', id: 8 },
  ]
}

const store = configureStore(initialState);

let unsubscribe = store.subscribe(() =>
  console.log('STATE', store.getState())
)
store.dispatch(loadStreams());
store.dispatch(setVisibilityFilter('SHOW_OFFLINE'));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
