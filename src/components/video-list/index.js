'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Play from 'components/play'

const VideoList = ({ videos }) => (
  <Container>
    {Object.keys(videos).map((id) => (
      <Video key={id}>
        <VideoThumb>
          <PlayStyled />
        </VideoThumb>
        <VideoTitle>{videos[id].title}</VideoTitle>
      </Video>
    ))}
  </Container>
)

const PlayStyled = styled(Play)`
  fill: #999;
  height: 50px;
  width: 50px;
  transition: all .15s ease-in-out;
  cursor: pointer;
`

const Video = styled.section`
  &:hover ${PlayStyled} {
    transform: scale(1.5)
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding:10px;

  & ${Video} {
    flex: 1 1 300px;
    margin: 0 5px 5px;
  }
`

const VideoThumb = styled.div`
  border: 1px solid #999;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const VideoTitle = styled.h2`
  font-size: 18px
`

const mapsStateToProps = (state) => ({
  videos: state.videos
})

export default connect(mapsStateToProps)(VideoList)
