import React from 'react';
import StreamerListContainer from '../containers/StreamerListContainer'
import Header from './Header'
import StreamSearchBar from '../containers/StreamSearchBar'
const App = () => (
  <div>
    <Header />
    <StreamSearchBar />
    <StreamerListContainer />
  </div>
)

export default App
