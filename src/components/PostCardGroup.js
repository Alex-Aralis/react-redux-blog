import { PropTypes } from 'react'
import PostCard from './PostCard'
import { Grid } from 'react-mdl'

const PostCardGroup = ({posts, onPostClick}) => (
  <Grid>
    {posts.map((post) => (
      <PostCard key={post.id} {...post} onClick={() => onPostClick(post.id)} />
    ))} 
  </Grid>
)

PostCardGroup.propTypes = {
  posts: PropTypes.array,
  onPostClick: PropTypes.func.isRequired,
}

export default PostCardGroup
