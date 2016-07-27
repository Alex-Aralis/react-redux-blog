import { Component } from 'react'
import { Grid, Cell, Layout, Header, Navigation, Content, Drawer, HeaderRow } from 'react-mdl'
import SpanLink from './SpanLink'
import { Link } from 'react-router'
import LiveSearchbox from '../containers/LiveSearchbox'
import BlogFooter from './BlogFooter'

export default class BlogHeader extends Component {

  render(){
    return (
    <div>
    <div className="demo-big-content">
    <Layout>
    <Header waterfall>
    <HeaderRow title={<SpanLink to="/posts"/>}>
    <LiveSearchbox />
    </HeaderRow>
    <HeaderRow>
    <Navigation>
    <Link to="/posts">Posts</Link>
    <Link to="/new">New</Link>
    <Link to="/about">About</Link>
    </Navigation>
    </HeaderRow>
    </Header>
    <Drawer title="Title">
    <Navigation>
    <a href="">Link</a>
    <a href="">Link</a>
    <a href="">Link</a>
    <a href="">Link</a>
    </Navigation>
    </Drawer>
    <Content>
      <Grid>
        <Cell col={12}>
        {this.props.children}
        </Cell>
      </Grid>
    <BlogFooter />
    </Content>
    </Layout>
    </div>
    </div>
    )
  }
}
/*
export default () => (
<div className="demo-big-content">
  <Layout>
    <Header title="Title" scroll>
      <Navigation>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
      </Navigation>
    </Header>
    <Drawer title="Title">
      <Navigation>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
        <a href="">Link</a>
      </Navigation>
    </Drawer>
    <Content>
      <div className="page-content" />
    </Content>
  </Layout>
</div>
)
*/
