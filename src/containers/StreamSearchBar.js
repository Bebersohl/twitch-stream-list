import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'


const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {
      console.log(e.target.value)
      //dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterSearchBar = connect(
  mapDispatchToProps
)(SearchBar)

export default FilterSearchBar
