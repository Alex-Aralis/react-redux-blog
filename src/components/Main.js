import { Grid } from 'react-mdl'
import { Component } from 'react'
import PostCard from './PostCard'
import PostForm from './PostForm'
import BlogFooter from './BlogFooter'

export default class Main extends Component {
  render(){
    return (
      <div>
      <Grid>
      <PostForm />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      </Grid>
      <BlogFooter />
      </div>
    )
  }
}
