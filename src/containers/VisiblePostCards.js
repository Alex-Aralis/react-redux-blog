import { connect } from 'react-redux'
import PostCardGroup from '../components/PostCardGroup'
import { toggleFavorite, getPosts } from '../actions/actionCreators'

const mapStateToProps = ({postsState, query}) => {
  console.log('mapping state to props')
  console.log(postsState)
  return {
    posts: postsState.posts.filter(post => (post.title.includes(query))),
    isFetching: postsState.isFetching,
    didInvalidate: postsState.didInvalidate,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPostClick: (id) => {
      dispatch(toggleFavorite(id))
    },
    getPosts: () => {
      dispatch(getPosts())
    },
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostCardGroup)
