'use strict'

import createReducer from '../create-reducer'
import { OPEN_REGISTER_FORM_VIDEO, CLOSE_REGISTER_FORM_VIDEO } from './actions'

const initialState = {
  isRegisterVideoFormOpen: false
}

const ui = createReducer(initialState, {
  [OPEN_REGISTER_FORM_VIDEO]: (state) => ({
    ...state,
    isRegisterVideoFormOpen: true
  }),
  [CLOSE_REGISTER_FORM_VIDEO]: (state) => ({
    ...state,
    isRegisterVideoFormOpen: false
  })
})

export default ui
