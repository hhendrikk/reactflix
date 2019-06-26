'use strict'

import React, { PureComponent } from 'react'
import { hot } from 'react-hot-loader/root'
import styled, { createGlobalStyle } from 'styled-components'
import { connect } from 'react-redux'

import { headerHeight, footerHeight } from 'util/constants'
import VideoList from 'components/video-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'
import Header from 'components/header'
import Footer from 'components/footer'
import { fetchVideos } from 'reducers/videos/action-creators'

import 'normalize.css'
import 'milligram'

class App extends PureComponent {
  componentDidMount () {
    this.props.fetchVideos()
  }

  render () {
    const { isRegisterFormVideoOpen, singleVideoId, videos } = this.props

    return (
      <Container>
        <GlobalStyle />
        <Header />

        <Main>
          { isRegisterFormVideoOpen && <RegisterVideo /> }
          { singleVideoId && <VideoSingle id={singleVideoId} title={videos[singleVideoId].title} /> }
          <VideoList />
        </Main>

        <Footer />
      </Container>
    )
  }
}

const mapsDispatchToProps = { fetchVideos }

const mapsStateToProps = (state) => ({
  isRegisterFormVideoOpen: state.ui.isRegisterVideoFormOpen,
  singleVideoId: state.singleVideos,
  videos: state.videos
})

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

export default hot(connect(mapsStateToProps, mapsDispatchToProps)(App))
