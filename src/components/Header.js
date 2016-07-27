import { Component } from 'react'
import { Grid, Layout, Header, Navigation, Content, Drawer, HeaderRow, Textfield } from 'react-mdl'
import SpanLink from './SpanLink'
import { Link } from 'react-router'

export default class BlogHeader extends Component {

  render(){
    return (
    <div className="demo-big-content">
    <Layout>
    <Header waterfall>
    <HeaderRow title={<SpanLink to="/home"/>}>
    
    <Textfield
    value=""
    onChange={() => {}}
    label="Search"
    expandable
    expandableIcon="search"
    />
    </HeaderRow>
    <HeaderRow>
    <Navigation>
    <Link to="/home">Posts</Link>
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
        {this.props.children}
      </Grid>
    </Content>
    </Layout>
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
