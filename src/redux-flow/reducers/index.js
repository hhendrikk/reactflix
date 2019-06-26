'use strict'

import { combineReducers } from 'redux'
import videos from './videos'
import ui from './ui'
import singleVideos from './video-single'

export default combineReducers({
  videos,
  ui,
  singleVideos
})
