'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Play from 'components/play'
import { selectVideoSingle } from 'reducers/video-single/action-creators'

const VideoList = ({ videos, handleClick }) => (
  <Container>
    {Object.keys(videos).map((id) => (
      <Video key={id}>
        <VideoLink href='#' onClick={handleClick(id)}>
          <VideoThumb thumbnail={`http://img.youtube.com/vi/${id}/0.jpg`}>
            <PlayStyled />
          </VideoThumb>
          <VideoTitle>{videos[id].title}</VideoTitle>
        </VideoLink>
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

const VideoThumb = styled.div`
  border: 1px solid #999;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after{
    content: "";
    background-image: url(${(props) => props.thumbnail});
    height: 360px;
    width: 100%;
    opacity: 0.3;
    position: absolute;
    z-index: -1;
    transition: all .45s ease-out;
  }
`

const Video = styled.section`
  &:hover ${PlayStyled} {
    transform: scale(1.5)
  }

  &:hover ${VideoThumb} {
    &:after {
      opacity: 1
    }

    & ${PlayStyled} {
      fill: #eee
    }
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

const VideoTitle = styled.h2`
  font-size: 18px
`

const VideoLink = styled.a`
  color: inherit;
`

const mapsStateToProps = (state) => ({
  videos: state.videos
})

const mapsDispatchToProps = (dispatch) => ({
  handleClick: (id) => (e) => {
    e.preventDefault()
    dispatch(selectVideoSingle(id))
  }
})

export default connect(mapsStateToProps, mapsDispatchToProps)(VideoList)
