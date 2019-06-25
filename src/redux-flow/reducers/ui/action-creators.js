'use strict'

import {
  OPEN_REGISTER_FORM_VIDEO,
  CLOSE_REGISTER_FORM_VIDEO
} from './actions'

export const onOpenRegisterFormVideo = () => ({
  type: OPEN_REGISTER_FORM_VIDEO
})

export const onCloseRegisterFormVideo = () => ({
  type: CLOSE_REGISTER_FORM_VIDEO
})
