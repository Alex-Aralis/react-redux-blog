import { Component } from 'react'
import PostCard from './PostCard'
import { Grid, Spinner } from 'react-mdl'

export default class PostCardGroup extends Component {
  componentWillMount() {
    if(this.props.didInvalidate){
      this.props.getPosts()
    }
  }

  render() {
    return <Grid>
      {this.props.isFetching ? 
        <Spinner style={{margin: '50px auto', width: '300px', height: '300px'}} />
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
