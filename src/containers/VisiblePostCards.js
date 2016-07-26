import { connect } from 'react-redux'
import PostCardGroup from '../components/PostCardGroup'
import { toggleFavorite } from '../actions/actionCreators'

const mapStateToProps = ({posts}) => {
  return {
    posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPostClick: (id) => {
      dispatch(toggleFavorite(id))
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostCardGroup)
