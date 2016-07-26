import { Grid } from 'react-mdl'
import { Component } from 'react'
import PostForm from './PostForm'
import BlogFooter from './BlogFooter'
import VisiblePostCards from '../containers/VisiblePostCards'

export default class Main extends Component {
  render(){
    return (
      <div>
        <Grid>
          <PostForm />
        </Grid>
        <VisiblePostCards />
        <BlogFooter />
      </div>
    )
  }
}
