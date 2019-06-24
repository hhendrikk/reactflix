'use strict'

import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
  apiKey: 'AIzaSyBY1-xYzK6m5ZcVTeSGptBoHR2dIvher7E',
  authDomain: 'reactflix-33df5.firebaseapp.com',
  databaseURL: 'https://reactflix-33df5.firebaseio.com',
  projectId: 'reactflix-33df5',
  storageBucket: '',
  messagingSenderId: '301860615032',
  appId: '1:301860615032:web:7ae5088cae9e33a2'
})

const db = firebase.database()

export { db }
