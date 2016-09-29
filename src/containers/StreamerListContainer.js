import { connect } from 'react-redux'
import StreamerList from '../components/StreamerList'

const getOnlineStreams = (streams, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return streams
    case 'SHOW_ONLINE':
      return streams.filter(s => s._links)
    case 'SHOW_OFFLINE':
      return streams.filter(s => !s._links)
  }
}

const mapStateToProps = (state) => {
  return {
    streams: getOnlineStreams(state.streams, state.visibility)
  }
}


const StreamerListContainer = connect(
  mapStateToProps
)(StreamerList)

export default StreamerListContainer
