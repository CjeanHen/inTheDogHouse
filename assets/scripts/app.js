'use strict'

const authEvents = require('./auth/events.js')
const dogEvents = require('./dogs/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Authorization listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  // Dog Listeners
  $('#index-dogs').on('click', dogEvents.onIndexDogs)
})
