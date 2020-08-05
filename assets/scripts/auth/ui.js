'use strict'

const store = require('../store')

const signUpSuccess = response => {
  console.log('SUCCESS! The response body is: ', response)
}

const signUpFailure = error => {
  console.log(error)
}

const signInSuccess = response => {
  store.user = response.user
  console.log('The stored user data is: ', store)
  $('#unauthorized').hide()
  $('#authorized').show()
  $('.navbar').toggleClass('d-none')
}

const signInFailure = error => {
  console.log(error)
}

const signOutSuccess = response => {
  console.log('Sign out success')
  $('#authorized').hide()
  $('#unauthorized').show()
  $('.navbar').toggleClass('d-none')
}

const signOutFailure = error => {
  console.log(error)
}

const changePwSuccess = response => {
  console.log('Password Changed!')
}

const changePwFailure = error => {
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePwSuccess,
  changePwFailure
}
