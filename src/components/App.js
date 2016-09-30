import React from 'react';
import StreamerListContainer from '../containers/StreamerListContainer'
import Header from './Header'
import StreamSearchBar from '../containers/StreamSearchBar'
const App = () => (
  <div className="app-container">
    <div className="app">
      <Header />
      <StreamSearchBar />
      <StreamerListContainer />
    </div>
  </div>
)

export default App
