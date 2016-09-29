import React from 'react';
import Streamer from './Streamer';

const StreamerList = ({ streams }) => (
  <ul>
    {streams.map(stream =>
      <Streamer
        key={ stream.id }
        steam={ stream }
      />
    )}
  </ul>
)

export default StreamerList;
