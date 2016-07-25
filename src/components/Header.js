import React from 'react'
import { Layout, Header, Navigation, Content, Drawer, HeaderRow, Textfield } from 'react-mdl'
import Main from './Main'

export default () => (
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
  <Main />
</Content>
</Layout>
</div>
)
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
