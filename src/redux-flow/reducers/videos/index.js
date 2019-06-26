'use strict'

import createReducer from '../create-reducer'
import { ADD_VIDEO, SORT_VIDEO_BY_TITLE } from './actions'

const initialState = {}

const videos = createReducer(initialState, {
  [ADD_VIDEO]: (state, action) => ({
    ...state,
    [action.payload.id]: {
      id: action.payload.id,
      title: action.payload.title
    }
  }),
  [SORT_VIDEO_BY_TITLE]: (state) => (
    Object.keys(state)
      .sort((a, b) => state[a].title < state[b].title ? -1 : 1)
      .reduce((acc, value) => {
        acc[value] = {
          id: value,
          title: state[value].title
        }

        return acc
      }, {})
  )
})

export default videos
