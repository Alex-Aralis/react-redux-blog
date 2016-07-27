import { Component } from 'react'
import BlogFooter from './BlogFooter'
import VisiblePostCards from '../containers/VisiblePostCards'

export default class Main extends Component {
  render(){
    return (
      <div>
        <VisiblePostCards />
        <BlogFooter />
      </div>
    )
  }
}
