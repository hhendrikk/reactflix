'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import { ADD_VIDEO, SORT_VIDEO_BY_TITLE } from './actions'
import videos from './index'

it('should videos to be a function', () => {
  expect(videos).to.be.a('function')
})

it('should action ADD_VIDEO add new video 123', () => {
  const before = deepFreeze({})
  const action = deepFreeze({
    type: ADD_VIDEO,
    payload: {
      id: '123',
      title: 'title video 123'
    }
  })
  const after = {
    '123': {
      id: '123',
      title: 'title video 123'
    }
  }
  expect(videos(before, action)).to.be.deep.equal(after)
})

it('should action ADD_VIDEO add new video 234', () => {
  const before = deepFreeze({
    '123': {
      id: '123',
      title: 'title video 123'
    }
  })
  const action = deepFreeze({
    type: ADD_VIDEO,
    payload: {
      id: '234',
      title: 'title video 234'
    }
  })
  const after = {
    '123': {
      id: '123',
      title: 'title video 123'
    },
    '234': {
      id: '234',
      title: 'title video 234'
    }
  }
  expect(videos(before, action)).to.be.deep.equal(after)
})

it('should action UNKNOWN return current state', () => {
  const before = deepFreeze({
    '123': {
      id: '123',
      title: 'title video 123'
    }
  })
  const action = deepFreeze({
    type: 'UNKNOWN'
  })
  const after = {
    '123': {
      id: '123',
      title: 'title video 123'
    }
  }
  expect(videos(before, action)).to.be.deep.equal(after)
})

it('should action SORT_VIDEO_BY_ORDER return state ordened', () => {
  const before = deepFreeze({
    '1': {
      id: '1',
      title: 'A'
    },
    '2': {
      id: '2',
      title: 'C'
    },
    '3': {
      id: '3',
      title: 'B'
    }
  })

  const action = deepFreeze({ type: SORT_VIDEO_BY_TITLE })

  const after = {
    '1': {
      id: '1',
      title: 'A'
    },
    '3': {
      id: '3',
      title: 'B'
    },
    '2': {
      id: '2',
      title: 'C'
    }
  }

  expect(videos(before, action)).to.be.deep.equal(after)
})
