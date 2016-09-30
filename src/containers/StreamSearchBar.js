import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import { setSearchFilter } from '../actions/streamActions'

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {
      dispatch(setSearchFilter(e.target.value))
    }
  }
}

const FilterSearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default FilterSearchBar
