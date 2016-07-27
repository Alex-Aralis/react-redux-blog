import { connect } from 'react-redux'
import PostCardGroup from '../components/PostCardGroup'
import { toggleFavorite } from '../actions/actionCreators'

const mapStateToProps = ({posts, query}) => {
  return {
    posts: posts.filter(post => (post.title.includes(query))),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPostClick: (id) => {
      dispatch(toggleFavorite(id))
    },
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostCardGroup)
