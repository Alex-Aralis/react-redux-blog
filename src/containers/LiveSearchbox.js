import { updateQuery } from '../actions/actionCreators'
import { connect } from 'react-redux'
import Searchbox from '../components/Searchbox'

const mapDispatchToProps = dispatch => {
  return {
    onQueryChange: query => dispatch(updateQuery(query)),
  }
}

export default connect(null, mapDispatchToProps)(Searchbox)
