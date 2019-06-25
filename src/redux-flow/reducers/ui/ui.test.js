'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import { OPEN_REGISTER_FORM_VIDEO, CLOSE_REGISTER_FORM_VIDEO } from './actions'
import ui from './index'

it('should ui reducers is a function', () => {
  expect(ui).to.be.a('function')
})

it('should ui close register video form for invalid action', () => {
  const before = undefined
  const action = deepFreeze({
    type: 'UNKNOWN'
  })
  const after = {
    isRegisterVideoFormOpen: false
  }

  expect(ui(before, action)).to.deep.equal(after)
})

it('should ui close register video form on not action', () => {
  const before = undefined
  const action = deepFreeze({})
  const after = {
    isRegisterVideoFormOpen: false
  }

  expect(ui(before, action)).to.deep.equal(after)
})

it('should ui open register video form', () => {
  const before = deepFreeze({
    isRegisterVideoFormOpen: false
  })
  const action = deepFreeze({
    type: OPEN_REGISTER_FORM_VIDEO
  })
  const after = {
    isRegisterVideoFormOpen: true
  }

  expect(ui(before, action)).to.deep.equal(after)
})

it('should ui close register video form', () => {
  const before = deepFreeze({
    isRegisterVideoFormOpen: true
  })
  const action = deepFreeze({
    type: CLOSE_REGISTER_FORM_VIDEO
  })
  const after = {
    isRegisterVideoFormOpen: false
  }

  expect(ui(before, action)).to.deep.equal(after)
})
