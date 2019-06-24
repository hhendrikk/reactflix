'use strict'

import React from 'react'
import { hot } from 'react-hot-loader/root'
import styled, { createGlobalStyle } from 'styled-components'

import { headerHeight, footerHeight } from 'util/constants'
import VideoList from 'components/video-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'
import Header from 'components/header'
import Footer from 'components/footer'

import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <GlobalStyle />
    <Header />>

    <Main>
      <RegisterVideo />
      <VideoSingle />
      <VideoList />
    </Main>

    <Footer />
  </Container>
)

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

export default hot(App)
