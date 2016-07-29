import { Component } from 'react'
import PostCard from './PostCard'
import { Grid } from 'react-mdl'

export default class PostCardGroup extends Component {
  componentWillMount() {
    this.props.getPosts()
  }

  render() {
    return <Grid>
      {this.props.isFetching ? 
        <h1>LOADING...</h1> 
      : 
        this.props.posts.map((post) => (
          <PostCard 
            key={post.id} 
            post={post} 
            onClick={() => this.props.onPostClick(post.id)} 
          />
        ))
      }
    </Grid>
  }
}
