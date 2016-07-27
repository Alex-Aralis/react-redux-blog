import { withRouter } from 'react-router'
import { Button } from 'react-mdl'
import { Component } from 'react'

class RouterButton extends Component {
  buttonClick() {
    this.props.router.push(this.props.to)
  }

  cleanProps(props) {
    props = {...props};
    delete props.router;

    return props;
  }
  render() {
    return (
      <Button onClick={ this.buttonClick.bind(this) } {...this.cleanProps(this.props)}>
        { this.props.children }
      </Button>
    )
  }
}

export default withRouter(RouterButton)
