import React from 'react'

const Streamer = ({ stream }) => {
  const isOnline = stream._links ? true : false;
  return (
    <li className={ isOnline ? 'online' : 'offline'}>
      <i className="fa fa-circle"></i>
      <a target='_blank' href={isOnline ? stream.channel.url : '#'}>
        {stream.display_name}
      </a>
      <span className="viewers pull-right"><small>{stream.viewers}</small></span>
    </li>
  )
}

export default Streamer;
