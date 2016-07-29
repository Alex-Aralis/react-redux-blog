import { Grid, Cell } from 'react-mdl'
import { Component } from 'react'

export default class PostPage extends Component {

  render(){
    return (
      <Grid>
        <Cell col={8} offset={2} shadow={1} >
          <h1>
            {this.props.post.title}
          </h1>
          <p>
            {this.props.post.body}
          </p>
        </Cell>
      </Grid>
    )
  } 
}

