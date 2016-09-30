import { connect } from 'react-redux'
import StreamerList from '../components/StreamerList'

const getOnlineStreams = (streams, filter, search) => {
  let searchedStreams = streams.filter(s => s.display_name.toUpperCase().includes(search.toUpperCase()))
  switch (filter) {
    case 'SHOW_ALL':
      return searchedStreams
    case 'SHOW_ONLINE':
      return searchedStreams.filter(s => s._links)
    case 'SHOW_OFFLINE':
      return searchedStreams.filter(s => !s._links)
  }
}

const mapStateToProps = (state) => {
  return {
    streams: getOnlineStreams(state.streams, state.visibility, state.search)
  }
}


const StreamerListContainer = connect(
  mapStateToProps
)(StreamerList)

export default StreamerListContainer
