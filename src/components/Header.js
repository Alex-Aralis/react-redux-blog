import { Component } from 'react'
import { Layout, Header, Navigation, Content, Drawer, HeaderRow, Textfield } from 'react-mdl'

export default class BlogHeader extends Component {

  render(){
    return (
    <div className="demo-big-content">
    <Layout>
    <Header waterfall>
    <HeaderRow title="Title">
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
    <a href="">Link</a>
    <a href="">Link</a>
    <a href="">Link</a>
    <a href="">Link</a>
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
      {this.props.children}
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
