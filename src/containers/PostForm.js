import { Grid, Cell, Textfield, Button } from 'react-mdl'
import { connect } from 'react-redux'
import { showSnackbar, postPost, postPosted, postRejected } from '../actions/actionCreators'

let titleRef = null;
let bodyRef = null;

let PostForm = ({dispatch}) => {

  const clearForm = () => {
    titleRef.refs.input.value = ''
    bodyRef.refs.input.value = ''
  }
  const onButtonClick = () => {
    dispatch(
      postPost({
        title: titleRef.refs.input.value, 
        body: bodyRef.refs.input.value,
        favorited: false,
      })
    )
    .then(json => {
      clearForm();
      dispatch(postPosted(json))
      dispatch(showSnackbar({
        action: 'Undo',
        onClick: () => {},
        onTimeout: () => {},
        content: 'Post was published.',
      })
    )})
    .catch(err => {
      dispatch(postRejected(err))
      dispatch(showSnackbar({
        action: 'Retry',
        onClick: () => {},
        onTimeout: () => {},
        content: 'Post was rejected.',
      }))
    })
  }
  

  return <Grid>
    <Cell col={6} offsetDesktop={3} shadow={2} phone={12} offsetPhone={0}> 
      <Grid shadow={2}>
        <Cell col={12}>
          <Textfield
            ref={node => {titleRef = node}}
            label="Title"
            floatingLabel
            style={{width: '100%'}}
          />
        </Cell>
      </Grid>
  
      <Grid>
        <Cell col={12}>
          <Textfield
            ref={node => {bodyRef = node} }
            label="Body"
            floatingLabel
            rows={10}
            style={{width: '100%'}}
          />
        </Cell>
      </Grid>

      <Grid>
        <Cell col={12}>
          <Button raised accent ripple onClick={onButtonClick}>
            Submit Post
          </Button>
        </Cell>
      </Grid>
    </Cell>
 </Grid>
}

export default connect()(PostForm)
