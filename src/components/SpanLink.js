import { Component } from 'react'
import { withRouter } from 'react-router'

class SpanLink extends Component {
  handleSpanClick() {
    this.props.router.push(this.props.to)
  }

  render() {
    return (
      <span style={{cursor:"pointer"}} onClick={this.handleSpanClick.bind(this)}>
        react-router-redux Blog
      </span>
    )
  }
}

export default withRouter(SpanLink)
