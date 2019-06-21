'use strict'

import React from 'react'
import { hot } from 'react-hot-loader/root'
import styled, { createGlobalStyle } from 'styled-components'

import VideoList from 'components/video-list'
import VideoSingle from 'components/video-single'

import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <GlobalStyle />
    <Header>
      <h1>Reactflix</h1>
    </Header>

    <Main>
      <VideoSingle />
      <VideoList />
    </Main>

    <Footer>
      &copy; 2018
    </Footer>
  </Container>
)

const headerHeight = '60px'
const footerHeight = '30px'

const GlobalStyle = createGlobalStyle`
  html, body, div[data-js="app"] {
    height: 100%
  }
`

const Container = styled.div`
  height: 100%
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

const Header = styled.header`
  height: ${headerHeight};
  background: #333
`

const Footer = styled.footer`
  height: ${footerHeight};
  background: #333
`

export default hot(App)
