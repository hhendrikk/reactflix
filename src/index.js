'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './redux-flow/configure-store'
import App from './app'

const store = configureStore()

const db = firebase.database()

db.on('value', (snapshot) => {
  console.log(snapshot)
}, (error) => {
  console.log(error)
})

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.querySelector('[data-js="app"]')
  )
}

render(App)
