import { Grid, Textfield, FABButton, Icon } from 'react-mdl'
import { connect } from 'react-redux'
import { addPost } from '../actions/actionCreators'

let titleRef = null;
let bodyRef = null;

let PostForm = ({dispatch}) => {
  const onButtonClick = () => {
    dispatch(
      addPost(
        titleRef.refs.input.value, 
        bodyRef.refs.input.value
    ))
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
