import { Component } from 'react'
import { Textfield } from 'react-mdl'

export default class Searchbox extends Component {
  render() {
    return (
      <Textfield
      onChange={e => this.props.onQueryChange(e.currentTarget.value)}
      label=""
      expandable
      expandableIcon="search"
      />
    )
  }
}
