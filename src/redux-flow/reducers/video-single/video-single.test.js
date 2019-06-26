'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import { SELECT_VIDEO_SINGLE } from './actions'
import videoSingle from './index'

it('should videoSingle to be a function', () => {
  expect(videoSingle).to.be.a('function')
})

it('should reducer select video single', () => {
  const before = deepFreeze('')
  const action = deepFreeze({
    type: SELECT_VIDEO_SINGLE,
    payload: {
      id: '12345'
    }
  })
  const after = '12345'

  expect(videoSingle(before, action)).to.be.equal(after)
})

it('should reducer new select video single', () => {
  const before = deepFreeze('12345')
  const action = deepFreeze({
    type: SELECT_VIDEO_SINGLE,
    payload: {
      id: '54321'
    }
  })
  const after = '54321'

  expect(videoSingle(before, action)).to.be.equal(after)
})

it('should reducer unknown return before state', () => {
  const before = deepFreeze('12345')
  const action = deepFreeze({
    type: 'UNKNOWN',
    payload: {
      id: '54321'
    }
  })
  const after = '12345'

  expect(videoSingle(before, action)).to.be.equal(after)
})
