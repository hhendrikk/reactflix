'use strict'

import { ADD_VIDEO, SORT_VIDEO_BY_TITLE } from './actions'
import { db } from 'configs/firebase'

export const addVideo = ({ id, title }) => async (dispatch) => {
  await db.ref('videos').child(id).update({ id, title })

  dispatch({
    type: ADD_VIDEO,
    payload: { id, title }
  })
}

export const fetchVideos = () => (dispatch) => {
  db.ref('videos').on('value', (snapshot) => {
    snapshot.forEach((video) => {
      dispatch({
        type: ADD_VIDEO,
        payload: video.val()
      })
    })

    dispatch({ type: SORT_VIDEO_BY_TITLE })
  })
}
