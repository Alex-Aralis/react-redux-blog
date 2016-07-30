import { connect } from 'react-redux'
import PostPage from '../components/PostPage.js'
import { getPost, loadPost } from '../actions/actionCreators'

const mapStateToProps = ({postsState: {fullPosts}}, {params: {id}}) => {
  return {
    id,
    fullPosts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    getPost: (id) => dispatch(getPost(id)),
    loadPost: (post) => dispatch(loadPost(post)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
