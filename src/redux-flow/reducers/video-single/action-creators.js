'use strict'

import { SELECT_VIDEO_SINGLE } from './actions'

export const selectVideoSingle = (id) => (dispatch) => {
  dispatch({
    type: SELECT_VIDEO_SINGLE,
    payload: { id }
  })
}
