import { Grid, Cell, Spinner } from 'react-mdl'
import { Component } from 'react'

export default class PostPage extends Component {
  componentWillMount() {
    this.props.getPost(this.props.id)
      .then((json) => {
        console.log(json)
        this.props.loadPost(json)
      })
  }

  render(){
    const post = this.props.fullPosts[this.props.id]

    return (
      <Grid>
        <Cell col={8} offset={2} shadow={1} >
          { post && !post.didInvalidate ? 
            <div>
              <h1>
                { post.title }
              </h1>
              <p>
                { post.body }
              </p>
            </div>
          :
            <Spinner />
          }
        </Cell>
      </Grid>
    )
  } 
}

