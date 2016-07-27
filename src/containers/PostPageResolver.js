import { connect } from 'react-redux'
import PostPage from '../components/PostPage.js'

const mapStateToProps = ({posts}, {params: {id}}) => {
  return {
    post: posts[id]
  }
}

export default connect(mapStateToProps)(PostPage)
