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
    { display_name: 'ESL_SC2', id: 1, link: 'https://api.twitch.tv/kraken/streams/esl_sc2' },
    { display_name: 'OgamingSC2', id: 2, link: 'https://api.twitch.tv/kraken/streams/ogamingsc2' },
    { display_name: 'cretetion', id: 3, link: 'https://api.twitch.tv/kraken/streams/cretetion' },
    { display_name: 'freecodecamp', id: 4, link: 'https://api.twitch.tv/kraken/streams/freecodecamp' },
    { display_name: 'storbeck', id: 5, link: 'https://api.twitch.tv/kraken/streams/storbeck' },
    { display_name: 'habathcx', id: 6, link: 'https://api.twitch.tv/kraken/streams/habathcx' },
    { display_name: 'RobotCaleb', id: 7, link: 'https://api.twitch.tv/kraken/streams/RobotCaleb' },
    { display_name: 'noobs2ninjas', id: 8, link: 'https://api.twitch.tv/kraken/streams/noobs2ninjas' },
  ]
}

const store = configureStore(initialState);

let unsubscribe = store.subscribe(() =>
  console.log('STATE', store.getState())
)
store.dispatch(loadStreams());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
