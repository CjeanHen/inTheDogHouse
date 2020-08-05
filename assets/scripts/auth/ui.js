'use strict'

const store = require('../store')

const signUpSuccess = response => {
  $('form').trigger('reset')
}

const signUpFailure = error => {
  console.log(error)
  $('form').trigger('reset')
}

const signInSuccess = response => {
  store.user = response.user
  $('form').trigger('reset')
  $('#unauthorized').hide()
  $('#authorized').show()
  $('.navbar').toggleClass('d-none')
}

const signInFailure = error => {
  $('form').trigger('reset')
  console.log(error)
}

const signOutSuccess = response => {
  console.log('Sign out success')
  $('#authorized').hide()
  $('#unauthorized').show()
  $('.navbar').toggleClass('d-none')
  $('.content').empty()
}

const signOutFailure = error => {
  console.log(error)
}

const changePwSuccess = response => {
  $('form').trigger('reset')
  console.log('Password Changed!')
}

const changePwFailure = error => {
  $('form').trigger('reset')
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
