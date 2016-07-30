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
    return <Grid style={{opacity: this.props.isFetching ? '0.4' : '1' }}>
    {
      this.props.isFetching ? 
        <Spinner style={{
          margin: '50px auto', 
          width: '300px', 
          height: '300px',
          position: 'absolute',
          left: 'calc(50% - 150px)',
          top: '50px',
        }} /> 
      : 
        null
    }
      { this.props.posts.map((post) => (
        <PostCard 
          key={post.id} 
          post={post} 
          onClick={() => this.props.onPostClick(post.id)} 
        />
      )) }
    </Grid>
  }
}
