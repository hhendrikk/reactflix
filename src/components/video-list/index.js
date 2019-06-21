'use strict'

import React from 'react'
import styled from 'styled-components'

import Play from 'components/play'

const VideoList = () => (
  <Container>
    {Array.from({ length: 10 }).map((item, index) => (
      <Video key={index}>
        <VideoThumb>
          <PlayStyled />
        </VideoThumb>
        <VideoTitle>Título do vídeo</VideoTitle>
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

export default VideoList
