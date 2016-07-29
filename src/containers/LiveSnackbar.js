import { connect } from 'react-redux'
import { Component } from 'react'
import { Snackbar } from 'react-mdl'

class LiveSnackbar extends Component {
  
  render() {
    return (
      <Snackbar
        active={this.props.active}
        onClick={this.props.snackbarClick}
        onTimeout={this.props.snackbarTimeout}
        action={this.props.action}
      > 
        {this.props.content}
      </Snackbar>
    )
  }
}

const mapStateToProps = ({snackbar}) => {
  console.log(snackbar)
  return {
    active: snackbar.active,
    snackbarClick: snackbar.onClick,
    snackbarTimeout: snackbar.onTimeout,
    action: snackbar.action,
    content: snackbar.content,
  }
}

export default connect(mapStateToProps)(LiveSnackbar)
