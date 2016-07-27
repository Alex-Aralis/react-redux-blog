import { withRouter } from 'react-router'
import { Button } from 'react-mdl'
import { Component } from 'react'

class RouterButton extends Component {
  buttonClick() {
    this.props.router.push(this.props.to)
  }

  render() {
    return (
      <Button onClick={ this.buttonClick.bind(this) } {...this.props}>
        { this.props.children }
      </Button>
    )
  }
}

export default withRouter(RouterButton)
