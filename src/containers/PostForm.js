import { Grid, Textfield, FABButton, Icon } from 'react-mdl'
import { connect } from 'react-redux'
import { showSnackbar, postPost, postPosted, postRejected } from '../actions/actionCreators'

let titleRef = null;
let bodyRef = null;

let PostForm = ({dispatch}) => {
  const onButtonClick = () => {
    dispatch(
      postPost({
        title: titleRef.refs.input.value, 
        body: bodyRef.refs.input.value,
        favorited: false,
      })
    )
    .then(json => {
      dispatch(postPosted(json))
      dispatch(showSnackbar({
        action: 'Undo',
        onClick: () => {},
        onTimeout: () => {},
        content: 'Post was published.',
      })
    )})
    .catch(err => dispatch(postRejected(err)))
  }
  

  return <Grid>
    <Textfield
      ref={node => {titleRef = node}}
      label="Title"
      floatingLabel
      style={{width: '200px'}}
    />

    <Textfield
      ref={node => {bodyRef = node} }
      label="Body"
      rows={3}
      style={{width: '200px'}}
    />

    <FABButton colored ripple onClick={onButtonClick}>
      <Icon name="add" />
    </FABButton>
 </Grid>
}

export default connect()(PostForm)
