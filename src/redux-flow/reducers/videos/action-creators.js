'use strict'

import { ADD_VIDEO } from './actions'
import { db } from 'configs/firebase'

export const addVideo = ({ id, title }) => async (dispatch) => {
  await db.ref('videos').child(id).update({ id, title })

  dispatch({
    type: ADD_VIDEO,
    payload: { id, title }
  })
}
